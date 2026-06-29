// ===============================
// preview.js
// ===============================

const previewBody = document.getElementById("previewBody");
const eventInput = document.getElementById("eventName");
const previewEvent = document.getElementById("previewEvent");

// Preview Initialize
function initPreview() {

    eventInput.addEventListener("input", () => {

        const value = eventInput.value.trim();

        previewEvent.textContent =
            value === ""
            ? "LP PENCIL DRAWING"
            : value;

    });

    updatePreview();

}

// Update Preview
function updatePreview() {

    previewBody.innerHTML = "";

    const rows = document.querySelectorAll("#editorBody tr");

    rows.forEach(row => {

        const tr = document.createElement("tr");

        const inputs = row.querySelectorAll("input");

        inputs.forEach(input => {

            const td = document.createElement("td");

            td.textContent = input.value;

            tr.appendChild(td);

        });

        previewBody.appendChild(tr);

    });

}
