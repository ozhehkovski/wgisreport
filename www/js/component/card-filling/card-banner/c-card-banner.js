// @flow

import React from 'react';

import cardBannerStyle from './card-banner.scss';
import {Rating} from './rating/c-rating';

type PropsType = {|
    +color: string,
    +rating: number,
    +title: string,
    +type: string,
    +imageSrc?: string,
|};

export function CardBanner(props: PropsType): React$Node {
    const {color, rating, title, type, imageSrc} = props;

    return (
        <div className={cardBannerStyle.card_banner} style={{backgroundColor: color}}>
            {imageSrc ? <img alt={title} className={cardBannerStyle.image} src={imageSrc}/> : null}

            <p className={cardBannerStyle.title}>{title}</p>

            <p className={cardBannerStyle.type}>{type}</p>

            <Rating className={cardBannerStyle.rating} rating={rating}/>
        </div>
    );
}
