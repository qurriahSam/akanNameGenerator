let btn = document.querySelector("#btn");
let maleObj = {
  sunday: "Kwasi",
  monday: "Kwadwo",
  tuesday: "Kwabena",
  wednesday: "Kwaku",
  thursday: "Yaw",
  friday: "Kofi",
  saturday: "Kwame",
};

let femaleObj = {
  sunday: "Akosua",
  monday: "Adwoa",
  tuesday: "Abenaa",
  wednesday: "Akua",
  thursday: "Yaa",
  friday: "Afua",
  saturday: "Ama",
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let day = parseInt(document.querySelector("#day").value);
  let month = parseInt(document.querySelector("#month").value);
  let year = parseInt(document.querySelector("#year").value);
  let gender = document.querySelector(".form-check-input:checked").value;

  if (day === 0 || month === 0 || year === 0) {
    alert("Kindly fill all sections");
  }
});
