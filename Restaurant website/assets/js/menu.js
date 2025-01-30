//MENU PAGE
document.addEventListener('DOMContentLoaded', function () {
    initMenuFilter(); 
  });
  
  function initMenuFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-list .item');
  
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterCategory = button.getAttribute('data-id');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
  
            // Filter the menu items based on category
            menuItems.forEach(item => {
                if (filterCategory === 'all' || item.getAttribute('data-category') === filterCategory) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
  }
  