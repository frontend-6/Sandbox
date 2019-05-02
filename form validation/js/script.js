function Validate(el) {

    if ($(el).attr('minlength')) {
        var count = $(el).attr('minlength');
        if ($(el).val().length >= count) {
        }
        else {
            alert(`error in ${$(el).attr("name")} min length must be ${count} or more`);
            return true;
        }
    }

    if ($(el).attr('maxlength')) {
        var count = $(el).attr('maxlength');
        if ($(el).val().length <= count) {
        }
        else {
            alert(`error in ${$(el).attr("name")} max length must be ${count} or more`);
            return true;
        }
    }

    // if ($(el).attr('type="phone"')) {
    //     for (let i = 0; i < $(el).val().length; i++) {
    //         const char = $(el).val()[i];
    //         console.log(typeof char === Number);
    //         if (typeof char === Number) {
    //             return true;
    //         }
    //         else {
    //             alert(`error in ${$(el).attr("name")} max length must be ${count} or more`);
    //         }
    //     }
    // }
    
    return false;

}

$("#submit").on("click", function () {

    if ( (Validate($("#name")) && Validate($("#email"))) && (Validate($("#phone")) && Validate($("#message"))) ) {
        event.preventDefault();
        alert('что-то пошло не так!');
    }
    else {
        alert('data send!')
    }
    
})