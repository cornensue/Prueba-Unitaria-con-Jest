// importar la función sum del archivo app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.206 dollars", function(){
    // hago mi comparacion (la prueba)
    expect( fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dolar should be 153.48 yenes", function(){
    // hago mi comparacion (la prueba)
    expect( fromDollarToYen(1)).toBe(153.48); // One dolar should be 153.48 yenes
})

test("One yen should be 0.006254886630179828 pounds", function(){
    // hago mi comparacion (la prueba)
    expect( fromYenToPound(1)).toBe(0.006254886630179828); // One yen should be 0.006254886630179828 pounds
})


