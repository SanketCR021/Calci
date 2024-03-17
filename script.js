// alert("hello ji!")

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
// const operators = ["+", "-", "*", "/"];
// console.log(buttons[0].innerText);
// console.log(display.value)

let currValue = "";

function calculation(btnVal){
    if(btnVal === "AC"){
        currValue = "";
    }
    else if(btnVal === "DEL"){
        let newVal =currValue.slice(0, currValue.length-1);
        currValue = newVal;
    }
    else if(btnVal === "="){
        if(currValue){
            let result = eval(currValue);
            currValue = result;
        }
    }
    else{
        currValue += btnVal;
    }
    display.value = currValue;
}

buttons.forEach((key) => {
    key.addEventListener("click", (e) =>{
        calculation(e.target.innerText)
        // console.log(e)
        // console.log(e.target)
        // console.log(e.target.innerText)
    })
})