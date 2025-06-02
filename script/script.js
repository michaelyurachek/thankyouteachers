function loginCheck() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    const submitButton = document.getElementById("submit");

    if (username === "hsaunders1001" && password === "bestSwimCoach") {
        document.getElementById("hsaunders").style.display = "flex";
        document.getElementById("login").style.display = "none";
        document.title = "Haley Saunders";
        document.body.style.backgroundColor = "black";
        console.log("Correct Submission");
    } else if (username === "tcummings1002" && password === "bestComputerTeacher") {
        document.getElementById("tcummings").style.display = "flex";
        document.getElementById("login").style.display = "none";
        document.title = "Tom Cummings";
        document.body.style.backgroundColor = "black";
        console.log("Correct Submission");
    } else if (username === "jbuckmaster1003" && password === "bestMathTeacher") {
        document.getElementById("jbuckmaster").style.display = "flex";
        document.getElementById("login").style.display = "none";
        document.title = "Jarad Buckmaster";
        document.body.style.backgroundColor = "black";
        console.log("Correct Submission");
    } else if (username === "keppard1004" && password === "bestHistoryTeacher") {
        document.getElementById("keppard").style.display = "flex";
        document.getElementById("login").style.display = "none";
        document.title = "Katie Eppard";
        document.body.style.backgroundColor = "black";
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