<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="fontawesome-free-5.10.2/css/all.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap">
        <link rel="stylesheet" href="css/style.css">
        <title>Draw and Guess</title>
    </head>
    <body>
        <h1 class="logo-header">DRAW AND GUESS</h1>
        <main id="game-menu">
            <div class="row">
                <i class="fas fa-chevron-left" style="font-size: 3.2rem; color: #282828"></i>
                <div class="avatar">
                    <img src="assets/avatars/banana.png" data-name="banana">
                </div>
                <i class="fas fa-chevron-right" style="font-size: 3.2rem; color: #282828"></i>
            </div>
            <div class="row">
                <input type="text" placeholder="Type your nickname...">
            </div>
            <div class="row">
                <input id="play-button" type="submit" value="PLAY">
            </div>
            <div class="row">
                <input type="submit" value="PLAY WITH FRIENDS">
            </div>
        </main>
        <form action="join.php" method="post">
            <input id="nickname" type="hidden">
            <input id="avatar-name" type="hidden">
        </form>
        <script>
            document.getElementById('play-button').addEventListener('click', (e) => {
                document.getElementById('play-button').value = ;
            });
        </script>
    </body>
</html>
