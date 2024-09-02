document.addEventListener('DOMContentLoaded', function() {
    // Add click event listener to all nav-links within sub-items
    document.querySelectorAll('.sub-item .nav-link').forEach(function(link) {
        link.addEventListener('click', function() {
            // Remove active class from all nav-links
            document.querySelectorAll('.sub-item .nav-link').forEach(function(el) {
                el.classList.remove('active');
            });

            // Add active class to the clicked nav-link
            this.classList.add('active');
        });
    });

    // Handle collapse toggle
    document.querySelectorAll('[data-toggle="collapse"]').forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const sepElement = document.getElementById(`sep${targetId.charAt(0).toUpperCase() + targetId.slice(1)}`);

            if (targetElement.classList.contains('show')) {
                sepElement.style.display = 'none';
            } else {
                sepElement.style.display = 'block';
            }
        });
    });
});



/*section-3 js */
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const rowTemplate = document.querySelector('.row').cloneNode(true);
    
    // Add event listeners to the initial row and hide the delete button
    const firstRow = document.querySelector('.row');
    addEventListeners(firstRow);
    hideDeleteButton(firstRow); // Hide delete button for the first row
  
    function addEventListeners(row) {
        const addRowButton = row.querySelector('.add-row');
        const deleteRowButton = row.querySelector('.delete-row');
        
        addRowButton.addEventListener('click', function() {
            const newRow = rowTemplate.cloneNode(true);
            addEventListeners(newRow);
            container.appendChild(newRow);
            showDeleteButton(newRow); // Show delete button for new rows
        });
  
        deleteRowButton.addEventListener('click', function() {
            row.remove();
        });
    }
  
    function hideDeleteButton(row) {
        const deleteRowButton = row.querySelector('.delete-row');
        deleteRowButton.style.display = 'none';
    }
  
    function showDeleteButton(row) {
        const deleteRowButton = row.querySelector('.delete-row');
        deleteRowButton.style.display = 'inline-block';
    }
  });
  
  