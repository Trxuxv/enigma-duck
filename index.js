// let name = localStorage.getItem("nameLS");
// const element = document.getElementById("nameValue");
// element.innerHTML = name;

const oi = document.getElementById("target");
oi.style.display = 'none'


// const fase_3 = document.getElementById("fase-3");
// fase_3.style.display = 'none'

const body = document.getElementById("body");

const b_sip = document.getElementById("sip");
b_sip.style.display = 'none';

const normal_screen = document.getElementById("normal-screen");

const screen_error = document.getElementById("screen");
screen_error.style.display = 'none';

const buyton = document.getElementById("buyton");
buyton.style.display = 'none';

const getValueInput = () => {
    let inputValue = document.getElementById("domTextElement").value;
    document.getElementById("valueInput").innerHTML = inputValue;

    switch (inputValue) {
        case 'be kind':
            b_sip.style.display = 'block'
            document.getElementById("valueInput").innerHTML = "good start :), but... where's the duck?";
            localStorage.setItem("message2", 'literaly');
            oi.style.display = 'none'
            break;

        case "idk":
        case "i dont know":
        case "i don't know":
            document.getElementById("valueInput").innerHTML = "alright, let me help you";
            localStorage.setItem("message2", 'literaly');
            oi.style.display = 'none'
            break;

        case "fuck you":
        case "fuck off":
        case "duck":
            localStorage.setItem("message2", 'literaly');
            body.style.background = 'red';
            normal_screen.style.display = 'none';
            screen_error.style.display = 'block';
            b_sip.style.display = 'none';
            oi.style.display = 'none';
            break;

        case "ok":
        case "okay":
        case "alright":
        case "fine":
            document.getElementById("valueInput").innerHTML = "hmm alright, fine, seems that you like to talk to me huh, do you see the button?";
            localStorage.setItem("message2", 'literaly');
            oi.style.display = 'none'
            break;

        case "nah":
        case "no":
        case "nope":
            document.getElementById("valueInput").innerHTML = "really?";
            localStorage.setItem("message2", 'literaly');
            oi.style.display = 'none'
            break;


        case "yeah":
        case "yes":
        case "yup":
            document.getElementById("valueInput").innerHTML = "!-_o you're really persistent, i like you";
            localStorage.setItem("message2", 'literaly');
            oi.style.display = 'none'
            break;


        case "get out":
        case "shut up":
            document.getElementById("valueInput").innerHTML = "HAHAHAHAHAHAHAHA, jus kidding, here's the button";
            localStorage.setItem("message2", 'literaly');
            oi.style.display = 'none';
            body.style.background = 'black';
            body.style.color = 'white';
            buyton.style.display = 'block'
            break;

        case "8":
            document.getElementById("valueInput").innerHTML = "What time the duck apears?";
            localStorage.setItem("message2", 'literaly');
            oi.style.display = 'none';
            body.style.background = 'black';
            body.style.color = 'white';
            buyton.style.display = 'block'
            break;

        case 'Duck apears in the morning at 8h':
            oi.style.display = 'block'
            break;
        default:
            b_sip.style.display = 'none';
            oi.style.display = 'none';
            document.getElementById("valueInput").innerHTML = '';
            localStorage.setItem("message2", 'no');
    }
}

const whatTimeIs = () => {
    fase_3.display = "block"
}

const saveValueName = () => {
    let nameValue = document.getElementById("name").value;
    localStorage.setItem("nameLS", nameValue + ",");

    document.getElementById("nameValue").innerHTML = nameValue;
}