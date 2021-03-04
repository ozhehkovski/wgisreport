// @flow

import React from 'react';

import recommendationItemStyle from './recommendation-item.scss';
import descriptionImage from './image/description-icon.png';
// import photoImage from './image/photo-icon.png';

type PropsType = {|
    +title: React$Node,
    +text: React$Node,
    +actionLink: React$Node,
|};

export function RecommendationItem(props: PropsType): React$Node {
    const {title, text, actionLink} = props;

    return (
        <div className={recommendationItemStyle.recommendation_item}>
            <img
                alt=""
                className={recommendationItemStyle.icon}
                // src={Math.random() > 0.5 ? descriptionImage : photoImage}
                src={descriptionImage}
            />

            <h5 className={recommendationItemStyle.title}>{title}</h5>

            <div className={recommendationItemStyle.text_wrapper}>
                <p className={recommendationItemStyle.text}>{text}</p>
            </div>

            <div className={recommendationItemStyle.active_link__wrapper}>
                <a className={recommendationItemStyle.active_link} href="/">
                    {actionLink}
                </a>
            </div>
        </div>
    );
}
