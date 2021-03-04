// @flow

import React from 'react';

import sectionStyle from './section.scss';

type PropsType = {|
    +children: React$Node,
|};

export function Section(props: PropsType): React$Node {
    const {children} = props;

    return <section className={sectionStyle.section}>{children}</section>;
}
