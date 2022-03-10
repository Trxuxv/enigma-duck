const oi = document.getElementById("target");
oi.style.display = 'none'

// let nameI = localStorage.getItem("nameLS");
// const element = document.getElementById("nameValue");
// element.innerHTML = nameI;

const getValueInput = () => {
    let inputValue = document.getElementById("domTextElement").value;
    document.getElementById("valueInput").innerHTML = inputValue;

    switch (inputValue) {
        case 'Ola':
            document.getElementById("valueInput").innerHTML = 'Ola nada';
            localStorage.setItem("message2", 'Ola nada');
            oi.style.display = 'none'
            break;
        case 'Oloko':
            document.getElementById("valueInput").innerHTML = 'O.o ';
            localStorage.setItem("message2", 'Ola nada');
            oi.style.display = 'none'
            break;
        case 'Duck apears in the morning at 8h':
            oi.style.display = 'block'
            break;
        default:
            oi.style.display = 'none'
            document.getElementById("valueInput").innerHTML = 'u gay ';
            localStorage.setItem("message2", 'Ola nada');
    }
}

const saveValueName = () => {
    let nameValue = document.getElementById("name").value;
    localStorage.setItem("nameLS", nameValue);

    document.getElementById("nameValue").innerHTML = nameValue;
}