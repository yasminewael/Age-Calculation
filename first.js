const calculateAge = document.querySelector(".calculate");

calculateAge.addEventListener("click", function () {
  // date input
  const birthDateInput = document.querySelector(".birthdate").value;

  //birthdate and current date
  const today = new Date();
  const birthDate = new Date(birthDateInput);

  // calculate the difference
  const year = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();
  const days = today.getDay() - birthDate.getDay();

  //display year,month,days
  document.querySelector(
    ".result"
  ).innerHTML = `Year: ${year}, Month: ${month}, Days: ${days}`;
});
