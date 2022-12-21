let addBtn = document.getElementById("add-btn");
let form = document.getElementById("form");
let cancleBtn = document.getElementById("cancle");

function getForm() {
    form.style.cssText = `top: 80px; 
    z-index: 10;
    width:260px;
    height: 420px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: column;`;
}
addBtn.addEventListener('click', getForm)


function removeForm() {
    form.style.cssText = `top: 0; 
    z-index: 0;
    width:0;
    height: 0;
    transition: 1s`;
}
cancleBtn.addEventListener('click', removeForm);
