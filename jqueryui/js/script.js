$(document).ready(function () {
<<<<<<< HEAD
    $( "#datepicker" ).datepicker();
=======

    $( "#datepicker" ).datepicker({
        dateFormat: "yymmdd"
      });
>>>>>>> e8e4b0d610c68ed839f10f811a028050d3aa0cd6

    let fromBank = [];
    
    $.ajax({
<<<<<<< HEAD
        url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20190530 ',
=======
        url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json',
>>>>>>> e8e4b0d610c68ed839f10f811a028050d3aa0cd6
        type: 'GET'
    })
    .done(function (response) {
        console.log(response)
        fromBank = response;
    })
    .then(function () {
        let currencyArray = [];
    
        for (let i = 0; i < fromBank.length; i++) {
            currencyArray.push(fromBank[i].txt)
        }
    
        console.log(currencyArray)
    
        $( "#currency" ).autocomplete({
            source: currencyArray,
            // _renderItem: function( ul, item ) {
            //     return $( "<li>" )
            //       .attr( "data-value", 123 )
            //       .append( item.label )
            //       .appendTo( ul );
            // },
            change: function( event, ui ) {
                // console.log(ui);
                Calc();
            }
        });
    })

    $('#count').change(Calc);

    function Calc() {
<<<<<<< HEAD
        // add your code here
        
    }


=======
        var count = $('#count').val();
        for (let i = 0; i < fromBank.length; i++) {
            if ($( "#currency" ).val() == fromBank[i].txt) {
                $('#result').text(fromBank[i].rate * count);   
            }
        }
    }

>>>>>>> e8e4b0d610c68ed839f10f811a028050d3aa0cd6
})