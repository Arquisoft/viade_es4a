const assert = require('assert');
const {
  Given,
  When,
  Then
} = require('cucumber');

import { browser, by, element } from 'react-embedded-browser';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

When('Estoy en la pagina inicial {string}', function (string) {
  return browser.get(string);
});
When('Busco Iniciar Sesion', function () {
  const providerLink = element(by.className('ng-input'));
  return providerLink.click();
});