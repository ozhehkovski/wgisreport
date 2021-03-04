// @flow

export type GetReportBodyType = {|
    /* eslint-disable camelcase, id-match */
    +company_id: number,
    +language: 'ru' | 'en',
    +ccl_date: string,
    +report_date_range: {|
        +from_dt: string,
        +to_dt: string,
    |},
    +compare_date_range: {|
        +from_dt: string,
        +to_dt: string,
    |},
    /* eslint-enable camelcase, id-match */
|};

export type ReportCompanyAddressType = {|
    +adds: string,
    +city: string,
    +point_is_set: boolean,
    +postal_code: string,
    +street: string,
    +street_number: string,
|};

export type ReportCompanySocialServiceNameType = 'VK' | 'Facebook' | 'Instagram' | 'Youtube';

export type ReportCompanySocialType = {
    service: ReportCompanySocialServiceNameType,
    url: string,
};

export type ReportCompanyType = {
    +address: ReportCompanyAddressType,
    +name: string,
    +phones: Array<string>,
    +gallery?: number,
    +category_name: string,
    +images: {
        cover?: string,
        logo?: string,
    },
    +categories_count: number,
    +details: {
        +website?: string,
        +email?: string,
        +worktime: {
            +'1'?: Array<string>,
            +'2'?: Array<string>,
            +'3'?: Array<string>,
            +'4'?: Array<string>,
            +'5'?: Array<string>,
            +'6'?: Array<string>,
            +'7'?: Array<string>,
        },
        +has_long_description: boolean,
        +has_short_description: boolean,
    },
    +socials: Array<ReportCompanySocialType>,
};

export type ReportBasicDiffType = {|
    +current: number,
    +increase: number,
    +past: number,
|};

export type ReportPositionDiffType = {|
    +current: number,
    +increase: number,
    +past: number,
|};

export type ReportBasicDiffAsStringType = {|
    +current: string,
    +increase: string,
    +past: string,
|};

export type ReportCatalogsCompanyType = {|
    +action_needed: boolean,
    +id: number,
    +logo: string,
    +name: string,
    +not_found: boolean,
    +synced: boolean,
|};

export type ReportCatalogsCompanyMergedType = {|
    +past: ReportCatalogsCompanyType | null,
    +current: ReportCatalogsCompanyType | null,
    +id: number,
    +logo: string,
    +name: string,
    +isInCurrent: boolean,
    +isInPast: boolean,
|};

export type ReportCatalogsType = {
    /* eslint-disable camelcase, id-match */
    +current_action_need_count: number,
    +current_sync_avg: number,
    +current: Array<ReportCatalogsCompanyType>,
    +past: Array<ReportCatalogsCompanyType>,
    /* eslint-enable camelcase, id-match */
};

export type ReportReviewsCatalogsItemType = {
    +id: number,
    +name: string,
    +count: number,
    +logo: string,
};

export type ReportReviewsDynamicItemType = {
    /* eslint-disable camelcase, id-match */
    +count: number,
    +key: string, // "2019-10-01T23:59:59.999"
    +with_answer_count: number,
    /* eslint-enable camelcase, id-match */
};

export type ReportReviewsType = {
    /* eslint-disable camelcase, id-match */
    +catalogs: Array<ReportReviewsCatalogsItemType>,
    +dynamic: Array<ReportReviewsDynamicItemType>,
    +count: number,
    +basic_diff: {
        +avg_rating: ReportBasicDiffAsStringType,
        +count: ReportBasicDiffType,
        +no_answer_count: ReportBasicDiffType,
    },
    /* eslint-enable camelcase, id-match */
};

export type ReportProductsProductsType = {|
    +currency: string,
    +name: string,
    +price: string,
|};

export type ReportProductsType = {|
    +images_urls: Array<string>,
    +products: Array<ReportProductsProductsType>,
|};

export type ReportFormattedBasicDiffType = {|
    +current: string,
    +increase: string,
    +past: string,
|};

export type PlaceDataType = {
    +average_position: ReportPositionDiffType,
    +basic_diff: {
        views?: ReportBasicDiffType,
        open_website?: ReportBasicDiffType,
        build_route?: ReportBasicDiffType,
        action_phone?: ReportBasicDiffType,
    },
};

export type ReportType = {
    /* eslint-disable camelcase, id-match */
    +catalogs: ReportCatalogsType,
    +company: ReportCompanyType,
    +reviews: ReportReviewsType,
    +products: ReportProductsType,
    +double_gis: PlaceDataType,
    +gmb: PlaceDataType,
    +yandex: PlaceDataType,
    +question_answer: {
        +count: number,
    },
    +total_views: ReportBasicDiffType,
    /* eslint-enable camelcase, id-match */
};

export type CompanyAsCheckListType = {|
    +hasAddress: boolean,
    +hasCoordinates: boolean,
    +hasSchedule: boolean,
    +hasPhoneNumber: boolean,
    +hasLinksToSocialNetworks: boolean,
    +hasConnected3headingsAndMore: boolean,
    +hasCompanyRating4orMore: boolean,
    +hasDataSynchronized: boolean,
    +hasEMail: boolean,
    +hasWebsite: boolean,
    +hasLogo: boolean,
    +hasCover: boolean,
    +hasPrice: boolean,
    +hasGallery: boolean,
|};

export type CompanyAsRecommendationCheckListType = {|
    +isNeedDescription: boolean,
    +isNeedLogoAndCover: boolean,
    +isNeedGallery: boolean,
    +isNeedAddCategories: boolean,
    +isNeedAlternativePhones: boolean,
    +isNeedAnswerToClient: boolean,
    +isNeedAttentionToReviews: boolean,
    +isNeedGoodAndServices: boolean,
|};

export type FetchReportType = (getReportBody: GetReportBodyType) => Promise<Error | null>;

export type ReportContextType = {|
    +fetchReport: FetchReportType,
    +report: ReportType | null,
    +fetchingError: Error | null,
    +isInProgress: boolean,
|};
