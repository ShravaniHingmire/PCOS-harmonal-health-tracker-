document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    let date = document.getElementById("date").value;
    let symptoms = document.getElementById("symptoms").value;
    let severity = document.getElementById("severity").value;

    fetch("http://localhost:5000/submit_symptom", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date, symptoms, severity })
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            document.querySelector("form").reset();
            loadSymptoms();
        })
        .catch(error => console.error("Error:", error));
});

// Function to load symptoms
function loadSymptoms() {
    fetch("http://localhost:5000/get_symptoms")
        .then(response => response.json())
        .then(data => {
            let output = "<h3>Symptom History</h3><ul>";
            data.forEach(item => {
                output += `<li>${item.date}: ${item.symptoms} (Severity: ${item.severity})</li>`;
            });
            output += "</ul>";
            document.getElementById("symptomHistory").innerHTML = output;
        })
        .catch(error => console.error("Error:", error));
}

// Load symptoms when page loads
window.onload = loadSymptoms;
        </script >

    <div id="symptomHistory"></div>
