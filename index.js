;(function(commonjs){

    'use strict';
    if(commonjs){
        try {
            var validatorMdl = require('./src/validator-mdl'); 
        } catch (e){
            // don't worry, probably is a minified - be called just on tests
            var validatorMdl = require('../src/validator-mdl'); 
        }
    } else {
        var validatorMdl = window.validatorMdl; 
    }

/**
 * M�todo verifica se documento informado � valido, Retorna sucesso para CPF, CNPJ ou PIS
 * @param {String} documento - documento a ser verificado. Pode ser uma string '123.321.456-96' ou o numero 12332145696
 * @param  {boolean} umDigitoVerificador - informa se documento possui apenas um digito, como o PIS, interfere na forma de c�lculo.
 * @return {boolean}
 */
 function validateDocumentChecker(strDocument, numOneNumberInChecker){

     return validatorMdl.fnBolValidateDocument(strDocument, numOneNumberInChecker);

 };

 if(commonjs){
    module.exports = validateDocumentChecker;
} else {
    window.validateDocumentChecker = validateDocumentChecker;
}


})(typeof(exports) !== "undefined");