let myLeads=[]
const inputEL=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const deleteBtn=document.getElementById("delete-btn")
const ulEl=document.getElementById("ul-el")
const tabBtn=document.getElementById("tab-btn");


const leadsFromLocalStoroge=JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStoroge){
    
    myLeads=leadsFromLocalStoroge
    renderLeads()
}

// tabBtn.addEventListener("click",function(){

//     chrome.tabs.query({active:true,currentWindow:true},function(tabs){

// myLeads.push(tabs[0].url)
// localStorage.setItem("myLeads",JSON.stringify(myLeads))
// renderLeads()

//     })
// })

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
localStorage.setItem("myLeads",JSON.stringify(myLeads))
renderLeads()
    })

})

  
    


inputBtn.addEventListener("click", function(){

    myLeads.push(inputEL.value)
    inputEL.value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads()
    

})



function deleteList(){  
    localStorage.clear()
    myLeads=[]
    renderLeads()
}
   

function renderLeads(){

    let listItems=""
    for(let i=0; i<myLeads.length; i++){
        listItems += 
          `<li>
        <a target='_blank' href='${myLeads[i]}'> 
        ${myLeads[i]}
         </a>

        </li>`

    }
    ulEl.innerHTML=listItems
}
