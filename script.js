  <!-- JavaScript -->
<script>
document.addEventListener('DOMContentLoaded', () => {
    const heroTabs = document.querySelectorAll('.hero-tab');
    const heroContents = document.querySelectorAll('.hero-content');

    heroTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            heroTabs.forEach(t => t.classList.remove('active'));
            heroContents.forEach(content => content.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(tab.dataset.target).classList.add('active');
        });
    });
});
</script>
