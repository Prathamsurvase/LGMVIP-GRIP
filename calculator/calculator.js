let screen = document.querySelector("#display");
buttons = document.querySelectorAll("button");
let screenvalue = '';

for (item of buttons) {

    item.addEventListener('click', calculate);

    function calculate(e) {
        buttontext = e.target.innerText;
        // screenvalue += buttontext;
        // screen.value= screenvalue
        console.log(buttontext);


        if (buttontext == 'X') {
            buttontext = '*';
            screenvalue += buttontext;
            screen.value = screenvalue;
        }
        else if (buttontext == 'C') {
            screenvalue = ""
            screen.value = screenvalue;
        }

        else if (buttontext == '=') {

            screen.value = eval(screenvalue);
        }
        else{
            screenvalue += buttontext;
            screen.value= screenvalue
        }


    }
}


