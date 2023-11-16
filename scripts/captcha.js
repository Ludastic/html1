function generateRandomSequence(length, chars) {
    let sequence = '';
    for (let i = 0; i < length; i++) {
        sequence += chars[Math.floor(Math.random() * chars.length)];
    }
    return sequence;
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
}


function isEmpty(input) {
    if (typeof input === 'string') {
        return input.trim().length === 0;
    } else {
        return Object.keys(input).length === 0;
    }
}



const checkElement = document.getElementById('check');
const inputElement = document.getElementById('input');
const submitButton = document.getElementById('submit');
const answerButton = document.getElementById('answer');

submitButton.disabled = true;

let captchaValue = generateRandomSequence(5, 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
checkElement.innerText = captchaValue;

answerButton.onclick = () => {
    if (isEmpty(inputElement.value)) {
        alert('Введите значение');
        return;
    }
    const inputData = inputElement.value;

    if (inputData === captchaValue) {
        submitButton.disabled = false;
        inputElement.disabled = true;
        answerButton.disabled = true;
    } else {
        const num1 = generateRandomNumber();
        const num2 = generateRandomNumber();
        checkElement.innerText = `${num1} + ${num2}`;
        answerButton.onclick = () => {
            if (isEmpty(inputElement.value)) {
                alert('Введите значение');
                return;
            }

            const inputData = inputElement.value;

            if (inputData === `${num1 + num2}`) {
                submitButton.disabled = false;
                inputElement.disabled = true;
                answerButton.disabled = true;
            } else {
                alert('Ошибка');
            }
        };
    }
};