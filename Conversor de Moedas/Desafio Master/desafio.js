const convertButton = document.querySelector('.convert-button');
const currencySelect = document.querySelector('.currency-select');
const currencySelectedToConvert = document.querySelector(
  '.currency-selected-to-convert'
);
const currencyConversionAudio = document.querySelector(
  '.currency-conversion-audio'
);

function convertValues() {
  const inputCurrencyValue = document.querySelector('.input-currency').value;
  const currencyValueToConvert = document.querySelector(
    '.currency-selected-to-convert'
  ); // Valor em Real;
  const currencyValueConverted = document.querySelector('.currency-value'); // Outras moedas;

  const dolarToday = 4.91;
  const euroToday = 5.36;
  const ieneToday = 0.034;
  const rialToday = 1.35;

  const dolarToEuro = 0.92;
  const dolarToIene = 144.5;
  const dolarToRial = 3.64;

  const euroToDolar = 1.1;
  const euroToReal = 5.36;
  const euroToIene = 1.57;
  const euroToRial = 3.97;

  const ieneToDolar = 0.007;
  const ieneToReal = 0.034;
  const ieneToEuro = 0.006;
  const ieneToRial = 0.025;

  const rialToDolar = 0.275;
  const rialToReal = 1.35;
  const rialToEuro = 0.252;
  const rialToIene = 3.97;

  if (currencySelectedToConvert.value == 'real-to') {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(inputCurrencyValue);
  }

  if (currencySelectedToConvert.value == 'dolar-to') {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(inputCurrencyValue);
  }

  if (currencySelectedToConvert.value == 'euro-to') {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(inputCurrencyValue);
  }

  if (currencySelectedToConvert.value == 'iene-to') {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY',
    }).format(inputCurrencyValue);
  }

  if (currencySelectedToConvert.value == 'rial-to') {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('ar-QR', {
      style: 'currency',
      currency: 'QAR',
    }).format(inputCurrencyValue);
  }

  //CONVERSÃO A PARTIR DO REAL
  if (currencySelect.value == 'real') {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(inputCurrencyValue);
  }

  if (currencySelect.value == 'dolar') {
    //Se o select estiver selecionado o valor de dolar, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value == 'euro') {
    //Se o select estiver selecionado o valor de euro, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(inputCurrencyValue / euroToday);
  }

  if (currencySelect.value == 'iene') {
    //Se o select estiver selecionado o valor de iene, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY',
    }).format(inputCurrencyValue / ieneToday);
  }

  if (currencySelect.value == 'rial') {
    //Se o select estiver selecionado o valor de rial, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat('ar-QR', {
      style: 'currency',
      currency: 'QAR',
    }).format(inputCurrencyValue / rialToday);
  }

  //CONVERSÃO A PARTIR DO DOLAR AMERICANO
  if (
    currencySelectedToConvert.value == 'dolar-to' &&
    currencySelect.value == 'dolar'
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(inputCurrencyValue);
  }

  if (
    currencySelectedToConvert.value == 'dolar-to' &&
    currencySelect.value == 'real'
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(inputCurrencyValue * dolarToday);
  }

  if (
    currencySelectedToConvert.value == 'dolar-to' &&
    currencySelect.value == 'euro'
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(inputCurrencyValue * dolarToEuro);
  }

  if (
    currencySelectedToConvert.value == 'dolar-to' &&
    currencySelect.value == 'iene'
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY',
    }).format(inputCurrencyValue * dolarToIene);
  }

  if (
    currencySelectedToConvert.value == 'dolar-to' &&
    currencySelect.value == 'rial'
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat('ar-QR', {
      style: 'currency',
      currency: 'QAR',
    }).format(inputCurrencyValue * dolarToRial);
  }

  //CONVERSÃO A PARTIR DO EURO
  if (
    currencySelectedToConvert.value == 'euro-to' &&
    currencySelect.value == 'dolar'
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(inputCurrencyValue * euroToDolar);
  }

  if (
    currencySelectedToConvert.value == 'euro-to' &&
    currencySelect.value == 'real'
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(inputCurrencyValue * euroToday);
  }

  if (
    currencySelectedToConvert.value == 'euro-to' &&
    currencySelect.value == 'euro'
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(inputCurrencyValue);
  }

  if (
    currencySelectedToConvert.value == 'euro-to' &&
    currencySelect.value == 'iene'
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY',
    }).format(inputCurrencyValue * euroToIene);
  }

  if (
    currencySelectedToConvert.value == 'euro-to' &&
    currencySelect.value == 'rial'
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat('ar-QR', {
      style: 'currency',
      currency: 'QAR',
    }).format(inputCurrencyValue * euroToRial);
  }

  //CONVERSÃO A PARTIR DO IENE
  if (
    currencySelectedToConvert.value == 'iene-to' &&
    currencySelect.value == 'dolar'
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(inputCurrencyValue * ieneToDolar);
  }

  if (
    currencySelectedToConvert.value == 'iene-to' &&
    currencySelect.value == 'real'
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(inputCurrencyValue * ieneToday);
  }

  if (
    currencySelectedToConvert.value == 'iene-to' &&
    currencySelect.value == 'euro'
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(inputCurrencyValue * ieneToEuro);
  }

  if (
    currencySelectedToConvert.value == 'iene-to' &&
    currencySelect.value == 'iene'
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY',
    }).format(inputCurrencyValue);
  }

  if (
    currencySelectedToConvert.value == 'iene-to' &&
    currencySelect.value == 'rial'
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat('ar-QR', {
      style: 'currency',
      currency: 'QAR',
    }).format(inputCurrencyValue * ieneToRial);
  }

  //CONVERSÃO A PARTIR DO RIAL
  if (
    currencySelectedToConvert.value == 'rial-to' &&
    currencySelect.value == 'dolar'
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(inputCurrencyValue * rialToDolar);
  }

  if (
    currencySelectedToConvert.value == 'rial-to' &&
    currencySelect.value == 'real'
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(inputCurrencyValue * rialToday);
  }

  if (
    currencySelectedToConvert.value == 'rial-to' &&
    currencySelect.value == 'euro'
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(inputCurrencyValue * rialToEuro);
  }

  if (
    currencySelectedToConvert.value == 'rial-to' &&
    currencySelect.value == 'iene'
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY',
    }).format(inputCurrencyValue * rialToIene);
  }

  if (
    currencySelectedToConvert.value == 'rial-to' &&
    currencySelect.value == 'rial'
  ) {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat('ar-QR', {
      style: 'currency',
      currency: 'QAR',
    }).format(inputCurrencyValue);
  }

  currencyConversionAudio.play();
}

