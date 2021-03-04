// @flow

import React, {useEffect, useState} from 'react';

import {noop} from './function';

type PropsType = {|
    +children: () => Promise<React$Node>,
|};

export function LoadComponent(props: PropsType): React$Node {
    const {children: load} = props;
    const [component, setComponent] = useState<React$Node | null>(null);
    const [isInProgress, setIsInProgress] = useState<boolean>(false);

    useEffect(() => {
        setIsInProgress(true);

        load()
            .then(setComponent)
            .catch((error: Error): Error => {
                setComponent(<span>Can not load component</span>);

                console.error(error);

                return error;
            })
            .finally(() => {
                setIsInProgress(false);
            })
            .catch(noop);
    }, [load]);

    if (isInProgress) {
        return <span>Loading...</span>;
    }

    return component;
}
