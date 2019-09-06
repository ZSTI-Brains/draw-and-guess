var send = document.querySelector("input[type=text]"); //test
var chatMessagesContainer = document.querySelector("#chat-messages-container");
var messages = [];

send.addEventListener("click", checkMessage); //test

window.setInterval(checkMessage, 1000);

function checkMessage(){
    $.ajax({
        type : "post",
        //data        : {},
        url : "get-message.php",
    })
    .done(function(response) {
        chatMessagesContainer.innerHTML = response;
    })
    .fail(function() {
        alert("Error!");
    })
    .always(function() {
        $('.loading').hide();
    });
}