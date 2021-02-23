const Palindromos = Palabras => {
  const nuevaPalabra = (Palabras);

  const revertirPalabra = nuevaPalabra.split("").map((c, i) => c !== nuevaPalabra[nuevaPalabra.length - 1 - i]);
  return revertirPalabra.some(m => !m);
};

console.log(Palindromos);
