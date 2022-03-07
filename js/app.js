let btn = document.querySelector("#btn");
let nameOut = document.querySelector("#nameOut");
let maleObj = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

let femaleObj = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let date = document.querySelector("#day").value;
  let month = document.querySelector("#month").value;
  let year = document.querySelector("#year").value;
  let gender = document.querySelector(".form-check-input:checked").value;

  const getAkan = (date, month, year) => {
    const userDate = new Date(`${month} ${date} ${year}`);
    let day = userDate.getDay();

    if (gender === "male") {
      nameOut.innerText = `Your Akan Name is ${maleObj[day]}`;
    } else {
      nameOut.innerText = `Your Akan Name is ${femaleObj[day]}`;
    }
  };

  if (date == 0 || month == 0 || year == 0) {
    alert("Kindly fill all sections");
  } else {
    getAkan(date, month, year);
  }
});
