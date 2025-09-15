  function calculate() {

    // Pull in HTML values

    let netMonthly = unformat(inputNetMonthly.value);
    let currentSavings= unformat(inputSavings.value);
    // let grossSalary = unformat(inputGrossSalary.value);
    // let salaryTaxRate = unformat(salaryTaxRateInput.value)*0.01;

    // Budget math
    let needs = netMonthly*0.5;
    let wants = netMonthly*0.3;
    let savings = netMonthly*0.2;

    // Housing math
    let housing25 = netMonthly*0.25;
    let housing30 = netMonthly*0.30;
    let needsMinusHousing25 = needs-housing25;
    let needsMinusHousing30 = needs-housing30;

    // Emergency fund math
    let emergencyFund3 = needs*3;
    let emergencyFund3Time1 = (emergencyFund3-currentSavings)/savings;
    let emergencyFund3Time2 = (emergencyFund3-currentSavings)/(savings+wants);
    let emergencyFund3Time3 = (emergencyFund3-currentSavings)/(savings+wants+needs);

    let emergencyFund6 = needs*6;
    let emergencyFund6Time1 = (emergencyFund6-currentSavings)/savings;
    let emergencyFund6Time2 = (emergencyFund6-currentSavings)/(savings+wants);
    let emergencyFund6Time3 = (emergencyFund6-currentSavings)/(savings+wants+needs);

    let emergencyFund9 = needs*9;
    let emergencyFund9Time1 = (emergencyFund9-currentSavings)/savings;
    let emergencyFund9Time2 = (emergencyFund9-currentSavings)/(savings+wants);
    let emergencyFund9Time3 = (emergencyFund9-currentSavings)/(savings+wants+needs);

    // Put back in HTML
    displayString('needs', format(needs));
    displayString('wants', format(wants));
    displayString('savings', format(savings));

    displayString('housing25', format(housing25));
    displayString('needsMinusHousing25', format(needsMinusHousing25));
    displayString('needsMinusHousing30', format(needsMinusHousing30));

    displayString('emergencyFund3', format(emergencyFund3));
      displayString('emergencyFund3Time1', format(emergencyFund3Time1));
      displayString('emergencyFund3Time2', format(emergencyFund3Time2));
      displayString('emergencyFund3Time3', format(emergencyFund3Time3));

    displayString('emergencyFund6', format(emergencyFund6));
      displayString('emergencyFund6Time1', format(emergencyFund6Time1));
      displayString('emergencyFund6Time2', format(emergencyFund6Time2));
      displayString('emergencyFund6Time3', format(emergencyFund6Time3));

    displayString('emergencyFund9', format(emergencyFund9));
      displayString('emergencyFund9Time1', format(emergencyFund9Time1));
      displayString('emergencyFund9Time2', format(emergencyFund9Time2));
      displayString('emergencyFund9Time3', format(emergencyFund9Time3));

  }

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Make strings repeatable

*/

  function displayString(className, text) {

    var elms = document.querySelectorAll('.' + className), i;

    for (i = 0; i < elms.length; ++i) {
      elms[i].textContent = text;
    }      

  }

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Unformat/Reformat strings

*/

  function unformat(base) {
    return base.replace(/,/g, '');
  }

  function format(base) { // Make whole number & add comma
    return Math.round(base).toLocaleString('en-US');
  }

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  Accordion

*/

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

  /*
    
    Self employment to full time calculations

    let grossFreelanceSalary = unformat(inputGrossFreelanceSalary.value);
    let salaryTaxRate2 = unformat(salaryTaxRateInput2.value)*0.01;

    let convertFreelanceToFulltime = grossFreelanceSalary*(1-salaryTaxRate2);
    let freelanceNetProfit = grossFreelanceSalary*(1-0.15);

    displayString('convertFreelanceToFulltime', format(convertFreelanceToFulltime));
    displayString('freelanceNetProfit', format(freelanceNetProfit));
    
  */