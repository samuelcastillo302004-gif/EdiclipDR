document.addEventListener("DOMContentLoaded", () => {
    const appRoot = document.getElementById("app");
    const splash = document.createElement("div");
    splash.className = "app-loading-splash";
    splash.innerHTML = `
        <div class="app-loading-glow"></div>
        <div class="app-loading-card">
            <img src="edicliplogo.png" alt="EdiclipDR" class="app-loading-logo" />
            <div class="app-loading-title">EdiclipDR</div>
            <div class="app-loading-subtitle">Preparando el editor cinematografico</div>
            <div class="app-loading-bar"><span></span></div>
        </div>
    `;
    document.body.appendChild(splash);

    if (!appRoot || !window.AppModule1) {
        console.error("No se pudo inicializar la aplicación.");
        splash.remove();
        return;
    }

    appRoot.innerHTML = window.AppModule1.markup;
    window.AppModule1.initApp();

    window.setTimeout(() => {
        splash.classList.add("hide");
        window.setTimeout(() => splash.remove(), 500);
    }, 1100);
});