var dStuff = [
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
        },
        {
            text: "Me",
            value: 4,
            selected: false
        }
    ],
    dMatch = [
        {
            text: "Everyone",
            value: 1,
            selected: false
            //description: "Visible to all users"
        },
        {
            text: "Contacts",
            value: 3,
            selected: true
        }
    ],
    aiPosts = [
        {
            text: "Everyone",
            value: 1,
            selected: true
            //description: "Visible to all users"
        },
        {
            text: "Contacts",
            value: 3,
            selected: false
        }
    ];

$('#stuff').ddslick({
    data: dStuff,
    width: 200,
    selectText: "Select your preferred social network",
    imagePosition: "right",
    onSelected: function (selectedData) {
        //callback function: do something with selectedData;
    }
});

$('#findMatch').ddslick({
    data: dMatch,
    width: 200,
    selectText: "Select your preferred social network",
    imagePosition: "right",
    onSelected: function (selectedData) {
        //callback function: do something with selectedData;
    }
});

$('#aiPosts').ddslick({
    data: aiPosts,
    width: 200,
    selectText: "Select your preferred social network",
    imagePosition: "right",
    onSelected: function (selectedData) {
        //callback function: do something with selectedData;
    }
});

$(function () {
    //initialize tooltips
    $('[data-toggle="tooltip"]').tooltip()
})


