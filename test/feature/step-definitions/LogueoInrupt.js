const assert = require('assert');
const {
  Given,
  When,
  Then
} = require('cucumber');

import { browser, by, element } from 'react-embedded-browser';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

When('Estoy en la pagina inicial de logueo {string}', function (string) {
  return browser.get(string);
});
When('Selecciono para Iniciar Sesion con proveedor como Inrupt y y pincho en Iniciar sesion', function () {
  const providerLink = element(by.className('ng-input'));
  providerLink.click();
  const span = element.all(by.className('ng-option')).first();
  span.click();
  const link = element.all(by.className('wide-button')).first();
  return link.click();

});