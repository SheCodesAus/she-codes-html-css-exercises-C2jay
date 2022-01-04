window.onload = function() {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let keyboard = document.getElementById('keyboard');
    
    alphabet.forEach(letter => {
        let keyButton = document.createElement('input');
        keyButton.type = 'button';
        keyButton.value = letter;
        keyButton.classList.add('key');
        keyButton.id = letter;
        keyButton.addEventListener('click', event => {highlightLetter(event.target.id)})
    
        keyboard.appendChild(keyButton);
    });
    
}

document.addEventListener('keydown', event => {highlightLetter(event.key)});

function highlightLetter(letter){
    console.log(letter)
    let output = document.getElementById('output-text');
    output.innerText = output.innerText += letter;

    let key = document.getElementById(letter);
    key.classList.toggle('selected');

    setTimeout(function() {
        key.classList.toggle('selected');
    }, 150);
}