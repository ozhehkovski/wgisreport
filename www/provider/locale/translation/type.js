// @flow

export type LangDataType = {|
    /* eslint-disable id-match, id-length, max-len */
    +META__LANGUAGE_NAME: string,

    +LOGIN_POPUP__PLEASE_LOG_IN_OR_JOIN_NOW: string,
    +LOGIN_POPUP__INPUT_USERNAME: string,
    +LOGIN_POPUP__INPUT_PASSWORD: string,
    +LOGIN_POPUP__BUTTON_LOGIN: string,
    +LOGIN_POPUP__BUTTON_JOIN_NOW: string,
    +LOGIN_POPUP__LINK_LOST_PASSWORD: string,

    +POPUP__CONFIRM__HEADER__CONFIRMATION: string,
    +POPUP__CONFIRM__BUTTON__CANCEL: string,
    +POPUP__CONFIRM__BUTTON__OK: string,

    +HEADER__ALL_REFERENCES: string,

    +SECTION_HEADER__COMPANY_DETAILS: string,
    +SECTION_HEADER__COMPANY_DETAILS__SUB_TEXT: string,
    +SECTION_HEADER__USER_ACTIVITY: string,
    +SECTION_HEADER__USER_ACTIVITY__SUB_TEXT: string,
    +SECTION_HEADER__REPUTATION_AND_REVIEWS: string,
    +SECTION_HEADER__REPUTATION_AND_REVIEWS__SUB_TEXT: string,
    +SECTION_HEADER__COMPANY_CARD_FILLING: string,
    +SECTION_HEADER__COMPANY_CARD_FILLING__SUB_TEXT: string,
    +SECTION_HEADER__RECOMMENDATION: string,
    +SECTION_HEADER__RECOMMENDATION__SUB_TEXT: string,

    +COMPANY_INFO__NAME: string,
    +COMPANY_INFO__ADDRESS: string,
    +COMPANY_INFO__SITE: string,
    +COMPANY_INFO__PHONE_NUMBER: string,
    +COMPANY_INFO__SCHEDULE: string,

    +WEEK_DAY__MONDAY__2: string,
    +WEEK_DAY__TUESDAY__2: string,
    +WEEK_DAY__WEDNESDAY__2: string,
    +WEEK_DAY__THURSDAY__2: string,
    +WEEK_DAY__FRIDAY__2: string,
    +WEEK_DAY__SATURDAY__2: string,
    +WEEK_DAY__SUNDAY__2: string,
    +WEEK_DAY__HOLIDAY: string,

    // +MONTH__BY__INDEX__0__FULL: string,
    // +MONTH__BY__INDEX__1__FULL: string,
    // +MONTH__BY__INDEX__2__FULL: string,
    // +MONTH__BY__INDEX__3__FULL: string,
    // +MONTH__BY__INDEX__4__FULL: string,
    // +MONTH__BY__INDEX__5__FULL: string,
    // +MONTH__BY__INDEX__6__FULL: string,
    // +MONTH__BY__INDEX__7__FULL: string,
    // +MONTH__BY__INDEX__8__FULL: string,
    // +MONTH__BY__INDEX__9__FULL: string,
    // +MONTH__BY__INDEX__10__FULL: string,
    // +MONTH__BY__INDEX__11__FULL: string,

    +CARD__SITES_SYNCHRONIZED: string,
    +CARD__SITES_BEFORE_AFTER: string,
    +CARD__REQUIRED_ACTION: string,
    // +CARD__YOU_CAN_SEE_DETAILS_OF_DATA_STATUS: string,

    +CARD__HEADER__NEW_CONNECTED_SITES: string,
    +CARD__HEADER__NEW_CONNECTED_SITES__SUB_TEXT: string,
    +CARD__COMPANY_PAGE_VIEWS: string,
    +CARD__HEADER__BEFORE_CONNECTING__SUB_TEXT: string,
    +CARD__HEADER__SITE_VISITS: string,
    +CARD__HEADER__ROUTES_SET: string,
    +CARD__HEADER__CALLS: string,
    +CARD__HEADER__COMPANY_PAGE_IMPRESSIONS: string,
    +CARD__HEADER__DYNAMICS_REVIEWS_12_MONTHS: string,
    +CARD__HEADER__TOTAL_REVIEWS: string,
    +CARD__HEADER__REVIEWS_WITH_COMPANY_RESPONSES: string,
    +CARD__HEADER__NUMBER_OF_REVIEWS_BY_SITE: string,
    +CARD__HEADER__AVERAGE_RATING: string,
    +CARD__HEADER__AVERAGE_DISPENSING_POSITION: string,
    // +CARD__NUMBER_OF_REVIEWS_BY_SITE_INFORMATION_FOR: string,

    +SELECT__DIGITAL_PLATFORM: string,

    +LABEL__BEFORE: string,
    +LABEL__AFTER: string,
    +LABEL__IT_WAS: string,
    +LABEL__BECAME: string,

    +LABEL__CONTACTS: string,
    +LABEL__INFO: string,
    +LABEL__REVIEWS: string,
    +LABEL__PRICES: string,

    +ITEM_NAME__ADDRESS: string,
    +ITEM_NAME__COORDINATES: string,
    +ITEM_NAME__SCHEDULE: string,
    +ITEM_NAME__PHONE_NUMBER: string,
    +ITEM_NAME__LINKS_TO_SOCIAL_NETWORKS: string,
    +ITEM_NAME__CONNECTED_3_HEADINGS_AND_MORE: string,
    +ITEM_NAME__COMPANY_RATING_4_OR_MORE: string,
    +ITEM_NAME__DATA_SYNCHRONIZED: string,
    +ITEM_NAME__EMAIL: string,
    +ITEM_NAME__WEBSITE: string,
    +ITEM_NAME__LOGO: string,
    +ITEM_NAME__COVER: string,
    +ITEM_NAME__PRICE: string,
    +ITEM_NAME__GALLERY: string,

    +ITEM_TEXT__TODAY_SCHEDULE_DATA: string,
    +ITEM_TEXT__OPEN: string,
    +ITEM_TEXT__CLOSED: string,

    +ITEM_HEADER__GOODS_AND_SERVICES: string,

    +HEAD_LINE__HEADER: string,
    +HEAD_LINE__SUB_TEXT: string,
    // +HEAD_LINE__SUB_TEXT__REPORT__FROM_TO: string,
    // +HEAD_LINE__SUB_TEXT__COMPARE__FROM_TO: string,

    +COMPANY_NAME__2GIS: string,
    +COMPANY_NAME__YANDEX_MAPS: string,
    +COMPANY_NAME__GOOGLE_MAPS: string,
    +COMPANY_NAME__GOOGLE_BUSINESS: string,

    +SOCIAL_SERVICE__VKONTAKTE: string,
    +SOCIAL_SERVICE__FACEBOOK: string,
    +SOCIAL_SERVICE__INSTAGRAM: string,
    +SOCIAL_SERVICE__YOUTUBE: string,
    +SOCIAL_SERVICE__UNDEFINED: string,

    +SMTH_WENT_WRONG__HEADER: string,
    +SMTH_WENT_WRONG__TEXT: string,

    +RECOMMENDATION_ITEM__HEADER__1: string,
    +RECOMMENDATION_ITEM__TEXT__1: string,
    +RECOMMENDATION_ITEM__LINK__1: string,

    +RECOMMENDATION_ITEM__HEADER__2: string,
    +RECOMMENDATION_ITEM__TEXT__2: string,
    +RECOMMENDATION_ITEM__LINK__2: string,

    +RECOMMENDATION_ITEM__HEADER__3: string,
    +RECOMMENDATION_ITEM__TEXT__3: string,
    +RECOMMENDATION_ITEM__LINK__3: string,

    +RECOMMENDATION_ITEM__HEADER__4: string,
    +RECOMMENDATION_ITEM__TEXT__4: string,
    +RECOMMENDATION_ITEM__LINK__4: string,

    +RECOMMENDATION_ITEM__HEADER__5: string,
    +RECOMMENDATION_ITEM__TEXT__5: string,
    +RECOMMENDATION_ITEM__LINK__5: string,

    +RECOMMENDATION_ITEM__HEADER__6: string,
    +RECOMMENDATION_ITEM__TEXT__6: string,
    +RECOMMENDATION_ITEM__LINK__6: string,

    +RECOMMENDATION_ITEM__HEADER__7: string,
    +RECOMMENDATION_ITEM__TEXT__7: string,
    +RECOMMENDATION_ITEM__LINK__7: string,

    +RECOMMENDATION_ITEM__HEADER__8: string,
    +RECOMMENDATION_ITEM__TEXT__8: string,
    +RECOMMENDATION_ITEM__LINK__8: string,

    // +TEST_STRING: string,

    /* eslint-enable id-match, id-length, max-len */
|};

// eslint-disable-next-line id-match
export type LangKeyType = $Keys<LangDataType>;
