// @flow

import React from 'react';

import dropDownOptionStyle from './drop-down-option.scss';

type PropsType = {|
    +image: string,
    +title: React$Node,
|};

export function DropDownOption(props: PropsType): React$Node {
    const {image, title} = props;

    return (
        <div className={dropDownOptionStyle.drop_down_option}>
            <img alt="" className={dropDownOptionStyle.image} src={image}/>

            <div className={dropDownOptionStyle.title}>{title}</div>
        </div>
    );
}
