document.addEventListener("DOMContentLoaded", () => {
    const appRoot = document.getElementById("app");
    const splash = document.createElement("div");
    let fatalScreenShown = false;

    function renderFatalError(error, title = "No se pudo abrir el editor") {
        if (!appRoot || fatalScreenShown) {
            console.error(title + ":", error);
            return;
        }

        fatalScreenShown = true;
        console.error(title + ":", error);
        appRoot.innerHTML = `
            <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px;background:#050617;color:#f0f4f8;font-family:Inter,system-ui,Arial,sans-serif;">
                <div style="max-width:680px;width:100%;background:#0d1117;border:1px solid rgba(255,255,255,0.08);border-radius:18px;padding:26px;box-shadow:0 20px 60px rgba(0,0,0,0.35);">
                    <div style="display:inline-flex;align-items:center;gap:8px;padding:6px 10px;border-radius:999px;background:rgba(248,113,113,0.12);border:1px solid rgba(248,113,113,0.22);color:#ffb4b4;font-size:11px;font-weight:700;letter-spacing:0.4px;text-transform:uppercase;">Sistema</div>
                    <h1 style="margin:14px 0 10px;font-size:24px;">${title}</h1>
                    <p style="margin:0 0 12px;color:#9fb6c3;line-height:1.6;">La aplicación encontró una excepción que impidió continuar. Recarga la página y, si vuelve a pasar, revisa la consola del navegador para ver el detalle técnico.</p>
                    <pre style="margin:0;padding:14px;border-radius:12px;background:#07090f;border:1px solid rgba(255,255,255,0.06);white-space:pre-wrap;color:#7af0c6;max-height:240px;overflow:auto;">${String(error?.message || error)}</pre>
                </div>
            </div>
        `;
        splash.classList.add("hide");
        window.setTimeout(() => splash.remove(), 150);
    }

    window.addEventListener("error", (event) => {
        if (!window.AppModule1) return;
        renderFatalError(event.error || event.message, "Excepción no controlada");
    });

    window.addEventListener("unhandledrejection", (event) => {
        if (!window.AppModule1) return;
        renderFatalError(event.reason || "Promesa rechazada sin manejar", "Error asíncrono no controlado");
    });

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

    try {
        appRoot.innerHTML = window.AppModule1.markup;
        window.AppModule1.initApp();

        window.setTimeout(() => {
            splash.classList.add("hide");
            window.setTimeout(() => splash.remove(), 500);
        }, 1100);
    } catch (error) {
        renderFatalError(error, "No se pudo abrir el editor");
    }
});
