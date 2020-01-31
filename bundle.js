"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["Meu nome \xE9 ", " e meu sobrenome \xE9 ", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var nome = "Guilherme";
var sobrenome = "Martins";
echo(_templateObject(), nome, sobrenome);
