let draggedOrder = null;

//event handler - dragstart
function dragStartHandler(event) {
    draggedOrder = event.target;
    //data to be transferred
    event.dataTransfer.setData('text/plain', '');
    //opacity of the element being dragged
    event.target.style.opacity = '0.7';
}

//event handler - dragover
function dragOverHandler(event) {
    //prevent default behavior
    event.preventDefault();
    //add dashed border
    event.target.style.border = '2px dashed #fff';
}

//event handler - drop
function dropHandler(event) {
    //prevent default behavior
    event.preventDefault();
    //remove dashed border
    event.target.style.border = '';

    //if there is element being dragged
    if (draggedOrder) {
        //id: order area
        const orderArea = document.getElementById('order-area');

        //if the drop target is order area
        if (event.target === orderArea || orderArea.contains(event.target)) {
            console.log(`Order '${draggedOrder.textContent}' placed!`);

            //clone dragged element
            const clonedOrder = draggedOrder.cloneNode(true);
            //append cloned element to order area
            orderArea.appendChild(clonedOrder);

            //transition
            clonedOrder.style.transition = 'transform 0.3s ease-in-out';
            clonedOrder.style.transform = 'translate(0, 0)';

            //hide original draggable element
            draggedOrder.style.display = 'none';
        }

        draggedOrder = null;
    }
}