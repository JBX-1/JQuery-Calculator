$(document).ready(function () {

    
        var numberOne = 0;
        var numberTwo = 0;
        var operator = "";
        var result = 0;
        var operatorChosen = false;
        var calculated = false;

    
        function reset() {
            numberOne = " ";
            numberTwo = " ";
            operator = "";
            operatorChosen = false;
            calculated = false;

            $('#result,#operator,#numberOne,#numberTwo').empty();
        }

        $('.number').on("click", function(){
            if(calculated) {
                return false;
            }
            if(operatorChosen){
                numberTwo += $(this).val();
                console.log(numberTwo)
                $('#numberTwo').text(numberTwo);
            }else {
                numberOne += $(this).val();
                $('#numberOne').text(numberOne);
            }

        })
        $('.operator').on('click', function(){
        if(!numberOne || calculated){
            return false;
        }

        operatorChosen = true;
        operator = $(this).val();
        console.log(operator);
        $('#operator').text($(this).text());
    })
       $('.equal').on('click', function(){
        if ( calculated){
            return false;
        }
            calculated = true;

            numberOne = parseInt(numberOne);
            numberTwo = parseInt(numberTwo);

            if (operator === "plus"){
                result = numberOne + numberTwo;
            }
            else if (operator === 'minus'){
                result = numberOne - numberTwo;
            }
            else if (operator === 'times'){
                result = numberOne * numberTwo;
            }
            else if(operator === ' divide'){
                result = numberOne / numberTwo;
            }
            else if(operator === 'power'){
                result = Math.pow(numberOne, numberTwo);
            }
            $('#result').text(result);

       })
       $(".clear").on('click', function(){
           reset();
       })
       reset();
    });