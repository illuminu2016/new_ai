var notificationArea = [
        {
            text: "Everyone",
            value: 1,
            selected: false
        },
        {
            text: "Everyone (except AI)",
            value: 2,
            selected: false
        },
        {
            text: "Contacts",
            value: 3,
            selected: true
        }
    ],
    notificationsDisplay = [
        {
            text: "Desktop",
            value: 1,
            selected: true
        },
        {
            text: "Email and Desktop",
            value: 2,
            selected: false
        }
    ];

$('#notificationArea').ddslick({
    data: notificationArea,
    width: 200,
    selectText: "Select your preferred social network",
    imagePosition: "right",
    onSelected: function (selectedData) {
        //callback function: do something with selectedData;
    }
});

$('#notificationsDisplay').ddslick({
    data: notificationsDisplay,
    width: 200,
    selectText: "Select your preferred social network",
    imagePosition: "right",
    onSelected: function (selectedData) {
        //callback function: do something with selectedData;
    }
});



