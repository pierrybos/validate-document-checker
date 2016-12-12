[![Coverage Status](https://coveralls.io/repos/github/pierrybos/validate-document-checker/badge.svg?branch=master)](https://coveralls.io/github/pierrybos/validate-document-checker?branch=master)
[![Build Status](https://travis-ci.org/pierrybos/validate-document-checker.svg?branch=master)](https://travis-ci.org/pierrybos/validate-document-checker)


Brazilian Document Validator
=========

## Synopsis

This code just checks if a brazilian document (CPF, CNPJ or PIS) is valid or not based on your verify code. 
For the PIS there is the need of a extra parameter, a boolean, to inform that the verify code has one character.

## Usage


CPF:

    validateDocumentChecker('123.456.789-00'); // will return false
    validateDocumentChecker('12345678900'); // will return false
    validateDocumentChecker(12345678900); // will return false

    validateDocumentChecker('123.456.789-09'); // will return true
    validateDocumentChecker('12345678909'); // will return true
    validateDocumentChecker(123.456.789-09); // will return true

CNPJ:

    validateDocumentChecker('12.345.678/0001-00'); // will return false
    validateDocumentChecker('12345678000100'); // will return false
    validateDocumentChecker(12345678000100); // will return false

    validateDocumentChecker('12.345.678/0001-95'); // will return true
    validateDocumentChecker('12345678000195'); // will return true
    validateDocumentChecker(12345678000195); // will return true


PIS:

    validateDocumentChecker('123.4567.890-1', true); // will return false
    validateDocumentChecker('12345678901', true); // will return false
    validateDocumentChecker(12345678901, true); // will return false
    validateDocumentChecker('123.4567.890-0', true); // will return true
    validateDocumentChecker('12345678900', true); // will return true
    validateDocumentChecker(12345678900, true); // will return true

    // Second parameter boolean identifies if verify number has just one digit. Calculate changes.


## Installation

  `npm install validate-document-checker`

## Tests

  `npm test`
    
## License

MIT


## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.