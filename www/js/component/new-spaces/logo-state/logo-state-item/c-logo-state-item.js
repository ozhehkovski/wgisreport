// @flow

import React from 'react';

import {classNames} from '../../../../lib/css';
import type {BeforeAfterType} from '../../../user-activity/user-activity-type';
import type {ReportCatalogsCompanyMergedType} from '../../../../../provider/report/report-type';
import {beforeAfterMap} from '../../../user-activity/user-activity-const';

import logoStateItemStyle from './logo-state-item.scss';

type PropsType = {|
    +className?: string,
    +beforeAfterTime: BeforeAfterType,
    +logoData: ReportCatalogsCompanyMergedType,
|};

export function LogoStateItem(props: PropsType): React$Node {
    const {className, beforeAfterTime, logoData} = props;

    const {name, logo, current: logoStateCurrent, past: logoStatePast} = logoData;
    const logoState = beforeAfterTime === beforeAfterMap.after ? logoStateCurrent : logoStatePast;

    return (
        <div className={classNames(logoStateItemStyle.logo_state_item, className)} title={name}>
            <div className={logoStateItemStyle.container}>
                <img
                    alt={name}
                    className={classNames(logoStateItemStyle.image, {
                        [logoStateItemStyle.image_active]: Boolean(logoState && logoState.synced),
                    })}
                    src={logo}
                />
            </div>
        </div>
    );
}
