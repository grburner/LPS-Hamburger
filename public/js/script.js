$(() => {
    $(".create-form").on("submit", (event) => {
        console.log('click button')
        event.preventDefault();
    
        const newBurger = {
            name: $("#ca").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };
        console.log(newBurger)
    
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