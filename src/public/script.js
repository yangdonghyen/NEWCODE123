document.getElementById("file-input").addEventListener("change", function (e) {
  if (this.files.length > 0) {
    // 선택된 폴더의 경로를 텍스트 필드에 표시
    document.getElementById("folder-path").value =
      this.files[0].webkitRelativePath.split("/")[0];
  }
});

document
  .getElementById("recover-button")
  .addEventListener("click", function () {
    var folderPath = document.getElementById("folder-path").value;
    if (folderPath) {
      // 폴더 복구 로직 수행
      console.log("Folder path for recovery:", folderPath);
      // 서버로 폴더 경로를 전송하고 복구를 요청하는 코드 추가
    } else {
      alert("Please select a folder first!");
    }
  });
function uploadFiles() {
  const files = document.getElementById("file-input").files;
  const formData = new FormData();
  const recoveryTool = document.getElementById("recoveryTool").value;

  for (const file of files) {
    formData.append("file", file);
  }
  formData.append("recoveryTool", recoveryTool);

  fetch("/upload", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => alert(data))
    .catch((error) => console.error("Error:", error));
}
