<?php
    $db_server = "127.0.0.1";
    $db_user = "root";
    $db_pass = "";
    $db_name = "draw_and_guess";

    if (isset($_POST["message"])) {
        $message = $_POST["message"];
        $date = date("Y-m-d H:i:s");

        $mysqli = new mysqli($db_server, $db_user, $db_pass, $db_name);

        $query = "INSERT INTO chat_messages VALUES ('', 2, 1, '$message', '$date')";
        $result = $mysqli->query($query);

        $mysqli->close();
    }
?>
