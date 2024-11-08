<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "movie_tracker";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $title = $_POST['title'];
    $genre = $_POST['genre'];
    $watched_date = $_POST['watched_date'];
    $rating = $_POST['rating'];
    $image_url = $_POST['image_url'];  // Get the image URL
    $review = $_POST['review'];  // Get the review text

    $sql = "INSERT INTO movies (username, title, genre, watched_date, rating, image_url, review)
            VALUES ('$username', '$title', '$genre', '$watched_date', '$rating', '$image_url', '$review')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>

