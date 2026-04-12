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

    try {
        appRoot.innerHTML = window.AppModule1.markup;
        window.AppModule1.initApp();

        window.setTimeout(() => {
            splash.classList.add("hide");
            window.setTimeout(() => splash.remove(), 500);
        }, 1100);
    } catch (error) {
        console.error("Error al iniciar la aplicación:", error);
        appRoot.innerHTML = `
            <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px;background:#050617;color:#f0f4f8;font-family:Inter,system-ui,Arial,sans-serif;">
                <div style="max-width:640px;width:100%;background:#0d1117;border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:24px;box-shadow:0 20px 60px rgba(0,0,0,0.35);">
                    <h1 style="margin:0 0 12px;font-size:24px;">No se pudo abrir el editor</h1>
                    <p style="margin:0 0 10px;color:#9fb6c3;line-height:1.5;">La aplicación encontró un error al iniciar. Revisa la consola del navegador para ver el detalle técnico.</p>
                    <pre style="margin:0;padding:14px;border-radius:12px;background:#07090f;border:1px solid rgba(255,255,255,0.06);white-space:pre-wrap;color:#7af0c6;">${String(error?.message || error)}</pre>
                </div>
            </div>
        `;
        splash.classList.add("hide");
        window.setTimeout(() => splash.remove(), 150);
    }
});
