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

let clickMe = document.querySelector(".button")



let promptMe = function(){
    let input = prompt("how many rows would you like to create? (max = 100)")
    create(input)
    main.addEventListener("mouseover", (Event) =>{
        Event.target.classList.toggle("hover")
    } )
}

clickMe.addEventListener("click", promptMe);

