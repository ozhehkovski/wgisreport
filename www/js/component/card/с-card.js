// @flow

import React from 'react';

import {classNames} from '../../lib/css';

import serviceStyle from '../../../css/service.scss';

import cardStyle from './card.scss';
import whiteGreenArrowUpImage from './image/white-green-arrow-up.png';

type PropsType = {|
    +value: React$Node,
    +title: React$Node,
    +description: React$Node,
    +percent: number | string,
    +className?: string,
    +isShowDescription?: boolean,
|};

export function Card(props: PropsType): React$Node {
    const {value, title, description, percent, className, isShowDescription} = props;
    const fullClassName = classNames(cardStyle.card, className);

    return (
        <div className={fullClassName}>
            <p className={cardStyle.value}>{value}</p>

            <p className={cardStyle.title}>{title}</p>

            <p
                className={classNames(cardStyle.description, {
                    [serviceStyle.visibility_hidden]: isShowDescription === false,
                })}
            >
                {description}
            </p>

            <div className={classNames({[serviceStyle.visibility_hidden]: Number.parseFloat(String(percent)) <= 0})}>
                <p className={cardStyle.percent}>
                    <img alt="" className={cardStyle.percent_arrow} src={whiteGreenArrowUpImage}/>

                    <span>{percent}%</span>
                </p>
            </div>
        </div>
    );
}
