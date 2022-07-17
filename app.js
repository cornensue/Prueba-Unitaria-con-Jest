// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8 // british pound
}

const fromEuroToDollar = function(euroValue){
	return euroValue * oneEuroIs['USD'];
}

const fromDollarToYen = function(dollarValue){
	let yenValue = fromEuroToDollar(dollarValue) * oneEuroIs.JPY;
	return yenValue;
}

const fromYenToPound = yenValue => {
    let poundValue = (yenValue / oneEuroIs.JPY) * oneEuroIs.GBP;
    return poundValue;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };

// console.log(fromDollarToYen(1));
// console.log(fromEuroToDollar(1));
// console.log(fromYenToPound(1));
