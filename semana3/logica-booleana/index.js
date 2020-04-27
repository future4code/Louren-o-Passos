//a 

let conversaoFahrenheit = 77;
let kelvin = (conversaoFahrenheit - 32) * 5/9 + 273.15;
let conversaoKelvin = kelvin;

console.log(conversaoKelvin);

//b
let conversaoCelcius = 80;
let fahrenheit = (conversaoCelcius)*9/5 + 32;

console.log(fahrenheit);

//c

conversaoCelcius = 30;
fahrenheit = (conversaoCelcius)*9/5 + 32;
kelvin = (fahrenheit - 32) * 5/9 + 273.15;
console.log(fahrenheit);

//d

let celciusUsuario = prompt("Digite o numero para converter de Celcius");
fahrenheit = (celciusUsuario)*9/5 + 32;
kelvin = (fahrenheit - 32) * 5/9 + 273.15;

console.log(fahrenheit);
console.log(kelvin);
