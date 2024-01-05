const convertButton = document.querySelector('.convert-button');
const currencySelect = document.querySelector('.currency-select');

function convertValues() {
  const inputCurrencyValue = document.querySelector('.input-currency').value;
  const currencyValueToConvert = document.querySelector(
    '.currency-value-to-convert'
  ); // Valor em Real;

  const currencyValueConverted = document.querySelector('.currency-value'); // Outras moedas;
  console.log(currencySelect.value);
  const dolarToday = 4.89;
  const euroToday = 5.37;
  const ieneToday = 0.034;
  const rialToday = 1.33;

  if (currencySelect.value == 'dolar') {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value == 'euro') {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(inputCurrencyValue / euroToday);
  }

  if (currencySelect.value == 'iene') {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY',
    }).format(inputCurrencyValue / ieneToday);
  }

  if (currencySelect.value == 'rial') {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('ar-QR', {
      style: 'currency',
      currency: 'QAR',
    }).format(inputCurrencyValue / rialToday);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(inputCurrencyValue);

  currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(convertedValue);

  console.log(convertedValue);
}

function changeCurrency() {
  const currencyName = document.getElementById('currency-name');
  const currencyImage = document.querySelector('.currency-img');

  if (currencySelect.value == 'dolar') {
    currencyName.innerHTML = 'Dólar Americano';
    currencyImage.src = './assets/dolar.png';
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

currencySelect.addEventListener('change', changeCurrency);

convertButton.addEventListener('click', convertValues);
