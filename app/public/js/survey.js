$(document).ready(e => {

    $(".list-group-item-action").on("click", e => {
        // Make this button active.
        let $button = $(e.target);
        $button
            .closest(".list-group")
            .find(".list-group-item-action")
            .removeClass("active");
        $button.addClass("active");

    });

    $("#submit-button").on("click", e => {
        let scores = $(".list-group-item-action.active").map((_, o) => {
            return parseInt($(o).data("score"));
        }).get();

        let userData = {
            name: $("#name-input").val(),
            race: $("#input-group-select-race").val(),
            class: $("#input-group-select-class").val(),
            scores: scores
        };

        // Test data 
        // userData = {
        //     name: 'Itark Of The Howling Vandals',
        //     class: 'Ranger',
        //     race: 'Human',
        //     scores: [5, 2, 1, 2, 3, 3, 3, 4, 1, 3]
        // };

        if (validateUserData(userData)) {
            // post the responses
            $.post("/api/user", userData, () => {
                window.location.replace("/matches");
            });
        } else {
            alert("Please answer all of the questions before submitting.")
        }
    })
});

function validateUserData(data) {
    return data.name && data.race && data.class && data.scores.length === 10;
}

