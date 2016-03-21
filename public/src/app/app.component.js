import {Component} from 'angular2/core';
import {CollapseCards} from './collapse-cards/collapse-cards.component';

class AppComponent {
	 
  	static get annotations() {
        return [
            new Component ({
                selector: "my-app",
                templateUrl: "public/src/app/app.component.html",
                directives: [CollapseCards]
            })
        ];
    }
	
	constructor() {}

}

export {AppComponent};