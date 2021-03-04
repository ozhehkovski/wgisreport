// @flow

import React from 'react';

import cardInfoItemStyle from './card-info-item.scss';

type PropsType = {|
    +iconSrc: string,
    +title: React$Node,
    +text?: React$Node,
|};

export function CardInfoItem(props: PropsType): React$Node {
    const {iconSrc, title, text} = props;

    return (
        <div className={cardInfoItemStyle.card_info_item}>
            <img alt="" className={cardInfoItemStyle.image} src={iconSrc}/>

            <div className={cardInfoItemStyle.text_content}>
                <p className={cardInfoItemStyle.title}>{title}</p>

                {text ? <p className={cardInfoItemStyle.text}>{text}</p> : null}
            </div>
        </div>
    );
}
