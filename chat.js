var chatMessagesContainer = document.querySelector("#chat-messages-container");
var allMessages = document.querySelectorAll(".chat-message");
var lastMessage;
var howManyMessages;

window.setInterval(checkMessage, 1000);

function checkMessage() {
    howManyMessages = allMessages.length;
    theLast = howManyMessages - 1;
    lastMessage = allMessages[theLast];
    
    $.ajax({
        type : "post",
        //data        : {id: howManyMessages, lastMessage: lastMessage,},
        url : "get-message.php",
    })
    .done(function(response) {
        chatMessagesContainer.innerHTML = response;
    })
    .fail(function() {
        alert("Error!");
    });
}
