document.addEventListener("DOMContentLoaded", () => {
    const appRoot = document.getElementById("app");

    if (!appRoot || !window.AppModule1) {
        console.error("No se pudo inicializar la aplicación.");
        return;
    }

    appRoot.innerHTML = window.AppModule1.markup;
    window.AppModule1.initApp();
});