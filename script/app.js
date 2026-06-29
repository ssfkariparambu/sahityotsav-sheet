// ===============================
// Green Room Sheet Generator
// app.js
// ===============================

// App Start
document.addEventListener("DOMContentLoaded", () => {

    console.log("Green Room Sheet Generator Started");

    // Default Rows
    if (typeof createDefaultRows === "function") {
        createDefaultRows(7);
    }

    // Live Preview
    if (typeof initPreview === "function") {
        initPreview();
    }

    // Buttons
    if (typeof initEditor === "function") {
        initEditor();
    }

    // Generator
    if (typeof initGenerator === "function") {
        initGenerator();
    }

});
