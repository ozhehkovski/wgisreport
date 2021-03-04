// @flow

import React from 'react';

import {classNames} from '../../../lib/css';

import switchStyle from './switch.scss';

type PropsType = {|
    +tabList: Array<React$Node>,
    +activeIndex: number,
    +setActiveIndex: (activeIndex: number) => void,
    +className?: string,
    +tabClassName?: string,
|};

export function Switch(props: PropsType): React$Node {
    const {tabList, activeIndex, setActiveIndex, className, tabClassName} = props;

    return (
        <div className={classNames(className, switchStyle.switch)}>
            {tabList.map((item: React$Node, index: number): React$Node => {
                const tabClassNameFull = classNames(switchStyle.tab, tabClassName, {
                    [switchStyle.active]: index === activeIndex,
                });

                function handleClick() {
                    setActiveIndex(index);
                }

                return (
                    // eslint-disable-next-line react/no-array-index-key
                    <button className={tabClassNameFull} key={index} onClick={handleClick} type="button">
                        {item}
                    </button>
                );
            })}
        </div>
    );
}
