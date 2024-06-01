document.addEventListener("DOMContentLoaded",function(){
        const kk=document.getElementById("list")
        const form=document.querySelector("form") 
        form.addEventListener("submit",function(e){
            if(e.target.input.value===""){
                alert("your submit is empty")
            }else{
                const list=document.createElement("li")
                list.textContent=input.value;
                list.classList.add("list-group-item","categoryTag")
                kk.appendChild(list)
    
            }
            input.value=""
            save()
        }) 
    
        function save(){
            localStorage.setItem("data",kk.innerHTML)
        }
        function red(){
            kk.innerHTML=localStorage.getItem("data")
        }
        red()
    
    
    })