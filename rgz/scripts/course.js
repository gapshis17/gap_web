let fromRuble = document.getElementById('input-from-ruble');
let toDollar = document.getElementById('input-to-dollar');
let fromDollar = document.getElementById('input-from-dollar');
let toRuble = document.getElementById('input-to-ruble');

document.getElementById('button-to').addEventListener('click', function() {
    let convertedValue = fx(fromRuble.value).from("RUB").to("AUD");
    toDollar.value = convertedValue.toFixed(2); // Округляем до двух знаков после запятой
});

document.getElementById('button-from').addEventListener('click', function() {
    let convertedValue = fx(fromDollar.value).from("AUD").to("RUB");
    toRuble.value = convertedValue.toFixed(2); // Округляем до двух знаков после запятой
});