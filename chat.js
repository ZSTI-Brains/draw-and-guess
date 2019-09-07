var chatMessagesContainer = document.querySelector("#chat-messages-container");
var messages = [];
var id;

window.setInterval(checkMessage, 1000);

function checkMessage() {
    if(id == undefined)
        id = 0;
          
    $.ajax({
        type : "post",
        data : {messageId: id},
        url : "get-message.php",
    })
    .done(function(response) {
        messages = JSON.parse(response);
    
        //console.log(id);
        for (i = id; i < messages.length; i++) {
            var mess = document.createElement("div");
            var p_message = document.createElement("p");
            var p_nickname = document.createElement("p");

            p_message.innerText = messages[i].message;
            p_nickname.innerText = messages[i].nickname;

            mess.classList.add("chat-message");
            p_nickname.classList.add("nickname");

            mess.append(p_message);
            mess.append(p_nickname);

            chatMessagesContainer.appendChild(mess); 
        }   
        console.log(messages.length);
        id = messages.length;  
    })
    .fail(function() {
        alert("Error!");
    });
}
