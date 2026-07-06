// PURE MED Client Application Controller (Bilingual Version)

const TRANSLATIONS = {
    en: {
        nav_explorer: "Explorer",
        nav_symptom: "Symptom Checker",
        nav_herbs: "Herbs Guide",
        nav_saved: "Saved",
        hero_badge: "🌿 Traditional Tamil Healing & Siddha Remedies",
        hero_title: "Natural Healing, Powered by Ancient Wisdom",
        hero_desc: "Discover over 140+ traditional remedies (*Paatti Vaithiyam*) followed by Tamilians to heal diseases naturally using everyday kitchen herbs and spices.",
        stat_remedies: "Remedies",
        stat_herbs: "Medicinal Herbs",
        stat_languages: "Languages",
        quick_search_label: "Popular:",
        progress_area: "Area",
        progress_symptoms: "Symptoms",
        progress_results: "Results",
        toast_saved: "Remedy saved to bookmarks",
        toast_removed: "Remedy removed from bookmarks",
        search_placeholder: "Search by disease (e.g. Cough, Migraine, Ulcer, Allergy) or ingredients...",
        cat_title: "Explore by Category",
        results_title: "All Remedies",
        results_count_format: "{count} remedies found",
        results_count_format_single: "1 remedy found",
        results_count_format_none: "0 remedies found",
        card_view_recipe: "View Recipe",
        wizard_badge: "🧠 Interactive Finder",
        wizard_title: "Symptom Remedy Checker",
        wizard_desc: "Tell us what you are feeling, and we will match you with the best traditional Tamil home remedies.",
        wizard_step_1_of_3: "Step 1 of 3",
        wizard_step1_title: "Select the affected system/area",
        sys_respiratory_title: "Cold, Cough & Breathing",
        sys_respiratory_desc: "Issues related to lungs, chest, throat, nose, and fever.",
        sys_digestion_title: "Digestion & Stomach",
        sys_digestion_desc: "Stomach aches, nausea, acidity, ulcers, or digestive complaints.",
        sys_pain_title: "Pain & Inflammation",
        sys_pain_desc: "Headaches, joint pain, muscle strain, or toothache.",
        sys_skin_title: "Skin & Hair Care",
        sys_skin_desc: "Acne, hair fall, dandruff, allergies, or minor cuts.",
        btn_next: "Next Step",
        wizard_step_2_of_3: "Step 2 of 3",
        wizard_step2_title: "Select your specific symptoms",
        wizard_step2_desc: "You can select multiple symptoms below:",
        btn_back: "Back",
        btn_find: "Find Remedy",
        wizard_step_3_of_3: "Step 3 of 3",
        wizard_step3_title: "Suggested Remedies for You",
        btn_restart: "Start Over",
        herbs_badge: "📚 Herb Library",
        herbs_title: "Tamil Medicinal Herbs Encyclopedia",
        herbs_desc: "Learn about the primary herbs used in Tamil traditional medicines, their botanical properties, and how to consume them.",
        saved_badge: "🔖 Bookmarks",
        saved_title: "Your Saved Remedies",
        saved_desc: "Access your bookmarked natural remedies instantly, saved for offline lookup.",
        saved_empty_title: "No Bookmarks Saved Yet",
        saved_empty_desc: "Browse the remedies and click the bookmark button on any remedy card to save it here.",
        btn_browse: "Browse Remedies",
        m_tab_details: "Details & Info",
        m_tab_prep: "How to Prepare",
        m_tab_safety: "Usage & Safety",
        m_ingredients_title: "Key Ingredients",
        m_prep_title: "Preparation Guide",
        m_usage_title: "Suggested Usage",
        m_safety_title: "Precautions & Safety",
        btn_save_remedy: "Save Remedy",
        btn_save_remedy_active: "Saved in Bookmarks",
        btn_close_remedy: "Close Remedy",
        footer_copy: "© 2026 PURE MED. Built as a repository of Tamil Traditional Medicine Wisdom.",
        footer_disclaimer: "Disclaimer: The remedies and information listed in this application are traditional Tamil home remedies (Paatti Vaithiyam). They are intended for educational and general wellness support, and should NOT be considered professional medical advice. Always consult a qualified physician or Siddha doctor for severe illness or persistent symptoms.",
        empty_search_title: "No Remedies Found",
        empty_search_desc: "Try searching with another keyword or change your category filter.",
        symptom_cures_prefix: "Cures: ",
        symptom_ingredients_prefix: " | Ingredients: "
    },
    ta: {
        nav_explorer: "ஆராய்வு",
        nav_symptom: "அறிகுறி கண்டறிதல்",
        nav_herbs: "மூலிகை கையேடு",
        nav_saved: "சேமிக்கப்பட்டவை",
        hero_badge: "🌿 பாரம்பரிய தமிழ் மருத்துவ மற்றும் சித்த வைத்திய முறைகள்",
        hero_title: "இயற்கை மருத்துவம், பண்டைய ஞானத்தின் ஆற்றல்",
        hero_desc: "அன்றாட சமையலறை மூலிகைகள் மற்றும் மசாலாப் பொருட்களைப் பயன்படுத்தி நோய்களை இயற்கையாகக் குணப்படுத்த தமிழர்கள் பின்பற்றும் 140-க்கும் மேற்பட்ட பாரம்பரிய வீட்டு மருத்துவ முறைகளை (பாட்டி வைத்தியம்) கண்டறியுங்கள்.",
        stat_remedies: "வைத்தியங்கள்",
        stat_herbs: "மருத்துவ மூலிகைகள்",
        stat_languages: "மொழிகள்",
        quick_search_label: "பிரபலமானவை:",
        progress_area: "பகுதி",
        progress_symptoms: "அறிகுறிகள்",
        progress_results: "முடிவுகள்",
        toast_saved: "வைத்தியம் சேமிக்கப்பட்டது",
        toast_removed: "வைத்தியம் நீக்கப்பட்டது",
        search_placeholder: "நோய் (எ.கா. சளி, காய்ச்சல், அல்சர், தலைவலி) அல்லது மூலிகைகள் மூலம் தேடுக...",
        cat_title: "வகை வாரியாக ஆராய்க",
        results_title: "அனைத்து வைத்தியங்கள்",
        results_count_format: "{count} வைத்தியங்கள் கண்டறியப்பட்டன",
        results_count_format_single: "1 வைத்தியம் கண்டறியப்பட்டது",
        results_count_format_none: "வைத்தியங்கள் எதுவும் கண்டறியப்படவில்லை",
        card_view_recipe: "வைத்தியம் காண்க",
        wizard_badge: "🧠 உடல் அறிகுறி கண்டறிதல்",
        wizard_title: "அறிகுறி வைத்திய கண்டறிவி",
        wizard_desc: "உங்கள் உடல் அறிகுறிகளைத் தேர்வு செய்யவும், உங்களுக்கான சிறந்த பாரம்பரிய தமிழ் வீட்டு வைத்தியங்களை நாங்கள் பரிந்துரைக்கிறோம்.",
        wizard_step_1_of_3: "படி 1 of 3",
        wizard_step1_title: "பாதிக்கப்பட்ட உடல் பகுதி / மண்டலத்தைத் தேர்ந்தெடுக்கவும்",
        sys_respiratory_title: "சளி, இருமல் & மூச்சுப் பாதை",
        sys_respiratory_desc: "நுரையீரல், மார்பு, தொண்டை, மூக்கு மற்றும் காய்ச்சல் தொடர்பான பிரச்சனைகள்.",
        sys_digestion_title: "செரிமானம் & வயிறு",
        sys_digestion_desc: "வயிற்று வலி, குமட்டல், நெஞ்செரிச்சல், அல்சர் அல்லது செரிமானக் கோளாறுகள்.",
        sys_pain_title: "வலி & வீக்கம் நிவாரணம்",
        sys_pain_desc: "தலைவலி, மூட்டு வலி, தசைப்பிடிப்பு அல்லது பல் வலி.",
        sys_skin_title: "சருமம் & கூந்தல் பராமரிப்பு",
        sys_skin_desc: "முகப்பரு, முடி உதிர்தல், பொடுகு, ஒவ்வாமை அல்லது சிறிய வெட்டுக்கள்.",
        btn_next: "அடுத்த படி",
        wizard_step_2_of_3: "படி 2 of 3",
        wizard_step2_title: "உங்களுக்கான குறிப்பிட்ட அறிகுறிகளைத் தேர்ந்தெடுக்கவும்",
        wizard_step2_desc: "கீழே உள்ள பல அறிகுறிகளை நீங்கள் தேர்ந்தெடுக்கலாம்:",
        btn_back: "முந்தைய படி",
        btn_find: "வைத்தியம் காண்க",
        wizard_step_3_of_3: "படி 3 of 3",
        wizard_step3_title: "உங்களுக்காக பரிந்துரைக்கப்படும் வைத்தியங்கள்",
        btn_restart: "மீண்டும் தொடங்கவும்",
        herbs_badge: "📚 மூலிகை நூலகம்",
        herbs_title: "தமிழ் மருத்துவ மூலிகைகள் கலைக்களஞ்சியம்",
        herbs_desc: "தமிழ் பாரம்பரிய மருத்துவத்தில் பயன்படுத்தப்படும் முக்கிய மூலிகைகள், அவற்றின் தாவரவியல் பண்புகள் மற்றும் அவற்றை எவ்வாறு உட்கொள்வது என்பது பற்றி அறிந்து கொள்ளுங்கள்.",
        saved_badge: "🔖 சேமிக்கப்பட்டவை",
        saved_title: "நீங்கள் சேமித்த வைத்தியங்கள்",
        saved_desc: "ஆஃப்லைனில் விரைவாகப் பார்ப்பதற்காக நீங்கள் சேமித்து வைத்த இயற்கை வைத்தியங்கள்.",
        saved_empty_title: "இன்னும் எந்த வைத்தியமும் சேமிக்கப்படவில்லை",
        saved_empty_desc: "வைத்தியங்களை ஆராய்ந்து, அவற்றைச் சேமிக்க ஏதேனும் ஒரு கார்டில் உள்ள புக்மார்க் பொத்தானைக் கிளிக் செய்யவும்.",
        btn_browse: "வைத்தியங்களை ஆராய்க",
        m_tab_details: "விபரங்கள் & தகவல்கள்",
        m_tab_prep: "தயாரிப்பது எப்படி",
        m_tab_safety: "பயன்பாடு & பாதுகாப்பு",
        m_ingredients_title: "முக்கிய பொருட்கள்",
        m_prep_title: "தயாரிப்பு வழிமுறைகள்",
        m_usage_title: "பரிந்துரைக்கப்படும் பயன்பாடு",
        m_safety_title: "முன்னெச்சரிக்கைகள் & பாதுகாப்பு",
        btn_save_remedy: "வைத்தியத்தைச் சேமி",
        btn_save_remedy_active: "சேமிக்கப்பட்டுள்ளது",
        btn_close_remedy: "மூடவும்",
        footer_copy: "© 2026 பியூர் மெட். தமிழ் பாரம்பரிய மருத்துவ அறிவின் களஞ்சியமாக உருவாக்கப்பட்டது.",
        footer_disclaimer: "பொறுப்புத் துறப்பு: இந்த செயலியில் பட்டியலிடப்பட்டுள்ள வைத்தியங்கள் மற்றும் தகவல்கள் பாரம்பரிய தமிழ் வீட்டு வைத்தியம் (பாட்டி வைத்தியம்) ஆகும். இவை கல்வி மற்றும் பொதுவான நல்வாழ்வு ஆதரவிற்காக மட்டுமே வழங்கப்படுகின்றன, மேலும் இவற்றை தொழில்முறை மருத்துவ ஆலோசனையாகக் கருதக்கூடாது. தீவிரமான நோய் அல்லது தொடர்ச்சியான அறிகுறிகளுக்கு எப்போதும் தகுதி வாய்ந்த மருத்துவர் அல்லது சித்த மருத்துவரை அணுகவும்.",
        empty_search_title: "வைத்தியங்கள் எதுவும் கண்டறியப்படவில்லை",
        empty_search_desc: "வேறொரு தேடல் சொல்லைப் பயன்படுத்தி தேடவும் அல்லது உங்கள் வடிகட்டியை மாற்றவும்.",
        symptom_cures_prefix: "குணப்படுத்தும் நோய்: ",
        symptom_ingredients_prefix: " | தேவையான பொருட்கள்: "
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // ----------------------------------------------------
    // State Management
    // ----------------------------------------------------
    let currentLanguage = localStorage.getItem("puremed_lang") || "en";
    let currentCategory = "all";
    let searchQuery = "";
    let bookmarkedIds = JSON.parse(localStorage.getItem("puremed_bookmarks")) || [];
    let currentActiveModalRemedy = null;

    // Symptom Checker State
    let selectedSystem = null;
    let selectedSymptoms = [];

    // Initialize Lucide icons
    lucide.createIcons();

    // ----------------------------------------------------
    // UX Helpers: Toast, Scroll, Mobile Menu
    // ----------------------------------------------------
    function showToast(message, icon = "✓") {
        const toast = document.createElement("div");
        toast.className = "toast";
        toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;
        toastContainer.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    function updateHeroStats() {
        statRemediesCount.textContent = REMEDIES.length + "+";
        if (typeof HERBS_ENCYCLOPEDIA !== "undefined") {
            statHerbsCount.textContent = HERBS_ENCYCLOPEDIA.length + "+";
        }
    }

    const POPULAR_SEARCHES = ["Cold", "Cough", "Headache", "Fever", "Acidity", "Hair Fall"];

    function renderQuickChips() {
        quickChipsContainer.innerHTML = "";
        POPULAR_SEARCHES.forEach(term => {
            const chip = document.createElement("button");
            chip.className = "quick-chip";
            const match = REMEDIES.find(r => r.disease_en.toLowerCase() === term.toLowerCase());
            const label = currentLanguage === "ta" && match ? match.disease_ta : term;
            chip.textContent = label;
            chip.addEventListener("click", () => {
                searchInput.value = label;
                searchQuery = label;
                searchClearBtn.style.display = "flex";
                suggestionsDropdown.classList.remove("active");
                renderRemedies();
                searchInput.focus();
            });
            quickChipsContainer.appendChild(chip);
        });
    }

    function updateWizardProgress(step) {
        const steps = document.querySelectorAll(".progress-step");
        const lines = document.querySelectorAll(".progress-line");
        steps.forEach((s, i) => {
            const stepNum = i + 1;
            s.classList.remove("active", "completed");
            if (stepNum < step) s.classList.add("completed");
            else if (stepNum === step) s.classList.add("active");
        });
        lines.forEach((line, i) => {
            line.classList.toggle("filled", i < step - 1);
        });
    }

    // ----------------------------------------------------
    // Element Selectors
    // ----------------------------------------------------
    const mainNav = document.getElementById("main-nav");
    const tabPanels = document.querySelectorAll(".tab-panel");
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    const logoLink = document.getElementById("logo-link");
    const headerEl = document.querySelector(".header");
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const scrollTopBtn = document.getElementById("scroll-top-btn");
    const toastContainer = document.getElementById("toast-container");
    const quickChipsContainer = document.getElementById("quick-chips-container");
    const statRemediesCount = document.getElementById("stat-remedies-count");
    const statHerbsCount = document.getElementById("stat-herbs-count");
    
    // Language Selection Elements
    const langBtnEn = document.getElementById("lang-btn-en");
    const langBtnTa = document.getElementById("lang-btn-ta");
    
    // Search Elements
    const searchInput = document.getElementById("disease-search-input");
    const searchClearBtn = document.getElementById("search-clear-btn");
    const suggestionsDropdown = document.getElementById("search-suggestions-dropdown");
    
    // Explorer Elements
    const categoryContainer = document.getElementById("category-filter-container");
    const remediesGrid = document.getElementById("remedies-grid-container");
    const resultsTitleText = document.getElementById("results-title");
    const resultsCountBadge = document.getElementById("results-count-badge");

    // Modal Elements
    const detailModal = document.getElementById("remedy-detail-modal");
    const modalCloseBtn = document.getElementById("modal-close-btn");
    const modalCloseActionBtn = document.getElementById("modal-close-action-btn");
    const modalBookmarkBtn = document.getElementById("modal-bookmark-toggle-btn");
    const modalBookmarkBtnText = document.getElementById("modal-bookmark-btn-text");
    const modalTabsContainer = document.querySelector(".modal-tabs");
    const modalTabButtons = document.querySelectorAll(".modal-tab-btn");
    const modalTabPanels = document.querySelectorAll(".modal-tab-panel");
    
    // Bookmark Section Elements
    const bookmarksGrid = document.getElementById("bookmarks-grid-container");
    const bookmarksEmptyState = document.getElementById("bookmarks-empty-state");
    const bookmarksExploreBtn = document.getElementById("bookmarks-explore-btn");
    const bookmarkCountSpan = document.getElementById("bookmark-count");

    // Wizard (Symptom Checker) Elements
    const systemRadioButtons = document.querySelectorAll('input[name="system-select"]');
    const wizardToStep2Btn = document.getElementById("wizard-to-step-2");
    const wizardToStep3Btn = document.getElementById("wizard-to-step-3");
    const wizardBackToStep1Btn = document.getElementById("wizard-back-to-step-1");
    const wizardRestartBtn = document.getElementById("wizard-restart");
    const symptomsSelectionContainer = document.getElementById("symptoms-selection-container");
    const matchedRemediesContainer = document.getElementById("matched-remedies-container");
    const symptomsTitleText = document.getElementById("symptoms-title-text");

    // Header scroll effect
    window.addEventListener("scroll", () => {
        headerEl.classList.toggle("scrolled", window.scrollY > 20);
        scrollTopBtn.classList.toggle("visible", window.scrollY > 400);
    }, { passive: true });

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Mobile menu toggle
    mobileMenuBtn.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("mobile-open");
        mobileMenuBtn.classList.toggle("active", isOpen);
        mobileMenuBtn.setAttribute("aria-expanded", isOpen);
    });

    function closeMobileMenu() {
        mainNav.classList.remove("mobile-open");
        mobileMenuBtn.classList.remove("active");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
    }

    // ----------------------------------------------------
    // Initialize Theme & Language
    // ----------------------------------------------------
    const savedTheme = localStorage.getItem("puremed_theme") || "light";
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }

    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
        localStorage.setItem("puremed_theme", theme);
    });

    // Language Toggle Click Event
    function setLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem("puremed_lang", lang);
        
        // Update active class on buttons
        if (lang === "ta") {
            langBtnTa.classList.add("active");
            langBtnEn.classList.remove("active");
        } else {
            langBtnEn.classList.add("active");
            langBtnTa.classList.remove("active");
        }

        updateLanguageUI();
        
        // Re-render categories & results
        renderCategories();
        renderRemedies();
        renderQuickChips();

        // Update active modal details if modal is open
        if (currentActiveModalRemedy) {
            openDetailModal(currentActiveModalRemedy);
        }

        // Re-render active tab data
        const activeTab = document.querySelector(".nav-link.active").getAttribute("data-tab");
        if (activeTab === "bookmarks-section") {
            renderBookmarks();
        } else if (activeTab === "herbs-encyclopedia") {
            renderHerbs();
        } else if (activeTab === "symptom-finder") {
            // Restart checker if middle of steps to prevent text mismatches
            resetSymptomChecker();
        }
    }

    langBtnEn.addEventListener("click", () => setLanguage("en"));
    langBtnTa.addEventListener("click", () => setLanguage("ta"));

    // Update HTML translatable elements based on language
    function updateLanguageUI() {
        // Translate all nodes with data-translate attributes
        document.querySelectorAll("[data-translate]").forEach(elem => {
            const key = elem.getAttribute("data-translate");
            if (TRANSLATIONS[currentLanguage][key]) {
                elem.textContent = TRANSLATIONS[currentLanguage][key];
            }
        });

        // Translate placeholders
        searchInput.placeholder = TRANSLATIONS[currentLanguage].search_placeholder;
    }

    // ----------------------------------------------------
    // Tab Navigation
    // ----------------------------------------------------
    function switchTab(tabId) {
        // Update navigation links active state
        document.querySelectorAll(".nav-link").forEach(link => {
            if (link.getAttribute("data-tab") === tabId) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });

        // Switch panels
        tabPanels.forEach(panel => {
            if (panel.id === tabId) {
                panel.classList.add("active");
            } else {
                panel.classList.remove("active");
            }
        });

        // Trigger updates if specific tab opened
        if (tabId === "bookmarks-section") {
            renderBookmarks();
        } else if (tabId === "herbs-encyclopedia") {
            renderHerbs();
        } else if (tabId === "remedies-explorer") {
            renderRemedies();
        }
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
        closeMobileMenu();
    }

    mainNav.addEventListener("click", (e) => {
        const link = e.target.closest(".nav-link");
        if (link) {
            const tabId = link.getAttribute("data-tab");
            switchTab(tabId);
            closeMobileMenu();
        }
    });

    logoLink.addEventListener("click", (e) => {
        e.preventDefault();
        switchTab("remedies-explorer");
    });

    bookmarksExploreBtn.addEventListener("click", () => {
        switchTab("remedies-explorer");
    });

    // ----------------------------------------------------
    // Category Loading & Rendering
    // ----------------------------------------------------
    function renderCategories() {
        categoryContainer.innerHTML = "";
        
        // Add "All Remedies" category
        const allBtn = document.createElement("button");
        allBtn.className = `category-btn ${currentCategory === "all" ? "active" : ""}`;
        allBtn.setAttribute("data-category", "all");
        allBtn.id = "cat-all-btn";
        
        const allName = currentLanguage === "ta" ? "அனைத்து வைத்தியங்கள்" : "All Remedies";
        allBtn.innerHTML = `
            <span class="cat-icon">⭐</span>
            <span class="cat-name">${allName}</span>
        `;
        categoryContainer.appendChild(allBtn);

        // Add standard categories from data.js
        Object.keys(CATEGORIES).forEach(key => {
            const cat = CATEGORIES[key];
            const btn = document.createElement("button");
            btn.className = `category-btn ${currentCategory === cat.id ? "active" : ""}`;
            btn.setAttribute("data-category", cat.id);
            btn.id = `cat-${cat.id}-btn`;
            
            const catName = currentLanguage === "ta" ? cat.name_ta : cat.name_en;
            btn.innerHTML = `
                <span class="cat-icon">${cat.icon}</span>
                <span class="cat-name">${catName}</span>
            `;
            categoryContainer.appendChild(btn);
        });

    }

    categoryContainer.addEventListener("click", (e) => {
        const btn = e.target.closest(".category-btn");
        if (btn) {
            document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.getAttribute("data-category");
            
            searchQuery = "";
            searchInput.value = "";
            searchClearBtn.style.display = "none";
            
            renderRemedies();
        }
    });

    // ----------------------------------------------------
    // Card Rendering System
    // ----------------------------------------------------
    function escapeRegExp(value) {
        return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    function normalizeSearchTerm(value) {
        return String(value || "").trim().toLowerCase().normalize("NFC");
    }

    function createRemedyCard(remedy) {
        const isBookmarked = bookmarkedIds.includes(remedy.id);
        const catObj = CATEGORIES[remedy.category] || { name_en: "General", name_ta: "பொது", icon: "🌱" };
        const catName = currentLanguage === "ta" ? catObj.name_ta : catObj.name_en;

        const disease = currentLanguage === "ta" ? remedy.disease_ta : remedy.disease_en;
        const name = currentLanguage === "ta" ? remedy.name_ta : remedy.name_en;
        const ingredients = currentLanguage === "ta" ? remedy.ingredients_ta : remedy.ingredients_en;
        
        const card = document.createElement("article");
        card.className = "remedy-card";
        card.setAttribute("data-id", remedy.id);
        
        // Highlight search keywords if present
        let displayName = name;
        let displayDisease = disease;
        if (searchQuery) {
            const safeQuery = escapeRegExp(searchQuery);
            const regex = new RegExp(`(${safeQuery})`, "gi");
            displayName = name.replace(regex, "<mark>$1</mark>");
            displayDisease = disease.replace(regex, "<mark>$1</mark>");
        }

        const ingredientsToShow = ingredients.slice(0, 3);
        const hasMoreIngredients = ingredients.length > 3;
        const moreLabel = currentLanguage === "ta" ? "மேலும்" : "more";
        const viewRecipeLabel = TRANSLATIONS[currentLanguage].card_view_recipe;

        card.innerHTML = `
            <div class="card-badge">${catObj.icon} ${catName}</div>
            <div class="card-disease">${displayDisease}</div>
            <h4>${displayName}</h4>
            <div class="card-ingredients">
                ${ingredientsToShow.map(ing => `<span class="ingredient-tag">${ing}</span>`).join("")}
                ${hasMoreIngredients ? `<span class="ingredient-tag">+${ingredients.length - 3} ${moreLabel}</span>` : ""}
            </div>
            <div class="card-footer">
                <button class="card-action-btn" data-action="view" id="view-btn-${remedy.id}">
                    ${viewRecipeLabel} <i data-lucide="arrow-right"></i>
                </button>
                <button class="card-bookmark-btn ${isBookmarked ? "active" : ""}" data-action="bookmark" aria-label="Bookmark remedy" id="bookmark-btn-${remedy.id}">
                    <i data-lucide="bookmark"></i>
                </button>
            </div>
        `;
        
        return card;
    }

    function renderRemedies() {
        remediesGrid.innerHTML = "";
        
        // Filter remedies
        const filtered = REMEDIES.filter(rem => {
            // Category check
            if (currentCategory !== "all" && rem.category !== currentCategory) {
                return false;
            }
            
            // Search query check (checks both English and Tamil properties simultaneously)
            if (searchQuery) {
                const query = normalizeSearchTerm(searchQuery);
                const matchesDiseaseEn = normalizeSearchTerm(rem.disease_en).includes(query);
                const matchesDiseaseTa = normalizeSearchTerm(rem.disease_ta).includes(query);
                const matchesNameEn = normalizeSearchTerm(rem.name_en).includes(query);
                const matchesNameTa = normalizeSearchTerm(rem.name_ta).includes(query);
                const matchesIngredientsEn = rem.ingredients_en.some(ing => normalizeSearchTerm(ing).includes(query));
                const matchesIngredientsTa = rem.ingredients_ta.some(ing => normalizeSearchTerm(ing).includes(query));
                
                return matchesDiseaseEn || matchesDiseaseTa || matchesNameEn || matchesNameTa || matchesIngredientsEn || matchesIngredientsTa;
            }
            
            return true;
        });

        // Set title and counter
        if (searchQuery) {
            const resultsLabel = currentLanguage === "ta" ? `"${searchQuery}" க்கான முடிவுகள்` : `Search Results for "${searchQuery}"`;
            resultsTitleText.textContent = resultsLabel;
        } else if (currentCategory !== "all") {
            resultsTitleText.textContent = currentLanguage === "ta" ? CATEGORIES[currentCategory].name_ta : CATEGORIES[currentCategory].name_en;
        } else {
            resultsTitleText.textContent = TRANSLATIONS[currentLanguage].results_title;
        }
        
        // Format results count
        let countText = "";
        if (filtered.length === 0) {
            countText = TRANSLATIONS[currentLanguage].results_count_format_none;
        } else if (filtered.length === 1) {
            countText = TRANSLATIONS[currentLanguage].results_count_format_single;
        } else {
            countText = TRANSLATIONS[currentLanguage].results_count_format.replace("{count}", filtered.length);
        }
        resultsCountBadge.textContent = countText;

        // Render cards with staggered animation
        if (filtered.length > 0) {
            filtered.forEach((rem, idx) => {
                const card = createRemedyCard(rem);
                card.style.animationDelay = `${Math.min(idx * 0.05, 0.5)}s`;
                remediesGrid.appendChild(card);
            });
        } else {
            remediesGrid.innerHTML = `
                <div class="empty-state" style="grid-column: 1 / -1;">
                    <span class="empty-icon">🔍</span>
                    <h3>${TRANSLATIONS[currentLanguage].empty_search_title}</h3>
                    <p>${TRANSLATIONS[currentLanguage].empty_search_desc}</p>
                </div>
            `;
        }

        lucide.createIcons();
    }

    // Grid interaction delegate for cards
    function handleCardGridClick(e, listSource) {
        const viewBtn = e.target.closest('[data-action="view"]');
        const bookmarkBtn = e.target.closest('[data-action="bookmark"]');
        const card = e.target.closest(".remedy-card");

        if (!card) return;
        const id = card.getAttribute("data-id");
        const remedy = REMEDIES.find(r => r.id === id);
        
        if (!remedy) return;

        if (viewBtn) {
            openDetailModal(remedy);
        } else if (bookmarkBtn) {
            toggleBookmark(id);
            const isActive = bookmarkedIds.includes(id);
            bookmarkBtn.classList.toggle("active", isActive);
            
            if (listSource === "bookmarks") {
                renderBookmarks();
            }
        }
    }

    remediesGrid.addEventListener("click", (e) => handleCardGridClick(e, "explorer"));
    bookmarksGrid.addEventListener("click", (e) => handleCardGridClick(e, "bookmarks"));

    // ----------------------------------------------------
    // Live Search Autocomplete Suggestions
    // ----------------------------------------------------
    function getSuggestions(query) {
        if (!query) return [];
        const cleanQuery = normalizeSearchTerm(query);
        
        const matches = [];
        for (const rem of REMEDIES) {
            const disease = currentLanguage === "ta" ? rem.disease_ta : rem.disease_en;
            const name = currentLanguage === "ta" ? rem.name_ta : rem.name_en;
            
            if (normalizeSearchTerm(rem.disease_en).includes(cleanQuery) || normalizeSearchTerm(rem.disease_ta).includes(cleanQuery)) {
                matches.push({ type: "disease", label: disease, remedy: rem });
            } 
            else if (normalizeSearchTerm(rem.name_en).includes(cleanQuery) || normalizeSearchTerm(rem.name_ta).includes(cleanQuery)) {
                matches.push({ type: "remedy", label: name, remedy: rem });
            }
            if (matches.length >= 6) break;
        }
        return matches;
    }

    function renderSuggestions(suggestions) {
        suggestionsDropdown.innerHTML = "";
        
        if (suggestions.length === 0) {
            suggestionsDropdown.classList.remove("active");
            return;
        }

        suggestions.forEach((sug, idx) => {
            const item = document.createElement("button");
            item.className = "suggestion-item";
            item.id = `suggestion-item-${idx}`;
            
            const icon = sug.type === "disease" ? "🤒" : "🥄";
            const nameText = currentLanguage === "ta" ? sug.remedy.name_ta : sug.remedy.name_en;

            item.innerHTML = `
                <span>${icon} <span class="suggestion-disease">${sug.label}</span></span>
                <span class="suggestion-medicine">${nameText}</span>
            `;
            
            item.addEventListener("click", () => {
                const searchVal = currentLanguage === "ta" ? sug.remedy.disease_ta : sug.remedy.disease_en;
                searchInput.value = searchVal;
                searchQuery = searchVal;
                searchClearBtn.style.display = "flex";
                suggestionsDropdown.classList.remove("active");
                
                openDetailModal(sug.remedy);
                renderRemedies();
            });
            suggestionsDropdown.appendChild(item);
        });

        suggestionsDropdown.classList.add("active");
    }

    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.trim();
        
        if (searchQuery) {
            searchClearBtn.style.display = "flex";
            const suggestions = getSuggestions(searchQuery);
            renderSuggestions(suggestions);
        } else {
            searchClearBtn.style.display = "none";
            suggestionsDropdown.classList.remove("active");
        }
        
        renderRemedies();
    });

    searchClearBtn.addEventListener("click", () => {
        searchInput.value = "";
        searchQuery = "";
        searchClearBtn.style.display = "none";
        suggestionsDropdown.classList.remove("active");
        renderRemedies();
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".search-wrapper")) {
            suggestionsDropdown.classList.remove("active");
        }
    });

    // ----------------------------------------------------
    // Bookmark Manager (LocalStorage)
    // ----------------------------------------------------
    function toggleBookmark(id) {
        const index = bookmarkedIds.indexOf(id);
        if (index === -1) {
            bookmarkedIds.push(id);
            showToast(TRANSLATIONS[currentLanguage].toast_saved, "🔖");
        } else {
            bookmarkedIds.splice(index, 1);
            showToast(TRANSLATIONS[currentLanguage].toast_removed, "✕");
        }
        localStorage.setItem("puremed_bookmarks", JSON.stringify(bookmarkedIds));
        updateBookmarkBadge();
    }

    function updateBookmarkBadge() {
        bookmarkCountSpan.textContent = bookmarkedIds.length;
    }

    function renderBookmarks() {
        bookmarksGrid.innerHTML = "";
        
        const bookmarkedRemedies = REMEDIES.filter(rem => bookmarkedIds.includes(rem.id));
        
        if (bookmarkedRemedies.length > 0) {
            bookmarksGrid.style.display = "grid";
            bookmarksEmptyState.style.display = "none";
            
            bookmarkedRemedies.forEach((rem, idx) => {
                const card = createRemedyCard(rem);
                card.style.animationDelay = `${Math.min(idx * 0.05, 0.5)}s`;
                bookmarksGrid.appendChild(card);
            });
        } else {
            bookmarksGrid.style.display = "none";
            bookmarksEmptyState.style.display = "flex";
        }
        
        lucide.createIcons();
    }

    // ----------------------------------------------------
    // Detail Modal Controller
    // ----------------------------------------------------
    function openDetailModal(remedy) {
        currentActiveModalRemedy = remedy;
        
        const catObj = CATEGORIES[remedy.category] || { name_en: "General", name_ta: "பொது", icon: "🌱" };
        const catName = currentLanguage === "ta" ? catObj.name_ta : catObj.name_en;
        const disease = currentLanguage === "ta" ? remedy.disease_ta : remedy.disease_en;
        const name = currentLanguage === "ta" ? remedy.name_ta : remedy.name_en;
        const ingredients = currentLanguage === "ta" ? remedy.ingredients_ta : remedy.ingredients_en;
        
        // Set basic details
        document.getElementById("modal-disease-badge").textContent = `${catObj.icon} ${disease}`;
        document.getElementById("modal-remedy-name").textContent = name;
        
        // Native Tamil details text label
        document.getElementById("modal-tamil-name").textContent = remedy.name_ta;

        // Render ingredients with benefits
        const ingredientsContainer = document.getElementById("modal-ingredients-list-container");
        ingredientsContainer.innerHTML = "";
        
        ingredients.forEach((ing, i) => {
            const li = document.createElement("li");
            
            // Highlight common ingredients and their traditional benefits (localized)
            let benefitText = "";
            const lowerIng = remedy.ingredients_en[i].toLowerCase();
            
            if (currentLanguage === "ta") {
                if (lowerIng.includes("honey")) benefitText = " — தொண்டை திசுக்களை மென்மையாக்குகிறது, மூலிகைகளை உடலுக்கு கொண்டு சேர்க்கும் வாகனமாக செயல்படுகிறது.";
                else if (lowerIng.includes("ginger") || lowerIng.includes("sukku")) benefitText = " — செரிமானத்தை தூண்டுகிறது, சளியை போக்குகிறது, நச்சுக்களை நீக்குகிறது.";
                else if (lowerIng.includes("pepper")) benefitText = " — உறிஞ்சுதலை அதிகரிக்கிறது, தொண்டையை சுத்தம் செய்கிறது, கபத்தை அகற்றும்.";
                else if (lowerIng.includes("turmeric") || lowerIng.includes("manjal")) benefitText = " — இயற்கை கிருமிநாசினி, உடல் உஷ்ணம் மற்றும் வீக்கத்தைக் குறைக்கிறது.";
                else if (lowerIng.includes("tulsi")) benefitText = " — சிறந்த வைரஸ் எதிர்ப்பு, சுவாசப் பாதையை விரிவுபடுத்துகிறது, எதிர்ப்பு சக்தியை கூட்டுகிறது.";
                else if (lowerIng.includes("neem") || lowerIng.includes("vembu")) benefitText = " — நச்சுக்களை அகற்றும், கிருமிநாசினி, இரத்தத்தைச் சுத்திகரிக்கும்.";
                else if (lowerIng.includes("milk")) benefitText = " — ஊட்டமளிக்கும் அடிப்படை, உறக்கத்திற்கு உதவுகிறது, வறட்டு இருமலை தணிக்கும்.";
            } else {
                if (lowerIng.includes("honey")) benefitText = " — Soothes throat tissues, acts as a vehicle (Anupanam) for herbs.";
                else if (lowerIng.includes("ginger") || lowerIng.includes("sukku")) benefitText = " — Fires digestion, relieves cold, acts against respiratory toxins.";
                else if (lowerIng.includes("pepper")) benefitText = " — Increases absorption, cleans throat, clears excess phlegm.";
                else if (lowerIng.includes("turmeric") || lowerIng.includes("manjal")) benefitText = " — Natural antiseptic, reduces internal heat and inflammation.";
                else if (lowerIng.includes("tulsi")) benefitText = " — Highly anti-viral, opens airways, and boosts immune system.";
                else if (lowerIng.includes("neem") || lowerIng.includes("vembu")) benefitText = " — Cleanses toxins, antimicrobial, purifies blood.";
                else if (lowerIng.includes("milk")) benefitText = " — Nourishing base, aids sleep, cools dry cough.";
            }
            
            li.innerHTML = `<strong>${ing}</strong>${benefitText}`;
            ingredientsContainer.appendChild(li);
        });

        // Set preparation description
        const prepContainer = document.getElementById("modal-preparation-text");
        const prepText = currentLanguage === "ta" ? remedy.preparation_ta : remedy.preparation_en;
        
        if (prepText.includes("\n")) {
            const steps = prepText.split("\n").map(s => s.trim()).filter(s => s.length > 0);
            const ol = document.createElement("ol");
            steps.forEach(step => {
                const li = document.createElement("li");
                let cleanStep = step.replace(/^\d+[\.\)\s-]+\s*/, "");
                li.textContent = cleanStep;
                ol.appendChild(li);
            });
            prepContainer.innerHTML = "";
            prepContainer.appendChild(ol);
        } else {
            prepContainer.textContent = prepText;
        }
        
        // Set safety / usage details
        document.getElementById("modal-usage-text").textContent = currentLanguage === "ta" ? remedy.usage_ta : remedy.usage_en;
        
        const defaultPrecaution = currentLanguage === "ta" ? "மிதமான அளவில் உட்கொள்ளவும். அறிகுறிகள் தொடர்ந்தால் மருத்துவரை அணுகவும்." : "Consume in moderate quantities. Consult a doctor if symptoms persist.";
        document.getElementById("modal-precautions-text").textContent = (currentLanguage === "ta" ? remedy.precautions_ta : remedy.precautions_en) || defaultPrecaution;

        // Update modal bookmark button state
        const isBookmarked = bookmarkedIds.includes(remedy.id);
        modalBookmarkBtn.classList.toggle("active", isBookmarked);
        modalBookmarkBtnText.textContent = isBookmarked ? TRANSLATIONS[currentLanguage].btn_save_remedy_active : TRANSLATIONS[currentLanguage].btn_save_remedy;

        // Reset tabs to default (first tab active)
        modalTabButtons.forEach(btn => btn.classList.remove("active"));
        modalTabPanels.forEach(panel => panel.classList.remove("active"));
        
        document.getElementById("m-tab-details-btn").classList.add("active");
        document.getElementById("modal-tab-details").classList.add("active");

        // Display modal
        detailModal.classList.add("active");
        detailModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    function closeDetailModal() {
        detailModal.classList.remove("active");
        detailModal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = ""; // Enable scroll
        currentActiveModalRemedy = null;
    }

    // Modal Events
    modalCloseBtn.addEventListener("click", closeDetailModal);
    modalCloseActionBtn.addEventListener("click", closeDetailModal);
    
    detailModal.addEventListener("click", (e) => {
        if (e.target === detailModal) {
            closeDetailModal();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && detailModal.classList.contains("active")) {
            closeDetailModal();
        }
    });

    // Modal bookmark toggle action
    modalBookmarkBtn.addEventListener("click", () => {
        if (currentActiveModalRemedy) {
            const id = currentActiveModalRemedy.id;
            toggleBookmark(id);
            const isBookmarked = bookmarkedIds.includes(id);
            modalBookmarkBtn.classList.toggle("active", isBookmarked);
            modalBookmarkBtnText.textContent = isBookmarked ? TRANSLATIONS[currentLanguage].btn_save_remedy_active : TRANSLATIONS[currentLanguage].btn_save_remedy;
            
            const backgroundCardBtn = document.querySelector(`.remedy-card[data-id="${id}"] .card-bookmark-btn`);
            if (backgroundCardBtn) {
                backgroundCardBtn.classList.toggle("active", isBookmarked);
            }
            
            const bookmarksPanelActive = document.getElementById("bookmarks-section").classList.contains("active");
            if (bookmarksPanelActive) {
                renderBookmarks();
            }
        }
    });

    // Modal Inner Tab Switching
    modalTabsContainer.addEventListener("click", (e) => {
        const btn = e.target.closest(".modal-tab-btn");
        if (btn) {
            const targetPanelId = btn.getAttribute("data-modal-tab");
            
            modalTabButtons.forEach(b => b.classList.remove("active"));
            modalTabPanels.forEach(panel => panel.classList.remove("active"));
            
            btn.classList.add("active");
            document.getElementById(targetPanelId).classList.add("active");
        }
    });

    // ----------------------------------------------------
    // Herbs Encyclopedia Renderer
    // ----------------------------------------------------
    function renderHerbs() {
        const herbsContainer = document.getElementById("herbs-grid-container");
        herbsContainer.innerHTML = "";

        HERBS_ENCYCLOPEDIA.forEach((herb, idx) => {
            const card = document.createElement("div");
            card.className = "herb-card";
            card.id = `herb-card-${idx}`;
            
            // Handle bilingual naming
            const name = currentLanguage === "ta" && herb.name_ta ? herb.name_ta : herb.name_en;
            const benefits = currentLanguage === "ta" ? herb.benefits_ta : herb.benefits_en;
            const howToUse = currentLanguage === "ta" ? herb.howToUse_ta : herb.howToUse_en;

            const benefitsHeader = currentLanguage === "ta" ? "மருத்துவப் பயன்கள்" : "Medicinal Benefits";
            const preparationHeader = currentLanguage === "ta" ? "பாரம்பரிய தயாரிப்பு முறை" : "Traditional Preparation";

            card.innerHTML = `
                <h3>${name}</h3>
                <span class="herb-botanical">${herb.scientificName}</span>
                <div class="herb-desc-block">
                    <h4>${benefitsHeader}</h4>
                    <p>${benefits}</p>
                </div>
                <div class="herb-use-block">
                    <h4>${preparationHeader}</h4>
                    <p>${howToUse}</p>
                </div>
            `;
            card.style.animationDelay = `${Math.min(idx * 0.06, 0.6)}s`;
            herbsContainer.appendChild(card);
        });
    }

    // ----------------------------------------------------
    // Symptom Checker Wizard Controller
    // ----------------------------------------------------
    
    // Enable "Next Step" button in Step 1 when a system is selected
    systemRadioButtons.forEach(radio => {
        radio.addEventListener("change", (e) => {
            selectedSystem = e.target.value;
            wizardToStep2Btn.disabled = false;
        });
    });

    // Reset symptom checker state
    function resetSymptomChecker() {
        selectedSystem = null;
        selectedSymptoms = [];
        
        systemRadioButtons.forEach(radio => {
            radio.checked = false;
        });

        wizardToStep2Btn.disabled = true;

        document.getElementById("step-2").classList.remove("active");
        document.getElementById("step-3").classList.remove("active");
        document.getElementById("step-1").classList.add("active");
        updateWizardProgress(1);
    }

    // Step 1 -> Step 2
    wizardToStep2Btn.addEventListener("click", () => {
        if (!selectedSystem) return;
        
        const catName = currentLanguage === "ta" ? CATEGORIES[selectedSystem].name_ta : CATEGORIES[selectedSystem].name_en;
        const selectTitleText = currentLanguage === "ta" ? `${catName} தொடர்பான அறிகுறிகளைத் தேர்ந்தெடுக்கவும்` : `Select symptoms related to ${catName}`;
        symptomsTitleText.textContent = selectTitleText;
        
        // Find all unique symptoms (diseases) belonging to this system/category
        const matchingRemedies = REMEDIES.filter(rem => rem.category === selectedSystem);
        
        // Use English disease_en as key to prevent duplication, map it to bilingual output
        const uniqueKeys = [...new Set(matchingRemedies.map(rem => rem.disease_en))].sort();

        // Render checkbox elements
        symptomsSelectionContainer.innerHTML = "";
        selectedSymptoms = [];
        wizardToStep3Btn.disabled = true;

        uniqueKeys.forEach((disEn, idx) => {
            const remMatch = matchingRemedies.find(r => r.disease_en === disEn);
            const disDisplay = currentLanguage === "ta" ? remMatch.disease_ta : remMatch.disease_en;

            const label = document.createElement("label");
            label.className = "symptom-label-cb";
            label.id = `symptom-cb-label-${idx}`;
            
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.value = disEn; // Keep English key internal for matching
            checkbox.id = `symptom-cb-${idx}`;
            
            const span = document.createElement("span");
            span.textContent = disDisplay;

            checkbox.addEventListener("change", (e) => {
                const checked = e.target.checked;
                label.classList.toggle("checked", checked);
                
                if (checked) {
                    selectedSymptoms.push(disEn);
                } else {
                    const idx = selectedSymptoms.indexOf(disEn);
                    if (idx > -1) selectedSymptoms.splice(idx, 1);
                }
                
                wizardToStep3Btn.disabled = selectedSymptoms.length === 0;
            });

            label.appendChild(checkbox);
            label.appendChild(span);
            symptomsSelectionContainer.appendChild(label);
        });

        // Transition UI steps
        document.getElementById("step-1").classList.remove("active");
        document.getElementById("step-2").classList.add("active");
        updateWizardProgress(2);
    });

    // Step 2 -> Step 1 (Back button)
    wizardBackToStep1Btn.addEventListener("click", () => {
        document.getElementById("step-2").classList.remove("active");
        document.getElementById("step-1").classList.add("active");
        updateWizardProgress(1);
    });

    // Step 2 -> Step 3
    wizardToStep3Btn.addEventListener("click", () => {
        if (selectedSymptoms.length === 0) return;
        
        matchedRemediesContainer.innerHTML = "";
        
        // Find remedies that treat any of the selected diseases
        const matched = REMEDIES.filter(rem => selectedSymptoms.includes(rem.disease_en));
        
        if (matched.length > 0) {
            matched.forEach((rem, idx) => {
                const item = document.createElement("div");
                item.className = "match-item";
                item.id = `match-item-${idx}`;
                
                const name = currentLanguage === "ta" ? rem.name_ta : rem.name_en;
                const disease = currentLanguage === "ta" ? rem.disease_ta : rem.disease_en;
                const ingredients = currentLanguage === "ta" ? rem.ingredients_ta.join(", ") : rem.ingredients_en.join(", ");
                const viewPrepLabel = currentLanguage === "ta" ? "தயாரிப்பைக் காண்க" : "View Preparation";

                item.innerHTML = `
                    <div class="match-details">
                        <h4>${name}</h4>
                        <p><strong>${TRANSLATIONS[currentLanguage].symptom_cures_prefix}</strong>${disease}${TRANSLATIONS[currentLanguage].symptom_ingredients_prefix}${ingredients}</p>
                    </div>
                    <button class="btn btn-secondary" data-action="view-remedy" data-id="${rem.id}">
                        ${viewPrepLabel}
                    </button>
                `;
                
                item.querySelector('[data-action="view-remedy"]').addEventListener("click", () => {
                    openDetailModal(rem);
                });
                
                matchedRemediesContainer.appendChild(item);
            });
        } else {
            const noMatchMsg = currentLanguage === "ta" ? "அறிகுறிகளுக்கு பொருத்தமான வீட்டு வைத்தியங்கள் எதுவும் கிடைக்கவில்லை" : "No exact traditional remedy match found";
            const noMatchSub = currentLanguage === "ta" ? "அறிகுறிகளை மாற்றி தேர்ந்தெடுக்கவும் அல்லது மருத்துவரை அணுகவும்." : "Try expanding your symptoms selection or consult a doctor.";
            matchedRemediesContainer.innerHTML = `
                <div class="no-matches-found">
                    <span>😔</span>
                    <h4>${noMatchMsg}</h4>
                    <p>${noMatchSub}</p>
                </div>
            `;
        }

        // Transition UI steps
        document.getElementById("step-2").classList.remove("active");
        document.getElementById("step-3").classList.add("active");
        updateWizardProgress(3);
    });

    // Step 3 Reset / Restart
    wizardRestartBtn.addEventListener("click", () => {
        resetSymptomChecker();
    });

    // ----------------------------------------------------
    // App Bootstrap / Initial Page Load
    // ----------------------------------------------------
    updateBookmarkBadge();
    updateHeroStats();
    setLanguage(currentLanguage); // Bootstraps interface translations, categories and explorer remedies
});
