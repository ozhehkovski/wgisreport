// @flow

/* global localStorage */

import React, {useCallback, useState, useMemo} from 'react';

import type {LocaleContextType, LocaleNameType} from './locale-context-type';
import {getDefaultLocaleContextData, saveLocaleName} from './locale-context-helper';

const defaultLocaleContextData = getDefaultLocaleContextData();

export const LocaleContext: React$Context<LocaleContextType> = React.createContext<LocaleContextType>(
    defaultLocaleContextData
);

type PropsType = {|
    +children: React$Node,
|};

export function LocaleProvider(props: PropsType): React$Node {
    const {children} = props;
    const [localeName, setLocaleName] = useState<LocaleNameType>(defaultLocaleContextData.localeName);

    const memoizedSetLocaleName = useCallback(function setLocaleNameInner(newLocaleName: LocaleNameType) {
        saveLocaleName(newLocaleName);
        setLocaleName(newLocaleName);
    }, []);

    const providedData: LocaleContextType = useMemo((): LocaleContextType => {
        return {
            localeName,
            setLocaleName: memoizedSetLocaleName,
        };
    }, [localeName, memoizedSetLocaleName]);

    return <LocaleContext.Provider value={providedData}>{children}</LocaleContext.Provider>;
}
