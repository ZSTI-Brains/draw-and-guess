var chatMessagesContainer = document.querySelector("#chat-messages-container");
var allMessages = document.querySelectorAll(".chat-message");
var messages = [];
var m;
var result = [];
var j = 0;

window.setInterval(checkMessage, 1000);

function checkMessage() {
    m = allMessages.length;
    
    $.ajax({
        type : "post",
        data        : {messageId: m,},
        url : "get-message.php",
    })
    .done(function(response) {
//        console.log(response);
//        console.log(response.length);
        for(i = 0; i < response.length; i++){
            if(response[i] != "\"" && response[i] != "[" && response[i] != "]" && response[i] != "{") {
                result[j] += response[i];
            }
            if(response[i] == "}")
                j++;
        }
        console.log(result);
        
        // message [id][message][nickname]
        chatMessagesContainer.innerHTML = "<div class=\"chat-message\">" + result + "</div>";
        //pushed = messages.push(response);
        //chatMessagesContainer.innerHTML = messages;

    })
    .fail(function() {
        alert("Error!");
    });
}
