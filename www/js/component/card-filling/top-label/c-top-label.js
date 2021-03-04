// @flow

import React from 'react';

import topLabelStyle from './top-label.scss';

type PropsType = {|
    +children: React$Node,
|};

export function TopLabel(props: PropsType): React$Node {
    const {children} = props;

    return (
        <div className={topLabelStyle.top_label}>
            <p className={topLabelStyle.text}>{children}</p>
        </div>
    );
}
