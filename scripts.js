document.getElementById('uploadForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const resultDiv = document.getElementById('result');

    if (fileInput.files.length === 0) {
        resultDiv.textContent = 'Please select an image to upload.';
        return;
    }

    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('https://your-backend-url.com/upload', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }

        const data = await response.json();
        resultDiv.textContent = data.result;
    } catch (error) {
        resultDiv.textContent = 'An error occurred: ' + error.message;
    }
});
