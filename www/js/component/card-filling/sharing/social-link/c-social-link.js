// @flow

import React, {useContext} from 'react';

import type {ReportCompanySocialType} from '../../../../../provider/report/report-type';
import {Locale} from '../../../../../provider/locale/c-locale';

import type {LocaleContextType} from '../../../../../provider/locale/locale-context-type';
import {LocaleContext} from '../../../../../provider/locale/c-locale-context';
import {localeNameReference} from '../../../../../provider/locale/locale-context-const';
import {reportCompanySocialServiceNameMap} from '../../../../../provider/report/report-const';

import {getSocialServiceData} from './social-link-helper';
import socialLinkStyle from './social-link.scss';

type PropsType = {|
    +social: ReportCompanySocialType,
|};

export function SocialLink(props: PropsType): React$Node {
    const {social} = props;
    const {service, url} = social;
    const localeContextData = useContext<LocaleContextType>(LocaleContext);
    const {localeName} = localeContextData;

    if (localeName !== localeNameReference.ruRu && service === reportCompanySocialServiceNameMap.vKontakte) {
        return null;
    }

    if (localeName === localeNameReference.ruRu && service === reportCompanySocialServiceNameMap.facebook) {
        return null;
    }

    const socialServiceData = getSocialServiceData(service);

    return (
        <a className={socialLinkStyle.social_link} href={url} rel="noreferrer" target="_blank">
            <img alt={service} className={socialLinkStyle.image} src={socialServiceData.icon}/>

            <p className={socialLinkStyle.text}>
                <Locale stringKey={socialServiceData.langKey}/>
            </p>
        </a>
    );
}
