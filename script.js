const filterButtons = document.querySelectorAll(".filter-button");
const trackCards = document.querySelectorAll(".track-card");
const searchInput = document.querySelector("#topic-search");
const resultsCount = document.querySelector("#results-count");
const emptyState = document.querySelector("#empty-state");
const tracksGrid = document.querySelector("#tracks-grid");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".topnav");

let activeFilter = "all";

if (filterButtons.length && searchInput && resultsCount && emptyState && tracksGrid) {
  function updateTracks() {
    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    trackCards.forEach((card) => {
      const matchesCategory = activeFilter === "all" || card.dataset.category === activeFilter;
      const matchesSearch = !query || card.textContent.toLowerCase().includes(query);
      const isVisible = matchesCategory && matchesSearch;
      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    tracksGrid.hidden = visibleCount === 0;
    emptyState.hidden = visibleCount !== 0;
    resultsCount.textContent = query || activeFilter !== "all"
      ? `${visibleCount} ${visibleCount === 1 ? "track" : "tracks"} found`
      : "";
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      filterButtons.forEach((filterButton) => {
        const isActive = filterButton === button;
        filterButton.classList.toggle("active", isActive);
        filterButton.setAttribute("aria-pressed", String(isActive));
      });
      updateTracks();
    });
  });

  searchInput.addEventListener("input", updateTracks);

  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && document.activeElement !== searchInput && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
      searchInput.focus();
    }
    if (event.key === "Escape" && document.activeElement === searchInput) {
      searchInput.value = "";
      updateTracks();
      searchInput.blur();
    }
  });
}

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
    navigation.classList.toggle("open", !isExpanded);
    document.body.classList.toggle("menu-open", !isExpanded);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      navigation.classList.remove("open");
      document.body.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    }
  });
}
