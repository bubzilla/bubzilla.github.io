window.addEventListener('DOMContentLoaded', function () {
    // Create the container div
    var container = document.createElement('div');
    container.id = 'footer';
    container.className = 'container';

    // Create the navigation links
    var navLinks = document.createElement('div');
    navLinks.innerHTML = '<a href="https://github.com/bubzilla/bubzilla.github.io">source code</a>';

    container.appendChild(navLinks);

    // Append the container to the body (instead of prepending)
    document.body.appendChild(container);
});