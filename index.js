function calculate() {
    const totalAmount = document.getElementById("p");
    const principleInput = document.getElementById("principle");
    const rateInput = document.getElementById("rate");
    const yearsInput = document.getElementById("year");

    let principle = Number(principleInput.value);
    let rate = Number(rateInput.value) / 100; 
    let years = Number(yearsInput.value);

    if (isNaN(principle) || isNaN(rate) || isNaN(years) || principle <= 0 || years <= 0) {
        totalAmount.textContent = "Please enter valid inputs.";
        return;
    }

    const result = principle * Math.pow(1 + rate, years);

    totalAmount.textContent = result.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
