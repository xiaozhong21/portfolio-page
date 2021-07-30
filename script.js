////////////////////////////////////////////////
// Contact form submission
let submitButton = document.querySelector(".form-submit");
submitButton.addEventListener("click", function() {
    if (document.querySelector(".contact-form").checkValidity()) {
    document.querySelector(".contact-form").className = "contact-form-hidden";
    document.querySelector(".summary-name").textContent = "Name: " + document.querySelector("#firstname").value + " " + document.querySelector("#lastname").value;
    document.querySelector(".form-summary-hidden").className = "form-summary";
    } else {
        //error message
        console.log("error!!!")
    }
})


////////////////////////////////////////////////
// Go to top button
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}