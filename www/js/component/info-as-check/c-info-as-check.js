// @flow

import React, {useContext} from 'react';

import {Locale} from '../../../provider/locale/c-locale';
import type {ReportContextType} from '../../../provider/report/report-type';
import {ReportContext} from '../../../provider/report/c-report-context';
import {getCompanyAsCheckList} from '../../../provider/report/report-helper';

import infoAsCheckStyle from './info-as-check.scss';
import {InfoAsCheckItem} from './info-as-check-item/c-info-as-check-item';

type PropsType = {};

export function InfoAsCheck(props: PropsType): React$Node {
    const reportContextData = useContext<ReportContextType>(ReportContext);
    const {report} = reportContextData;

    if (!report) {
        return null;
    }

    const checkData = getCompanyAsCheckList(report);
    const {
        hasAddress,
        hasCompanyRating4orMore,
        hasConnected3headingsAndMore,
        hasCoordinates,
        hasDataSynchronized,
        hasLinksToSocialNetworks,
        hasPhoneNumber,
        hasSchedule,
        hasEMail,
        hasWebsite,
        hasLogo,
        hasCover,
        hasPrice,
        hasGallery,
    } = checkData;

    return (
        <div className={infoAsCheckStyle.info_as_check}>
            <InfoAsCheckItem isChecked={hasAddress} text={<Locale stringKey="ITEM_NAME__ADDRESS"/>}/>

            <InfoAsCheckItem isChecked={hasCoordinates} text={<Locale stringKey="ITEM_NAME__COORDINATES"/>}/>

            <InfoAsCheckItem isChecked={hasSchedule} text={<Locale stringKey="ITEM_NAME__SCHEDULE"/>}/>

            <InfoAsCheckItem isChecked={hasPhoneNumber} text={<Locale stringKey="ITEM_NAME__PHONE_NUMBER"/>}/>

            <InfoAsCheckItem
                isChecked={hasLinksToSocialNetworks}
                text={<Locale stringKey="ITEM_NAME__LINKS_TO_SOCIAL_NETWORKS"/>}
            />

            <InfoAsCheckItem
                isChecked={hasConnected3headingsAndMore}
                text={<Locale stringKey="ITEM_NAME__CONNECTED_3_HEADINGS_AND_MORE"/>}
            />

            <InfoAsCheckItem
                isChecked={hasCompanyRating4orMore}
                text={<Locale stringKey="ITEM_NAME__COMPANY_RATING_4_OR_MORE"/>}
            />

            <InfoAsCheckItem
                isChecked={hasDataSynchronized}
                text={<Locale stringKey="ITEM_NAME__DATA_SYNCHRONIZED"/>}
            />

            <InfoAsCheckItem isChecked={hasEMail} text={<Locale stringKey="ITEM_NAME__EMAIL"/>}/>

            <InfoAsCheckItem isChecked={hasWebsite} text={<Locale stringKey="ITEM_NAME__WEBSITE"/>}/>

            <InfoAsCheckItem isChecked={hasLogo} text={<Locale stringKey="ITEM_NAME__LOGO"/>}/>

            <InfoAsCheckItem isChecked={hasCover} text={<Locale stringKey="ITEM_NAME__COVER"/>}/>

            <InfoAsCheckItem isChecked={hasPrice} text={<Locale stringKey="ITEM_NAME__PRICE"/>}/>

            <InfoAsCheckItem isChecked={hasGallery} text={<Locale stringKey="ITEM_NAME__GALLERY"/>}/>
        </div>
    );
}
