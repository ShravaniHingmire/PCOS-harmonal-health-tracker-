<?php
$servername = "localhost";
$username = "root";  // Change if needed
$password = "shravani@123";      // Change if needed
$dbname = "symptom_tracker";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $date = $_POST["date"];
    $symptoms = $_POST["symptoms"];
    $severity = $_POST["severity"];

    $sql = "INSERT INTO symptoms (date, symptoms, severity) VALUES ('$date', '$symptoms', '$severity')";
    
    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('Symptom recorded successfully!');</script>";
    } else {
        echo "<script>alert('Error: " . $sql . "\\n" . $conn->error . "');</script>";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Track Symptoms</title>
    <link rel="stylesheet" href="track_symptom.css">
</head>
<body>
    <div class="navbar">
        <a href="home.html">Home</a>
        <a href="track_symptom.php">Track Symptoms</a>
        <a href="Menstrual Cycle.html"> Menstrual Cycle Tracker</a>
        <a href="deit.html">Diet & Tips</a>
        <a href="conta.html">Contact</a>
        <a href="chat.html">Chatbot</a>
    </div>

    <div class="container">
        <div class="card" id="track">
            <h2>Track Your Symptoms</h2>
            <p>Log and monitor your symptoms like irregular periods, acne, hair growth, and mood swings.</p>
            <form method="POST">
                <label for="date">Date:</label>
                <input type="date" id="date" name="date" required><br><br>
                
                <label for="symptoms">Symptoms:</label>
                <textarea id="symptoms" name="symptoms" rows="4" required></textarea><br><br>
                
                <label for="severity">Severity (1-10):</label>
                <input type="number" id="severity" name="severity" min="1" max="10" required><br><br>
                
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
    
    <div class="footer">
        <p>&copy; 2025 PCOS & Hormonal Health Tracker | Designed for Women's Health</p>
    </div>
</body>
</html>

<?php $conn->close(); ?>
