
// Code to handle size selection
const currentProductSizes = document.querySelectorAll(".size"); 
currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

// Code to handle buy-now-button click
const payment = document.querySelector(".buybutton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
//const height = buybutton.getBoundingClientRect().top;

buybutton.addEventListener("click",()=>{
  payment.style.display="flex"
})
buybutton.addEventListener("click",()=>{
  payment.style.display="none"
})

function handleBuy () {
console.log("clicked")
payment.style.display = "flex";
 payment.style.top = height + "px";
  
}

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', handleBuy, false);
}

 buybutton.addEventListener("click", () => {
   Show the payment details
 
payment.style.display = "flex";
payment.style.top = height + "px";
 });
close.addEventListener("click", () => {
 Close the payment details
payment.style.display = "none";
});

