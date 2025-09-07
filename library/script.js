function calculate() {
        
    const { format } = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    });

    let income = takeHomePay.value;
    let needs = income*0.5;
    let wants = income*0.3;
    let savings = income*0.2;

    budgetNeeds.innerHTML = `Needs ${format(needs)}`;
    budgetWants.innerHTML = `Wants ${format(wants)}`;
    budgetSavings.innerHTML = `Savings ${format(savings)}`;

    let income25= income*0.25;
    let income30= income*0.30;

    housingLow.innerHTML = `25% is ${format(income25)}`;
    housingLowPoint1.innerHTML = `${format(needs-income25)} left for needs`;
    housingLowPoint2.innerHTML = `${format(wants)} left for wants`;
    housingLowPoint3.innerHTML = `${format(savings)} left for savings`;

    housingHigh.innerHTML = `30% is ${format(income30)}`;
    housingHighPoint1.innerHTML = `${format(needs-income30)} left for needs`;
    housingHighPoint2.innerHTML = `${format(wants)} left for wants`;
    housingHighPoint3.innerHTML = `${format(savings)} left for savings`;

    let savingsNeedsUnit = income*0.5;

    savings3.innerHTML = `${format(savingsNeedsUnit*3)} lasts 3 months of needs`;
    savings3Time1.innerHTML = `This could take ${savingsNeedsUnit*3/(income*0.2)} months to save`;
    savings3Time2.innerHTML = `Or ${savingsNeedsUnit*3/(income*0.5)} months if you only spend on needs`;
    savings3Time3.innerHTML = `Or ${savingsNeedsUnit*3/income} months if you spend nothing`;

    savings6.innerHTML = `${format(savingsNeedsUnit*6)} lasts 6 months of needs`;
    savings6Time1.innerHTML = `This could take ${savingsNeedsUnit*6/(income*0.2)} months to save`;
    savings6Time2.innerHTML = `Or ${savingsNeedsUnit*6/(income*0.5)} months if you only spend on needs`;
    savings6Time3.innerHTML = `Or ${savingsNeedsUnit*6/income} months if you spend nothing`;

    savings9.innerHTML = `${format(savingsNeedsUnit*9)} lasts 9 months of needs`;
    savings9Time1.innerHTML = `This could take ${savingsNeedsUnit*9/(income*0.2)} months to save`;
    savings9Time2.innerHTML = `Or ${savingsNeedsUnit*9/(income*0.5)} months if you only spend on needs`;
    savings9Time3.innerHTML = `Or ${savingsNeedsUnit*9/income} months if you spend nothing`;
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}