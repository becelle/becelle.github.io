//////////////////////////////////////////////////////////////////////////////////
// Copyright John R. Hooper 2011 - *
// http://www.johnrhooper.com/google-forms-css-google-docs-form-customization.php
// Email Form Success Javascript Navigate URL with iframe
// Post any questions to info@gohooper.com :: Subject: Google Docs Form 1 
/////////////////////////////////////////////////////////////////////////////////
var submitted=false;
function formsuccess()
{
submitted=true;
}
// Your Google Spreadsheet URL here...
function formaction() 
  {
  document.ssform.action="https://spreadsheets.google.com/spreadsheet/formResponse?formkey=dEZKbC1fbC1aU0VtWE90SkFLXzFiQXc6MQ";
document.ssform.action = "https://docs.google.com/a/becelle.com/spreadsheet/formResponse?formkey=dEctNm5jMEhGeHlZSFBNUlVDTmpfSmc6MQ&ifq"
}
// Email Form Validation
// Custom Validation for html form
function validateForm()
{
/*
var entry_0=$('#entry_0').val();
var entry_1=$('#entry_1').val();


//var = google form names entry_0...
var fnamepos=entry_0;
var lnamepos=entry_1;



  if (fnamepos<1)
  {
  document.getElementById("status").innerHTML="* Please enter your First Name!";
  return false;
  }
  if (lnamepos<1)
  {
  document.getElementById("status").innerHTML="* Please enter your Last Name!";
  return false;
  } 
  var dateReceived = $('#entry_2').val();
  if(!dateReceived.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/g)){
	  $('#status').html('* Please enter a correct a date using the dd/mm/yyyy format');
	   return false;
  }
  
  if (fnamepos<1 || lnamepos<1)
  {
  return false;
  } else*/ {
	  document.getElementById("status").innerHTML="Sending your information...";
	  formsuccess(), formaction();
  }
}
 