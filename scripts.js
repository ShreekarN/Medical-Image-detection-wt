// scripts.js

// Redirect to upload page after login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    window.location.href = 'upload.html'; // Redirect to upload page
});

// Handling the upload functionality
document.getElementById('uploadBtn').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        // Perform upload logic here
        alert('File ready for upload: ' + file.name);
        // Add your upload code here
    } else {
        alert('Please select a file to upload.');
    }
});

// Handling the analyze functionality
document.getElementById('analyzeBtn').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        // Perform analyze logic here
        alert('Analyzing file: ' + file.name);
        // Add your analysis code here
    } else {
        alert('Please select a file to analyze.');
    }
});
