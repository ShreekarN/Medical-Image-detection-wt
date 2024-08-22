<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Medical Image Analysis</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Medical Image Analysis</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="login.html">Login</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="welcome">
            <h2>Welcome to Medical Image Analysis</h2>
            <p>Upload your medical images, and our AI will help detect potential issues.</p>
            <a href="index.html" class="upload-button">Upload Image</a>
        </section>
        <section class="upload">
            <h2>Upload Your Medical Image</h2>
            <form id="uploadForm" method="POST" enctype="multipart/form-data">
                <input type="file" id="imageInput" name="image" accept="image/*" required>
                <button type="submit" class="upload-button">Analyze Image</button>
                <p id="feedback" style="color: red;"></p>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Medical Image Analysis. All rights reserved.</p>
    </footer>

    <script src="scripts.js"></script>
</body>
</html>
