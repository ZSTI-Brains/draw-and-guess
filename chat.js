var send = document.querySelector("input[type=text]"); //test
console.log(send); //test
send.addEventListener("click", function() {checkMessage();}); //test

function checkMessage(){
    $.ajax({
        type : "post",
        //data        : {},
        url : 'get-message.php',
    })
    .done(function(response) {
        console.log(response);
    })
    .fail(function() {
        alert("Error!");
    })
    .always(function() {
        $('.loading').hide();
    });
}
