// @flow

/* global Intl */

import React, {useContext} from 'react';

import {Locale} from '../../../../provider/locale/c-locale';
import type {ReportContextType, ReportProductsProductsType} from '../../../../provider/report/report-type';
import {ReportContext} from '../../../../provider/report/c-report-context';
import type {LocaleContextType} from '../../../../provider/locale/locale-context-type';
import {LocaleContext} from '../../../../provider/locale/c-locale-context';
import {capitalizeFirstLetter} from '../../../lib/string';

import goodsStyle from './goods.scss';

type PropsType = {};

export function Goods(props: PropsType): React$Node {
    const reportContextData = useContext<ReportContextType>(ReportContext);
    const {report} = reportContextData;
    const localeContextData = useContext<LocaleContextType>(LocaleContext);
    const {localeName} = localeContextData;

    if (!report) {
        return null;
    }

    const {products} = report;
    const {products: productList} = products;

    if (productList.length === 0) {
        return null;
    }

    return (
        <div className={goodsStyle.goods}>
            <h5 className={goodsStyle.title}>
                <Locale stringKey="ITEM_HEADER__GOODS_AND_SERVICES"/>
            </h5>

            {productList.map((product: ReportProductsProductsType): React$Node => {
                const {currency, name, price} = product;
                const formatter = new Intl.NumberFormat(localeName, {style: 'currency', currency});

                const capitalizedName = capitalizeFirstLetter(name);

                return (
                    <div className={goodsStyle.item} key={name + '-' + price}>
                        <p className={goodsStyle.item_name} title={capitalizedName}>
                            {capitalizedName}
                        </p>

                        <div className={goodsStyle.item_space}/>

                        <p className={goodsStyle.item_cost}>{formatter.format(Number.parseFloat(price))}</p>
                    </div>
                );
            })}
        </div>
    );
}
