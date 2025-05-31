document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents page refresh

        let date = document.getElementById("date").value.trim();
        let symptoms = document.getElementById("symptoms").value.trim();
        let severity = document.getElementById("severity").value.trim();

        if (date === "" || symptoms === "" || severity === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (severity < 1 || severity > 10) {
            alert("Severity must be between 1 and 10.");
            return;
        }

        // Create symptom entry
        let symptomEntry = {
            date: date,
            symptoms: symptoms,
            severity: severity
        };

        // Store in localStorage
        let storedSymptoms = JSON.parse(localStorage.getItem("symptomLogs")) || [];
        storedSymptoms.push(symptomEntry);
        localStorage.setItem("symptomLogs", JSON.stringify(storedSymptoms));

        alert("Symptoms logged successfully!");

        // Clear form fields
        form.reset();
    });
});
