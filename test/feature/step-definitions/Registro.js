const { defineSupportCode } = require('cucumber');
import { browser, by, element } from 'protractor';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

defineSupportCode(function ({ When, Then }) {
  When('Estoy en la pagina inicial  {string}', function (string) {
    return browser.get(string);
  });

  Then('El titulo deberia de ser {string}', function (title) {
    return expect(browser.getTitle()).to.eventually.eql(title);
  });

  When('Selecciono para registrarme', function () {
    const link = element.all(by.className('wide-button')).first();
    return link.click();
  });


  Then('Deberia de ver {string} titulo', function (string) {
    const elemento = element(by.id('solidProvider'));
    return expect(elemento.getText()).to.eventually.eql(string);
  });
});
