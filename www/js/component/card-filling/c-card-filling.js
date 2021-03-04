// @flow

/* eslint react/jsx-max-depth: [1, { "max": 5 }], sonarjs/no-identical-functions: 0 */

import React, {Fragment, useContext, useState} from 'react';

import {classNames} from '../../lib/css';
import serviceStyle from '../../../css/service.scss';
import {Locale} from '../../../provider/locale/c-locale';
import type {ReportContextType} from '../../../provider/report/report-type';
import {ReportContext} from '../../../provider/report/c-report-context';

import cardFillingStyle from './card-filling.scss';
import {CardBanner} from './card-banner/c-card-banner';
import {CardSwitch} from './card-switch/c-card-switch';
import {CardInfoItem} from './card-info-item/c-card-info-item';
import {TopLabel} from './top-label/c-top-label';

import geoPointIcon from './image/geo-point-icon.png';
import globoIcon from './image/globo-icon.png';
import phoneIcon from './image/phone-icon.png';
import {Goods} from './goods/c-goods';
import {ImageList} from './image-list/c-image-list';
import {Sharing} from './sharing/c-sharing';
import {RatingCard} from './rating-card/c-rating-card';
import {CurrentWorkState} from './current-work-state/c-current-work-state';

type PropsType = {};

export function CardFilling(props: PropsType): React$Node {
    const [activeBeforeIndex, setActiveBeforeIndex] = useState<number>(0);
    const [activeAfterIndex, setActiveAfterIndex] = useState<number>(0);

    const reportContextData = useContext<ReportContextType>(ReportContext);
    const {report} = reportContextData;

    if (!report) {
        return null;
    }

    const {reviews, company} = report;

    return (
        <div className={cardFillingStyle.card_filling}>
            <div className={cardFillingStyle.card_wrapper__before}>
                <TopLabel>
                    <Locale stringKey="LABEL__IT_WAS"/>
                </TopLabel>

                <CardBanner
                    color="#2b9501"
                    rating={Number.parseFloat(reviews.basic_diff.avg_rating.past)}
                    title={company.name}
                    type={company.category_name}
                />

                <CardSwitch
                    activeIndex={activeBeforeIndex}
                    setActiveIndex={setActiveBeforeIndex}
                    tabClassName={serviceStyle.disable_user_event}
                    tabList={[
                        <Locale key="contacts" stringKey="LABEL__CONTACTS"/>,
                        <Locale key="info" stringKey="LABEL__INFO"/>,
                    ]}
                />

                <div className={classNames(cardFillingStyle.content_wrapper, cardFillingStyle.content_wrapper__last)}>
                    <CardInfoItem iconSrc={geoPointIcon} title={company.address.adds}/>

                    <CurrentWorkState/>

                    <CardInfoItem
                        iconSrc={phoneIcon}
                        title={company.phones.map((phone: string): React$Node => {
                            return (
                                <span className={serviceStyle.block} key={phone}>
                                    {phone}
                                </span>
                            );
                        })}
                    />
                </div>

                <div className={cardFillingStyle.rating_card_wrapper}>
                    <RatingCard/>
                </div>
            </div>

            <div className={cardFillingStyle.card_wrapper}>
                <TopLabel>
                    <Locale stringKey="LABEL__BECAME"/>
                </TopLabel>

                <CardBanner
                    color="#000"
                    imageSrc={company.images.cover}
                    rating={Number.parseFloat(reviews.basic_diff.avg_rating.current)}
                    title={company.name}
                    type={company.category_name}
                />

                <CardSwitch
                    activeIndex={activeAfterIndex}
                    setActiveIndex={setActiveAfterIndex}
                    tabClassName={serviceStyle.disable_user_event}
                    tabList={[
                        <Locale key="contacts" stringKey="LABEL__CONTACTS"/>,
                        <Locale key="info" stringKey="LABEL__INFO"/>,
                        <Fragment key="reviews">
                            <Locale stringKey="LABEL__REVIEWS"/>

                            <span className={cardFillingStyle.review_counter}>{reviews.count}</span>
                        </Fragment>,
                        <Locale key="prices" stringKey="LABEL__PRICES"/>,
                    ]}
                />

                <div className={cardFillingStyle.content_wrapper}>
                    <Goods/>
                </div>

                <ImageList/>

                <div
                    className={classNames(
                        cardFillingStyle.content_wrapper,
                        cardFillingStyle.content_wrapper__last,
                        serviceStyle.flex_grow_1
                    )}
                >
                    <CardInfoItem
                        iconSrc={geoPointIcon}
                        // text="Ленинградский район, Новосибирск 630032"
                        title={company.address.adds}
                    />

                    <CurrentWorkState/>

                    <CardInfoItem
                        iconSrc={phoneIcon}
                        title={company.phones.map((phone: string): React$Node => {
                            return (
                                <span className={serviceStyle.block} key={phone}>
                                    {phone}
                                </span>
                            );
                        })}
                    />

                    <CardInfoItem
                        iconSrc={globoIcon}
                        title={
                            <a
                                className={cardFillingStyle.external_link}
                                href={company.details.website}
                                rel="noreferrer"
                                target="_blank"
                            >
                                {company.details.website}
                            </a>
                        }
                    />

                    <Sharing/>
                </div>
            </div>
        </div>
    );
}
