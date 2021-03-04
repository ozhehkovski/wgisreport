// @flow

import type {LangDataType} from '../type';
import {enUs} from '../en-us/data';

export const zhTw: LangDataType = {
    ...enUs,

    /* eslint-disable id-match, id-length, max-len */
    META__LANGUAGE_NAME: '繁體中文',

    LOGIN_POPUP__PLEASE_LOG_IN_OR_JOIN_NOW: '請登錄或立即註冊。',
    LOGIN_POPUP__INPUT_USERNAME: '用戶名',
    LOGIN_POPUP__INPUT_PASSWORD: '密碼',
    LOGIN_POPUP__BUTTON_LOGIN: '登入',
    LOGIN_POPUP__BUTTON_JOIN_NOW: '立即註冊',
    LOGIN_POPUP__LINK_LOST_PASSWORD: '遺失密碼？',

    POPUP__CONFIRM__HEADER__CONFIRMATION: '確認書...',
    POPUP__CONFIRM__BUTTON__CANCEL: '取消',
    POPUP__CONFIRM__BUTTON__OK: '好',

    /* eslint-enable id-match, id-length, max-len */
};
