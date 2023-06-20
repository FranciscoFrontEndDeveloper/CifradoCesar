function rot13(str) {
  let arrStr = [];
  for (let index = 0; index < str.length; index++) {
    const letras = str[index];
    const letraElejida = letras;
    const objetRot13 = {
      A: "N",
      B: "O",
      C: "P",
      D: "Q",
      E: "R",
      F: "S",
      G: "T",
      H: "U",
      I: "V",
      J: "W",
      K: "X",
      L: "Y",
      M: "Z",
      N: "A",
      O: "B",
      P: "C",
      Q: "D",
      R: "E",
      S: "F",
      T: "G",
      U: "H",
      V: "I",
      W: "J",
      X: "K",
      Y: "L",
      Z: "M",
      
    };
    const stringDefault = " ";
    const desencriptedString = objetRot13[letraElejida] || stringDefault;
    console.log(desencriptedString);
    arrStr.push(desencriptedString);
  }

  str = arrStr.join("");
  console.log(str);
  return str;
}

rot13("SERR CVMMN!");
