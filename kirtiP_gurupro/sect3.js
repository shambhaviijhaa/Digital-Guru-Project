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

