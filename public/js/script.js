$(() => {
    $(".create-form").on("submit", (event) => {
        event.preventDefault();
    
        const newBurger = {
            burger_name: $("#ca").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };
        $.ajax("api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            () => {
                console.log("created new burger");
                location.reload();
            }
        );
    });
});