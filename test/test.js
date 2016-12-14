'use strict';

var expect = require('chai').expect;
var validateDocumentChecker = require('../index');

var verificador = require('../verificar-documento');
var validatorMdl = require('../src/validator-mdl');

var frontValidator = require('../dist/validate-document-checker.min');

var listCPFs = [
'14325481150'
, '75284475798'
, '11717639054'
, '52700157818'
, '565.685.891-01'
, '913.666.185-64'
, '155.744.566-48'
, '369.476.479-83'
, '742.204.467-53'
, '779.674.529-09'
, '163.079.225-08'
, '054.225.685-16'
, '593.921.422-34'
, '647.223.450-74'
, '885.420.262-25'
, '364.746.565-81'
, '067.638.977-58'
, '661.255.767-28'
, '215.847.355-03'
, '422.957.176-39'
, '353.445.323-93'
, '465.835.254-02'
, '222.365.395-25'
, '635.151.127-58'
, '076.766.630-59'
, '718.446.165-76'
, '076.386.340-80'
, '399.034.696-24'
, '477.611.909-92'
, '155.701.478-70'
, '140.980.251-59'
, '407.463.867-37'
, '213.202.103-17'
, '716.545.638-46'
, '495.828.674-85'
, '861.761.225-89'
, '723.510.894-05'
, '713.121.737-93'
, '443.496.271-03'
, '772.504.937-10'
, '631.315.257-38'
, '143.399.051-27'
, '784.652.344-93'
, '827.771.516-10'
, '879.761.940-03'
, '677.716.985-73'
, '168.814.143-07'
, '398.216.986-03'
, '418.981.091-68'
, '626.728.316-02'
, '423.125.416-88'
, '598.209.613-00'
, '370.758.462-30'
, '259.388.365-06'
, '214.921.638-80'
, '838.214.716-03'
, '552.308.466-23'
, '681.253.511-75'
, '551.633.309-18'
, '553.590.812-60'
, '136.620.023-37'
, '181.405.475-81'
, '731.244.399-02'
, '682.049.585-44'
, '743.595.433-01'
, '890.012.285-18'
, '858.232.767-61'
, '823.485.728-26'
, '448.501.372-37'
, '711.146.167-37'
, '012.110.610-19'
, '274.774.616-00'
, '229.613.495-59'
, '052.116.020-05'
, '557.854.877-64'
, '361.771.877-90'
, '422.458.917-67'
, '802.009.600-08'
, '073.604.230-07'
, '256.681.639-54'
, '261.418.783-69'
, '668.474.593-95'
, '883.392.660-55'
, '282.657.313-61'
, '800.881.895-62'
, '313.766.885-90'
, '959.874.363-20'
, '315.661.387-87'
, '173.551.233-86'
, '627.841.721-98'
, '862.865.644-89'
, '447.160.712-00'
, '649.884.757-35'
, '260.462.438-90'
, '658.163.152-34'
, '381.206.969-56'
, '177.832.275-11'
, '832.665.213-07'
, '250.596.862-48'
, '486.395.415-82'
, '759.595.648-07'
, '264.599.833-05'
, '166.892.818-33'
, '321.981.222-86'
, '482.826.029-30'
, '024.754.304-78'
, '064.882.214-18'
, '152.643.460-11'





];

