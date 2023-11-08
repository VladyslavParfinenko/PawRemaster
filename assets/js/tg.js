const TOKEN = "6639837469:AAEGvcOk7hVSMTZ0HFjgNM2YtMHqv2uCr04";
const CHAT_ID="-1002019195458";
const URL_API=`https://api.telegram.org/bot${TOKEN}/sendMessage`;

const success = document.getElementById('succsess');
  const form = document.getElementById("tg");
  const submitButton = document.getElementById("submit-button");

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let message = `<b>Заявка с сайта PawBags</b>\n`;
    message += `<b>Відправник: </b> ${form.name.value }\n`;
    // Добавьте остальные поля формы в сообщение
    message += `<b>Телефон: </b> ${form.tel.value }\n`;
    message += `<b>Коментар: </b> ${form.comment.value}`;

    axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
      })
      .then((res) => {
        form.name.value = '';
        form.tel.value = '';
        form.comment.value = '';
        success.style.display = 'inline-block';
      })
      .catch((err) => {
        console.warn(err);
<<<<<<< Updated upstream
      });
  });

  // Добавляем обработчик события touchstart для кнопки "Submit"
submitButton.addEventListener('touchstart', function (event) {
    // Выполняем переход на другую страницу
    redirectToFormPage();
    // Вы можете также добавить код для выполнения дополнительных действий перед отправкой формы
    // Например, проверку данных перед отправкой
  });
  
  // Добавляем обработчик события click для кнопки "Submit" (для компьютеров)
  submitButton.addEventListener('click', function (event) {
    // Выполняем переход на другую страницу
    redirectToFormPage();
    // Вы можете также добавить код для выполнения дополнительных действий перед отправкой формы
    // Например, проверку данных перед отправкой
  });
  
  function redirectToFormPage() {
    // Выполняем переход на страницу ./form.html
    window.location.href = './form.html';
  }
 
  
  
  
  
  
  
=======
    })
});
>>>>>>> Stashed changes
