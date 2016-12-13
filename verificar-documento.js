;(function(commonjs){

    'use strict';

    if(commonjs){
        var validatorMdl = require('./src/validator-mdl');
    } else {
        var validatorMdl = window.validatorMdl;
    }

/**
 * M�todo verifica se documento informado � valido, Retorna sucesso para CPF, CNPJ ou PIS
 * @param {String} documento - documento a ser verificado. Pode ser uma string '123.321.456-96' ou o numero 12332145696
 * @param  {boolean} umDigitoVerificador - informa se documento possui apenas um digito, como o PIS, interfere na forma de c�lculo.
 * @return {boolean}
 */
 function verificarDocumento(strDocument, numOneNumberInChecker){
    console.warn('deprecated use "validateDocumentChecker" instead.')
    return validatorMdl.fnBolValidateDocument(strDocument, numOneNumberInChecker);
};


if(commonjs){
    module.exports = verificarDocumento;
} else {
    window.verificarDocumento = verificarDocumento;
}

})(typeof(exports) !== 'undefined');