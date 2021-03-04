// @flow

import type {LangDataType} from '../type';

export const ruRu: LangDataType = {
    /* eslint-disable id-match, id-length, max-len */
    META__LANGUAGE_NAME: 'Русский',

    LOGIN_POPUP__PLEASE_LOG_IN_OR_JOIN_NOW: 'Пожалуйста, войдите в систему или зарегистрируйтесь.',
    LOGIN_POPUP__INPUT_USERNAME: 'Логин',
    LOGIN_POPUP__INPUT_PASSWORD: 'Пароль',
    LOGIN_POPUP__BUTTON_LOGIN: 'Войти',
    LOGIN_POPUP__BUTTON_JOIN_NOW: 'Регистрация',
    LOGIN_POPUP__LINK_LOST_PASSWORD: 'Забыли пароль?',

    POPUP__CONFIRM__HEADER__CONFIRMATION: 'Подтверждение...',
    POPUP__CONFIRM__BUTTON__CANCEL: 'Отмена',
    POPUP__CONFIRM__BUTTON__OK: 'OK',

    HEADER__ALL_REFERENCES: 'Все справочники',

    SECTION_HEADER__COMPANY_DETAILS: 'Данные о компании',
    SECTION_HEADER__COMPANY_DETAILS__SUB_TEXT:
        'Исходные данные о компании и процент их распространения по площадкам компаний-партнеров 2ГИС',
    SECTION_HEADER__USER_ACTIVITY: 'Активность пользователей',
    SECTION_HEADER__USER_ACTIVITY__SUB_TEXT:
        'Данные о активности привлеченных пользователей полученные от подключенных площадок-партнеров',
    SECTION_HEADER__REPUTATION_AND_REVIEWS: 'Репутация и отзывы',
    SECTION_HEADER__REPUTATION_AND_REVIEWS__SUB_TEXT:
        'Данные о изменении показателей репутации Вашей компании в интернете',
    SECTION_HEADER__COMPANY_CARD_FILLING: 'Наполняемость карточки компании',
    SECTION_HEADER__COMPANY_CARD_FILLING__SUB_TEXT:
        'Как изменилась карточка Вашей компании и ее средняя позиция на интернет-площадках',
    SECTION_HEADER__RECOMMENDATION: 'Рекомендации',
    SECTION_HEADER__RECOMMENDATION__SUB_TEXT:
        'Наши рекомендации, которые помогут более эффективно использовать аудиторию интернет-площадок',

    COMPANY_INFO__NAME: 'Название',
    COMPANY_INFO__ADDRESS: 'Адресс',
    COMPANY_INFO__SITE: 'Сайт',
    COMPANY_INFO__PHONE_NUMBER: 'Телефон',
    COMPANY_INFO__SCHEDULE: 'График работы',

    WEEK_DAY__MONDAY__2: 'Пн',
    WEEK_DAY__TUESDAY__2: 'Вт',
    WEEK_DAY__WEDNESDAY__2: 'Ср',
    WEEK_DAY__THURSDAY__2: 'Чт',
    WEEK_DAY__FRIDAY__2: 'Пт',
    WEEK_DAY__SATURDAY__2: 'Сб',
    WEEK_DAY__SUNDAY__2: 'Вс',
    WEEK_DAY__HOLIDAY: 'Выходной',

    // MONTH__BY__INDEX__0__FULL: 'Январь',
    // MONTH__BY__INDEX__1__FULL: 'Февраль',
    // MONTH__BY__INDEX__2__FULL: 'Март',
    // MONTH__BY__INDEX__3__FULL: 'Апрель',
    // MONTH__BY__INDEX__4__FULL: 'Май',
    // MONTH__BY__INDEX__5__FULL: 'Июнь',
    // MONTH__BY__INDEX__6__FULL: 'Июль',
    // MONTH__BY__INDEX__7__FULL: 'Август',
    // MONTH__BY__INDEX__8__FULL: 'Сентябрь',
    // MONTH__BY__INDEX__9__FULL: 'Октябрь',
    // MONTH__BY__INDEX__10__FULL: 'Ноябрь',
    // MONTH__BY__INDEX__11__FULL: 'Декабрь',

    CARD__SITES_SYNCHRONIZED: 'площадок синхронизировано',
    CARD__SITES_BEFORE_AFTER: 'площадок было / стало',
    CARD__REQUIRED_ACTION: 'площадок ещё требует действия',
    // CARD__YOU_CAN_SEE_DETAILS_OF_DATA_STATUS:
    //     'Подробные данные о состоянии каждый прощадки вы можете посмотреть в отчёте',
    CARD__HEADER__NEW_CONNECTED_SITES: 'Новые прощадки',
    CARD__HEADER__NEW_CONNECTED_SITES__SUB_TEXT:
        'Данные взяты из рассчётного значения площадок в месте вашего присутствия',
    CARD__COMPANY_PAGE_VIEWS: 'просмотров компании',
    CARD__HEADER__BEFORE_CONNECTING__SUB_TEXT: '{value} до подключения',
    CARD__HEADER__SITE_VISITS: 'переходов на сайт',
    CARD__HEADER__ROUTES_SET: 'построений маршрута',
    CARD__HEADER__CALLS: 'звонков по телефону',
    CARD__HEADER__COMPANY_PAGE_IMPRESSIONS: 'показов карточки',
    CARD__HEADER__DYNAMICS_REVIEWS_12_MONTHS: 'Динамика отзывов за 12 месяцев',
    CARD__HEADER__NUMBER_OF_REVIEWS_BY_SITE: 'Количество отзывов по площадкам',
    CARD__HEADER__AVERAGE_RATING: 'средний рейтинг',
    CARD__HEADER__TOTAL_REVIEWS: 'всего отзывов',
    CARD__HEADER__REVIEWS_WITH_COMPANY_RESPONSES: 'отзывов с ответами компании',
    CARD__HEADER__AVERAGE_DISPENSING_POSITION: 'средняя позиция выдачи',
    // CARD__NUMBER_OF_REVIEWS_BY_SITE_INFORMATION_FOR: 'По данным на {month} {year}',

    SELECT__DIGITAL_PLATFORM: 'Площадка',

    LABEL__BEFORE: 'до',
    LABEL__AFTER: 'после',
    LABEL__IT_WAS: 'было',
    LABEL__BECAME: 'стало',

    LABEL__CONTACTS: 'Контакты',
    LABEL__INFO: 'Инфо',
    LABEL__REVIEWS: 'Отзывы',
    LABEL__PRICES: 'Цены',

    ITEM_NAME__ADDRESS: 'Адрес',
    ITEM_NAME__COORDINATES: 'Координаты',
    ITEM_NAME__SCHEDULE: 'График работы',
    ITEM_NAME__PHONE_NUMBER: 'Номер телефона',
    ITEM_NAME__LINKS_TO_SOCIAL_NETWORKS: 'Ссылки на соцсети',
    ITEM_NAME__CONNECTED_3_HEADINGS_AND_MORE: 'Подключено 3 рубрики и более',
    ITEM_NAME__COMPANY_RATING_4_OR_MORE: 'Рейтинг компании 4 и более',
    ITEM_NAME__DATA_SYNCHRONIZED: 'Данные синхронизированы',
    ITEM_NAME__EMAIL: 'E-Mail',
    ITEM_NAME__WEBSITE: 'Сайт',
    ITEM_NAME__LOGO: 'Логотип',
    ITEM_NAME__COVER: 'Обложка',
    ITEM_NAME__PRICE: 'Прайс',
    ITEM_NAME__GALLERY: 'Галерея',

    ITEM_TEXT__TODAY_SCHEDULE_DATA: 'Сегодня с {timeFrom} до {timeTo}',
    ITEM_TEXT__OPEN: 'Открыто',
    ITEM_TEXT__CLOSED: 'Закрыто',

    ITEM_HEADER__GOODS_AND_SERVICES: 'Товары и услуги',

    HEAD_LINE__HEADER: 'Отчёт по размещению',
    HEAD_LINE__SUB_TEXT: 'Отчёт за {date}',
    // HEAD_LINE__SUB_TEXT__REPORT__FROM_TO: 'Отчёт: от {dateFrom} до {dateTo}',
    // HEAD_LINE__SUB_TEXT__COMPARE__FROM_TO: 'Сравнение: от {dateFrom} до {dateTo}',

    COMPANY_NAME__2GIS: '2ГИС',
    COMPANY_NAME__YANDEX_MAPS: 'Яндекс.Карты',
    COMPANY_NAME__GOOGLE_MAPS: 'Google Карты',
    COMPANY_NAME__GOOGLE_BUSINESS: 'Google Бизнес',

    SOCIAL_SERVICE__VKONTAKTE: 'ВКонтакте',
    SOCIAL_SERVICE__FACEBOOK: 'Facebook',
    SOCIAL_SERVICE__INSTAGRAM: 'Instagram',
    SOCIAL_SERVICE__YOUTUBE: 'Youtube',
    SOCIAL_SERVICE__UNDEFINED: 'Undefined',

    SMTH_WENT_WRONG__HEADER: 'Что-то пошло не так',
    SMTH_WENT_WRONG__TEXT:
        'Запрашиваемая вами страница временно недоступна,{beakLine}мы работаем над устранением проблемы!',

    RECOMMENDATION_ITEM__HEADER__1: 'Добавьте описание вашей компании', // description
    RECOMMENDATION_ITEM__TEXT__1:
        'С его помощью вы сможете рассказать потенциальным клиентам о своем бизнесе. Также, заполнение этого поля влияет на частоту показа карточки вашей компании в поисковых системах.',
    RECOMMENDATION_ITEM__LINK__1: 'Добавить описание',

    RECOMMENDATION_ITEM__HEADER__2: 'Загрузите логотип и подложку', // logo and cover
    RECOMMENDATION_ITEM__TEXT__2:
        'Это позволит сделать вашу страницу более привлекательной и улучшит конверсии в открытие карточки и в целевые действия на ней.',
    RECOMMENDATION_ITEM__LINK__2: 'Загрузить логотип',

    RECOMMENDATION_ITEM__HEADER__3: 'Загрузите фотографии и регулярно обновляйте их', // gallery []
    RECOMMENDATION_ITEM__TEXT__3:
        'Фотографии улучшают конверсии в посещение карточки вашей компании и в целевые действия на ней. Чем чаще вы добавляете новые фотографии, тем выше будет показываться ваша страница в поисковых системах.',
    RECOMMENDATION_ITEM__LINK__3: 'Загрузить фотографии',

    RECOMMENDATION_ITEM__HEADER__4: 'Укажите дополнительные категории бизнеса', // main and additional
    RECOMMENDATION_ITEM__TEXT__4:
        'Рассказывая подробнее о специфике вашего бизнеса, Вы сможете получать больше релевантных запросов от потенциальных клиентов.',
    RECOMMENDATION_ITEM__LINK__4: 'Добавить категории',

    RECOMMENDATION_ITEM__HEADER__5: 'Добавьте альтернативные номера телефонов', // phones
    RECOMMENDATION_ITEM__TEXT__5:
        'В случае если существует несколько способов для связи с Вами, важно рассказать об этом потенциальным клиентам.',
    RECOMMENDATION_ITEM__LINK__5: 'Добавить альтернативный номер',

    RECOMMENDATION_ITEM__HEADER__6: 'Уделите внимание работе с отзывами', // avg review ??? (not done)
    RECOMMENDATION_ITEM__TEXT__6:
        'Мотивирую клиентов оставлять отзывы о вас, а так же отвечая на отзывы, вы сможете повлиять на рейтинг компании. От рейтинга и активности в отзывах зависит средняя позиция карточки компании в справочниках.',
    RECOMMENDATION_ITEM__LINK__6: 'Отзывы о компании',

    RECOMMENDATION_ITEM__HEADER__7: 'Ответьте на вопросы клиентов', // answers
    RECOMMENDATION_ITEM__TEXT__7:
        'Потенциальные клиенты задают вам вопросы, которые остаются без ответов. Получив ответ на свой вопрос потенциальный клиент может конвертироваться в покупателя.',
    RECOMMENDATION_ITEM__LINK__7: 'Вопросы в компанию',

    RECOMMENDATION_ITEM__HEADER__8: 'Добавьте ваши товары и услуги', // products
    RECOMMENDATION_ITEM__TEXT__8:
        'Разместив товары и услуги в популярных справочниках Вы получите еще один инструмент привлечения клиентов.',
    RECOMMENDATION_ITEM__LINK__8: 'Добавить товары',

    // TEST_STRING: 'the {value1} data {value2} is {value2} here',

    /* eslint-enable id-match, id-length, max-len */
};
