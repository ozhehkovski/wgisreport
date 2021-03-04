// @flow

import React from 'react';

import {classNames} from '../../../../lib/css';

import ratingStyle from './rating.scss';

type PropsType = {|
    +className?: string,
    +rating: number,
|};

export function Rating(props: PropsType): React$Node {
    const {rating, className} = props;

    return (
        <div className={classNames(ratingStyle.rating, className)}>
            <div className={ratingStyle.star_list__wrapper}>
                <div className={ratingStyle.star_list__empty}>&#9734;&#9734;&#9734;&#9734;&#9734;</div>

                <div className={ratingStyle.star_list__filled} style={{width: rating * 20 + '%'}}>
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
            </div>

            <p className={ratingStyle.rating_value}>{rating.toFixed(1)}</p>
        </div>
    );
}
