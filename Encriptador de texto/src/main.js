const encryptBtn = document.querySelector('.encriptar');
const decryptBtn = document.querySelector('.desencritar');
const clearInput = document.querySelector('.clear-input');
const figureTag = document.querySelector('.not-input-txt');
const outpudContainer = document.querySelector('.outpud-txt-container');
const copy = document.querySelector('.copy');
const copiedTag = document.querySelector('.copied-tag');
let outpudText = document.querySelector('.outpud-txt');
let input = document.querySelector('.txt-input');

input.addEventListener('click', showBtnClear);
clearInput.addEventListener('click', clearText);
encryptBtn.addEventListener('click', encrypt);
decryptBtn.addEventListener('click', decrypt);
copy.addEventListener('click', copyTxt);

function showBtnClear() {
    if (clearInput.classList.contains('inactive') == true) {
        clearInput.classList.remove('inactive');
    }
}

function clearText() {
    input.value = '';
}

function encrypt() {
    const notEncrypt = ['e', 'i', 'a', 'o', 'u'];
    const encryptTxt = ['enter', 'imes', 'ai', 'ober', 'ufat'];

    for (let i = 0; i < notEncrypt.length; i++) {
        input.value = input.value.replace(new RegExp(notEncrypt[i], 'g'), encryptTxt[i]);
    }

    outpudText = document.querySelector('.outpud-txt').innerHTML = input.value;
    figureTag.style.display = 'none';
}

function decrypt() {
    const notEncrypt = ['e', 'i', 'a', 'o', 'u'];
    const encryptTxt = ['enter', 'imes', 'ai', 'ober', 'ufat'];

    for (let i = 0; i < encryptTxt.length; i++) {
        input.value = input.value.replace(new RegExp(encryptTxt[i], 'g'), notEncrypt[i]);
    }

    outpudText = document.querySelector('.outpud-txt').innerHTML = input.value;
    figureTag.style.display = 'none';
}

function copyTxt(text) {
    text = outpudText = document.querySelector('.outpud-txt').innerText = input.value;
    navigator.clipboard.writeText(text);
    
    if (copiedTag.classList.contains('inactive') == true) {
        copiedTag.classList.remove('inactive');
    } 

    if (copiedTag.classList.contains('inactive') == false) {
        setTimeout(function() {
            copiedTag.classList.add('inactive');
        }, 1000);
    }
}