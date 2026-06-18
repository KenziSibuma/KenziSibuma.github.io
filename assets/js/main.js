// Dark / light theme toggle with localStorage
(function () {
    const root = document.documentElement;
    const toggle = document.getElementById("themeToggle");
    const storedTheme = localStorage.getItem("kenzi-theme");

    if (storedTheme === "dark") {
        root.setAttribute("data-theme", "dark");
    }

    function updateIcon() {
        const isDark = root.getAttribute("data-theme") === "dark";
        toggle.innerHTML = isDark
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>';
    }

    updateIcon();

    toggle.addEventListener("click", () => {
        const isDark = root.getAttribute("data-theme") === "dark";
        if (isDark) {
            root.removeAttribute("data-theme");
            localStorage.setItem("kenzi-theme", "light");
        } else {
            root.setAttribute("data-theme", "dark");
            localStorage.setItem("kenzi-theme", "dark");
        }
        updateIcon();
    });
})();

// Mobile nav toggle
(function () {
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");

    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });

    // Close menu on link click (mobile)
    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
        });
    });
})();

// Timeline expand/collapse
(function () {
    const toggles = document.querySelectorAll(".toggle-details");

    toggles.forEach((btn) => {
        btn.addEventListener("click", () => {
            const body = btn.nextElementSibling;
            const expanded = btn.getAttribute("aria-expanded") === "true";
            btn.setAttribute("aria-expanded", String(!expanded));
            body.style.display = expanded ? "none" : "block";
            btn.innerHTML = expanded
                ? 'Details <i class="fa-solid fa-chevron-down"></i>'
                : 'Hide <i class="fa-solid fa-chevron-up"></i>';
        });
    });
})();

// Certifications tab switching
(function () {
    const tabs = document.querySelectorAll(".cert-tab");
    const panels = document.querySelectorAll(".cert-panel");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const target = tab.getAttribute("data-target");

            tabs.forEach((t) => {
                t.classList.remove("active");
                t.setAttribute("aria-selected", "false");
            });
            panels.forEach((p) => p.classList.remove("active"));

            tab.classList.add("active");
            tab.setAttribute("aria-selected", "true");
            document.getElementById(target).classList.add("active");
        });
    });
})();

// Global search across projects & certifications
(function () {
    const globalSearch = document.getElementById("globalSearch");
    const projectCards = document.querySelectorAll(".project-card");
    const certCards = document.querySelectorAll(".cert-card");

    function filterCards(query, cards) {
        const q = query.trim().toLowerCase();
        cards.forEach((card) => {
            const text = card.innerText.toLowerCase();
            const tags = (card.getAttribute("data-tags") || "").toLowerCase();
            const match = text.includes(q) || tags.includes(q);
            card.style.display = match ? "" : "none";
        });
    }

    globalSearch.addEventListener("input", (e) => {
        const value = e.target.value;
        filterCards(value, projectCards);
        filterCards(value, certCards);
    });
})();

// Section-specific search: projects
(function () {
    const projectSearch = document.getElementById("projectSearch");
    const projectCards = document.querySelectorAll(".project-card");

    projectSearch.addEventListener("input", (e) => {
        const q = e.target.value.trim().toLowerCase();
        projectCards.forEach((card) => {
            const text = card.innerText.toLowerCase();
            const tags = (card.getAttribute("data-tags") || "").toLowerCase();
            const match = text.includes(q) || tags.includes(q);
            card.style.display = match ? "" : "none";
        });
    });
})();

// Section-specific search: certifications
(function () {
    const certSearch = document.getElementById("certSearch");
    const certCards = document.querySelectorAll(".cert-card");

    certSearch.addEventListener("input", (e) => {
        const q = e.target.value.trim().toLowerCase();
        certCards.forEach((card) => {
            const text = card.innerText.toLowerCase();
            const tags = (card.getAttribute("data-tags") || "").toLowerCase();
            const match = text.includes(q) || tags.includes(q);
            card.style.display = match ? "" : "none";
        });
    });
})();

// Footer year
(function () {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
})();

