const button = document.querySelectorAll(".btn-color-change")
const body = document.querySelector("body")
button.forEach(function(button) {
    console.log(button)
    button.addEventListener("click", (e) => {
        console.log(e.target)
        if(e.target.id === "red") {
            body.style.backgroundColor = "red"
        } else if(e.target.id === "grey") {
            body.style.backgroundColor = "grey"
        } else if(e.target.id === "blue") {
            body.style.backgroundColor = "blue"
        } else if(e.target.id === "green") {
            body.style.backgroundColor = "green"
        }       
        body.style.backgroundColor = "white"
    })
})

