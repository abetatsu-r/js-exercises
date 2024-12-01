export function handleExport() {
  const iframeHTML =
    document.getElementById("subFrame").contentDocument.body.innerHTML;
  const appliedCSS = document
    .getElementById("subFrame")
    .contentDocument.querySelector("style").textContent;
  const exportHTML = `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>Exported Subframe</title>
    <style>
${appliedCSS}
    </style>
</head>
<body>
${iframeHTML}
</body>
</html>`;
  document.getElementById("exportOutput").textContent = exportHTML;
}
