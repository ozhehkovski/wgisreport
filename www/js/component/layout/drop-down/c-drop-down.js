// @flow

/* eslint-disable jsx-a11y/interactive-supports-focus, jsx-a11y/click-events-have-key-events */

import React, {useState} from 'react';

import {classNames} from '../../../lib/css';

import dropDownStyle from './drop-down.scss';

type PropsType = {|
    +optionList: Array<React$Node>,
    +activeIndex: number,
    +setActiveIndex: (activeIndex: number) => void,
    +className?: string,
    +optionClassName?: string,
|};

export function DropDown(props: PropsType): React$Node {
    const {optionList, activeIndex, setActiveIndex, className, optionClassName} = props;

    const [isListOpen, setIsListOpen] = useState<boolean>(false);

    const activeItem = optionList[activeIndex];

    const dropDownClassNameFull = classNames(dropDownStyle.drop_down, className, {
        [dropDownStyle.drop_down__open]: isListOpen,
    });
    const optionClassNameFull = classNames(dropDownStyle.item, optionClassName);
    const openCloseButtonClassNameFull = classNames(dropDownStyle.open_close_button, {
        [dropDownStyle.open_close_button__open]: isListOpen,
    });

    function handleOpenClose() {
        setIsListOpen(!isListOpen);
    }

    return (
        <div className={dropDownClassNameFull}>
            <button className={openCloseButtonClassNameFull} onClick={handleOpenClose} type="button"/>

            <div className={dropDownStyle.list}>
                {optionList.map<React$Node>((item: React$Node, index: number): React$Node => {
                    function handleClick() {
                        setActiveIndex(index);
                        setIsListOpen(false);
                    }

                    if (isListOpen) {
                        return (
                            <div
                                className={classNames(optionClassNameFull, {
                                    [dropDownStyle.item_active]: index === activeIndex,
                                })}
                                // eslint-disable-next-line react/no-array-index-key
                                key={index}
                                onClick={handleClick}
                                role="button"
                            >
                                {item}
                            </div>
                        );
                    }

                    if (index === activeIndex) {
                        return (
                            <div
                                className={optionClassNameFull}
                                // eslint-disable-next-line react/no-array-index-key
                                key={index}
                                onClick={handleOpenClose}
                                role="button"
                            >
                                {activeItem}
                            </div>
                        );
                    }

                    return null;
                })}
            </div>
        </div>
    );
}
