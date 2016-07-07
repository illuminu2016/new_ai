var contact = [
        {
            text: "Everyone",
            value: 1,
            selected: false
        },
        {
            text: "Contacts",
            value: 2,
            selected: true
        }
    ];

$('#contact').ddslick({
    data: contact,
    width: 200,
    selectText: "Select your preferred social network",
    imagePosition: "right",
    onSelected: function (selectedData) {
        //callback function: do something with selectedData;
    }
});



