let draggedOrder = null;

function dragStartHandler(event) {
    draggedOrder = event.target;
    event.dataTransfer.setData('text/plain', '');
    event.target.style.opacity = '0.7';
}

function dragOverHandler(event) {
    event.preventDefault();
    event.target.style.border = '2px dashed #fff';
}

function dropHandler(event) {
    event.preventDefault();
    event.target.style.border = '';

    if (draggedOrder) {
        const orderArea = document.getElementById('order-area');

        if (event.target === orderArea || orderArea.contains(event.target)) {
            console.log(`Order '${draggedOrder.textContent}' placed!`);

            const clonedOrder = draggedOrder.cloneNode(true);
            orderArea.appendChild(clonedOrder);

            clonedOrder.style.transition = 'transform 0.3s ease-in-out';
            clonedOrder.style.transform = 'translate(0, 0)';

            draggedOrder.style.display = 'none';
        }

        draggedOrder = null;
    }
}