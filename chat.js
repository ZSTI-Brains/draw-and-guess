var chatMessagesContainer = document.querySelector("#chat-messages-container");
var messages = [];
var id = 6; //fixed

window.setInterval(checkMessage, 1000);

function checkMessage() {
    $.ajax({
        type : "post",
        data : {messageId: id},
        url : "get-message.php",
    })
    .done(function(response) {
        messages = JSON.parse(response);
        for (i = id; i < messages.length; i++) {
            var message = document.createElement("div");
            var p_message = document.createElement("p");
            var p_nickname = document.createElement("p");
            
            p_message.innerText = messages[i].message;
            p_nickname.innerText = messages[i].nickname;
            
            message.classList.add("chat-message");
            p_nickname.classList.add("nickname");
            
            message.append(p_message);
            message.append(p_nickname);
            
            chatMessagesContainer.appendChild(message); 
        }
        id = messages.length;
        console.log(messages.length)
        //console.log(id);
    })
    .fail(function() {
        alert("Error!");
    });
}
