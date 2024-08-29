document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatContainer = document.getElementById('chat-container');
  
    // Загружаем сообщения из базы данных (AJAX-запрос)
    loadMessages();
  
    // Обработчик отправки сообщения
    sendButton.addEventListener('click', function() {
      const messageText = messageInput.value.trim();
      if (messageText !== '') {
        // Отправляем сообщение на сервер (AJAX-запрос)
        sendMessage(messageText);
  
        // Очищаем поле ввода
        messageInput.value = '';
      }
    });
  
    // Функция для загрузки сообщений из базы данных
    function loadMessages() {
      // AJAX-запрос (например, с использованием fetch API)
      fetch('load_messages.php') // Замените на свой PHP-скрипт
        .then(response => response.json())
        .then(messages => {
          // Очищаем контейнер сообщений
          chatContainer.innerHTML = '';
  
          // Выводим сообщения на экран
          messages.forEach(message => {
            const messageBlock = document.createElement('div');
            messageBlock.classList.add('main__soo');
            messageBlock.textContent = message.message;
            chatContainer.appendChild(messageBlock);
          });
        })
        .catch(error => console.error('Ошибка загрузки сообщений:', error));
    }
  
    // Функция для отправки сообщения на сервер
    function sendMessage(messageText) {
      // AJAX-запрос (например, с использованием fetch API)
      fetch('save_message.php', { // Замените на свой PHP-скрипт
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'message=' + encodeURIComponent(messageText) 
      })
      .then(response => {
        // После отправки, перезагружаем сообщения
        loadMessages(); 
      })
      .catch(error => console.error('Ошибка отправки сообщения:', error));
    }
  });
  