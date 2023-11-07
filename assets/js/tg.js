const TOKEN = "6639837469:AAEGvcOk7hVSMTZ0HFjgNM2YtMHqv2uCr04";
const CHAT_ID="-1002019195458";
const URL_API=`https://api.telegram.org/bot${TOKEN}/sendMessage`;

const success = document.getElementById('succsess');

document.getElementById("tg").addEventListener('submit',function(e){
    e.preventDefault();
    
    let message = `<b>Заявка с сайта PawBags</b>\n`;
    message +=`<b>Відправник: </b> ${this.name.value }\n`;
    message +=`<b>Телефон: </b> ${this.tel.value }\n`;
    message +=`<b>Коментар: </b> ${this.comment.value }`;
    
    axios.post(URL_API,{
        chat_id:CHAT_ID,
        parse_mode:'html',
        text:message
    })
    .then((res) =>{
        this.name.value='';
        this.tel.value='';
        this.comment.value='';
        success.style.display = 'inline-block';
    })
    .catch((err) =>{
        console.warn(err);
    })
})
