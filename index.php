<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Draw and guess</title>
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap">
		<link rel="stylesheet" href="style.css">
	</head>
	<body>
		<main>
			<!-- Teścik - JS -->
			<div class="row scoreboard">
				<div id="scoreboard-container"></div>
			</div>
			<div class="row main">
				<div id="drawing-container"></div>
				<div>
					<div id="word-container"></div>
					<div id="chat-container">
						<div id="chat-messages-container">
							<?php include("get-message.php"); ?>
						</div>
						<div id="chat-input-container">
							<input type="text" placeholder="Type your thought here...">
						</div>
					</div>
				</div>
			</div>
		</main>
	</body>
</html>
