//Here I am targetting
//the id and putting it into its own variable.

const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");
const addButton = document.getElementById("add");
const result = document.getElementById("result");
const additionForm = document.getElementById("additionForm");
//Here I add an event listener.
//Why is it on form not on button?

additionForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  //Why do we need to prevent this?
  //it clears the form

  //How can I convert the input values into number types?
  //ensures that capture the submit 'event' - the argument
  //allows you to prevent default, which get's rid of the information instantly.
  //Other processes occur with forms e.g server side or validation errors

  const num1Val = Number(num1.value);
  const num2Val = Number(num2.value);

  //How do I add the two numbers, put them in a new variable
  //and output that result to the DOM?

  const sum = num1Val + num2Val;
  result.textContent = "The added sum of both numbers is " + sum;
});
