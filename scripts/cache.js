function clearCache() {
        const scripts = document.querySelectorAll('script[src]');
        const links = document.querySelectorAll('link[rel="stylesheet"]');

        scripts.forEach(script => {
            const src = script.getAttribute('src');
            script.setAttribute('src', `${src}?cache_bust=${new Date().getTime()}`);
        });

        links.forEach(link => {
            const href = link.getAttribute('href');
            link.setAttribute('href', `${href}?cache_bust=${new Date().getTime()}`);
        });
    }

    window.onload = clearCache;
