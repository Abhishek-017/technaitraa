function filterProjects() {
    const checkboxes = document.querySelectorAll('.category-checkbox');
    const projects = document.querySelectorAll('.project');
    const selectedCategories = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    projects.forEach(project => {
        const projectCategory = project.getAttribute('data-category');
        if (selectedCategories.length === 0 || selectedCategories.includes(projectCategory)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}
//categories-end 
