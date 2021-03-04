// @flow

import type {ReportCatalogsCompanyMergedType, ReportCatalogsCompanyType} from '../../../../provider/report/report-type';

function getLogoId(item: ReportCatalogsCompanyType): number {
    return item.id;
}

function getLogoIdList(list: Array<ReportCatalogsCompanyType>): Array<number> {
    return list.map<number>(getLogoId);
}

export function getMergedList(
    past: Array<ReportCatalogsCompanyType>,
    current: Array<ReportCatalogsCompanyType>
): Array<ReportCatalogsCompanyMergedType> {
    const idList = [...new Set([...getLogoIdList(current), ...getLogoIdList(past)])];

    return idList.map<ReportCatalogsCompanyMergedType>((id: number): ReportCatalogsCompanyMergedType => {
        const pastItem = past.find((item: ReportCatalogsCompanyType): boolean => item.id === id);
        const currentItem = current.find((item: ReportCatalogsCompanyType): boolean => item.id === id);

        if (pastItem && currentItem) {
            return {
                past: pastItem,
                current: currentItem,
                id,
                logo: currentItem.logo,
                name: currentItem.name,
                isInCurrent: true,
                isInPast: true,
            };
        }

        if (currentItem) {
            return {
                past: null,
                current: currentItem,
                id,
                logo: currentItem.logo,
                name: currentItem.name,
                isInCurrent: true,
                isInPast: false,
            };
        }

        if (pastItem) {
            return {
                past: pastItem,
                current: null,
                id,
                logo: pastItem.logo,
                name: pastItem.name,
                isInCurrent: false,
                isInPast: true,
            };
        }

        console.error('can not get any data for id: ' + id);

        return {
            past: null,
            current: null,
            id,
            name: '',
            logo: '',
            isInCurrent: false,
            isInPast: false,
        };
    });
}
