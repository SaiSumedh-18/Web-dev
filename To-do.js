document.addEventListener('click',(event)=>{
    const popup = document.getElementById('popup');
    if(event.target.classList.contains('create-button')){
        popup.style.display='block';
    }
    if(event.target.id === 'cancelbutton'){
        popup.style.display='none';
    }
    if(event.target.id === 'savebutton'){
        const task={
            title:document.getElementById('title').value,
            description:document.getElementById('description').value,
            startDate:document.getElementById('start-date').value,
            endDate:document.getElementById('end-date').value
        };
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks',JSON.stringify(tasks));
        console.log("Task saved:",task);
        document.getElementById('todoForm').reset();
        popup.style.display='none';
        displayTasks();
    }
});
window.onclick = (event)=>{
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        popup.style.display='none';
    }
};
function displayTasks(){
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task=>{
        console.log("Task:",task);
    });
}
document.addEventListener('DOMContentLoaded',displayTasks);