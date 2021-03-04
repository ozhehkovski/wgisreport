// @flow

import type {ReportCompanySocialServiceNameType} from '../../../../../provider/report/report-type';
import {reportCompanySocialServiceNameMap} from '../../../../../provider/report/report-const';
import type {LangKeyType} from '../../../../../provider/locale/translation/type';

// import facebookIcon from './image/facebook-icon.png';
// import instagramIcon from './image/instagram-icon.png';
// import vKontakteIcon from './image/v-kontakte-icon.png';
// import grayIcon from './image/social-gray-icon.png';

import facebookIcon from './image/facebook-icon.svg';
import instagramIcon from './image/instagram-icon.svg';
import vKontakteIcon from './image/v-kontakte-icon.svg';
import youtubeIcon from './image/youtube-icon.svg';
import grayIcon from './image/social-gray-icon.png';

type SocialServiceDataType = {
    icon: string,
    langKey: LangKeyType,
};

export function getSocialServiceData(service: ReportCompanySocialServiceNameType): SocialServiceDataType {
    switch (service) {
        case reportCompanySocialServiceNameMap.facebook:
            return {
                icon: facebookIcon,
                langKey: 'SOCIAL_SERVICE__FACEBOOK',
            };
        case reportCompanySocialServiceNameMap.instagram:
            return {
                icon: instagramIcon,
                langKey: 'SOCIAL_SERVICE__INSTAGRAM',
            };
        case reportCompanySocialServiceNameMap.vKontakte:
            return {
                icon: vKontakteIcon,
                langKey: 'SOCIAL_SERVICE__VKONTAKTE',
            };
        case reportCompanySocialServiceNameMap.youtube:
            return {
                icon: youtubeIcon,
                langKey: 'SOCIAL_SERVICE__YOUTUBE',
            };
        default:
            return {
                icon: grayIcon,
                langKey: 'SOCIAL_SERVICE__UNDEFINED',
            };
    }
}
