const button = document.querySelectorAll(".btn-color-change")
const body = document.querySelector("body")
button.forEach(function(button) {

    button.addEventListener("click", (e) => {
        
        if(e.target.id === "red") {
            body.style.backgroundColor = "red"
        } else if(e.target.id === "grey") {
            body.style.backgroundColor = "grey"
        } else if(e.target.id === "blue") {
            body.style.backgroundColor = "blue"
        } else if(e.target.id === "green") {
            body.style.backgroundColor = "green"
        }  else {
            body.style.backgroundColor = "white"
        }      
       
    })
})

