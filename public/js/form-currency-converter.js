document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('currency-form');
    const amountInput = document.getElementById('amount');
    const amountToInput = document.getElementById('amount-to');
    const fromCurrencySelect = document.getElementById('from-currency');
    const toCurrencySelect = document.getElementById('to-currency');

    const rates = {
        USD: 1000,
        EUR: 1100,
        JPY: 900,
        ARS: 800, 
        CAD: 990,
        CNY: 980
    };

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const amount = parseFloat(amountInput.value);
        const amountTo = parseFloat(amountToInput.value);
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;

        if (isNaN(amount) && isNaN(amountTo)) {
            alert('Por favor, ingresa una cantidad en al menos uno de los campos');
            return;
        }

        if (!fromCurrency || !toCurrency) {
            alert('Por favor, selecciona ambas monedas');
            return;
        }

        if (!isNaN(amount) && isNaN(amountTo)) {
            const amountInUSD = amount / rates[fromCurrency];
            const convertedAmount = amountInUSD * rates[toCurrency];
            amountToInput.value = convertedAmount.toFixed(2); 
        } else if (isNaN(amount) && !isNaN(amountTo)) {
            const amountInUSD = amountTo / rates[toCurrency];
            const convertedAmount = amountInUSD * rates[fromCurrency];
            amountInput.value = convertedAmount.toFixed(2);
        }
    });
});
