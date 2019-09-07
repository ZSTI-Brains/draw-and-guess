<?php
    $db_server = "127.0.0.1";
    $db_user = "root";
    $db_pass = "";
    $db_name = "draw_and_guess";

    $mysqli = new mysqli($db_server, $db_user, $db_pass, $db_name);

    $query = "SELECT name FROM game_words ORDER BY RAND() LIMIT 1";

    if ($result = $mysqli->query($query)) {
        /*$msg = array();

        while ($row = $result->fetch_assoc())
            $msg[] = $row;

        echo json_encode($msg);*/
        while ($row = $result->fetch_assoc())
            echo "<div>" . convert($row["name"]) . "</div>";
    }

    $mysqli->close();

    function convert($str) {
        $l = strlen($str);
        for ($i = 0; $i < $l; $i++)
            if ($str[$i] != " ") $str[$i] = "_";

        return $str;
    }
?>
