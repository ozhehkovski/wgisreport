// @flow

import React, {useContext} from 'react';

import {Locale} from '../../../provider/locale/c-locale';
import type {LocaleContextType} from '../../../provider/locale/locale-context-type';
import {LocaleContext} from '../../../provider/locale/c-locale-context';

import headerStyle from './header.scss';
import {getLogoSrc} from './header-helper';

type PropsType = {};

export function Header(props: PropsType): React$Node {
    const localeContextData = useContext<LocaleContextType>(LocaleContext);
    const {localeName} = localeContextData;

    return (
        <header className={headerStyle.header}>
            <a className={headerStyle.logo_link} href="/">
                <img alt="logo" className={headerStyle.logo_image} src={getLogoSrc(localeName)}/>
            </a>

            <a className={headerStyle.button} href="/">
                <Locale stringKey="HEADER__ALL_REFERENCES"/>
            </a>
        </header>
    );
}
