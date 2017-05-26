$(document).ready(() => {
    $("#nav").load("bar.html")
})

$(document).on("keypress", (e) => {
    $(document).off()
    if(e.key = "f") {
        $(document).on("keypress", (e) => {
            $(document).off()
            if(e.key = "a"){
                $(document).on("keypress", (e) => {
                    $(document).off()
                    if(e.key = "g")
                        window.location = "fag.mov"
                })
            }
        })
    }
})
