export function handleCssUpload(event) {
  const file = event.target.files[0];
  if (file && file.type === "text/css") {
    const reader = new FileReader();
    reader.onload = (e) => {
      const cssContent = e.target.result;
      const iframeHead =
        document.getElementById("subFrame").contentDocument.head;
      let styleTag = iframeHead.querySelector("#dynamicStyle");
      if (!styleTag) {
        styleTag = document.createElement("style");
        styleTag.id = "dynamicStyle";
        iframeHead.appendChild(styleTag);
      }
      styleTag.textContent = cssContent;
    };
    reader.readAsText(file);
  }
}
