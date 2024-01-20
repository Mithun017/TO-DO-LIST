taskList.addEventListener('click', function(event) {
    
    if (event.target.classList.contains('delete-button')) {
        
        const listItem = event.target.parentNode;
        taskList.removeChild(listItem);
    }
});
