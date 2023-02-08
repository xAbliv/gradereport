const textInput = document.getElementById("textInput");

function updateHash() {
    const input = textInput.value;
    const hash = CryptoJS.SHA256(input).toString();
    if (hash === "350c94d619f6aba3379500ff11bfcca6e58b0afe5b3624d0ad56fa607845e38c") {
        document.getElementById("s1").style.display = "none";
        document.getElementById("main").style.display = "block";
    } else {
        return null;
    }
}