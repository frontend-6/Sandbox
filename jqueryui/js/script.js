$(document).ready(function () {
    
    $( "#datepicker" ).datepicker({
        dateFormat: "yymmdd"
    });

    let url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
    
    let fromBank = [];
    
    $.ajax({
        url: url,
        type: 'GET'
    })
    .fail(function() {
        alert( "error" );
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
    });

    $('#count').change(Calc);
    $('#datepicker').change(Calc);

    function Calc() {
        
        let newUrl  = url + "&date=" + $('#datepicker').val();
        
        var count = $('#count').val();

        $.ajax({
            url: newUrl,
            type: 'GET'
        })
        .fail(function() {
            alert( "error" );
        })
        .done(function (response) {
            console.log(response)
            fromBank = response;
        })
        .then(function () {
            for (let i = 0; i < fromBank.length; i++) {
                if ($( "#currency" ).val() == fromBank[i].txt) {
                    $('#result').text(fromBank[i].rate * count);   
                }
            }
        })
    }
})