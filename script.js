
const usdRate = 26;

for (let dollars = 10; dollars <= 100; dollars += 10) {
    const uah = dollars * usdRate;
    console.log(dollars + " USD = " + uah + " UAH");
}
