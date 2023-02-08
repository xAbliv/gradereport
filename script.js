var textInput = document.getElementById("textInput");

function updateHash() {
    var input = textInput.value;
    var hash = CryptoJS.SHA3(input).toString();
    if (hash === "a13146a82de041bb9faa75656b88c49c515e5efe119e5edddd8e64b5cd6976b85cd1d16435a05e8c99f2c86dc52d724f7a64fecfcf55639259694d2dc050bdd6") {
        document.getElementById("s1").style.display = "none";
        document.getElementById("main").style.display = "block";
    } else {
        return null;
    }
}
