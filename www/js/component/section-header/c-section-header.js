// @flow

import React from 'react';

import sectionHeaderStyle from './section-header.scss';

type PropsType = {|
    +title: React$Node,
    +subTitle: React$Node,
|};

export function SectionHeader(props: PropsType): React$Node {
    const {title, subTitle} = props;

    return (
        <div className={sectionHeaderStyle.section_header}>
            <h3 className={sectionHeaderStyle.section_title}>{title}</h3>

            <p className={sectionHeaderStyle.section_sub_title}>{subTitle}</p>
        </div>
    );
}
