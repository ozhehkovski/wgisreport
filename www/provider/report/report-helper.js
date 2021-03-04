// @flow

/* global URL, Intl */

import {isNotEmptyString} from '../../js/lib/is';
import {localeNameList} from '../locale/locale-context-const';

import type {
    CompanyAsCheckListType,
    CompanyAsRecommendationCheckListType,
    GetReportBodyType,
    ReportCatalogsType,
    ReportCompanyType,
    ReportProductsType,
    ReportReviewsType,
    ReportType,
} from './report-type';

function getHasAddress(company: ReportCompanyType): boolean {
    const {address} = company;
    const {adds, city, postal_code: postalCode, street, street_number: streetNumber} = address;

    return Boolean(adds && city && postalCode && street && streetNumber);
}

function getHasCoordinates(company: ReportCompanyType): boolean {
    const {address} = company;

    return address.point_is_set;
}

// eslint-disable-next-line complexity
function getHasSchedule(company: ReportCompanyType): boolean {
    const {details} = company;
    const {worktime} = details;

    const day1 = worktime['1'];
    const day2 = worktime['2'];
    const day3 = worktime['3'];
    const day4 = worktime['4'];
    const day5 = worktime['5'];
    const day6 = worktime['6'];
    const day7 = worktime['7'];

    return Boolean(
        day1
            && day1.length > 0
            && day2
            && day2.length > 0
            && day3
            && day3.length > 0
            && day4
            && day4.length > 0
            && day5
            && day5.length > 0
            && day6
            && day6.length > 0
            && day7
            && day7.length > 0
    );
}

function getHasPhoneNumber(company: ReportCompanyType): boolean {
    const {phones} = company;

    return phones.length > 0;
}

function getHasLinksToSocialNetworks(company: ReportCompanyType): boolean {
    const {socials} = company;

    return socials.length > 0;
}

function getHasConnected3headingsAndMore(company: ReportCompanyType): boolean {
    const {categories_count: categoriesCount} = company;

    return categoriesCount >= 3;
}

function getHasCompanyRating4orMore(reviews: ReportReviewsType): boolean {
    return Number.parseFloat(reviews.basic_diff.avg_rating.current) >= 4;
}

function getHasDataSynchronized(catalogs: ReportCatalogsType): boolean {
    return catalogs.current_sync_avg >= 100;
}

function getHasEMail(company: ReportCompanyType): boolean {
    const {details} = company;
    const {email} = details;

    return isNotEmptyString(email);
}

function getHasWebsite(company: ReportCompanyType): boolean {
    const {details} = company;
    const {website} = details;

    return isNotEmptyString(website);
}

function getHasLogo(company: ReportCompanyType): boolean {
    const {images} = company;

    return isNotEmptyString(images.logo);
}

function getHasCover(company: ReportCompanyType): boolean {
    const {images} = company;

    return isNotEmptyString(images.cover);
}

function getHasPrice(products: ReportProductsType): boolean {
    return products.products.length > 0;
}

function getHasGallery(company: ReportCompanyType): boolean {
    const {gallery} = company;

    return Boolean(gallery);
}

export function getCompanyAsCheckList(report: ReportType): CompanyAsCheckListType {
    const {company, reviews, catalogs, products} = report;

    return {
        hasAddress: getHasAddress(company),
        hasCoordinates: getHasCoordinates(company),
        hasSchedule: getHasSchedule(company),
        hasPhoneNumber: getHasPhoneNumber(company),
        hasLinksToSocialNetworks: getHasLinksToSocialNetworks(company),
        hasConnected3headingsAndMore: getHasConnected3headingsAndMore(company),
        hasCompanyRating4orMore: getHasCompanyRating4orMore(reviews),
        hasDataSynchronized: getHasDataSynchronized(catalogs),
        hasEMail: getHasEMail(company),
        hasWebsite: getHasWebsite(company),
        hasLogo: getHasLogo(company),
        hasCover: getHasCover(company),
        hasPrice: getHasPrice(products),
        hasGallery: getHasGallery(company),
    };
}

function getIsNeedDescription(company: ReportCompanyType): boolean {
    return !(company.details.has_long_description && company.details.has_short_description);
}

function getIsNeedLogoAndCover(company: ReportCompanyType): boolean {
    return !(company.images.cover && company.images.logo);
}

function getIsNeedGallery(products: ReportProductsType): boolean {
    return products.images_urls.length === 0;
}

