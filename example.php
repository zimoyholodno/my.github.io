<?php
  $conn = new mysqli('localhost', 'USER', ' ', 'website');
  if ($conn->connect_error) {
    die('Connect failed: ' . $conn->connect_error);
  }

  $username = $_POST['username'];
  $password = $_POST['password'];

  $sql = "SELECT id, username, password FROM users WHERE username = ? AND password = ?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('ss', $username, $password);
  $stmt->execute();
  $result = $stmt->get_result();
  $stmt->close();

  if ($result->num_rows > 0) {
    echo "Welcome, $username!";
  } else {
    echo "Incorrect username or password";
  }

  $conn->close();




