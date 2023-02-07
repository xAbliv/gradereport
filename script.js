// function pinInput(valNum) {
//   valNum = parseFloat(valNum);

//   if (valNum === 8347) {
//     document.getElementById("s1").style.display = "none";
//     document.getElementById("main").style.display = "block";
//   }
// }

//dont touch anything below this line

const input = document.getElementById("input");
const output = document.getElementById("output");

input.addEventListener("input", function () {
  const hash = CryptoJS.SHA256(input.value).toString();
  alert(hash);
  if (hash === "350C94D619F6ABA3379500FF11BFCCA6E58B0AFE5B3624D0AD56FA607845E38C") {
    document.getElementById("s1").style.display = "none";
    document.getElementById("main").style.display = "block";
  }
});

function runFunction() {
  document.getElementById("s1").style.display = "none";
  document.getElementById("main").style.display = "block";
}

// oninput="pinInput(this.value)" onchange="pinInput(this.value)"