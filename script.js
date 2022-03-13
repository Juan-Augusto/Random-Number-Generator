function randomNumberGenerator() {
  let result = document.getElementById("result");
  let numberStorage = [];
  randomNumber = Math.floor(Math.random() * 10000000);
  numberStorage.push(randomNumber);
  console.log(numberStorage);
  result.innerHTML = `<h3>Número aleatório: <strong>${randomNumber}</strong></h3>`;
}
