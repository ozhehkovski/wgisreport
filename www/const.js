// @flow

/* global BUILD_DATE_H */
/* eslint-disable id-match */

export const selector = {
    appWrapper: '.js-app-wrapper',
};

function sayHi() {
    const {log} = console;

    // http://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20
    // Font: Georgia11
    const hiString = `


        ██████╗  ██████╗ ██╗███████╗
        ╚════██╗██╔════╝ ██║██╔════╝
         █████╔╝██║  ███╗██║███████╗
        ██╔═══╝ ██║   ██║██║╚════██║
        ███████╗╚██████╔╝██║███████║
        ╚══════╝ ╚═════╝ ╚═╝╚══════╝

██████╗ ███████╗██████╗  ██████╗ ██████╗ ████████╗
██╔══██╗██╔════╝██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝
██████╔╝█████╗  ██████╔╝██║   ██║██████╔╝   ██║
██╔══██╗██╔══╝  ██╔═══╝ ██║   ██║██╔══██╗   ██║
██║  ██║███████╗██║     ╚██████╔╝██║  ██║   ██║
╚═╝  ╚═╝╚══════╝╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝


`;

    log(hiString);

    // $FlowFixMe
    log('Build date:', BUILD_DATE_H);
}

sayHi();
