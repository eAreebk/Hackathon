document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordion = header.parentElement;
        const content = header.nextElementSibling;
        const icon = header.querySelector('.icon');
        
        accordion.classList.toggle('active');
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
        icon.textContent = icon.textContent === '+' ? '−' : '+';
    });
});
