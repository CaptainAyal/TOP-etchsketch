let main = document.querySelector("#main")


// row.classList.add("top")

// let sub = document.createElement("div")
// sub.classList.add("box")
// sub.classList.add("sub")

let create = function(num){
    i=0
    while (i<num) {
        let row = document.createElement("div")
        row.classList.add("box")
       main.appendChild(row) 
       i++
    }
}

create(4)