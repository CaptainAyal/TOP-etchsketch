let main = document.querySelector("#main")

let create = function(num){
    let i=0
    while (i<num) {
        let row = document.createElement("div")
        row.classList.add("row")

        let ii= 0
        while (ii<num){
            let sub = document.createElement("div")
            sub.classList.add("box")
            row.appendChild(sub)
            ii++
        }

       main.appendChild(row) 
       i++
    }
}
//make starting grid
create(10)

let clickMe = document.querySelector(".button")

let promptMe = function(){
    //remove previous grid
    while (main.firstChild){
        main.removeChild(main.firstChild)
    }
    
    let input = prompt("how many rows would you like to create? (1 - 100)")
    if (input>100 || input<1) {
        alert("Valid Input is between 1 and 100, please choose a valid input")
    } else {
        
    
    create(input)

    }
}
//button to resize the grid
clickMe.addEventListener("click", promptMe);

main.addEventListener("mouseover", (Event) =>{
    let r = Math.floor((Math.random() * 256))
    let g = Math.floor((Math.random() * 256))
    let b = Math.floor((Math.random() * 256))
    console.log(r, g, b)
    Event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
} )


