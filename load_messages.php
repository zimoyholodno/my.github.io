<?php
$servername = "COMPUTER";
$username = "USER";
$dbname = "website";



try {
  $DBH = new PDO('sqlsrv:Server='.$servername.';Database='.$dbname, $username);
  $DBH->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
  }
  catch(PDOException $e) {
  echo $e->getMessage();
  }
  try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username);
    // Установите режим обработки ошибок в исключения
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Соединение с базой данных успешно установлено";
  } catch(PDOException $e) {
    echo "Ошибка подключения: " . $e->getMessage();
  }
$messages = [];

// Запрос к базе данных для получения сообщений
$sql = "SELECT message FROM messages ORDER BY timestamp ASC";
$stmt = $conn->prepare($sql);
$stmt->execute();

// Формируем массив с сообщениями
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
  $messages[] = ['message' => $row['message']];
}

// Возвращаем сообщения в формате JSON
header('Content-type: application/json');
echo json_encode($messages);
