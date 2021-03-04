// @flow

import React from 'react';

import infoAsCheckItemStyle from './info-as-check-item.scss';
import tickFalseImage from './image/tick-false.png';
import tickTrueImage from './image/tick-true.png';

type PropsType = {|
    +text: React$Node,
    +isChecked: boolean,
|};

export function InfoAsCheckItem(props: PropsType): React$Node {
    const {text, isChecked} = props;

    return (
        <div className={infoAsCheckItemStyle.info_as_check_item}>
            <p className={infoAsCheckItemStyle.text}>{text}</p>

            <img alt="" className={infoAsCheckItemStyle.tick} src={isChecked ? tickTrueImage : tickFalseImage}/>
        </div>
    );
}