function changeCurrency() {
  const currencyName = document.getElementById('currency-name');
  const currencyImage = document.querySelector('.currency-img');

  if (currencySelect.value == 'dolar') {
    currencyName.innerHTML = 'Dólar Americano';
    currencyImage.src = './assets/dolar.png';
  }

  if (currencySelect.value == 'real') {
    currencyName.innerHTML = 'Real';
    currencyImage.src = './assets/Real.png';
  }

  if (currencySelect.value == 'euro') {
    currencyName.innerHTML = 'Euro';
    currencyImage.src = './assets/Euro.png';
  }

  if (currencySelect.value == 'iene') {
    currencyName.innerHTML = 'Iene Japonês';
    currencyImage.src = './assets/Iene.png';
  }

  if (currencySelect.value == 'rial') {
    currencyName.innerHTML = 'Rial Qatarense';
    currencyImage.src = './assets/Rial.png';
  }
  convertValues();
}

function changeCurrencyConvert() {
  const currencyNameConvert = document.getElementById(
    'currency-name-conversion'
  );
  const convertImage = document.querySelector('.convert-img');

  if (currencySelectedToConvert.value == 'real-to') {
    currencyNameConvert.innerHTML = 'Real';
    convertImage.src = './assets/Real.png';
  }

  if (currencySelectedToConvert.value == 'dolar-to') {
    currencyNameConvert.innerHTML = 'Dólar Americano';
    convertImage.src = './assets/dolar.png';
  }

  if (currencySelectedToConvert.value == 'euro-to') {
    currencyNameConvert.innerHTML = 'Euro';
    convertImage.src = './assets/Euro.png';
  }

  if (currencySelectedToConvert.value == 'iene-to') {
    currencyNameConvert.innerHTML = 'Iene Japonês';
    convertImage.src = './assets/Iene.png';
  }

  if (currencySelectedToConvert.value == 'rial-to') {
    currencyNameConvert.innerHTML = 'Rial Qatarense';
    convertImage.src = './assets/Rial.png';
  }
  convertValues();
}
currencySelectedToConvert.addEventListener('change', changeCurrencyConvert);
currencySelect.addEventListener('change', changeCurrency);
convertButton.addEventListener('click', convertValues);
