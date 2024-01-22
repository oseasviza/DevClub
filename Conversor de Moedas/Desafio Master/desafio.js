const convertButton = document.querySelector('.convert-button');
const currencySelect = document.querySelector('.currency-select'); // Segundo select
const currencySelectedToConvert = document.querySelector(
  '.currency-selected-to-convert'
); // Primeiro select

function convertValues() {
  const inputCurrencyValue = document.querySelector('.input-currency').value;
  const currencyValueToConvert = document.querySelector(
    '.currency-value-to-convert'
  ); // Valor em Real;
  const currencyValueConverted = document.querySelector('.currency-value'); // Outras moedas;

  const dolarToday = 4.91;
  const euroToday = 5.36;
  const ieneToday = 0.034;
  const rialToday = 1.35;

  const dolarToEuro = 0.92;
  const dolarToIene = 144.5;
  const dolarToRial = 3.64;
  const dolarToReal = 4.91;

  const euroToDolar = 1.1;
  const euroToReal = 5.36;
  const euroToIene = 157.6;
  const euroToRial = 3.97;

  const ieneToDolar = 0.007;
  const ieneToReal = 0.034;
  const ieneToEuro = 0.006;
  const ieneToRial = 0.025;

  const rialToDolar = 0.275;
  const rialToReal = 1.35;
  const rialToEuro = 0.25;
  const rialToIene = 39.7;

  if (
    currencySelectedToConvert.value == 'real-to' &&
    currencySelect.value == 'dolar'
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(inputCurrencyValue / dolarToday);
  }

  if (
    currencySelectedToConvert.value == 'dolar-to' &&
    currencySelect.value == 'real'
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(inputCurrencyValue * dolarToday);
  }

  if (
    currencySelectedToConvert.value == 'real-to' &&
    currencySelect.value == 'real'
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(inputCurrencyValue);
  }

  if (
    currencySelectedToConvert.value == 'dolar-to' &&
    currencySelect.value == 'dolar'
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(inputCurrencyValue);
  }

  //EURO-DOLAR
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
    currencySelect.value == 'euro'
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(inputCurrencyValue);
  }

  if (
    currencySelectedToConvert.value == 'dolar-to' &&
    currencySelect.value == 'euro'
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(inputCurrencyValue / euroToDolar);
  }

  //IENE-DOLAR
  if (
    currencySelectedToConvert.value == 'iene-to' &&
    currencySelect.value == 'dolar'
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(inputCurrencyValue / ieneToDolar);
  }

  if (
    currencySelectedToConvert.value == 'dolar-to' &&
    currencySelect.value == 'iene'
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY',
    }).format(inputCurrencyValue * ieneToDolar);
  }

  if (
    currencySelectedToConvert.value == 'iene-to' &&
    currencySelect.value == 'iene'
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY',
    }).format(inputCurrencyValue);
  }

  //RIAL-DOLAR
  if (
    currencySelectedToConvert.value == 'rial-to' &&
    currencySelect.value == 'dolar'
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(inputCurrencyValue / rialToDolar);
  }

  if (
    currencySelectedToConvert.value == 'dolar-to' &&
    currencySelect.value == 'rial'
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('ar-QR', {
      style: 'currency',
      currency: 'QAR',
    }).format(inputCurrencyValue * rialToDolar);
  }

  if (
    currencySelectedToConvert.value == 'rial-to' &&
    currencySelect.value == 'rial'
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('ar-QR', {
      style: 'currency',
      currency: 'QAR',
    }).format(inputCurrencyValue);
  }

  //REAL-EURO
  if (
    currencySelectedToConvert.value == 'real-to' &&
    currencySelect.value == 'euro'
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(inputCurrencyValue / euroToday);
  }

  if (
    currencySelectedToConvert.value == 'euro-to' &&
    currencySelect.value == 'real'
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(inputCurrencyValue * euroToReal);
  }

  //REAL-IENE
  if (
    currencySelectedToConvert.value == 'real-to' &&
    currencySelect.value == 'iene'
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY',
    }).format(inputCurrencyValue / ieneToday);
  }

  if (
    currencySelectedToConvert.value == 'iene-to' &&
    currencySelect.value == 'real'
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(inputCurrencyValue * ieneToReal);
  }

  //REAL-RIAL
  if (
    currencySelectedToConvert.value == 'real-to' &&
    currencySelect.value == 'rial'
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('ar-QR', {
      style: 'currency',
      currency: 'QAR',
    }).format(inputCurrencyValue / rialToday);
  }

  if (
    currencySelectedToConvert.value == 'rial-to' &&
    currencySelect.value == 'real'
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(inputCurrencyValue * rialToReal);
  }

  //EURO-IENE
  if (
    currencySelectedToConvert.value == 'euro-to' &&
    currencySelect.value == 'iene'
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY',
    }).format(inputCurrencyValue * euroToIene);
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

  //EURO-RIAL
  if (
    currencySelectedToConvert.value == 'euro-to' &&
    currencySelect.value == 'rial'
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('ar-QR', {
      style: 'currency',
      currency: 'QAR',
    }).format(inputCurrencyValue * euroToRial);
  }

  if (
    currencySelectedToConvert.value == 'rial-to' &&
    currencySelect.value == 'euro'
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(inputCurrencyValue / euroToRial);
  }

  //IENE-RIAL
  if (
    currencySelectedToConvert.value == 'iene-to' &&
    currencySelect.value == 'rial'
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('ar-QR', {
      style: 'currency',
      currency: 'QAR',
    }).format(inputCurrencyValue * ieneToRial);
  }

  if (
    currencySelectedToConvert.value == 'rial-to' &&
    currencySelect.value == 'iene'
  ) {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY',
    }).format(inputCurrencyValue * rialToIene);
  }

  function formatCurrency() {
    switch (currencySelectedToConvert.value) {
      case 'dolar-to':
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(inputCurrencyValue);

        break;
      case 'real-to':
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(inputCurrencyValue);
        break;

      case 'euro-to':
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'EUR',
        }).format(inputCurrencyValue);
        break;

      case 'iene-to':
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('ja-JP', {
          style: 'currency',
          currency: 'JPY',
        }).format(inputCurrencyValue);
        break;

      case 'rial-to':
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('ar-QR', {
          style: 'currency',
          currency: 'QAR',
        }).format(inputCurrencyValue);
        break;

      default:
        break;
    }
  }

  formatCurrency();

  reproduzirAudio();
}

function reproduzirAudio() {
  const audio = new Audio('assets/caixa-registradora.mp3');
  audio.play();
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
}
currencySelectedToConvert.addEventListener('change', changeCurrencyConvert);
currencySelect.addEventListener('change', changeCurrency);
convertButton.addEventListener('click', convertValues);