var listCNPJs = [
'51856225000185'
, '15868154000177'
, '30701588000171'
, '68607186000185'
, '48.411.698/0001-64'
, '81.577.295/0001-65'
, '15.925.085/0001-96'
, '87.862.221/0001-57'
, '13.515.113/0001-71'
, '86.369.437/0001-12'
, '44.464.888/0001-99'
, '28.239.258/0001-64'
, '16.682.438/0001-37'
, '91.412.725/0001-42'
, '15.737.091/0001-10'
, '55.383.461/0001-82'
, '36.765.681/0001-26'
, '08.253.113/0001-00'
, '24.047.240/0001-00'
, '78.774.528/0001-05'
, '97.726.012/0001-30'
, '37.489.141/0001-20'
, '75.465.404/0001-50'
, '45.236.873/0001-36'
, '41.688.862/0001-36'
, '42.445.364/0001-25'
, '45.556.743/0001-80'
, '71.853.189/0001-03'
, '17.615.854/0001-85'
, '44.227.386/0001-44'
, '72.445.410/0001-57'
, '16.383.582/0001-72'
, '11.231.771/0001-06'
, '30.415.423/0001-33'
, '01.662.133/0001-96'
, '95.679.051/0001-06'
, '46.225.411/0001-86'
, '81.386.429/0001-60'
, '64.280.737/0001-98'
, '63.898.610/0001-74'
, '82.143.242/0001-07'
, '77.831.610/0001-61'
, '44.063.190/0001-61'
, '64.641.488/0001-19'
, '32.334.284/0001-49'
, '37.837.493/0001-29'
, '77.456.869/0001-70'
, '13.133.661/0001-37'
, '69.335.182/0001-58'
, '53.548.678/0001-70'
, '47.341.466/0001-14'
, '59.866.526/0001-00'
, '48.022.566/0001-40'
, '49.444.258/0001-76'
, '55.702.874/0001-82'
, '63.534.324/0001-20'
, '79.182.638/0001-40'
, '46.931.071/0001-09'
, '59.364.295/0001-28'
, '59.475.962/0001-40'
, '04.683.995/0001-93'
, '07.744.947/0001-56'
, '11.385.236/0001-00'
, '14.496.967/0001-10'
, '85.043.285/0001-09'
, '72.246.053/0001-06'
, '36.718.376/0001-83'
, '89.379.746/0001-61'
, '41.453.378/0001-28'
, '12.476.165/0001-13'
, '53.120.154/0001-83'
, '75.018.622/0001-46'
, '60.559.835/0001-08'
, '65.214.779/0001-93'
, '05.184.525/0001-48'
, '53.622.614/0001-71'
, '29.026.273/0001-97'
, '42.812.834/0001-41'
, '77.411.822/0001-90'
, '79.581.689/0001-45'
, '50.555.568/0001-47'
, '69.277.428/0001-82'
, '57.264.368/0001-84'
, '26.168.426/0001-42'
, '61.267.644/0001-35'
, '21.428.729/0001-33'
, '87.481.242/0001-22'
, '74.445.081/0001-70'
, '23.466.646/0001-64'
, '81.338.424/0001-62'
, '10.291.232/0001-08'
, '07.571.441/0001-92'
, '16.528.127/0001-18'
, '90.586.484/0001-95'
, '76.175.853/0001-26'
, '23.233.109/0001-74'
, '87.102.481/0001-24'
, '44.723.598/0001-12'
, '92.324.836/0001-60'
, '42.311.416/0001-70'
, '33.784.828/0001-37'
, '87.947.931/0001-80'
, '68.114.484/0001-33'
, '79.367.356/0001-18'
, '34.323.256/0001-51'
, '52.623.077/0001-11'
, '88.627.024/0001-16'
, '13.556.125/0001-44'
];












