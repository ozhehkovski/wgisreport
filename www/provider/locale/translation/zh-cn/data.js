// @flow

import type {LangDataType} from '../type';
import {enUs} from '../en-us/data';

export const zhCn: LangDataType = {
    ...enUs,

    /* eslint-disable id-match, id-length, max-len */
    META__LANGUAGE_NAME: '简体中文',

    LOGIN_POPUP__PLEASE_LOG_IN_OR_JOIN_NOW: '请登录或立即注册。',
    LOGIN_POPUP__INPUT_USERNAME: '用户名',
    LOGIN_POPUP__INPUT_PASSWORD: '密码',
    LOGIN_POPUP__BUTTON_LOGIN: '登录',
    LOGIN_POPUP__BUTTON_JOIN_NOW: '立即注册',
    LOGIN_POPUP__LINK_LOST_PASSWORD: '丢失密码？',

    POPUP__CONFIRM__HEADER__CONFIRMATION: '确认书...',
    POPUP__CONFIRM__BUTTON__CANCEL: '取消',
    POPUP__CONFIRM__BUTTON__OK: '好',

    /* eslint-enable id-match, id-length, max-len */
};
