setTimeout(function () { document.body.classList.add('body_visible'); }, 1);


function TableEvents() {
    var color;
    var allTableRows = document.getElementsByTagName("tr");
    for (tr of allTableRows) {
        tr.onmouseenter = tr.onmouseleave = function (event) {
            if (event.type === 'mouseleave') event.target.style.background = color;
            else {
                color = event.target.style.background;
                event.target.style.background = "#8400ff";
            }
        }
    }
}
TableEvents();


let form = document.querySelector(".contacts")
let validEmailBtn = form.querySelector(".iCheakEmail")
let validPhoneBtn = form.querySelector(".iCheakPhone")

let inputEmail = form.querySelector(".userEmail")
let inputPhone = form.querySelector(".userPhone")


let validEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
let validPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i
let corr_email = false;
let corr_phone = false;


form.addEventListener("submit", function (even) {
    even.preventDefault()

    if (inputEmail) {
        if (!(corr_email = validEmail.test(inputEmail.value)))
            alert("Неправильний формат електронної пошти! Введіть у форматі username@***.**");
        else {
            validEmailBtn.style.backgroundColor = "green"
        }
    }

    if (inputPhone) {
        if (!(corr_phone = validPhone.test(inputPhone.value)))
            alert("Неправильний номер телефону!\nВведіть у форматі ***-***-**** або **********");
        else {
            validPhoneBtn.style.backgroundColor = "green"
        }
    }
    document.querySelector("#send").disabled == !(corr_email && corr_phone);


})











