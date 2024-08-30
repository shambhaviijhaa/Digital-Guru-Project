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