let incr = document.getElementById("incr")
let decr = document.getElementById("decr")
let reset = document.getElementById("reset")
var counter = 0
var counterdata= document.getElementById('counterdata')
const incrfun =()=>{
    counter = counter +1
    console.log(counter)
    // counterdata= document.getElementById('counterdata')
    counterdata.innerText = counter
    
}

const resetcount = () =>{
    counter = 0 
    // ounterdata= document.getElementById('counterdata')
    counterdata.innerText = counter
}

const decrfun =()=>{
    counter = counter -1
    console.log(counter)
    // counterdata= document.getElementById('counterdata')
    counterdata.innerText = counter
    
}


incr.addEventListener("mouseover", incrfun);
decr.addEventListener("click", decrfun);
reset.addEventListener("click", resetcount);