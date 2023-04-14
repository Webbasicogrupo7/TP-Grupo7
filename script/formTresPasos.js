//const formModal = new bootstrap.Modal("#formModal");
const email = document.getElementById("email");
console.log(email);
const phone = document.getElementById("phone");
const fullName = document.getElementById("fullName");
//const locationInput = document.getElementById("location");


const email = document.getElementById("email");

const phone = document.getElementById("phone");
const fullName = document.getElementById("fullName");


const tipoCurso = document.getElementById("tipo_curso");

console.log(typeof(tipoCurso));
console.log(JSON.stringify(tipoCurso));
const extraInfo = document.getElementById("comentario");
const disclaimer = document.getElementById("disclaimer");
const check = document.getElementById("check");
check.addEventListener("click", function() {
    btnForm[4].toggleAttribute("disabled");
});


const forms = document.querySelectorAll("form");
const btnForm = document.getElementsByClassName("btn-form");
for (let i = 0; i < btnForm.length; i++) {
    btnForm[i].addEventListener("click", handleMultiStep);
}

function handleMultiStep(e) {
    e.preventDefault();
    switch (e.target.id) {
        case "btn-next-form1":
            forms[0].classList.toggle("d-none");
            forms[1].classList.toggle("d-none");
            break;
        case "btn-next-form2":
            forms[1].classList.toggle("d-none");
            forms[2].classList.toggle("d-none");
            break;
        case "btn-prev-form2":
            forms[0].classList.toggle("d-none");
            forms[1].classList.toggle("d-none");
            break;
        case "btn-prev-form3":
            forms[1].classList.toggle("d-none");
            forms[2].classList.toggle("d-none");
            break;
        case "btn-submit":
            console.log("here I go");
            handleSubmit();
        default:
            return;
    }
};

function handleSubmit() {
    console.log("Datos del usuario: " + "\n email: " + email.value + " \n Telefono: " + phone.value + "\n Curso elejido: " + tipoCurso.value + "\n Comentario " + extraInfo.value + "\n " + disclaimer.value + "\n " + check.value);
    forms[0].reset();
    forms[1].reset();
    forms[2].reset();
    forms[2].classList.toggle("d-none");
    forms[0].classList.toggle("d-none");
    //formModal.show();
}