const editBtn = document.querySelector('.edit');
const deleteBtn = document.querySelector('.delete');
const noteE1 = document.querySelector('.notes');

const main = noteE1.querySelector('.main');
const textArea = noteE1.querySelector('textarea');

editBtn.addEventListener('click', () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden")
});