var listPISs = [ 
'57665104921'
, '36697199674'
, '08108706830'
, '68214002240'
, '279.89958.90-8'
, '202.98911.33-1'
, '804.88282.90-8'
, '572.49024.59-8'
, '120.7632.914-7'
, '120.4815.586-5'
, '120.6896.065-8'
, '120.6431.597-9'
, '120.7536.963-3'
, '120.5483.257-1'
, '120.2344.672-6'
, '120.1670.532-0'
, '120.6766.128-2'
, '120.4506.855-4'
, '120.2138.234-8'
, '120.1535.425-7'
, '120.3388.422-0'
, '120.1523.486-3'
, '120.7564.424-3'
, '120.2672.475-1'
, '120.3386.498-9'
, '120.6624.741-5'
, '120.5755.252-9'
, '120.9488.756-3'
, '120.7428.787-0'
, '120.1622.076-9'
, '120.5477.601-9'
, '120.2674.131-1'
, '120.8653.048-1'
, '120.0847.285-1'
, '120.6124.738-7'
, '120.2612.725-7'
, '120.6854.979-6'
, '120.2866.652-0'
, '120.7276.488-4'
, '120.0137.372-6'
, '120.4598.310-4'
, '120.3842.046-9'
, '120.0481.489-8'
, '120.8722.742-1'
, '120.5158.435-6'
, '120.2484.386-9'
, '120.1256.447-1'
, '120.5435.578-1'
, '120.2679.465-2'
, '120.7837.782-3'
, '120.4354.788-9'
, '120.5786.567-5'
, '120.1620.794-0'
, '120.1170.929-8'
, '120.6217.396-4'
, '120.0274.598-8'
, '120.2652.211-3'
, '120.2543.426-1'
, '120.1487.277-7'
, '120.6372.761-0'
, '120.5102.463-6'
, '120.3387.457-7'
, '120.3330.773-7'
, '120.4400.354-8'
, '120.2020.342-3'
, '120.3350.653-5'
, '120.1615.443-0'
, '120.3954.841-8'
, '120.6399.279-9'
, '120.1763.156-8'
, '120.9831.140-2'
, '120.3267.256-3'
, '120.8533.519-7'
, '120.6151.881-0'
, '120.5451.985-7'
, '120.4863.135-7'
, '120.4454.086-1'
, '120.4838.616-6'
, '120.4378.524-0'
, '120.5138.818-2'
, '120.0835.142-6'
, '120.5555.416-8'
, '120.2142.772-4'
, '120.5703.219-3'
, '120.0281.276-6'
, '120.6141.177-2'
, '120.8484.828-0'
, '120.1618.675-7'
, '120.3311.108-5'
, '120.2114.741-1'
, '120.8759.532-3'
, '120.8543.152-8'
, '120.2836.545-7'
, '120.6212.139-5'
, '120.5176.624-1'
, '120.4723.463-0'
, '120.9255.615-2'
, '120.2182.133-3'
, '120.8874.363-6'
, '120.2826.807-9'
, '120.9183.422-1'
, '120.3900.767-0'
, '120.8752.432-9'
, '120.1398.548-9'
, '120.0169.646-0'
, '120.7328.237-9'
, '120.3560.776-2'
, '120.5613.511-8'
];

describe('#front testing', function() {

    describe('#validate checker', function() {

      describe('#verify CPF', function() {
        it('should return true if valid', function() {
            var result = frontValidator('123.456.789-09');
            expect(result).to.equal(true);
        });

        it('should return false if invalid', function() {
            var result = frontValidator('123.456.789-00');
            expect(result).to.equal(false);
        });
    });
      describe('#verify CNPJ', function() {
        it('should return true if valid', function() {
            var result = frontValidator('12.345.678/0001-95');
            expect(result).to.equal(true);
        });

        it('should return false if invalid', function() {
            var result = frontValidator('12.345.678/0001-00');
            expect(result).to.equal(false);
        });
    });
      describe('#verify PIS', function() {
        it('should return true if valid', function() {
            var result = frontValidator('123.4567.890-0', true);
            expect(result).to.equal(true);
        });

        it('should return false if invalid', function() {
            var result = frontValidator('123.4567.890-1', true);
            expect(result).to.equal(false);
        });

        it('should return false if empty', function() {
            var result = frontValidator('');
            expect(result).to.equal(false);
        });

        it('should return false if empty', function() {
            var result = frontValidator();
            expect(result).to.equal(false);
        });


    });

  });
});





