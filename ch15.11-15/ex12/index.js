const form = document.querySelector("#upload-form");
const inputFile = document.querySelector("#file-form");
const inputToken = document.querySelector("#token-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const token = inputToken.value.trim();

  const file = inputFile.files[0];
  if (file) {
    console.log("ok");
    const reader = new FileReader();
    reader.onload = function (e) {
      const arrayBuffer = e.target.result;

      fetch(
        `https://graph.microsoft.com/v1.0/me/drive/items/root:/ex12/${file.name}:/content`,
        {
          method: "PUT",
          body: arrayBuffer,
          headers: new Headers({
            "Content-Type": "application/octet-stream",
            Authorization: `Bearer ${token}`,
          }),
        },
      ).then((response) => {
        if (response.status !== 200 && response.status !== 201) {
          alert("update error");
        }
      });
    };
    reader.readAsArrayBuffer(file);
  }
});
