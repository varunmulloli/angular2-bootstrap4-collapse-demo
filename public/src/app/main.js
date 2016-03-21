import {bootstrap} from 'angular2/platform/browser';
import {AppComponent}     from './app.component';
import {enableProdMode} from 'angular2/core';

//enableProdMode();

let boot = document.addEventListener('DOMContentLoaded', () => {
  bootstrap(AppComponent, []);
});

module.exports = boot;