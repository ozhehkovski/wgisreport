// @flow

import React, {useContext} from 'react';

import type {ReportContextType} from '../../../../provider/report/report-type';
import {ReportContext} from '../../../../provider/report/c-report-context';

import imageListStyle from './image-list.scss';

type PropsType = {};

export function ImageList(props: PropsType): React$Node {
    const reportContextData = useContext<ReportContextType>(ReportContext);
    const {report} = reportContextData;

    if (!report) {
        return null;
    }

    const {products} = report;
    const {images_urls: imagesUrlList} = products;

    if (imagesUrlList.length === 0) {
        return null;
    }

    return (
        <div className={imageListStyle.image_list}>
            {imagesUrlList.map((imageUrl: string): React$Node => {
                return (
                    <div className={imageListStyle.item} key={imageUrl}>
                        <img alt="" className={imageListStyle.image} src={imageUrl}/>
                    </div>
                );
            })}
        </div>
    );
}
