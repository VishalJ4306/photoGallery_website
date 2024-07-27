// Add smooth scrolling (optional)
const menuItems = document.querySelectorAll('.menu-item a');

menuItems.forEach(menuItem => {
  menuItem.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor link behavior

    // Remove any existing "active" class from menu items
    document.querySelectorAll('.menu-item').forEach(item => item.classList.remove('active'));

    // Add "active" class to the clicked menu item
    this.parentNode.classList.add('active');

    const targetSection = document.getElementById(this.getAttribute('href').slice(1));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Check for current page and add "active" class to the corresponding menu item
const currentPage = document.body.classList[0];
const currentMenuItem = document.querySelector(`a[href="${currentPage}.html"]`);

if (currentMenuItem) {
  currentMenuItem.parentNode.classList.add('active');
}
