// @flow

import React from 'react';

import {Locale} from '../../../provider/locale/c-locale';

import mainImageSrc from './image/smth-wrong.svg';
import smthWrongStyle from './smth-wrong.scss';

export function SmthWrong(): React$Node {
    return (
        <div className={smthWrongStyle.smth_wrong}>
            <img alt="" className={smthWrongStyle.image} src={mainImageSrc}/>

            <div className={smthWrongStyle.text_wrapper}>
                <h4 className={smthWrongStyle.main_header}>
                    <Locale stringKey="SMTH_WENT_WRONG__HEADER"/>
                </h4>

                <p className={smthWrongStyle.main_text}>
                    <Locale stringKey="SMTH_WENT_WRONG__TEXT" valueMap={{beakLine: <br/>}}/>
                </p>
            </div>
        </div>
    );
}