function getIsNeedAddCategories(company: ReportCompanyType): boolean {
    return company.categories_count <= 2;
}

function getIsNeedAlternativePhones(company: ReportCompanyType): boolean {
    return company.phones.length <= 1;
}

function getIsNeedAnswerToClient(report: ReportType): boolean {
    return report.question_answer.count > 0;
}

function getIsNeedAttentionToReviews(reviews: ReportReviewsType): boolean {
    return reviews.basic_diff.no_answer_count.current > 0;
}

function getIsNeedGoodAndServices(products: ReportProductsType): boolean {
    return products.products.length === 0;
}

// eslint-disable-next-line id-length
export function getCompanyAsRecommendationCheckList(report: ReportType): CompanyAsRecommendationCheckListType {
    const {company, reviews, catalogs, products} = report;

    return {
        isNeedDescription: getIsNeedDescription(company),
        isNeedLogoAndCover: getIsNeedLogoAndCover(company),
        isNeedGallery: getIsNeedGallery(products),
        isNeedAddCategories: getIsNeedAddCategories(company),
        isNeedAlternativePhones: getIsNeedAlternativePhones(company),
        isNeedAnswerToClient: getIsNeedAnswerToClient(report),
        isNeedAttentionToReviews: getIsNeedAttentionToReviews(reviews),
        isNeedGoodAndServices: getIsNeedGoodAndServices(products),
    };
}

// url example http://localhost:9090?company-id=6237&locale=ru-RU&ccl-date=2020-11-01T00:00&report-date-from=2020-09-01T00:00&report-date-to=2020-09-30T00:00&compare-date-from=2019-07-01T00:00&compare-date-to=2019-07-30T00:00
// eslint-disable-next-line complexity, max-statements
export function getReportRequestBodyFromURL(urlString: string): GetReportBodyType | Error {
    const companyIdParameter = 'company-id';
    const localeParameter = 'locale';
    const cclDataParameter = 'ccl-date';
    const reportDateFromParameter = 'report-date-from';
    const reportDateToParameter = 'report-date-to';
    const compareDateFromParameter = 'compare-date-from';
    const compareDateToParameter = 'compare-date-to';

    try {
        const url = new URL(urlString);
        const {searchParams} = url;

        const companyId = searchParams.get(companyIdParameter);
        const locale = searchParams.get(localeParameter);
        const cclData = searchParams.get(cclDataParameter);
        const reportDateRangeFrom = searchParams.get(reportDateFromParameter);
        const reportDateRangeTo = searchParams.get(reportDateToParameter);
        const compareDateRangeFrom = searchParams.get(compareDateFromParameter);
        const compareDateRangeTo = searchParams.get(compareDateToParameter);

        if (
            !(
                isNotEmptyString(companyId)
                && isNotEmptyString(locale)
                && isNotEmptyString(cclData)
                && isNotEmptyString(reportDateRangeFrom)
                && isNotEmptyString(reportDateRangeTo)
                && isNotEmptyString(compareDateRangeFrom)
                && isNotEmptyString(compareDateRangeTo)
            )
        ) {
            return new Error(
                '[ERROR] url should contain the follow parameters: '
                    + [
                        companyIdParameter,
                        localeParameter,
                        cclDataParameter,
                        reportDateFromParameter,
                        reportDateToParameter,
                        compareDateFromParameter,
                        compareDateToParameter,
                    ].join(', ')
            );
        }

        const intl = new Intl.DateTimeFormat();

        // 'validate' dates
        [
            reportDateRangeFrom,
            reportDateRangeTo,
            compareDateRangeFrom,
            compareDateRangeTo,
        ].forEach((date: string): mixed => intl.format(new Date(date)));

        const isSuitLocale = localeNameList.includes(locale);

        if (!isSuitLocale) {
            return new Error('[ERROR] locale should be one of follow value: ' + localeNameList.join(', '));
        }

        return {
            /* eslint-disable camelcase, id-match */
            company_id: Number.parseInt(companyId, 10),
            language: locale.split('-')[0] === 'en' ? 'en' : 'ru',
            ccl_date: cclData,
            report_date_range: {
                from_dt: reportDateRangeFrom,
                to_dt: reportDateRangeTo,
            },
            compare_date_range: {
                from_dt: compareDateRangeFrom,
                to_dt: compareDateRangeTo,
            },
            /* eslint-enable camelcase, id-match */
        };
    } catch (error) {
        return error;
    }
}
