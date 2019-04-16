$(function () {
    
    let $edit = $('.js-edit'),
        $editable = $('.js-editable');

    let styles = '';

    $($edit).on('click', 'input[type=checkbox]', function () {
        styles = $(this).val();

        $editable[0].style.cssText = styles;
    });
    
})