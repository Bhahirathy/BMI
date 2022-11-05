
window.onload=function(){
  
var age=document.getElementById("Age")
var Height = document.getElementById("height");
var Weight = document.getElementById("weight");
var calcButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var paragraph = document.querySelector(".result-statement");

calcButton.addEventListener("click", ()=>{

    Height = Height.value;
    Weight = Weight.value;
    age=age.value;
    if(2<=age<=120){
        if(Height === "" || isNaN(Height)){
            alert("Positive Numbers only")
        }else if(Weight === "" || isNaN(Weight)){
            alert("Positive Numbers only")
        }else{
            let bmi = parseInt(Weight) / (parseInt(Height) ** 2)
            result.innerText=bmi    
            if(bmi < 16){
                paragraph.innerText = "Severe Thinness";    
            }else if((bmi >=16) && (bmi <17)){
                paragraph.innerText = "Moderate Thinness";
            }else if((bmi >=17) && (bmi <18.5)){
                paragraph.innerText = "Mild Thinness";
            }else if((bmi>=18.5) && (bmi<25)){
                paragraph.innerText = "Normal";
            }else if((bmi>=25) && (bmi<30)){
                paragraph.innerText = "Overweight";
            }else if((bmi>=30) && (bmi<35)){
                paragraph.innerText = "Obese Class I";
            }else if((bmi>=35) && (bmi<=40)){
               paragraph.innerText = "Obese Class II";
            }else if((bmi>40)){
                paragraph.innerText = "Obese Class III";
            }
        }
    }
});
function check(value)
{var error = document.getElementById("error")
if (isNaN(document.getElementById("height").value))
{
    error.innerHTML = "Please enter a valid number"
} else {
    error.innerHTML = ""
}
}
}