<?php
    $db_server = "127.0.0.1";
    $db_user = "root";
    $db_pass = "";
    $db_name = "draw_and_guess";

    if (isset($_POST["messageId"])) {
        $id = $_POST["messageId"];
        $mysqli = new mysqli($db_server, $db_user, $db_pass, $db_name);

        $query = "SELECT chat_messages.id, chat_messages.message, users.nickname FROM chat_messages
                  INNER JOIN users ON chat_messages.user_id = users.id WHERE chat_messages.id > $id
                  ORDER BY chat_messages.id";

        if ($result = $mysqli->query($query)) {
            $msg = array();

            while ($row = $result->fetch_assoc())
                $msg[] = $row;

            echo json_encode($msg);
        }

        $mysqli->close();
    }
?>
