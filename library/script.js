function calculate() {

//  variables

    let salary = inputSalary.value;
    let needs = generateString(salary,0.5);
    let wants = generateString(salary,0.3);
    let savings = generateString(salary,0.2);
    let housing25 = generateString(salary,0.25);
    let housing30 = generateString(salary,0.3);
    let emergency3 = generateString(needs,3);
    let emergency6 = generateString(needs,6);
    let emergency9 = generateString(needs,9);

//  display string

    displayString('wants', wants);
    displayString('needs', needs);
    displayString('savings', savings);
    displayString('housing25', housing25);
    displayString('housing30', housing30);
    displayString('emergency3', emergency3);
    displayString('emergency6', emergency6);
    displayString('emergency9', emergency9);
    
}

/*  calculations & formatting

    1. Bring in string     4,000
    2. Remove comma        4000
    3. Do math             4000 * 0.3 = 1333.33
    4. Make whole number   1333
    5. Add comma back in   1,333
*/
    function generateString(base, factor) {

        return Math.round(base.replace(/,/g, '')*factor).toLocaleString('en-US');

    }

//  reusable strings

function displayString(className, text) {

    var elms = document.querySelectorAll('.' + className), i;

    for (i = 0; i < elms.length; ++i) {
        elms[i].textContent = text;
    }      

}

//  accordion

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