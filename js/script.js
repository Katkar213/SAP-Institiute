console.log("hello");

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
   
    const answer = button.nextElementSibling;
    answer.classList.toggle("answer")
  if(answer.style.display==="block"){
    answer.style.display="none";
  }
  else{
    answer.style.display="block";
  }
  });
});