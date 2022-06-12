const resetBtn = document.querySelector('#reset').addEventListener('click', () => {
    userBox.value = '';
    passBox.value = '';
});

const userBox = document.querySelector('#user')
const passBox = document.querySelector('#pass')