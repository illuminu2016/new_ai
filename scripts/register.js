function applyChanges(step) {
    $('.step' + step).fadeOut(1000, 'linear');
    setTimeout(function(){
        $('.step' + (step + 1)).show();
    }, 1000);
}

function loadAccount() {
    window.location = 'profile.html';
}

if($('#tokenfield').length) {
    $('#tokenfield').tokenfield();
}

$('#tokenfield').on('tokenfield:createtoken', function (event) {
    var existingTokens = $(this).tokenfield('getTokens');
    $.each(existingTokens, function(index, token) {
        if (token.value === event.attrs.value)
            event.preventDefault();
    });
});

$('#tokenfield').on('tokenfield:removedtoken', function (e) {
    var tokens = $('#tokenfield').tokenfield('getTokens'),
        placeHolder = 'Add a interest and press enter';

    $('#' + e.attrs.value.toLowerCase()).css({background: 'white', color: '#333', border: '1px solid #ccc'}).attr('data-select', 'false');
    if(tokens.length == 0) {
        $('#tokenfield-tokenfield').attr('placeholder', placeHolder);
    }
});

function selectToken(event, ui) {
    var item = ui['selecting'],
        elementData = item.lastChild.data,
        interest = $('#' + item.id),
        placeHolder = 'Add a interest and press enter',
        tokens =$('#tokenfield').tokenfield('getTokens'),
        newTokens = [];

    if(interest.attr('data-select') === 'false') {
        if(tokens.length <= 12) {
            interest.css({background: '#31708f', color: 'white', border: '1px solid #31708f'}).attr('data-select', 'true');
            $('#tokenfield').tokenfield('createToken', elementData);
            $('#tokenfield-tokenfield').removeAttr('placeholder');
        }
    } else {
        interest.css({background: 'white', color: '#333', border: '1px solid #ccc'}).attr('data-select', 'false');

        _.each(tokens, function(token) {
            if(token.value !== elementData) {
                newTokens.push(token);
            }
        });

        $('#tokenfield').tokenfield('setTokens', newTokens);
        if(tokens.length == 1) {
            $('#tokenfield-tokenfield').attr('placeholder', placeHolder);
        }
    }
};

$(function() {
    $('.selectable').selectable({
        selecting: selectToken
    });
});

