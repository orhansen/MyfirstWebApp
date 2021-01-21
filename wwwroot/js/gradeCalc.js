var submit = document.getElementById("submitButton");

//event listner to process the grade calculation
submit.addEventListener("click", function () {
    var assignmentGrade = document.getElementById("assignment").value * .50
    var gpGrade = document.getElementById("gp").value * .10
    var quizGrade = document.getElementById("quiz").value * .10
    var examGrade = document.getElementById("exam").value * .20
    var intexGrade = document.getElementById("intex").value * .10
    var finalGrade = assignmentGrade + gpGrade + quizGrade + examGrade + intexGrade
    var letterGrade = undefined

    if (finalGrade >= 94) {
        letterGrade = "A"
    } else if (finalGrade >= 90) {
        letterGrade = "A-"
    } else if (finalGrade >= 87) {
        letterGrade = "B+"
    } else if (finalGrade >= 84) {
        letterGrade = "B"
    } else if (finalGrade >= 80) {
        letterGrade = "B-"
    } else if (finalGrade >= 77) {
        letterGrade = "C+"
    } else if (finalGrade >= 74) {
        letterGrade = "C"
    } else if (finalGrade >= 70) {
        letterGrade = "C-"
    } else if (finalGrade >= 67) {
        letterGrade = "D+"
    } else if (finalGrade >= 64) {
        letterGrade = "D"
    } else if (finalGrade >= 60) {
        letterGrade = "D-"
    } else {
        letterGrade = "E"
    }

    alert("Final Grade is: " + finalGrade + " (" + letterGrade + ")");
});