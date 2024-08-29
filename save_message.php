<?php

$servername = "localhost";
$username = "USER";
$dbname = "website";
$port = 1433; 

// Определяем строку подключения
$dsn = "odbc:DRIVER={FreeTDS};SERVER=$servername;PORT=$port;DATABASE=$dbname";

try {
  // Создание объекта PDO
  $conn = new PDO($dsn, $username);

  // Установка режима обработки ошибок
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // Выводим сообщение об успешном подключении
  echo "Success: A connection to MS SQL successfully established";

} catch(PDOException $e) {
  // Обработка ошибок
  echo "Error: Unable to connect to MS SQL. " . $e->getMessage();
}

// Закрытие соединения
$conn = null;

?>


// Получение сообщения из запроса
$message = $_POST['message'];

// Вставка сообщения в базу данных
$sql = "INSERT INTO messages (message, timestamp) VALUES (:message, NOW())";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':message', $message);
$stmt->execute();

// Возвращаем успешный ответ (необязательно)
echo "OK";


<?php
phpinfo();
?>