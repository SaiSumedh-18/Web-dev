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
        let mytasks = JSON.parse(localStorage.getItem('mytasks')) || [];
        mytasks.push(task);
        localStorage.setItem('mytasks',JSON.stringify(mytasks));
        console.log("task saved:",task);
        document.getElementById('todoForm').reset();
        popup.style.display='none';
 
    }
});
window.onclick=(event)=>{
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        popup.style.display='none';
    }
};