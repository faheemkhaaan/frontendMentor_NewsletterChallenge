const btn = document.querySelector(".btn");
function getEmail() {
    const email = document.querySelector("#email");
    let value = email.value;
    let regexp = /(\w|\d)+@\w+(.)?(com)/
    if(regexp.test(value)){
        console.log(value)
        email.value = ''
        email.style.outline = 'none'

    }else{
        console.log("Wrong Input.")
        email.style.outline = '2px solid red'

    }
}

btn.addEventListener("click",getEmail);

