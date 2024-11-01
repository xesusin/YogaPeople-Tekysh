if (window.location.href.includes("index.html")) {
    const newUrl = window.location.href.replace(/index\.html/, '');
    window.history.replaceState(null, null, newUrl);
}