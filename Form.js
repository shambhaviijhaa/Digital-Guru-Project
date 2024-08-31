$(document).ready(function() {
    $('#propertyForm').on('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Check if all fields are filled
        let isValid = true;
        $('#propertyForm input, #propertyForm select').each(function() {
            if ($(this).val() === '') {
                isValid = false;
                return false; // Break out of each loop
            }
        });

        if (!isValid) {
            alert('All the fields are necessary to be filled');
        } else {
            alert('Form submitted successfully');
            // Here you can handle the form submission, e.g., using AJAX
        }
    });
});
