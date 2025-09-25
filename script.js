const usdRate = 26;
const button = document.getElementById("runButton");

button.addEventListener("click", () => {
    console.log("Dollar to UAH Conversion:");
    for (let dollars = 10; dollars <= 100; dollars += 10) {
        const uah = dollars * usdRate;
        console.log(dollars + " USD = " + uah + " UAH");
    }
});
