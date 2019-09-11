<?php
    require_once "password.php";


    //if (isset($_POST["nickname"])) {
        $mysqli = new mysqli($db_server, $db_user, $db_pass, $db_name);
        
        //$nickname = $_POST["nickname"];
        //$password = $_POST["password"];
        //$email = $_POST["email"];
        
        $nickname = "dsad";
        $password = "Hasdsadaslo";
        $email = "emaildasdas@email.com";
            
        $query = "SELECT * FROM `users` WHERE `nickname` = '$nickname' OR `email` = '$email'";

        if ($result = $mysqli->query($query)) {
            $is = $result->num_rows;
            $row = $result->fetch_assoc();
            if($is > 0) {
                echo "User or email exists.";
            }
            else {
                $query = "INSERT INTO `users`(`id`,`nickname`, `password`, `email`) VALUES ('id','$nickname','$password','$email')";
                $mysqli->query($query);
            }
        }


        $mysqli->close();
    //}
      
?>