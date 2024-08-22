// scripts.js

// Redirect to upload page after login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    window.location.href = 'upload.html'; // Redirect to upload page
});

// Handle analyze button click
document.addEventListener('DOMContentLoaded', function() {
    const analyzeButton = document.getElementById('analyzeButton');
    if (analyzeButton) {
        analyzeButton.addEventListener('click', function() {
            const fileInput = document.getElementById('fileInput');
            if (fileInput.files.length === 0) {
                alert('Please select a file to analyze.');
                return;
            }
            const selectedFile = fileInput.files[0];
            alert('File selected: ' + selectedFile.name);
            // Here you can add your image processing logic
        });
    }
});
