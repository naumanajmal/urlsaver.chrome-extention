let myleads = []
const inputEl = document.getElementById("input-el")
const ulelconstant = document.getElementById("ulel")

const button = document.getElementById("input-btn")
button.addEventListener("click", function(){
    myleads.push(inputEl.value)
    inputEl.value = ""
    let listitems = ""
    for(let i= 0; i<myleads.length; i++){
  
       listitems += `
       <li>
       <a target = '_bank' href = '${myleads[i]}'>
            ${myleads[i]}
       </a>
       </li>` 
       ulelconstant.innerHTML = listitems
    }

})