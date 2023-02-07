const textbox = document.getElementById("input");
const hash = new TextEncoder().encode(textbox.value);
const hashArray = await crypto.subtle.digest("SHA-256", hash);
const hashHex = Array.from(new Uint8Array(hashArray))

function pinInput(valNum) {
  valNum = parseFloat(valNum);

  if (valNum === 8347) {
    document.getElementById("s1").style.display = "none";
    document.getElementById("main").style.display = "block";
  }
}

//dont touch

const textbox = document.getElementById("input");
const hash = new TextEncoder().encode(textbox.value);
const hashArray = await crypto.subtle.digest("SHA-256", hash);
const hashHex = Array.from(new Uint8Array(hashArray))
  .map(b => b.toString(16).padStart(2, "0"))
  .join("");
console.log(hashHex);

function pinInputHashed(valNumHash) {
  valNumHash = parseFloat(valNumHash)

  if (valNumHash === 'F0F06E6A36F7CB803C295C948C8597932FE6854DBAF3BB81945CE4ADB9724C7A') {
    document.getElementById("s1").style.display = 'none';
    document.getElementById("main").style.display = 'block';
  }
}