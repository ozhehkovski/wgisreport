// @flow

import React from 'react';

import {classNames} from '../../../lib/css';

import cardSwitchStyle from './card-switch.scss';

type PropsType = {|
    +tabList: Array<React$Node>,
    +activeIndex: number,
    +setActiveIndex: (activeIndex: number) => void,
    +className?: string,
    +tabClassName?: string,
|};

export function CardSwitch(props: PropsType): React$Node {
    const {tabList, activeIndex, setActiveIndex, className, tabClassName} = props;

    return (
        <div className={classNames(className, cardSwitchStyle.card_switch)}>
            <div className={cardSwitchStyle.card_switch__container}>
                {tabList.map<React$Node>((item: React$Node, index: number): React$Node => {
                    const tabClassNameFull = classNames(cardSwitchStyle.tab, tabClassName, {
                        [cardSwitchStyle.active]: index === activeIndex,
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

                <div className={cardSwitchStyle.tab}>&nbsp;</div>
            </div>
        </div>
    );
}
