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
                )
        });
        $(".change-status").on("click", function(event) {
            const id = $(this).data("id");
            const devoured = $(this).data("devoured")
            console.log("id: " + id)
            const props = {
                id: id,
                devoured: devoured
            };
    
            $.ajax(`/api/update/${id}/${devoured}`, {
                type: "PUT",
                body: props
            }).then(
                () => {
                    console.log("updated burger");
                    location.reload();
                }
            );
        });
        $(".delete-burg").on("click", function(event) {
            const id = $(this).data("id");
    
            $.ajax("api/delete/" + id, {
                type: "DELETE"
            }).then(
                function() {
                    console.log("deleted burger" + id)
                    location.reload()
                }
            );
        });
    });