var chatMessagesContainer = document.querySelector("#chat-messages-container");
var messages = [];

window.setInterval(checkMessage, 1000);

function getMessageId() {
    return messages.length === 0 ? 0 : messages[messages.length - 1].id;
}

function checkMessage() {
    $.ajax({
        type: "post",
        data: { messageId: getMessageId() },
        url: "get-message.php"
    })
    .done(function(response) {
        if (response !== "") {
            let m = JSON.parse(response);

            for (let i = 0; i < m.length; i++)
                messages.push(m[i]);

            for (let i = 0; i < m.length; i++) {
                let mess = document.createElement("div");
                let pMessage = document.createElement("p");
                let pNickname = document.createElement("p");

                pMessage.innerText = m[i].message;
                pNickname.innerText = m[i].nickname;

                mess.classList.add("chat-message");
                pNickname.classList.add("nickname");

                mess.append(pMessage);
                mess.append(pNickname);

                chatMessagesContainer.appendChild(mess);
            }
        }
    });
}

var inputContainer = document.querySelector("#chat-input-container");

inputContainer.addEventListener("keydown", function(event){
    if(event.key === "Enter") {
        sendMessage();   
    }
});

function sendMessage() {
    var text = document.querySelector("input[type=text]").value;
    console.log(text);
    
    $.ajax({
        type: "post",
        data: { message: text },
        url: "get-message.php"
    })
}




