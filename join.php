<?php
    require_once("php/db-connection.php");

    //if (!empty($_POST)) {
        //if (strlen($_POST["nickname"]) >= 3) {
            $n = "";
            for ($i = 0; $i < 32; $i++) {
                $t = rand(0, 4);

                switch ($t) {
                    case 0:         $n .= chr(rand(48, 57)); break;
                    case 1: case 2: $n .= chr(rand(65, 90)); break;
                    case 3: case 4: $n .= chr(rand(97, 122)); break;
                }
            }
            echo $n;
        //}
    //}
?>
