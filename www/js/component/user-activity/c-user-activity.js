// @flow

import React, {useState} from 'react';

import {Wrapper} from '../layout/wrapper/c-wrapper';
import {Container} from '../layout/container/c-container';
import {NewSpaces} from '../new-spaces/c-new-spaces';
import {InfoByPlace} from '../info-by-place/c-info-by-place';

import type {BeforeAfterType, PlaceNameType} from './user-activity-type';
import {beforeAfterMap, placeNameMap} from './user-activity-const';

type PropsType = {};

export function UserActivity(props: PropsType): React$Node {
    const [beforeAfterTime, setBeforeAfterTime] = useState<BeforeAfterType>(beforeAfterMap.after);
    const [placeName, setPlaceName] = useState<PlaceNameType>(placeNameMap.doubleGis);

    return (
        <Wrapper>
            <Container part={4}>
                <NewSpaces
                    beforeAfterTime={beforeAfterTime}
                    // placeName={placeName}
                    setBeforeAfterTime={setBeforeAfterTime}
                    // setPlaceName={setPlaceName}
                />
            </Container>

            <Container part={8}>
                <InfoByPlace
                    // beforeAfterTime={beforeAfterTime}
                    placeName={placeName}
                    // setBeforeAfterTime={setBeforeAfterTime}
                    setPlaceName={setPlaceName}
                />
            </Container>
        </Wrapper>
    );
}
