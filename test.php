<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sing-Up</title>
    <style>
        input {
            display: block;
            margin: 10px;
            text-align: center;
        }
    </style>
</head>
<body>
    <form action="php/sign-up.php" method="post">
        <input type="text" placeholder="nickname" name="nickname">
        <input type="password" placeholder="password" name="password">
        <input type="password" placeholder="repeat password">
        <input type="text" placeholder="emial" name="email">
        <input type="submit">
    </form>
</body>
</html>