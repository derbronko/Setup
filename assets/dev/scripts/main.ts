/// <reference path="../../../typings/browser.d.ts" />

namespace demo.root {
    const selectors = {
        "btnFb": ".useFB",
        "inpName": "#name",
        "inpPlace": "#city",
        "inpAdress": "#address",
        "inpEmail": "#email",
        "inpCountry": "#country"
    };

    export class fbapi {
        private _$trigger: JQuery;

        constructor(trigger) {
            this._$trigger = $(trigger);
        }

        private setEvents() {

        }

        private setupFBAPI() {

        }

        private getUserFromFB() {

        }

    }

}