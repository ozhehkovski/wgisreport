// @flow

import React from 'react';

import {classNames} from '../../../lib/css';

import wrapperStyle from './wrapper.scss';

type PropsType = {|
    +children: React$Node,
    +className?: string,
|};

export function Wrapper(props: PropsType): React$Node {
    const {children, className} = props;

    const fullClassName = classNames(wrapperStyle.wrapper, className);

    return <div className={fullClassName}>{children}</div>;
}
