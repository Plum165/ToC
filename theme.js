document.addEventListener("DOMContentLoaded", () => {
    const themeDropdown = document.getElementById("theme-dropdown");
    const themeChip = document.getElementById("theme-chip");

    const themeColors = {
      'cat-noir': '#81e733',
      'blood-red': '#b30000',
      'sapphire-steel': '#3E92CC',
      'emerald-charcoal': '#009B77',
      'digital-twilight': '#E94560',
      'coral-aqua': '#4ECDC4',
      'electric-citrus': '#F7B801',
      'artisan-clay': '#E07A5F',
      'forest-canopy': '#2D6A4F',
      'ocean-depth': '#07575B',
      'desert-sunset': '#B56576',
      'monochrome-focus': '#333333',
      'soft-nordic': '#D90429',
      'neutral-peach': '#6B5B95',
      'retro-pop': '#D95F43',
      'cyberpunk-glow': '#45A29E',
      'plum-gold': '#FDB833',
      'red-blue': '#ef233c',
      'purple-black': '#8e44ad'
    };

    // Load saved theme
    const savedTheme = localStorage.getItem("selectedTheme");
    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
        themeDropdown.value = savedTheme;
        themeChip.style.backgroundColor = themeColors[savedTheme];
    }

    // Save theme on change
    themeDropdown.addEventListener("change", (e) => {
        const selectedTheme = e.target.value;
        document.documentElement.setAttribute("data-theme", selectedTheme);
        themeChip.style.backgroundColor = themeColors[selectedTheme] || "#fff";
        localStorage.setItem("selectedTheme", selectedTheme);
    });
});
