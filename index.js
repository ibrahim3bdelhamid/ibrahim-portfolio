const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// التحقق من وضع المستخدم المحفوظ مسبقاً
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
});