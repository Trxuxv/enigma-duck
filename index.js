const getValueInput = () => {
    let inputValue = document.getElementById("domTextElement").value;
    document.getElementById("valueInput").innerHTML = inputValue;

    switch (inputValue) {
        case 'Ola':
            document.getElementById("valueInput").innerHTML = 'Ola nada';
            localStorage.setItem("message2", 'Ola nada');
            break;
        case 'Oloko':
            document.getElementById("valueInput").innerHTML = 'O.o ';
            localStorage.setItem("message2", 'Ola nada');
            break;
        default:
            document.getElementById("valueInput").innerHTML = 'u gay ';
            localStorage.setItem("message2", 'Ola nada');
    }
}

const saveValueName = () => {
    let nameValue = document.getElementById("name").value;
    localStorage.setItem("nameLS", nameValue);

    document.getElementById("nameValue").innerHTML = nameValue;
}