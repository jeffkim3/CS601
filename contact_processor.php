<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collecting the form data
    $firstName = $_POST['firstName'] ?? 'N/A';
    $lastName = $_POST['lastName'] ?? 'N/A';
    $email = $_POST['emailAddress'] ?? 'N/A';
    $subject = $_POST['subject'] ?? 'N/A';
    $message = $_POST['messageBody'] ?? 'N/A';

    // Database credentials
    $servername = "162.240.227.219";
    $username = "jeffreykim_admin";
    $password = "cs601finalproject!";
    $dbname = "jeffreykim_web";

    // Create database connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO contact_form (firstName, lastName, email, subject, message) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $firstName, $lastName, $email, $subject, $message);

    // Attempt to execute the prepared statement
    if ($stmt->execute()) {
        // Send email to admin
        $adminEmail = "admin@jeffreykim.net";
        $adminSubject = "New Contact Form Submission from $firstName $lastName";
        $adminMessage = "You have received a new message from $firstName $lastName ($email):\n\nSubject: $subject\n\nMessage: $message";
        $adminHeaders = "From: admin@jeffreykim.net"; 

        if (mail($adminEmail, $adminSubject, $adminMessage, $adminHeaders)) {
            echo "<script type='text/javascript'>alert('Email successfully sent to admin and message saved to database.'); window.location.href='contact.html';</script>";
        } else {
            echo "<script type='text/javascript'>alert('Error sending email to admin.'); window.location.href='contact.html';</script>";
        }
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
} else {
    echo "<script type='text/javascript'>alert('Form submission is only allowed through POST method.'); window.location.href='contact.html';</script>";
}
?>
