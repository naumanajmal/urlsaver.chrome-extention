let myleads = []
const inputEl = document.getElementById("input-el")
const ulelconstant = document.getElementById("ulel")
const button = document.getElementById("input-btn")
const leadsfromlocalstorage = JSON.parse(localStorage.getItem("myleads"))
const deletebtn = document.getElementById("delete-btn")
deletebtn.addEventListener("dblclick", function(){

    localStorage.clear();
    myleads = []
    renderleads()
});
if (leadsfromlocalstorage){
    myleads = leadsfromlocalstorage
    renderleads()
}
button.addEventListener("click", function(){
    myleads.push(inputEl.value)
    inputEl.value = ""
    
    localStorage.setItem("myleads", JSON.stringify(myleads))
    renderleads()

})
function renderleads() {
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
}