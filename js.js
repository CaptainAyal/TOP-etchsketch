let main = document.querySelector("#main")

let sub = document.createElement("div")
sub.classList.add("box")
// sub.classList.add("sub")

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

create(4)