<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Draw and guess</title>
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap">
		<link rel="stylesheet" href="css/style.css">
	</head>
	<body>
		<main>
			<div class="row scoreboard">
				<div id="scoreboard-container"></div>
			</div>
			<div class="row main">
				<div id="drawing-container"></div>
				<div>
					<div id="word-container">
						<?php include("php/get-word.php"); ?>
					</div>
					<div id="chat-container">
						<div id="chat-messages-container"></div>
						<div id="chat-input-container">
							<input type="text" placeholder="Type your thought here...">
						</div>
					</div>
				</div>
			</div>
		</main>
		<script src="js/jquery-3.4.1.min.js"></script>
		<script src="js/draw.js"></script>
		<script src="js/chat.js"></script>
	</body>
</html>
