// function pinInput(valNum) {
//   valNum = parseFloat(valNum);

//   if (valNum === 8347) {
//     document.getElementById("s1").style.display = "none";
//     document.getElementById("main").style.display = "block";
//   }
// }

//dont touch anything below this line

const inputField = document.getElementById("input");
const desiredHashValue = "f0f06e6a36f7cb803c295c948c8597932fe6854dbaf3bb81945ce4adb9724c7a";

inputField.addEventListener("input", function hash () {
  const text = inputField.value;
  const hash = CryptoJS.SHA256(text).toString();
});


inputField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const text = inputField.value;
    const hash = CryptoJS.SHA256(text).toString();
    if (hash === desiredHashValue) {
      document.getElementById("s1").style.display = "none";
      document.getElementById("main").style.display = "block";
    } else {
      alert("The pin you entered is not valid.");
    }
  }
});

// oninput="pinInput(this.value)" onchange="pinInput(this.value)"