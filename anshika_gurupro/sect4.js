function addRow() {
    // Create a new row with both "Add Row" and "Delete Row" buttons
    const newRow = `
        <div class="plan-row row mt-4">
            <div class="col-md-4">
                <label for="amenityName">Plan Name*</label>
                <input type="text" class="form-control" required>
            </div>
            <div class="col-md-4">
                <label for="uploadImage">Upload Banner Images (444px x 287px)*</label>
                <input type="file" class="form-control-file" required>
            </div>
            <div class="col-md-4 d-flex align-items-end">
                <button type="button" class="btn btn-success mr-2" onclick="addRow()">Add Row</button>
                <button type="button" class="btn btn-danger" onclick="deleteRow(this)">Delete Row</button>
            </div>
        </div>
    `;

    document.getElementById('planForm').insertAdjacentHTML('beforeend', newRow);
    updateButtons();
}

function deleteRow(button) {
    const row = button.closest('.plan-row');
    row.remove();
    updateButtons();
}

function updateButtons() {
    // Get all the rows
    const rows = document.querySelectorAll('.plan-row');
    
    // Iterate over the rows and manage buttons
    rows.forEach((row, index) => {
        const addBtn = row.querySelector('.btn-success');
        const deleteBtn = row.querySelector('.btn-danger');

        if (index === 0) {
            // For the first row, only show "Add Row" button
            addBtn.style.display = 'inline-block';
            deleteBtn.style.display = 'none';
        } else {
            // For subsequent rows, show both buttons
            addBtn.style.display = 'inline-block';
            deleteBtn.style.display = 'inline-block';
        }
    });
}

window.onload = function() {
    updateButtons();
};

function goBack() {
    // Add your logic for going back
    alert("Going back!");
}

function goNext() {
    // Add your logic for going next
    alert("Going next!");
}