function feeCalculate (slider){
  if (slider == 1)
    var feeamt = 312;
  else
    var feeamt = slider * 312;
  slideval.innerHTML = slider + " km"; 
  fee.innerHTML = "R$" + feeamt + " mi";
  console.log("R$" + slider + "mi"); 
}