describe('#module testing', function() {

    describe('#verify CPF', function() {
        it('should return true if valid', function() {
            var result = validateDocumentChecker('123.456.789-09');
            expect(result).to.equal(true);
        });

        it('should return false if invalid', function() {
            var result = validateDocumentChecker('123.456.789-00');
            expect(result).to.equal(false);
        });
    });
    describe('#verify CNPJ', function() {
        it('should return true if valid', function() {
            var result = validateDocumentChecker('12.345.678/0001-95');
            expect(result).to.equal(true);
        });

        it('should return false if invalid', function() {
            var result = validateDocumentChecker('12.345.678/0001-00');
            expect(result).to.equal(false);
        });
    });
    describe('#verify PIS', function() {
        it('should return true if valid', function() {
            var result = validateDocumentChecker('123.4567.890-0', true);
            expect(result).to.equal(true);
        });

        it('should return false if invalid', function() {
            var result = validateDocumentChecker('123.4567.890-1', true);
            expect(result).to.equal(false);
        });
    });


    describe('#verify CPF', function() {
        it('should return true if valid', function() {
            var result = verificador('123.456.789-09');
            expect(result).to.equal(true);
        });

        it('should return false if invalid', function() {
            var result = verificador('123.456.789-00');
            expect(result).to.equal(false);
        });
    });
    describe('#verify CNPJ', function() {
        it('should return true if valid', function() {
            var result = verificador('12.345.678/0001-95');
            expect(result).to.equal(true);
        });

        it('should return false if invalid', function() {
            var result = verificador('12.345.678/0001-00');
            expect(result).to.equal(false);
        });
    });
    describe('#verify PIS', function() {
        it('should return true if valid', function() {
            var result = verificador('123.4567.890-0', true);
            expect(result).to.equal(true);
        });

        it('should return false if invalid', function() {
            var result = verificador('123.4567.890-1', true);
            expect(result).to.equal(false);
        });

        it('should return false if empty', function() {
            var result = verificador('');
            expect(result).to.equal(false);
        });

        it('should return false if empty', function() {
            var result = verificador();
            expect(result).to.equal(false);
        });

    });

    describe('#validateArrays', function(){
        describe('should validate cpfs on array ', function(){



           listCPFs.forEach(function(cpf) {
            it('correctly test valid cpf on array ' + cpf, function() {
                var result = validatorMdl.fnBolValidateDocument(cpf);
                expect(result).to.equal(true);
            });
            it('correctly test invalid cpf on array ' + cpf, function() {
                var invalidCpf = cpf.substring(0, cpf.length -1) + Math.abs(cpf.charAt(cpf.length -1)-1);
                var result = validatorMdl.fnBolValidateDocument(invalidCpf);
                expect(result).to.equal(false);
            });

        });

       });
    });


    describe('#validateArrays', function(){
        describe('should validate cnpjs on array ', function(){

           listCNPJs.forEach(function(cnpj) {
            it('correctly test valid cnpj on array ' + cnpj, function() {
                var result = validatorMdl.fnBolValidateDocument(cnpj);
                expect(result).to.equal(true);
            });
            it('correctly test invalid cnpj on array ' + cnpj, function() {
                var invalidcnpj = cnpj.substring(0, cnpj.length -1) + Math.abs(cnpj.charAt(cnpj.length -1)-1);
                var result = validatorMdl.fnBolValidateDocument(invalidcnpj);
                expect(result).to.equal(false);
            });

        });


       });
    });


    describe('#validateArrays', function(){
        describe('should validate pis on array ', function(){

           listPISs.forEach(function(PIS) {
            it('correctly test valid PIS on array ' + PIS, function() {
                var result = validatorMdl.fnBolValidateDocument(PIS, true);
                expect(result).to.equal(true);
            });
            it('correctly test invalid PIS on array ' + PIS, function() {
                var invalidPIS = PIS.substring(0, PIS.length -1) + Math.abs(PIS.charAt(PIS.length -1)-1);
                var result = validatorMdl.fnBolValidateDocument(invalidPIS, true);
                expect(result).to.equal(false);
            });

        });

       })
    });


    describe('#validatorMdl', function(){

        describe('#validatorMdl.fnBolValidateDocument', function(){

            describe('#verify CPF', function() {
                it('should return true if valid', function() {
                    var result = validatorMdl.fnBolValidateDocument('123.456.789-09');
                    expect(result).to.equal(true);
                });

                it('should return false if invalid', function() {
                    var result = validatorMdl.fnBolValidateDocument('123.456.789-00');
                    expect(result).to.equal(false);
                });
            });
            describe('#verify CNPJ', function() {
                it('should return true if valid', function() {
                    var result = validatorMdl.fnBolValidateDocument('12.345.678/0001-95');
                    expect(result).to.equal(true);
                });

                it('should return false if invalid', function() {
                    var result = validatorMdl.fnBolValidateDocument('12.345.678/0001-00');
                    expect(result).to.equal(false);
                });
            });
            describe('#verify PIS', function() {
                it('should return true if valid', function() {
                    var result = validatorMdl.fnBolValidateDocument('123.4567.890-0', true);
                    expect(result).to.equal(true);
                });

                it('should return false if invalid', function() {
                    var result = validatorMdl.fnBolValidateDocument('123.4567.890-1', true);
                    expect(result).to.equal(false);
                });
            });

            describe('#verify empty', function(){
                it('should return false if empty', function() {
                    var result = validatorMdl.fnBolValidateDocument('');
                    expect(result).to.equal(false);
                });

                it('should return false if empty', function() {
                    var result = validatorMdl.fnBolValidateDocument();
                    expect(result).to.equal(false);
                });
            });

        });

        describe('#validatorMdl.fnNumReturnSum', function(){
            it('shoud return 210 for sequence "123456789"', function(){
                var result = validatorMdl.fnNumReturnSum('123456789');
                expect(result).to.equal(210); 
            });
            it('shoud return 255 for sequence "1234567890"', function(){
                var result = validatorMdl.fnNumReturnSum('1234567890');
                expect(result).to.equal(255); 
            });
            it('shoud return 231 for sequence "1234567890 and true parameter"', function(){
                var result = validatorMdl.fnNumReturnSum('1234567890', true);
                expect(result).to.equal(231); 
            });
        });




        describe('#validatorMdl.fnNumReturnCheckerNumber', function(){
            it('shoud return 0 for sequence "123456789"', function(){
                var result = validatorMdl.fnNumReturnCheckerNumber('123456789');
                expect(result).to.equal(0); 
            });
            it('shoud return 7 for sequence "123456789" and true parameter', function(){
                var result = validatorMdl.fnNumReturnCheckerNumber('123456789', true);
                expect(result).to.equal(7); 
            });
            it('shoud return 9 for sequence "1234567890"', function(){
                var result = validatorMdl.fnNumReturnCheckerNumber('1234567890');
                expect(result).to.equal(9); 
            });
            it('shoud return 0 for sequence "1234567890 and true parameter"', function(){
                var result = validatorMdl.fnNumReturnCheckerNumber('1234567890', true);
                expect(result).to.equal(0); 
            });
        });






        describe('#validatorMdl.fnBolAllCharactersEqual', function(){
            it('shoud return true for sequence "0000"', function(){
                var result = validatorMdl.fnBolAllCharactersEqual("0000");
                expect(result).to.equal(true);
            });
            it('shoud return false for sequence "0001"', function(){
                var result = validatorMdl.fnBolAllCharactersEqual("0001");
                expect(result).to.equal(false);
            });
            it('shoud return false for sequence "0010"', function(){
                var result = validatorMdl.fnBolAllCharactersEqual("0010");
                expect(result).to.equal(false);
            });
            it('shoud return false for sequence "0100"', function(){
                var result = validatorMdl.fnBolAllCharactersEqual("0100");
                expect(result).to.equal(false);
            });
            it('shoud return false for sequence "1000"', function(){
                var result = validatorMdl.fnBolAllCharactersEqual("1000");
                expect(result).to.equal(false);
            });
        });

    });

});

