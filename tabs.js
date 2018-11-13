(function() {
    function ready() {
        var contentHeaders = [].slice.call(document.querySelectorAll(".tc-header")),
            contentTabs = [].slice.call(document.querySelectorAll(".tc-content")),
            isMobile = (function() {
                return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
            })();

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
            if (isMobile && window.innerWidth < 768) {
                removeClasses();
            }
        });
    }
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", ready);
    } else {
        ready();
    }
})();