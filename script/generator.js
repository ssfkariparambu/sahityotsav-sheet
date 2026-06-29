// ===============================
// generator.js
// Version 2.0 - Step 2
// ===============================

function initGenerator() {

    document
        .getElementById("generateBtn")
        .addEventListener("click", generatePNG);

}

async function generatePNG() {

    const sheet = document.getElementById("sheet");

    try {

        // Export സമയത്ത് Preview Scale ഒഴിവാക്കുക
        sheet.style.transform = "scale(1)";

        const dataUrl = await htmlToImage.toPng(sheet, {

            width: 2480,

            height: sheet.scrollHeight,

            pixelRatio: 4,

            backgroundColor: "#ffffff",

            cacheBust: true

        });

        // Preview Scale തിരികെ നൽകുക
        sheet.style.transform = "scale(.32)";

        downloadImage(dataUrl, getFileName());

    }

    catch (error) {

        sheet.style.transform = "scale(.32)";

        console.error(error);

        alert("Image Generate Failed");

    }

}
