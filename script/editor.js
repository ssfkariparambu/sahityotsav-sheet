// ===========================
// editor.js
// ===========================

const editorBody = document.getElementById("editorBody");

// ഒരു Row സൃഷ്ടിക്കുക
function createRow() {

    const row = document.createElement("tr");

    for (let i = 0; i < 8; i++) {

        const td = document.createElement("td");

        const input = document.createElement("input");
        input.type = "text";

        td.appendChild(input);
        row.appendChild(td);

    }

    editorBody.appendChild(row);

}

// Default Rows
function createDefaultRows(count) {

    editorBody.innerHTML = "";

    for (let i = 0; i < count; i++) {
        createRow();
    }

}

// Buttons
function initEditor() {

    const addBtn = document.getElementById("addRow");
    const removeBtn = document.getElementById("removeRow");

    // Add Row
    addBtn.addEventListener("click", () => {

        createRow();

        if (typeof updatePreview === "function") {
            updatePreview();
        }

    });

    // Remove Row
    removeBtn.addEventListener("click", () => {

        const rows = editorBody.querySelectorAll("tr");

        if (rows.length > 1) {
            rows[rows.length - 1].remove();
        }

        if (typeof updatePreview === "function") {
            updatePreview();
        }

    });

    // Live Preview
    editorBody.addEventListener("input", () => {

        if (typeof updatePreview === "function") {
            updatePreview();
        }

    });

}
