function uploadFiles() {
    var files = document.getElementById("fileInput").files;
    var formData = new FormData();

    for (var i = 0; i < files.length; i++) {
        formData.append("files[]", files[i]);
    }

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/upload", true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById("status").textContent = "Files uploaded successfully!";
        } else {
            document.getElementById("status").textContent = "Error uploading files";
        }
    };
    xhr.send(formData);
}