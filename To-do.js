const createButton = document.querySelector('.create-button');
const popup = document.getElementById('popup');
const saveButton = document.getElementById('savebutton');
const cancelButton = document.getElementById('cancelbutton');

createButton.addEventListener('click', function () {
    popup.style.display = 'block';
});

cancelButton.addEventListener('click', function () {
    popup.style.display = 'none';
});

saveButton.addEventListener('click', function () {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    console.log("Task saved:", { title, description, startDate, endDate });

    popup.style.display = 'none';
});

window.onclick = function (event) {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}