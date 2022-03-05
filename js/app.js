let btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let day = parseInt(document.querySelector("#day").value);
  let month = parseInt(document.querySelector("#month").value);
  let year = parseInt(document.querySelector("#year").value);
  let gender = document.querySelector(".form-check-input:checked").value;

  if (day === 0 || month === 0 || year === 0) {
    alert("fill all sections");
  }
});
