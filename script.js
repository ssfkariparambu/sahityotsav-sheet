const tableBody = document.getElementById("tableBody");
const addRowBtn = document.getElementById("addRowBtn");
const eventName = document.getElementById("eventName");
const previewEvent = document.getElementById("previewEvent");

// ഒരു Row സൃഷ്ടിക്കുന്ന Function
function createRow() {

    const row = document.createElement("tr");

    row.innerHTML = `
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="text"></td>
    `;

    tableBody.appendChild(row);
}

// ആദ്യത്തെ 7 Rows
for(let i = 0; i < 7; i++){
    createRow();
}

// പുതിയ Row ചേർക്കുക
addRowBtn.addEventListener("click", () => {
    createRow();
});

// Event Name Live Preview
eventName.addEventListener("input", () => {

    if(eventName.value.trim() === ""){
        previewEvent.innerText = "LP PENCIL DRAWING";
    }else{
        previewEvent.innerText = eventName.value;
    }

});
