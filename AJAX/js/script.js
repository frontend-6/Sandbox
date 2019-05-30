var buttonClear = $('#js-clear'),
    buttonWrite = $('#js-write'),
    buttonRead = $('#js-read'),
    textarea = $('#app');

var text = '';

function Read() {
    $.ajax({
        url: "read.php",
    }).done(function ( result ) {
        text = result;
        $(textarea).val(text);
    }).fail(function() {
        alert( "error read" );
    })
}

$(buttonRead).on('click', Read);

function Write(_text) {
    $.ajax({
        url: "write.php",
        data: {message: _text},
        type: 'POST',
    }).done(function () {
        console.log(`Write complete! ${_text}`);
    }).fail(function() {
        alert( "error write" );
    })
}

$(buttonWrite).on('click', function () {
    var _text = $(textarea).val();
    Write(_text);
})

function Clear() {
    $.ajax({
        url: "clear.php",
    }).done(function (  ) {
        alert("clear complete")
    }).fail(function() {
        alert( "error clear" );
    });
    $(textarea).val('');
}

$(buttonClear).on('click', Clear);