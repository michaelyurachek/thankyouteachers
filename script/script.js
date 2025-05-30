function loginCheck() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    const submitButton = document.getElementById("submit");

    if (username === "hsaunders1001" && password === "bestSwimCoach") {
        console.log("Correct Submission");
    } else if (username === "tcummings1002" && password === "bestComputerTeacher") {
        console.log("Correct Submission");

    } else if (username === "jbuckmaster1003" && password === "bestMathTeacher") {
        console.log("Correct Submission");
    
    } else if (username === "keppard1004" && password === "bestHistoryTeacher") {
        console.log("Correct Submission");
    
    } else if (username === "" || password === "") {
        console.log("Missed Input");
        submitButton.textContent = "MISSING INPUT";

        setTimeout(() => {
            submitButton.textContent = "Submit";
        }, 1500);
    } else {
        console.log("Incorrect Submission");
        submitButton.textContent = "WRONG INPUT";
        document.getElementById("loginUsername").value = "";
        document.getElementById("loginPassword").value = "";
        setTimeout(() => {
            submitButton.textContent = "Submit";
        }, 1500);
    }
}