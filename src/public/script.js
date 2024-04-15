document.getElementById('upload-button').addEventListener('click', uploadFiles);

function uploadFiles() {
    const files = document.getElementById('file-input').files;
    const formData = new FormData();
    const recoveryTool = document.getElementById('recoveryTool').value;

    for (const file of files) {
        formData.append('file', file);
    }
    formData.append('recoveryTool', recoveryTool);

    fetch('/upload', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error('Error:', error));
}
