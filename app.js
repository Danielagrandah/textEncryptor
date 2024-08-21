alert('hola mundo')

  function assignTextToElement(element,text){
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
  }

assignTextToElement('h1', 'Text Encryptor');
assignTextToElement('h3', "Your encrypted text:")


function textEncrypt() {
  let userText = document.getElementById("userText").value.toUpperCase();
  let positions = 2;
  let modifiedtext = '';

  if (!/^[A-Z\s]+$/.test(userText)) {
      alert("Please enter only capital letters and spaces :-)");
      return;
  }

  for (let i = 0; i < userText.length; i++) {
      let char = userText[i]; ///El tipo char se usa para almacenar el valor entero de un miembro del juego de caracteres que se puede representar. Ese valor entero es el código ASCII 
      let codigo = char.charCodeAt(0);
      let nuevoCodigo = ((codigo - 65 + positions) % 26) + 65;
      modifiedtext += String.fromCharCode(nuevoCodigo);
  }

  document.getElementById("modifiedtext").textContent = modifiedtext;
}

function textDecrypt() {
  let userText = document.getElementById("modifiedtext").textContent;
  let positions = 2;
  let modifiedtext = '';

  if (!/^[A-Z\s]+$/.test(userText)) {
      alert("Please enter only capital letters and spaces :-)");
      return;
  }

  for (let i = 0; i < userText.length; i++) {
      let char = userText[i];
      if (char === ' ') {
          modifiedtext += ' ';
      } else {
          let codigo = char.charCodeAt(0);
          let nuevoCodigo = ((codigo - 65 - positions + 26) % 26) + 65;
          modifiedtext += String.fromCharCode(nuevoCodigo);
      }
  }

  document.getElementById("modifiedtext").textContent = modifiedtext;
}