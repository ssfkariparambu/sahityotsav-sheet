// ===============================
// download.js
// ===============================

// PNG Download
function downloadImage(dataURL, fileName = "Green Room Sheet.png") {

    const link = document.createElement("a");

    link.href = dataURL;
    link.download = fileName;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

}

// Auto File Name
function getFileName() {

    const eventName = document
        .getElementById("eventName")
        .value
        .trim();

    if (eventName === "") {
        return "Green Room Sheet.png";
    }

    return eventName + ".png";

}
