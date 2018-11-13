(function() {
    function ready() {
        var contentHeaders = Array.from(document.querySelectorAll(".tc-header")),
            contentTabs = Array.from(document.querySelectorAll(".tc-content"));

        function removeClasses() {
            contentHeaders.forEach(function(el) {
                el.classList.remove("tc-header--active");
            });
            contentTabs.forEach(function(el) {
                el.classList.remove("tc-content--active");
            });
        }
        contentHeaders.forEach(function(el, i) {
            var currentHeader = el,
                currentTab = contentTabs[i];
            currentHeader.addEventListener("click", function() {
                if (this.classList.contains('tc-header--active')) {
                    removeClasses();
                } else {
                    removeClasses();
                    this.classList.add("tc-header--active");
                    currentTab.classList.add("tc-content--active");
                }
            });
        });
    }
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", ready);
    } else {
        ready();
    }
})();