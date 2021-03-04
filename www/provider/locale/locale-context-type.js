// @flow

export type LocaleContextValueMapType = {
    +[key: string]: React$Node,
};

export type LocaleNameType = 'en-US' | 'ru-RU' | 'zh-CN' | 'zh-TW';

export type LocaleContextType = {|
    +localeName: LocaleNameType,
    +setLocaleName: (localeName: LocaleNameType) => void,
|};
