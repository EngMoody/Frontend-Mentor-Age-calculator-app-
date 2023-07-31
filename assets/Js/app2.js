let isValid = false;
const 
    outputYear= document.getElementById("output-year"),
    outputMonth = document.getElementById("output-month"),
    outputDay = document.getElementById("output-days"),
    sumbitBtn = document.getElementById(".submit-btn"),

    inputYear = document.getElementById("#year"),
    inputMonth= document.getElementById("#month"),
    inputDay = document.getElementById("#day"),

    errorYear = document.getElementById("error-year"),
    errorMonth = document.getElementById("error-month"),
    errorDay = document.getElementById("error-day");

    inputDay.addEventListener("click",(e)=>{
        if(+inputDay.value >31){
            errorDay.textContent="Must be a valid date";
        }
    })   