$(document).ready(function () {
    $( "#datepicker" ).datepicker();

    let fromBank = [];
    
    $.ajax({
        url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20190530 ',
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
        // add your code here
        
    }


})