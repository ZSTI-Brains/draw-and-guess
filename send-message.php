<?php
    $db_server = "127.0.0.1";
    $db_user = "root";
    $db_pass = "";
    $db_name = "charades";

    if (!empty($_GET)) {
        $mysqli = new mysqli($db_server, $db_user, $db_pass, $db_name);
        
        $query = "SELECT * FROM chat_messages LIMIT 1";
        $result = $mysqli->query($query);
        
        while ($row = $result->fetch_row())
            echo $row[3];
        
        $mysqli->close();
    }
?>