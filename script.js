let result = document.getElementsByClassName("dark")[0];
let heading = document.getElementsByClassName("nav")[0];
let box = document.getElementsByClassName("calci")[0];

        function changeColor(color ,txtcolor, boxcolor) {
            document.body.style.background = color;
            heading.style.color = txtcolor;
            box.style.backgroundColor = boxcolor;
        }
        function myFunc() {
            changeColor('black', 'white', 'white');
        }
let result1 = document.getElementsByClassName("light")[0];

        function myFunct() {
            changeColor('white', 'rgb(27, 70, 29)', 'black');
        }

const display = document.querySelector('.display');
const answer = document.querySelector('.answerbox');
const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;
            if (value === 'CE') {
            display.value = '';
            answer.value = '';
            }
            else if (value === '%') {
                display.value = "="(parseFloat(display.value) / 100).toString();
            } else if (value === 'DEL') {
                display.value = display.value.slice(0, -1);
            } else if (value === '=') {
            try {
                answer.value = eval(display.value.replace('^', '**'));
            } catch (error) {
                answer.value = 'Error';
            }
            } else {
            display.value += value;
            }
        });
        });