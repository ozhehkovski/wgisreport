// @flow

import React from 'react';

import {classNames} from '../../../lib/css';

import containerStyle from './container.scss';

type PropsType = {|
    +children: React$Node,
    +part: number, // 1..12
    +className?: string,
|};

export function Container(props: PropsType): React$Node {
    const {children, className, part} = props;

    const fullClassName = classNames(containerStyle.container, className);

    return (
        <div className={classNames(containerStyle.container_padding, containerStyle['width_' + part])}>
            <div className={fullClassName}>{children}</div>
        </div>
    );
}
