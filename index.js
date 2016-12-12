'use strict';
try{
    var validatorMdl = require('./src/validator-mdl'); 
} catch(e){
    if(!validatorMdl){
        throw "NEED INCLUDE MODULE BEFORE"; 
    }
}
/**
 * Método verifica se documento informado é valido, Retorna sucesso para CPF, CNPJ ou PIS
 * @param {String} documento - documento a ser verificado. Pode ser uma string '123.321.456-96' ou o numero 12332145696
 * @param  {boolean} umDigitoVerificador - informa se documento possui apenas um digito, como o PIS, interfere na forma de cálculo.
 * @return {boolean}
 */
 function validateDocumentChecker(strDocument, numOneNumberInChecker){

   return validatorMdl.fnBolValidateDocument(strDocument, numOneNumberInChecker);

};


try {
    module.exports = validateDocumentChecker;
} catch (e){}