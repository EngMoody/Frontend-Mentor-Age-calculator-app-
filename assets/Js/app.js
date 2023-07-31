// Get wAll Sellectors
const sumbitBtn = document.getElementById("sumbit-btn"),
  // => Input 
  inputYear = document.getElementById("year-input"),
  inputMonth = document.getElementById("month-input"),
  inputDay = document.getElementById("day-input"),
  // => OutPut
  outPutYear = document.getElementById("output-year"),
  outPutMonth = document.getElementById("output-month"),
  outPutDay = document.getElementById("output-day"),
  //=> error Massege
  errorYear = document.getElementById("error-year"),
  errorMonth = document.getElementById("error-month"),
  errorDay = document.getElementById("error-day");


  // EventListener for Submit Button
sumbitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  ageCalc();
});
//  Calculate Age => (Generation current Date & Calculate tht  & Get the Result of  Negative Input).
function ageCalc() {

   // => current Date :-
   let currentDate = new Date(),
   currentYear = currentDate.getFullYear(),
   currentMonth = currentDate.getMonth(),
   currentDay = currentDate.getDate();

  // check validation of input
  validateInput( inputYear ,errorYear,(value) => value <= currentYear && value > 0);  // Year => [ 1 : CurYear ]
  validateInput( inputMonth , errorMonth,(value) => value <= 12 && value > 0); // Month => [ 1 : 12 ]
  validateInput( inputDay, errorDay,(value) => value <= 31 && value > 0 ); // Day =>[ 1 : 31 ]

  // Calculate the Difference in Years, Months, and Days
  let birthDate = new Date(
   inputYear.value,
    inputMonth.value -1,  //12-12 = 0; 12-11 = 1 (from 1 to 1 = 12 month == 0  )
    inputDay.value
  );
  let yearsDiff = currentYear - birthDate.getFullYear();
  let monthsDiff = currentMonth - birthDate.getMonth();
  let daysDiff = currentDay - birthDate.getDate();

  // Get the Result of  Negative Months
  if (monthsDiff < 0) {
    yearsDiff--;
    monthsDiff += 12;
  }

  // Get the Result of  Negative Days 
  if (daysDiff < 0) {
    monthsDiff--;
    const daysInLastMonth = new Date(currentYear, currentMonth, 0).getDate();
    daysDiff += daysInLastMonth;
  }

  // show results
  let InputDivs = document.querySelectorAll(" .input-container");
  let hasInvalidClass = false;
      InputDivs.forEach((el) => {
    if (el.classList.contains("invalid")) {
      hasInvalidClass = true;
      return;
    }
  });

  if (!hasInvalidClass) {
    showResult(outPutYear, yearsDiff);
    showResult(outPutMonth, monthsDiff);
    showResult(outPutDay, daysDiff);

  } else {
    return false;
  }
}

// => Show The Result smoothly using Timer ================> as a Bonus
function showResult(element, diff) {
  let i = 0;
  let timer = setInterval(() => {
    element.textContent = i;
    i++;
    if (i > diff) {
      clearInterval(timer);
    }
  }, 500 / diff);
}
// Check The Validation of  Inputs
function validateInput(input, errorMsg, conditions) {
  if (input.value === ""  ) {
    input.parentNode.classList.add("invalid");
    errorMsg.textContent = "This field is required";
  }
   else if (!conditions(input.value)) {
    input.parentNode.classList.add("invalid");
    errorMsg.textContent = "Must be a valid value";
  } 
  else {
    input.parentNode.classList.remove("invalid");
    errorMsg.textContent="";
  }
}
