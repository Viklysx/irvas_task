const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);
    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, ''); // в номере телефона все не числа заменяем пустой строкой
        })
    })
}

export default checkNumInputs;