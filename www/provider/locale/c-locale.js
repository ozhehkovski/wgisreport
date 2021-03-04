// @flow

import React, {Fragment, useContext} from 'react';

import type {LocaleContextType, LocaleContextValueMapType} from './locale-context-type';
import {getLocalizedString} from './locale-context-helper';
import type {LangKeyType} from './translation/type';
import {LocaleContext} from './c-locale-context';
import {allLocalesData, splitValueStringRegExp} from './locale-context-const';

type PropsType = {|
    +stringKey: LangKeyType,
    +valueMap?: LocaleContextValueMapType,
|};

export function Locale(props: PropsType): React$Node {
    const {stringKey, valueMap} = props;

    const localeContextData = useContext<LocaleContextType>(LocaleContext);
    const {localeName} = localeContextData;

    if (!valueMap) {
        return getLocalizedString(stringKey, localeName, valueMap);
    }

    const resultString = allLocalesData[localeName][stringKey]; // 'the {value1} data {value2} is {value2} here'

    let partList = resultString.split(splitValueStringRegExp); // ["the ", "{value1} data ", "{value2} is ", "{value2} here"]

    const keyList = Object.keys(valueMap);

    // eslint-disable-next-line no-loops/no-loops
    for (const objectKey of keyList) {
        // eslint-disable-next-line no-loop-func
        partList = partList.map((part: React$Node, index: number): React$Node => {
            if (typeof part !== 'string') {
                return part;
            }

            const replacedPart = '{' + objectKey + '}';

            if (!part.startsWith(replacedPart)) {
                return part;
            }

            const endOfString = part.slice(replacedPart.length);

            return (
                // eslint-disable-next-line react/no-array-index-key
                <Fragment key={objectKey + '-' + index}>
                    {valueMap[objectKey]}

                    {endOfString}
                </Fragment>
            );
        });
    }

    return partList;
}
