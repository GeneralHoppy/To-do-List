const inputField = document.querySelector(".input_text")
const button = document.querySelector("button")
const list = document.querySelector(".list_items")

let item;
inputField.addEventListener("change", (e) =>{
    
    item = e.target.value
})

button.addEventListener("click", (e) =>{
    e.preventDefault()

  

    if (item) {
       const itemHtml = `<li>${item}</li>`

        list.insertAdjacentHTML("beforeend", itemHtml); 
        
        inputField.value = ""
        item = undefined;

    }
});

document.addEventListener("click", (e) =>{
    // e.target.remove();

    // console.log(e.target.nodeName);

    if (e.target.nodeName == 'LI') {
        e.target.remove();
    }
})