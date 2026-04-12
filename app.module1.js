window.AppModule1 = (() => {
    const markup = `
        <!-- LOGIN SCREEN -->
        <div id="login-screen">
            <div class="login-card">
                <span class="login-kicker">Editor IA Premium</span>
                <div class="login-logo">
                    <img src="edicliplogo.png" alt="EdiclipDR" class="login-logo-image">
                </div>
                <h1 class="login-title">Crea shorts que destaquen</h1>
                <p class="login-subtitle">Inicia sesion para editar con IA.</p>
                <div class="auth-mode-switch">
                    <button class="auth-mode-btn active" id="showLoginModeBtn" type="button">Iniciar sesión</button>
                    <button class="auth-mode-btn" id="showRegisterModeBtn" type="button">Registrarse</button>
                </div>
                <div id="loginErrorMsg" class="login-error-box"></div>
                <div class="auth-panel active" id="loginPanel">
                    <input type="email" id="loginEmail" placeholder="Correo electrónico" class="auth-input auth-field-gap">
                    <input type="password" id="loginPassword" placeholder="Contraseña" class="auth-input auth-field-gap">
                    <button class="login-btn" id="emailLoginBtn" type="button">Iniciar Sesión</button>
                    <div class="login-link-row"><a href="#" id="forgotPasswordBtn" class="login-link">¿Olvidaste tu contraseña?</a></div>
                </div>
                <div class="auth-panel" id="registerPanel">
                    <div class="register-flow" id="registerFlow">
                        <div class="register-form-col">
                            <input type="text" id="registerName" placeholder="Nombre completo" class="auth-input auth-field-gap">
                            <input type="email" id="registerEmail" placeholder="Correo electrónico" class="auth-input auth-field-gap">
                            <input type="password" id="registerPassword" placeholder="Contraseña" class="auth-input auth-field-gap">
                            <input type="password" id="registerPasswordRepeat" placeholder="Repetir contraseña" class="auth-input auth-field-gap">
                            <label class="auth-check-row auth-field-gap" for="registerPrivacyAccepted">
                                <input type="checkbox" id="registerPrivacyAccepted" class="auth-check-input">
                                <span>Acepto la <a href="#" id="privacyPolicyInlineLink" class="login-link">Política de privacidad</a></span>
                            </label>
                            <button class="login-btn" id="prepareRegisterBtn" type="button">Crear cuenta</button>
                        </div>
                        <div id="paypalArea" class="paypal-area auth-hidden">
                            <div class="paypal-area-head">
                                <span class="paypal-badge">Paso 2</span>
                                <h2 class="paypal-title">Completa el pago para activar tu cuenta</h2>
                                <p class="paypal-copy">Completa el cobro en PayPal. La activacion segura de la cuenta requiere validacion real del pago.</p>
                            </div>
                            <div class="paypal-summary">
                                <div class="paypal-summary-row">
                                    <span>Nombre</span>
                                    <strong id="paypalSummaryName">-</strong>
                                </div>
                                <div class="paypal-summary-row">
                                    <span>Correo</span>
                                    <strong id="paypalSummaryEmail">-</strong>
                                </div>
                            </div>
                            <div class="paypal-checkout-wrap">
                                <form action="https://www.paypal.com/ncp/payment/KGARCFD2WVHUS" method="post" target="_blank" id="paypalPaymentForm" class="paypal-modern-form">
                                    <input class="paypal-modern-button" type="submit" value="Pagar ahora" />
                                    <img class="paypal-cards" src="https://www.paypalobjects.com/images/Debit_Credit.svg" alt="cards" />
                                    <section class="paypal-powered-by">Con la tecnología de <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" class="paypal-wordmark" /></section>
                                </form>
                            </div>
                            <p class="paypal-warning">Para evitar fraudes, la cuenta no debe activarse solo por volver desde el navegador. Hace falta una confirmacion de pago desde servidor o webhook.</p>
                            <button class="login-secondary-btn" id="editRegisterBtn" type="button">Editar datos</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <nav class="navbar auth-hidden">
            <a href="#" class="navbar-brand"
                ><span class="brand-dot"></span>EdiclipDR</a
            >
            <ul class="navbar-nav">
                <li class="nav-item"><a href="#" class="active" id="navHomeLink">Inicio</a></li>
                <li class="nav-item"><a href="#" id="navAboutLink">Sobre nosotros</a></li>
                <li class="nav-item"><a href="#" id="navContactLink">Contacto</a></li>
                <li class="nav-item"><a href="#" id="navPrivacyLink">Política y privacidad</a></li>
            </ul>
            <div class="navbar-right">
                <span id="userNameDesktop" style="color: var(--accent-a); font-weight: 600; font-size: 13px; margin-right: 15px; font-family: 'Space Grotesk', sans-serif;"></span>
                <span class="pro-badge" style="display: inline-flex; align-items: center; gap: 6px; background: linear-gradient(90deg, #fce043, #fbab7e); color: #050617; padding: 6px 12px; border-radius: 10px; font-size: 10px; font-weight: 800; margin-right: 15px; cursor: pointer; letter-spacing: 0.5px; box-shadow: 0 4px 15px rgba(252, 224, 67, 0.25); transition: all 0.2s;" onmouseover="this.style.transform='translateY(-1px)'; this.style.boxShadow='0 6px 20px rgba(252, 224, 67, 0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(252, 224, 67, 0.25)'">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z"/></svg>
                    CUENTA PRO
                </span>
                <button class="navbar-action-btn" id="logoutBtn" style="background: rgba(255,255,255,0.05); color: var(--muted2); box-shadow: none;">Cerrar Sesión</button>
            </div>
            <button
                class="navbar-hamburger"
                id="navHamburger"
                aria-label="Menú"
            >
                <span></span><span></span><span></span>
            </button>
        </nav>
        <div class="navbar-mobile-menu auth-hidden" id="navMobileMenu">
            <ul class="navbar-nav" style="flex-direction: column; gap: 2px">
                <li class="nav-item"><a href="#" class="active" id="navHomeLinkMobile">Inicio</a></li>
                <li class="nav-item"><a href="#" id="navAboutLinkMobile">Sobre nosotros</a></li>
                <li class="nav-item"><a href="#" id="navContactLinkMobile">Contacto</a></li>
                <li class="nav-item"><a href="#" id="navPrivacyLinkMobile">Política y privacidad</a></li>
            </ul>
            <div id="userMobileSection" style="margin-top: 10px; padding: 16px; border-top: 1px solid var(--border); display: flex; flex-direction: column; align-items: center; gap: 12px;">
                <div id="userNameMobile" style="color: var(--accent-a); font-weight: 600; font-size: 14px; font-family: 'Space Grotesk', sans-serif;"></div>
                <span class="pro-badge" style="display: inline-flex; align-items: center; gap: 6px; background: linear-gradient(90deg, #fce043, #fbab7e); color: #050617; padding: 8px 16px; border-radius: 10px; font-size: 11px; font-weight: 800; cursor: pointer; letter-spacing: 0.5px; box-shadow: 0 4px 15px rgba(252, 224, 67, 0.2);">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z"/></svg>
                    CUENTA PRO
                </span>
            </div>
        </div>

        <div class="info-overlay" id="infoOverlay">
            <div class="info-dialog">
                <button class="info-close-btn" id="infoCloseBtn" type="button">✕</button>
                <div class="info-kicker" id="infoKicker">EdiclipDR</div>
                <h2 class="info-title" id="infoTitle">Información</h2>
                <div class="info-body" id="infoBody"></div>
            </div>
        </div>

        <div class="editor-wrapper auth-hidden">
            <div class="editor-layout">
                <!-- LEFT PANEL -->
                <div class="editor-left">
                    <div class="tab-bar">
                        <button class="tab-btn active" data-tab="upload">
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <polyline points="16 16 12 12 8 16" />
                                <line x1="12" y1="12" x2="12" y2="21" />
                                <path
                                    d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"
                                />
                            </svg>
                            Subir
                        </button>
                        <button class="tab-btn" data-tab="subtitles">
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <rect
                                    x="2"
                                    y="4"
                                    width="20"
                                    height="16"
                                    rx="2"
                                />
                                <line x1="7" y1="15" x2="17" y2="15" />
                                <line x1="7" y1="11" x2="13" y2="11" />
                            </svg>
                            Subtítulos
                        </button>
                        <button class="tab-btn" data-tab="style">
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <circle cx="12" cy="12" r="3" />
                                <path
                                    d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"
                                />
                            </svg>
                            Estilo
                        </button>
                        <button class="tab-btn" data-tab="media">
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <rect
                                    x="3"
                                    y="3"
                                    width="18"
                                    height="18"
                                    rx="2"
                                />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" />
                            </svg>
                            Media
                        </button>
                    </div>

                    <div class="editor-left-content">
                    <!-- TAB: Subir -->
                    <div class="tab-content active" id="tab-upload">
                        <div class="drop-zone" id="dropZone">
                            <div class="drop-zone-inner">
                                <div class="drop-icon">
                                    <svg
                                        width="36"
                                        height="36"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="url(#grad1)"
                                        stroke-width="1.5"
                                    >
                                        <defs>
                                            <linearGradient
                                                id="grad1"
                                                x1="0%"
                                                y1="0%"
                                                x2="100%"
                                                y2="100%"
                                            >
                                                <stop
                                                    offset="0%"
                                                    style="stop-color: #7af0c6"
                                                />
                                                <stop
                                                    offset="100%"
                                                    style="stop-color: #6ea8ff"
                                                />
                                            </linearGradient>
                                        </defs>
                                        <path
                                            d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                        />
                                        <polyline points="17 8 12 3 7 8" />
                                        <line x1="12" y1="3" x2="12" y2="15" />
                                    </svg>
                                </div>
                                <p class="drop-title">Arrastra tu video aquí</p>
                                <p class="drop-sub">
                                    MP4, MOV, WEBM · cualquier tamaño
                                </p>
                                <label class="drop-btn" for="fileInput">
                                    <svg
                                        width="13"
                                        height="13"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2.5"
                                    >
                                        <path
                                            d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                        />
                                        <polyline points="17 8 12 3 7 8" />
                                        <line x1="12" y1="3" x2="12" y2="15" />
                                    </svg>
                                    Seleccionar archivo
                                </label>
                                <input
                                    id="fileInput"
                                    type="file"
                                    accept="video/*"
                                    style="display: none"
                                />
                            </div>
                            <div class="drop-overlay" id="dropOverlay">
                                <p>Suelta para cargar</p>
                            </div>
                        </div>
                        <div
                            class="file-info-card"
                            id="fileInfoCard"
                            style="display: none"
                        >
                            <div class="file-info-icon">🎬</div>
                            <div class="file-info-text">
                                <div class="file-info-name" id="fileInfoName">
                                    video.mp4
                                </div>
                                <div class="file-info-size" id="fileInfoSize">
                                    0 MB
                                </div>
                            </div>
                            <button
                                class="file-info-remove"
                                id="fileInfoRemove"
                            >
                                ✕
                            </button>
                        </div>
                        <div class="section-block">
                            <div class="section-header">
                                <span class="section-badge ai">✦ IA</span>
                                <span class="section-title"
                                    >Transcripción automática</span
                                >
                            </div>
                            <div class="row" style="gap: 8px">
                                <button
                                    id="transcribeBtn"
                                    class="btn-action primary-action"
                                    style="flex: 1"
                                >
                                    <svg
                                        width="13"
                                        height="13"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2.5"
                                    >
                                        <path
                                            d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
                                        />
                                        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                        <line x1="12" y1="19" x2="12" y2="23" />
                                        <line x1="8" y1="23" x2="16" y2="23" />
                                    </svg>
                                    Transcribir con IA
                                </button>
                                <button
                                    id="localBtn"
                                    class="btn-action ghost-action"
                                >
                                    <svg
                                        width="13"
                                        height="13"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2.5"
                                    >
                                        <circle cx="12" cy="12" r="10" />
                                        <polygon
                                            points="10 8 16 12 10 16 10 8"
                                        />
                                    </svg>
                                    Local
                                </button>
                            </div>
                            <div class="row" style="margin-top: 10px; align-items: center;">
                                <span class="small" style="min-width: 122px;">Idioma subtítulos</span>
                                <select id="subtitleLanguageSelect" class="select-styled" style="max-width: 240px;"></select>
                            </div>
                            <div class="status-bar" id="status">
                                <span class="status-dot"></span>
                                Esperando archivo...
                            </div>
                            <div
                                id="loaderWrap"
                                style="display: none; margin-top: 8px"
                            >
                                <div class="ai-loader">
                                    <div class="ai-loader-bar" id="transcribeProgressBar"></div>
                                    <span style="position: relative; z-index: 1;">Analizando con IA... <strong id="transcribePercent">0%</strong></span>
                                </div>
                            </div>
                            <div
                                class="transcript-preview"
                                id="transcriptPreview"
                            ></div>
                        </div>
                        <div
                            class="section-block"
                            id="aiSplitSection"
                            style="display: none"
                        >
                            <div class="section-header">
                                <span class="section-badge ai">✦ IA</span>
                                <span class="section-title"
                                    >Dividir en Shorts automáticamente</span
                                >
                            </div>
                            <p class="section-desc">
                                La IA detecta los momentos más impactantes y los
                                divide en clips de ~60 segundos listos para
                                publicar.
                            </p>
                            <button
                                class="btn-action primary-action"
                                id="aiSplitBtn"
                                style="width: 100%"
                            >
                                <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2.5"
                                >
                                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                                    <path
                                        d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"
                                    />
                                    <line x1="6" y1="1" x2="6" y2="4" />
                                    <line x1="10" y1="1" x2="10" y2="4" />
                                    <line x1="14" y1="1" x2="14" y2="4" />
                                </svg>
                                Generar Shorts con IA
                            </button>
                        </div>
                    </div>

                    <!-- TAB: Subtítulos -->
                    <div class="tab-content" id="tab-subtitles">
                        <div class="section-block">
                            <div class="section-header">
                                <span class="section-title">Animación</span>
                            </div>
                            <div class="anim-list" id="animList">
                                <div class="chip active" data-anim="typewriter">
                                    ⌨ Typewriter
                                </div>
                                <div class="chip" data-anim="float">
                                    🫧 Flotando
                                </div>
                                <div class="chip" data-anim="bounce">
                                    💥 Bounce
                                </div>
                                <div class="chip" data-anim="cinematic">
                                    🎬 Cinemático
                                </div>
                                <div class="chip" data-anim="glitch">
                                    📡 Glitch
                                </div>
                                <div class="chip" data-anim="neon">✨ Neon</div>
                                <div class="chip" data-anim="wave">🌊 Wave</div>
                                <div class="chip" data-anim="blur-in">
                                    🔭 Blur In
                                </div>
                                <div class="chip" data-anim="flip">🔄 Flip</div>
                                <div class="chip" data-anim="swing">
                                    🎵 Swing
                                </div>
                                <div class="chip" data-anim="pop">💫 Pop</div>
                                <div class="chip" data-anim="slide-up">
                                    ⬆ Slide Up
                                </div>
                                <div class="chip" data-anim="slide-left">
                                    ◀ Slide Left
                                </div>
                                <div class="chip" data-anim="zoom-blur">
                                    🔍 Zoom Blur
                                </div>
                            </div>
                        </div>
                        <div class="section-block">
                            <div class="section-header">
                                <span class="section-title">Plantillas</span>
                            </div>
                            <div class="styles-grid" id="stylesGrid"></div>
                        </div>
                        <div class="section-block">
                            <div class="section-header">
                                <span class="section-title"
                                    >Posición vertical</span
                                >
                            </div>
                            <input
                                id="vPos"
                                type="range"
                                min="0"
                                max="520"
                                value="36"
                                class="range-styled"
                            />
                            <p class="section-desc">
                                También arrastra el subtítulo directamente en el
                                video.
                            </p>
                        </div>
                    </div>

                    <!-- TAB: Estilo -->
                    <div class="tab-content" id="tab-style">
                        <!-- El selector de fuente ha sido eliminado según la solicitud -->
                        <div class="section-block">
                            <div class="section-header"><span class="section-title">Tamaño</span><span class="section-value" id="sizeVal">20px</span></div>
                            <input id="sizeRange" type="range" min="14" max="48" value="20" class="range-styled" />
                        </div>
                        <div class="section-block">
                            <div class="section-header"><span class="section-title">Alineación</span></div>
                            <div class="align-group" id="alignGroup">
                                <button class="align-btn active" id="alignCenter" data-align="center" title="Centrado"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="6" y1="12" x2="18" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg></button>
                                <button class="align-btn" id="alignLeft" data-align="left" title="Izquierda"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="15" y2="12" /><line x1="3" y1="18" x2="18" y2="18" /></svg></button>
                                <button class="align-btn" id="alignRight" data-align="right" title="Derecha"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="9" y1="12" x2="21" y2="12" /><line x1="6" y1="18" x2="21" y2="18" /></svg></button>
                            </div>
                        </div>
                    </div>

                    <!-- TAB: Media -->
                    <div class="tab-content" id="tab-media">
                        <div class="section-block">
                            <div class="section-header"><span class="section-badge">IMG</span><span class="section-title">Imagen en video</span></div>
                            <p class="section-desc">Sube una imagen, arrástrala y ajusta su tamaño en el video.</p>
                            <div class="row" style="gap: 8px">
                                <label class="drop-btn" for="overlayImgInput" style="flex: 1; justify-content: center"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg> Subir imagen</label>
                                <input type="file" id="overlayImgInput" accept="image/*" style="display: none" />
                                <button class="btn-action ghost-action" id="removeOverlayBtn">✕ Quitar</button>
                            </div>
                        </div>
                        <div class="section-block">
                            <div class="section-header"><span class="section-title">Estado</span></div>
                            <div class="status-bar" id="status2"><span class="status-dot"></span> Esperando video...</div>
                            <div class="footer-info" style="margin-top: 8px"><div class="small" id="transcriptPreview2"></div></div>
                        </div>
                    </div>
                    </div>

                    <div class="editor-left-footer">
                        <button class="btn-action primary-action download-btn" id="downloadBtn" disabled>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Descargar Short
                        </button>
                    </div>
                </div>

                <!-- RIGHT PANEL -->
                <div class="editor-right">
                    <div class="preview-topbar">
                        <div class="preview-label">
                            <span class="preview-dot"></span>
                            Vista Previa · 9:16
                        </div>
                        <div class="preview-actions">
                            <span class="preview-badge" id="previewBadge"
                                >Sin video</span
                            >
                        </div>
                    </div>
                    <div class="preview-center">
                        <div class="video-container" id="videoContainer">
                            <canvas id="canvas" width="1080" height="1920" style="position:absolute;left:0;top:0;width:100%;height:100%;z-index:5"></canvas>
                            <video id="video" playsinline style="position:fixed;left:-9999px;width:1px;height:1px;opacity:0;pointer-events:none"></video>
                            <div class="overlay-top"></div>
                            <div class="overlay-bottom"></div>
                            <div class="subtitles" id="subtitles" style="bottom: 36px"><div id="subtitle" class="subtitle style-1 no-bg"></div></div>
                            <div class="controls-bar" id="controlsBar">
                                <button class="btn play" id="playBtn">
                                    &#9654;
                                </button>
                                <div class="progress" id="progress">
                                    <div class="bar" id="progressBar"></div>
                                </div>
                                <div class="time" id="timeLabel">
                                    00:00 / 00:00
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="preview-placeholder" id="previewPlaceholder">
                        <div class="placeholder-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="url(#pg1)" stroke-width="1">
                                <defs><linearGradient id="pg1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color: #7af0c6"/><stop offset="100%" style="stop-color: #6ea8ff"/></linearGradient></defs>
                                <rect
                                    x="2"
                                    y="2"
                                    width="20"
                                    height="20"
                                    rx="2.18"
                                />
                                <line x1="7" y1="2" x2="7" y2="22" />
                                <line x1="17" y1="2" x2="17" y2="22" />
                                <line x1="2" y1="12" x2="22" y2="12" />
                                <line x1="2" y1="7" x2="7" y2="7" />
                                <line x1="17" y1="7" x2="22" y2="7" />
                                <line x1="17" y1="17" x2="22" y2="17" />
                                <line x1="2" y1="17" x2="7" y2="17" />
                            </svg>
                        </div>
                        <p class="placeholder-title">Sin video cargado</p>
                        <p class="placeholder-sub">
                            Sube un video en la pestaña <strong>Subir</strong>
                        </p>
                    </div>
                </div>
            </div>

            <!-- AI CLIPS SECTION -->
            <div
                class="ai-clips-section"
                id="aiClipsSection"
                style="display: none"
            >
                <div class="ai-clips-header">
                    <div class="ai-clips-title">
                        <span class="section-badge ai">&#10022; IA</span>
                        <span>Shorts generados automáticamente</span>
                    </div>
                    <div style="display: flex; gap: 12px; align-items: center;">
                        <div class="ai-clips-meta" id="aiClipsMeta">
                            0 clips encontrados
                        </div>
                    <button id="resetClipsBtn" style="background: transparent; border: 1px solid var(--border); color: var(--muted); width: auto; padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 11px; display: none; align-items: center; justify-content: center; transition: all 0.2s; text-transform: uppercase; font-weight: 600; letter-spacing: 0.3px;">Restablecer</button>
                    <button id="closeClipsBtn" style="background: transparent; border: 1px solid var(--border); color: var(--muted); width: 28px; height: 28px; border-radius: 6px; cursor: pointer; font-size: 16px; display: flex; align-items: center; justify-content: center; transition: all 0.2s;">✕</button>
                    </div>
                </div>
                <div class="ai-clips-carousel" id="aiClipsCarousel"></div>
            </div>

            <!-- EPIC FOOTER -->
            <footer class="footer-epic">
                <p>&copy; <strong>EdiclipDR</strong> — Todos los derechos reservados</p>
                <span class="creator">Creado por <strong>Sam Alexander</strong></span>
            </footer>
        </div>
    `.trim();

    function initApp() {
                    if (!window.APP_CONFIG?.firebaseConfig) {
                        throw new Error("No se encontro APP_CONFIG o la configuracion de Firebase.");
                    }
                    if (!window.firebase?.initializeApp || !window.firebase?.auth) {
                        throw new Error("Firebase no cargo correctamente.");
                    }

                    // Nota: Reemplaza estos valores con los de tu consola de Firebase (Project Settings)
                    const firebaseConfig = window.APP_CONFIG.firebaseConfig;

                    // Inicializar Firebase solo una vez
                    if (!firebase.apps || firebase.apps.length === 0) {
                        firebase.initializeApp(firebaseConfig);
                    }
                    const auth = firebase.auth();
                    let pendingRegistrationData = null;

                    const loginScreen = document.getElementById('login-screen');
                    const mainNavbar = document.querySelector('.navbar');
                    const mainMobileMenu = document.querySelector('.navbar-mobile-menu');
                    const mainWrapper = document.querySelector('.editor-wrapper');
                    const userNameDesktop = document.getElementById('userNameDesktop');
                    const userNameMobile = document.getElementById('userNameMobile');
                    const loginCard = document.querySelector('.login-card');
                    const loginPanel = document.getElementById('loginPanel');
                    const registerPanel = document.getElementById('registerPanel');
                    const registerFlow = document.getElementById('registerFlow');
                    const showLoginModeBtn = document.getElementById('showLoginModeBtn');
                    const showRegisterModeBtn = document.getElementById('showRegisterModeBtn');
                    const paypalArea = document.getElementById('paypalArea');
                    const paypalSummaryName = document.getElementById('paypalSummaryName');
                    const paypalSummaryEmail = document.getElementById('paypalSummaryEmail');
                    const paypalPaymentForm = document.getElementById('paypalPaymentForm');
                    const registerName = document.getElementById('registerName');
                    const registerEmail = document.getElementById('registerEmail');
                    const registerPassword = document.getElementById('registerPassword');
                    const registerPasswordRepeat = document.getElementById('registerPasswordRepeat');
                    const registerPrivacyAccepted = document.getElementById('registerPrivacyAccepted');
                    const privacyPolicyInlineLink = document.getElementById('privacyPolicyInlineLink');
                    const infoOverlay = document.getElementById('infoOverlay');
                    const infoDialog = infoOverlay ? infoOverlay.querySelector('.info-dialog') : null;
                    const infoCloseBtn = document.getElementById('infoCloseBtn');
                    const infoKicker = document.getElementById('infoKicker');
                    const infoTitle = document.getElementById('infoTitle');
                    const infoBody = document.getElementById('infoBody');
                    let authMessageTimer = null;

                    const requiredAuthElements = {
                        loginScreen,
                        mainNavbar,
                        mainMobileMenu,
                        mainWrapper,
                        userNameDesktop,
                        userNameMobile,
                        loginCard,
                        loginPanel,
                        registerPanel,
                        registerFlow,
                        showLoginModeBtn,
                        showRegisterModeBtn,
                        paypalArea,
                        paypalSummaryName,
                        paypalSummaryEmail,
                        paypalPaymentForm,
                        registerName,
                        registerEmail,
                        registerPassword,
                        registerPasswordRepeat,
                        registerPrivacyAccepted,
                        privacyPolicyInlineLink,
                        infoOverlay,
                        infoDialog,
                        infoCloseBtn,
                        infoKicker,
                        infoTitle,
                        infoBody,
                    };
                    const missingAuthElements = Object.entries(requiredAuthElements)
                        .filter(([, element]) => !element)
                        .map(([name]) => name);
                    if (missingAuthElements.length > 0) {
                        throw new Error("Faltan elementos base del editor: " + missingAuthElements.join(", "));
                    }

                    const infoContent = {
                        about: {
                            kicker: 'Sobre EdiclipDR',
                            title: 'Que hace la web y para que sirve',
                            body: `
                                <p>EdiclipDR es una herramienta para convertir videos largos en shorts listos para publicar. Te permite transcribir audio, generar subtitulos, ajustar estilos visuales, recortar clips y exportar piezas adaptadas a formato vertical.</p>
                                <p>La web sirve para acelerar el trabajo de edicion cuando quieres sacar contenido corto para redes sociales sin hacer todo el proceso manualmente.</p>
                                <p>Esta pensada para creadores, editores, marcas y equipos que necesitan velocidad, consistencia visual y un flujo simple desde un solo panel.</p>
                            `,
                        },
                        privacy: {
                            kicker: 'Politica y privacidad',
                            title: 'Politica de privacidad y tratamiento de informacion',
                            body: `
                                <h3>1. Alcance de esta politica</h3>
                                <p>Esta politica describe como EdiclipDR trata la informacion necesaria para ofrecer acceso, procesamiento de video, subtitulacion, configuracion visual y funciones relacionadas con la plataforma.</p>

                                <h3>2. Datos que no buscamos conservar</h3>
                                <p>La politica operativa de la herramienta es minimizar retencion. No usamos tus archivos de video ni tus datos de edicion para fines comerciales ajenos al servicio. No vendemos informacion personal, no construimos perfiles publicitarios y no buscamos conservar contenido personal mas alla de lo necesario para que la herramienta funcione.</p>

                                <h3>3. Datos minimos necesarios para acceso y pago</h3>
                                <p>Para registro, autenticacion y control de acceso pueden utilizarse datos basicos como nombre, correo electronico y credenciales de cuenta. En procesos de pago se usan los datos estrictamente necesarios para iniciar el flujo con el proveedor de pago correspondiente.</p>

                                <h3>4. Contenido procesado dentro de la herramienta</h3>
                                <p>Los videos, subtitulos, transcripciones, recortes, configuraciones visuales y exportaciones se usan para ejecutar las funciones que el usuario solicita. El objetivo del sistema es entregar el resultado del procesamiento, no almacenar contenido personal como base de datos documental.</p>

                                <h3>5. Servicios externos y procesamiento tecnico</h3>
                                <p>Algunas funciones pueden depender de proveedores externos de transcripcion, traduccion, autenticacion o pago. Cuando usas esas funciones, cierta informacion tecnica o de contenido puede viajar al servicio correspondiente para completar la operacion pedida por el usuario.</p>

                                <h3>6. Conservacion y minimizacion</h3>
                                <p>EdiclipDR aplica un criterio de minimizacion: tratar solo lo necesario, durante el menor tiempo razonable y con el fin exclusivo de prestar el servicio. Si una funcion no requiere guardar informacion personal, la plataforma procura no hacerlo.</p>

                                <h3>7. Seguridad</h3>
                                <p>Se adoptan medidas razonables para reducir acceso no autorizado, uso indebido o exposicion accidental de informacion. Aun asi, ningun sistema conectado a internet puede garantizar seguridad absoluta, por lo que el usuario debe usar contraseñas seguras y revisar cuidadosamente el contenido que sube.</p>

                                <h3>8. Uso aceptado por el usuario</h3>
                                <p>Al registrarte o continuar con el flujo de pago, confirmas que entiendes que la plataforma necesita tratar cierta informacion minima para autenticarte, procesar solicitudes y ejecutar funciones de edicion, transcripcion o exportacion.</p>

                                <h3>9. Contacto y solicitudes</h3>
                                <p>Si necesitas contactar al proyecto por temas de soporte, privacidad o uso de la herramienta, puedes usar el formulario de contacto integrado o escribir al correo oficial indicado en la seccion de contacto.</p>

                                <h3>10. Aceptacion</h3>
                                <p>Si no estas de acuerdo con esta politica, no debes crear una cuenta, iniciar el flujo de pago ni utilizar funciones que requieran tratamiento de informacion para operar.</p>
                            `,
                        },
                        contact: {
                            kicker: 'Contacto',
                            title: 'Escribenos',
                            body: `
                                <p>Usa este formulario para enviar dudas, soporte o propuestas. El mensaje se prepara para el correo <strong>ediclipdr@gmail.com</strong>.</p>
                                <form id="contactForm" class="info-form">
                                    <input type="text" id="contactName" class="auth-input" placeholder="Tu nombre" required>
                                    <input type="email" id="contactEmail" class="auth-input" placeholder="Tu correo" required>
                                    <textarea id="contactMessage" class="auth-input info-textarea" placeholder="Escribe tu mensaje" required></textarea>
                                    <button type="submit" class="login-btn info-submit-btn">Enviar mensaje</button>
                                </form>
                            `,
                        },
                    };

                    function closeInfoOverlay() {
                        infoOverlay.classList.remove('open');
                    }

                    function wireContactForm() {
                        const contactForm = document.getElementById('contactForm');
                        if (!contactForm) return;
                        contactForm.addEventListener('submit', (event) => {
                            event.preventDefault();
                            const name = document.getElementById('contactName').value.trim();
                            const email = document.getElementById('contactEmail').value.trim();
                            const message = document.getElementById('contactMessage').value.trim();
                            const subject = encodeURIComponent('Contacto desde EdiclipDR - ' + name);
                            const body = encodeURIComponent(
                                'Nombre: ' + name + '\n' +
                                'Correo: ' + email + '\n\n' +
                                message,
                            );
                            window.location.href = 'mailto:ediclipdr@gmail.com?subject=' + subject + '&body=' + body;
                        });
                    }

                    function openInfoOverlay(section) {
                        const content = infoContent[section];
                        if (!content) return;
                        infoKicker.textContent = content.kicker;
                        infoTitle.textContent = content.title;
                        infoBody.innerHTML = content.body;
                        infoDialog.scrollTop = 0;
                        infoOverlay.classList.add('open');
                        if (section === 'contact') {
                            wireContactForm();
                        }
                    }

                    function bindInfoLink(id, section) {
                        const el = document.getElementById(id);
                        if (!el) return;
                        el.addEventListener('click', (event) => {
                            event.preventDefault();
                            openInfoOverlay(section);
                            navHamburger.classList.remove('open');
                            navMobileMenu.classList.remove('open');
                        });
                    }

                    function clearAuthMessage() {
                        const errorEl = document.getElementById('loginErrorMsg');
                        errorEl.textContent = '';
                        errorEl.style.display = 'none';
                        errorEl.classList.remove('success', 'info');
                        if (authMessageTimer) {
                            clearTimeout(authMessageTimer);
                            authMessageTimer = null;
                        }
                    }

                    function showAuthMessage(message, type = 'error') {
                        const errorEl = document.getElementById('loginErrorMsg');
                        const card = document.querySelector('.login-card');

                        clearAuthMessage();
                        errorEl.textContent = message;
                        errorEl.style.display = 'block';

                        if (type === 'success') {
                            errorEl.classList.add('success');
                        } else if (type === 'info') {
                            errorEl.classList.add('info');
                        } else {
                            card.classList.remove('shake-active');
                            void card.offsetWidth;
                            card.classList.add('shake-active');
                        }

                        authMessageTimer = setTimeout(() => {
                            errorEl.style.display = 'none';
                            errorEl.classList.remove('success', 'info');
                            card.classList.remove('shake-active');
                        }, type === 'error' ? 6000 : 4500);
                    }

                    function animateAuthPanel(panel, directionClass) {
                        loginPanel.classList.remove('panel-enter-left', 'panel-enter-right');
                        registerPanel.classList.remove('panel-enter-left', 'panel-enter-right');
                        loginCard.classList.remove('mode-switch-burst');
                        void panel.offsetWidth;
                        panel.classList.add(directionClass);
                        loginCard.classList.add('mode-switch-burst');
                    }

                    function setAuthMode(mode) {
                        const isLogin = mode === 'login';
                        loginPanel.classList.toggle('active', isLogin);
                        registerPanel.classList.toggle('active', !isLogin);
                        showLoginModeBtn.classList.toggle('active', isLogin);
                        showRegisterModeBtn.classList.toggle('active', !isLogin);
                        loginCard.classList.toggle('register-mode', !isLogin);
                        if (isLogin) {
                            pendingRegistrationData = null;
                            setPaypalVisibility(false);
                        }
                        animateAuthPanel(isLogin ? loginPanel : registerPanel, isLogin ? 'panel-enter-left' : 'panel-enter-right');
                        clearAuthMessage();
                    }

                    function setPaypalVisibility(isVisible) {
                        paypalArea.classList.toggle('auth-hidden', !isVisible);
                        registerFlow.classList.toggle('payment-ready', isVisible);
                    }

                    function populatePayPalArea(data) {
                        paypalSummaryName.textContent = data.name;
                        paypalSummaryEmail.textContent = data.email;
                    }
        
                    // Control de visibilidad de la interfaz basado en la sesión
                    auth.onAuthStateChanged(user => {
                        if (user) {
                            loginScreen.style.display = 'none';
                            mainNavbar.classList.remove('auth-hidden');
                            mainMobileMenu.classList.remove('auth-hidden');
                            mainWrapper.classList.remove('auth-hidden');
                            userNameDesktop.textContent = user.displayName || user.email;
                            userNameMobile.textContent = "Sesión: " + (user.displayName || user.email);
                        } else {
                            loginScreen.style.display = 'flex';
                            mainNavbar.classList.add('auth-hidden');
                            mainMobileMenu.classList.add('auth-hidden');
                            mainWrapper.classList.add('auth-hidden');
                        }
                    });
        
                    // Función para mostrar errores con estilo
                    function showLoginError(code) {
                        let message = "Ocurrió un error inesperado.";
                        
                        // Traducción de errores comunes de Firebase
                        switch(code) {
                            case 'auth/invalid-email': message = "El formato del correo no es válido."; break;
                            case 'auth/user-not-found': message = "No existe una cuenta con este correo."; break;
                            case 'auth/wrong-password': message = "La contraseña es incorrecta."; break;
                            case 'auth/too-many-requests': message = "Demasiados intentos. Intenta más tarde."; break;
                            case 'auth/email-already-in-use': message = "Ya existe una cuenta con ese correo."; break;
                            case 'auth/weak-password': message = "La contraseña debe tener al menos 6 caracteres."; break;
                            case 'empty-fields': message = "Por favor, completa todos los campos."; break;
                            case 'password-mismatch': message = "Las contraseñas no coinciden."; break;
                            case 'missing-name': message = "Escribe tu nombre para crear la cuenta."; break;
                            case 'privacy-not-accepted': message = "Debes aceptar la política de privacidad para continuar."; break;
                            case 'payment-not-ready': message = "Primero completa tus datos y prepara el pago."; break;
                            default: message = "Error: " + code;
                        }

                        showAuthMessage(message, 'error');
                    }

                    // Manejadores de Auth
                    showLoginModeBtn.addEventListener('click', () => setAuthMode('login'));
                    showRegisterModeBtn.addEventListener('click', () => setAuthMode('register'));
                    bindInfoLink('navAboutLink', 'about');
                    bindInfoLink('navAboutLinkMobile', 'about');
                    bindInfoLink('navContactLink', 'contact');
                    bindInfoLink('navContactLinkMobile', 'contact');
                    bindInfoLink('navPrivacyLink', 'privacy');
                    bindInfoLink('navPrivacyLinkMobile', 'privacy');
                    privacyPolicyInlineLink.addEventListener('click', (event) => {
                        event.preventDefault();
                        openInfoOverlay('privacy');
                    });
                    infoCloseBtn.addEventListener('click', closeInfoOverlay);
                    infoOverlay.addEventListener('click', (event) => {
                        if (event.target === infoOverlay) {
                            closeInfoOverlay();
                        }
                    });

                    document.getElementById('emailLoginBtn').addEventListener('click', () => {
                        const email = document.getElementById('loginEmail').value;
                        const pass = document.getElementById('loginPassword').value;
                        if(!email || !pass) { showLoginError('empty-fields'); return; }
                        auth.signInWithEmailAndPassword(email, pass).catch(e => showLoginError(e.code));
                    });

                    document.getElementById('prepareRegisterBtn').addEventListener('click', () => {
                        const name = registerName.value.trim();
                        const email = registerEmail.value.trim();
                        const password = registerPassword.value;
                        const passwordRepeat = registerPasswordRepeat.value;

                        if (!name) { showLoginError('missing-name'); return; }
                        if (!email || !password || !passwordRepeat) { showLoginError('empty-fields'); return; }
                        if (password !== passwordRepeat) { showLoginError('password-mismatch'); return; }
                        if (password.length < 6) { showLoginError('auth/weak-password'); return; }
                        if (!registerPrivacyAccepted.checked) { showLoginError('privacy-not-accepted'); return; }

                        pendingRegistrationData = { name, email };
                        populatePayPalArea(pendingRegistrationData);
                        setPaypalVisibility(true);
                        showAuthMessage('Datos listos. Completa el pago en PayPal.', 'info');
                    });

                    document.getElementById('editRegisterBtn').addEventListener('click', () => {
                        setPaypalVisibility(false);
                        showAuthMessage('Puedes ajustar tus datos antes de pagar.', 'info');
                    });

                    paypalPaymentForm.addEventListener('submit', (event) => {
                        if (!pendingRegistrationData) {
                            event.preventDefault();
                            showLoginError('payment-not-ready');
                            return;
                        }
                        populatePayPalArea(pendingRegistrationData);
                        showAuthMessage('Se abrio PayPal en una nueva pestaña. La activacion segura de la cuenta requiere confirmacion real del pago en el servidor.', 'info');
                    });
        
                    document.getElementById('forgotPasswordBtn').addEventListener('click', (e) => {
                        e.preventDefault();
                        const email = document.getElementById('loginEmail').value;
                        if(!email) { alert("Por favor, escribe el correo en el campo superior para que sepamos qué cuenta necesita el cambio."); return; }
                        
                        const phoneNumber = "18098707801";
                        const message = encodeURIComponent(`El correo "${email}" el cual se colocó en el campo pidiendo cambiar la clave está solicitando cambiar la contraseña.`);
                        
                        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
                    });
                    const logoutBtnEl = document.getElementById('logoutBtn');
                    if (!logoutBtnEl) {
                        throw new Error("No se encontro el boton de cerrar sesion.");
                    }
                    logoutBtnEl.addEventListener('click', () => auth.signOut());
        
                    const DEEPGRAM_API_KEY = window.APP_CONFIG.deepgramApiKey;
        
                    const fileInput = document.getElementById("fileInput");
                    const transcribeBtn = document.getElementById("transcribeBtn");
                    const localBtn = document.getElementById("localBtn");
                    const subtitleLanguageSelect = document.getElementById("subtitleLanguageSelect");
                    const statusEl = document.getElementById("status");
                    const loaderWrap = document.getElementById("loaderWrap");
                    const transcriptPreview =
                        document.getElementById("transcriptPreview");
                    const videoEl = document.getElementById("video");
                    const canvas = document.getElementById("canvas");
                    const subtitleEl = document.getElementById("subtitle");
                    const stylesGrid = document.getElementById("stylesGrid");
                    const animList = document.getElementById("animList");
                    const sizeRange = document.getElementById("sizeRange");
                    const alignCenter = document.getElementById("alignCenter");
                    const alignLeft = document.getElementById("alignLeft");
                    const alignRight = document.getElementById("alignRight");
                    const vPos = document.getElementById("vPos");
                    const playBtn = document.getElementById("playBtn");
                    const progress = document.getElementById("progress");
                    const progressBar = document.getElementById("progressBar");
                    const timeLabel = document.getElementById("timeLabel");
                    const subtitlesContainer = document.getElementById("subtitles");
                    const downloadBtn = document.getElementById("downloadBtn");

                    const requiredEditorElements = {
                        fileInput,
                        transcribeBtn,
                        localBtn,
                        subtitleLanguageSelect,
                        statusEl,
                        loaderWrap,
                        transcriptPreview,
                        videoEl,
                        canvas,
                        subtitleEl,
                        stylesGrid,
                        animList,
                        sizeRange,
                        alignCenter,
                        alignLeft,
                        alignRight,
                        vPos,
                        playBtn,
                        progress,
                        progressBar,
                        timeLabel,
                        subtitlesContainer,
                        downloadBtn,
                    };
                    const missingEditorElements = Object.entries(requiredEditorElements)
                        .filter(([, element]) => !element)
                        .map(([name]) => name);
                    if (missingEditorElements.length > 0) {
                        throw new Error("Faltan elementos interactivos del editor: " + missingEditorElements.join(", "));
                    }

                    const ctx = canvas.getContext("2d", { alpha: false });
                    if (!ctx) {
                        throw new Error("No se pudo crear el contexto del canvas.");
                    }
                    
                    const BLUR_PX = 120;
                    const STRIP_HEIGHT = Math.round(canvas.height * 0.30);
                    let raf = null;
                    const CANVAS_W = canvas.width;
                    const CANVAS_H = canvas.height;
        
                    // Global audio context handling
                    let audioCtx = null;
                    let mediaSourceNode = null;
                    let mediaStreamDestination = null;
        
                    let currentStyle = "style-1";
                    let currentAnim = "typewriter";
                    let currentEmphColor = null;
                    let currentEmphGlow = null;
                    let cues = [];
                    let videoDuration = 0;
                    let lastCueIndex = -1;
                    let typingTimer = null;
                    let typingFrameId = null;
                    let activeTypewriterCue = null;
                    let activeTypewriterContainer = null;
                    let lastLoadedFile = null;
                    let sharedFfmpeg = null;
                    let sharedFfmpegLoadPromise = null;
                    let generatedClips = [];
                    let fullVideoSubtitleData = null;
                    let decodedAudioCacheKey = null;
                    let decodedAudioBufferPromise = null;
                    let uploadedTranscriptionSourceCache = {
                        key: null,
                        url: null,
                    };

                    const subtitleLanguageBaseCodes = [
                        "es", "en", "fr", "de", "it", "pt", "ru", "uk", "pl", "nl", "sv", "no", "da", "fi", "is", "ga", "cy", "et", "lv", "lt",
                        "cs", "sk", "sl", "hr", "sr", "bs", "mk", "bg", "ro", "hu", "sq", "el", "tr", "az", "hy", "ka", "kk", "ky", "uz", "tk",
                        "mn", "ne", "si", "hi", "bn", "ur", "pa", "gu", "mr", "ta", "te", "kn", "ml", "or", "as", "sd", "sa", "fa", "ps", "ku",
                        "ar", "he", "yi", "am", "ti", "sw", "so", "ha", "yo", "ig", "zu", "xh", "st", "tn", "ts", "sn", "ny", "rw", "mg", "af",
                        "id", "ms", "tl", "vi", "th", "lo", "km", "my", "zh", "ja", "ko", "tt", "ug", "bo", "dv", "mi", "sm", "to", "fj", "haw",
                        "ht", "la", "lb", "mt", "eu", "gl", "ca", "co", "br", "gd", "fo", "fy", "eo", "jv", "su", "ceb", "hmn", "ilo", "qu", "gn"
                    ];
                    const subtitleLanguageVariants = [
                        { key: "std", suffix: "" },
                        { key: "intl", suffix: " (Internacional)" },
                        { key: "global", suffix: " (Global)" },
                    ];

                    function populateSubtitleLanguageOptions() {
                        if (!subtitleLanguageSelect) return;
                        const displayNames =
                            typeof Intl !== "undefined" && Intl.DisplayNames
                                ? new Intl.DisplayNames(["es"], { type: "language" })
                                : null;
                        const seen = new Set();
                        subtitleLanguageSelect.innerHTML = "";
                        subtitleLanguageBaseCodes.forEach((code) => {
                            if (seen.has(code)) return;
                            seen.add(code);
                            const baseLabel = displayNames?.of(code) || code.toUpperCase();
                            subtitleLanguageVariants.forEach((variant) => {
                                const option = document.createElement("option");
                                option.value = code + "__" + variant.key;
                                option.textContent =
                                    baseLabel.charAt(0).toUpperCase() +
                                    baseLabel.slice(1) +
                                    variant.suffix;
                                if (code === "es" && variant.key === "std") {
                                    option.selected = true;
                                }
                                subtitleLanguageSelect.appendChild(option);
                            });
                        });
                    }

                    function getSelectedSubtitleLanguage() {
                        const rawValue = subtitleLanguageSelect?.value || "es__std";
                        const code = rawValue.split("__")[0] || "es";
                        return {
                            code,
                            label:
                                subtitleLanguageSelect?.selectedOptions?.[0]?.textContent ||
                                (code === "es" ? "Español" : code.toUpperCase()),
                        };
                    }

                    async function translateText(text, targetCode) {
                        if (!text || !text.trim()) return text;
                        if (targetCode === "es") return text;
                        const url =
                            "https://api.mymemory.translated.net/get?q=" +
                            encodeURIComponent(text) +
                            "&langpair=es|" + encodeURIComponent(targetCode);
                        const response = await fetch(url);
                        if (!response.ok) {
                            throw new Error("No se pudo traducir el subtitulo.");
                        }
                        const json = await response.json();
                        return (
                            json?.responseData?.translatedText ||
                            text
                        );
                    }

                    function buildTimedWordsFromText(text, start, end, sourceWords) {
                        const translatedWords = (text || "")
                            .split(/\s+/)
                            .map((word) => word.trim())
                            .filter(Boolean);
                        if (!translatedWords.length) return null;

                        const duration = Math.max(0.2, (end || start + 0.2) - start);
                        if (sourceWords && sourceWords.length > 0) {
                            return translatedWords.map((word, index) => {
                                const startIndex = Math.floor((index / translatedWords.length) * sourceWords.length);
                                const endIndex = Math.min(
                                    sourceWords.length - 1,
                                    Math.floor(((index + 1) / translatedWords.length) * sourceWords.length),
                                );
                                const sourceStart = sourceWords[startIndex]?.start ?? start + (duration / translatedWords.length) * index;
                                const sourceEnd = sourceWords[endIndex]?.end ?? start + (duration / translatedWords.length) * (index + 1);
                                return {
                                    word,
                                    start: sourceStart,
                                    end: Math.max(sourceStart + 0.08, sourceEnd),
                                };
                            });
                        }

                        const perWord = duration / translatedWords.length;
                        return translatedWords.map((word, index) => ({
                            word,
                            start: start + perWord * index,
                            end: start + perWord * (index + 1),
                        }));
                    }

                    async function translateCues(baseCues, targetCode) {
                        if (targetCode === "es") return baseCues;
                        const translatedCues = [];
                        for (const cue of baseCues) {
                            const translatedText = await translateText(cue.text || "", targetCode);
                            translatedCues.push({
                                start: cue.start,
                                end: cue.end,
                                text: translatedText,
                                words: buildTimedWordsFromText(
                                    translatedText,
                                    cue.start,
                                    cue.end,
                                    cue.words,
                                ),
                            });
                        }
                        return translatedCues;
                    }

                    function cloneCueWithOffset(cue, offset) {
                        return {
                            ...cue,
                            start: Math.max(0, (cue.start || 0) + offset),
                            end: Math.max(0, (cue.end || 0) + offset),
                            words: cue.words
                                ? cue.words.map((word) => ({
                                      ...word,
                                      start: Math.max(0, (word.start || 0) + offset),
                                      end: Math.max(0, (word.end || 0) + offset),
                                  }))
                                : cue.words,
                        };
                    }

                    function shiftCuesToTimeline(baseCues, offset) {
                        return (baseCues || []).map((cue) => cloneCueWithOffset(cue, offset));
                    }

                    function normalizeCueTimeline(baseCues, maxEnd) {
                        const cuesToNormalize = (baseCues || [])
                            .map((cue) => ({
                                ...cue,
                                start: Math.max(0, cue.start || 0),
                                end: Math.max(0, cue.end || 0),
                                words: cue.words
                                    ? cue.words.map((word) => ({
                                          ...word,
                                          start: Math.max(0, word.start || 0),
                                          end: Math.max(0, word.end || 0),
                                      }))
                                    : cue.words,
                            }))
                            .sort((left, right) => left.start - right.start);

                        for (let index = 0; index < cuesToNormalize.length; index++) {
                            const currentCue = cuesToNormalize[index];
                            const nextCue = cuesToNormalize[index + 1];
                            const safeEnd = Math.max(currentCue.start + 0.18, currentCue.end);
                            currentCue.end = safeEnd;

                            if (nextCue) {
                                const gap = nextCue.start - currentCue.end;
                                if (gap > 0 && gap <= 0.45) {
                                    currentCue.end = nextCue.start;
                                }
                            }

                            if (Number.isFinite(maxEnd)) {
                                currentCue.end = Math.min(currentCue.end, maxEnd);
                            }

                            if (currentCue.words && currentCue.words.length > 0) {
                                currentCue.words = currentCue.words
                                    .sort((left, right) => left.start - right.start)
                                    .map((word, wordIndex, wordList) => {
                                        const nextWord = wordList[wordIndex + 1];
                                        const normalizedWord = {
                                            ...word,
                                            end: Math.max(word.start + 0.06, word.end),
                                        };
                                        if (nextWord) {
                                            const wordGap = nextWord.start - normalizedWord.end;
                                            if (wordGap > 0 && wordGap <= 0.2) {
                                                normalizedWord.end = nextWord.start;
                                            }
                                        }
                                        if (Number.isFinite(maxEnd)) {
                                            normalizedWord.end = Math.min(normalizedWord.end, maxEnd);
                                        }
                                        return normalizedWord;
                                    });
                            }
                        }

                        return cuesToNormalize;
                    }

                    function filterCuesToClipRange(baseCues, clip) {
                        if (!clip) return baseCues || [];
                        return (baseCues || [])
                            .filter((cue) => cue.end > clip.start && cue.start < clip.end)
                            .map((cue) => ({
                                ...cue,
                                start: Math.max(clip.start, cue.start),
                                end: Math.min(clip.end, cue.end),
                                words: cue.words
                                    ? cue.words
                                          .filter((word) => word.end > clip.start && word.start < clip.end)
                                          .map((word) => ({
                                              ...word,
                                              start: Math.max(clip.start, word.start),
                                              end: Math.min(clip.end, word.end),
                                          }))
                                    : cue.words,
                            }));
                    }

                    function createPreviewTextFromCues(baseCues) {
                        return (baseCues || []).map((cue) => cue.text || "").join(" ").trim();
                    }

                    function setTranscriptPreviewText(text) {
                        const safeText = text || "";
                        transcriptPreview.textContent =
                            safeText.slice(0, 300) + (safeText.length > 300 ? "..." : "");
                    }

                    function getClipDisplayLabel(clip) {
                        if (!clip) return "video completo";
                        return formatTime(clip.start) + " - " + formatTime(clip.end);
                    }

                    function buildTranscriptionSegments(totalDuration, maxSegmentDuration = 300) {
                        const segments = [];
                        let start = 0;
                        while (start < totalDuration) {
                            const end = Math.min(totalDuration, start + maxSegmentDuration);
                            segments.push({
                                start,
                                end,
                                dur: Math.max(0, end - start),
                            });
                            start = end;
                        }
                        return segments;
                    }

                    function buildTranscriptionSegmentsForRange(rangeStart, rangeEnd, maxSegmentDuration = 75) {
                        const segments = [];
                        let start = Math.max(0, rangeStart || 0);
                        const safeEnd = Math.max(start, rangeEnd || 0);

                        while (start < safeEnd) {
                            const end = Math.min(safeEnd, start + maxSegmentDuration);
                            segments.push({
                                start,
                                end,
                                dur: Math.max(0, end - start),
                            });
                            start = end;
                        }

                        return segments;
                    }

                    function getPreferredTranscriptionSegmentDuration(file, totalDuration) {
                        const sizeMb = (file?.size || 0) / (1024 * 1024);
                        if (sizeMb >= 900 || totalDuration >= 150 * 60) return 35;
                        if (sizeMb >= 500 || totalDuration >= 90 * 60) return 40;
                        if (sizeMb >= 250 || totalDuration >= 45 * 60) return 22;
                        if (sizeMb >= 120 || totalDuration >= 20 * 60) return 28;
                        if (sizeMb >= 60 || totalDuration >= 10 * 60) return 35;
                        return 45;
                    }

                    function shouldUseRemoteStorageTranscription(file, duration) {
                        if (!file || !file.type.startsWith("video/")) return false;
                        const sizeMb = (file.size || 0) / (1024 * 1024);
                        return sizeMb >= 850 || duration >= 120 * 60;
                    }

                    function getDeepgramRetryDelay(attempt) {
                        const safeAttempt = Math.max(1, Number(attempt) || 1);
                        return Math.min(20000, 1200 * Math.pow(1.65, safeAttempt - 1));
                    }

                    async function waitForDeepgramRetry(delayMs) {
                        await new Promise((resolve) => {
                            window.setTimeout(resolve, Math.max(0, delayMs || 0));
                        });
                    }

                    function getFirebaseStorageInstance() {
                        if (!firebase?.storage) {
                            throw new Error("Firebase Storage no está disponible en este navegador.");
                        }
                        return firebase.storage();
                    }

                    async function buildCuesFromDeepgramResponse(json, duration, subtitleLanguage) {
                        const transcript =
                            json?.results?.channels?.[0]?.alternatives?.[0]?.transcript || "";
                        const words =
                            json?.results?.channels?.[0]?.alternatives?.[0]?.words || null;
                        let generatedCues = [];

                        if (words && words.length > 0) {
                            generatedCues = buildCuesFromWords(words);
                        } else {
                            generatedCues = generateCuesFromTranscript(transcript, duration);
                        }

                        let activeCues = generatedCues;
                        if (subtitleLanguage.code !== "es") {
                            updateStatus(
                                "Traduciendo subtitulos de Español a " + subtitleLanguage.label + "...",
                                true,
                            );
                            activeCues = await translateCues(generatedCues, subtitleLanguage.code);
                        }

                        return {
                            cues: normalizeCueTimeline(activeCues, duration),
                            words,
                        };
                    }

                    function shouldRetryDeepgramError(error) {
                        const status = error?.status || 0;
                        const text = String(error?.text || error?.message || "").toLowerCase();
                        return status === 504 || status === 502 || status === 503 || text.includes("red") || text.includes("timeout");
                    }

                    function isDeepgramDecodeError(error) {
                        const text = String(error?.text || error?.message || "").toLowerCase();
                        return text.includes("unable to decode audio data") || text.includes("decode audio");
                    }

                    function shouldRetrySegmentWithSplit(error, segmentDuration) {
                        const safeDuration = Number(segmentDuration) || 0;
                        return safeDuration > 8 && (shouldRetryDeepgramError(error) || isDeepgramDecodeError(error));
                    }

                    async function transcribeBlobWithRetries(blob, url, apiKey, progressBarEl, progressTextEl, statusMessages, uploadStartPercent, maxAttempts = 10) {
                        let lastError = null;
                        for (let attempt = 1; attempt <= maxAttempts; attempt++) {
                            try {
                                return await transcribeBlobWithDeepgram(
                                    blob,
                                    url,
                                    apiKey,
                                    progressBarEl,
                                    progressTextEl,
                                    statusMessages,
                                    uploadStartPercent,
                                );
                            } catch (error) {
                                lastError = error;
                                if (!shouldRetryDeepgramError(error) || attempt === maxAttempts) {
                                    throw error;
                                }
                                const retryDelay = getDeepgramRetryDelay(attempt);
                                updateStatus(
                                    "Conexion inestable. Reintentando automaticamente en " + Math.ceil(retryDelay / 1000) + "s (intento " + attempt + " de " + maxAttempts + ")...",
                                    true,
                                );
                                setProgress(progressBarEl, progressTextEl, Math.max(uploadStartPercent, 25));
                                await waitForDeepgramRetry(retryDelay);
                            }
                        }
                        throw lastError || new Error("No se pudo transcribir el audio.");
                    }

                    async function uploadVideoToFirebaseStorage(file, progressBarEl, progressTextEl) {
                        const storage = getFirebaseStorageInstance();
                        const fileCacheKey = getFileCacheKey(file);
                        if (uploadedTranscriptionSourceCache.key === fileCacheKey && uploadedTranscriptionSourceCache.url) {
                            return uploadedTranscriptionSourceCache.url;
                        }

                        const safeName = (file.name || "video")
                            .replace(/[^a-z0-9._-]+/gi, "_")
                            .replace(/^_+|_+$/g, "");
                        const storagePath = [
                            "transcriptions",
                            Date.now().toString(),
                            Math.random().toString(36).slice(2, 10) + "_" + safeName,
                        ].join("/");
                        const storageRef = storage.ref().child(storagePath);
                        const metadata = {
                            contentType: file.type || "video/mp4",
                            cacheControl: "public,max-age=3600",
                        };

                        updateStatus("Subiendo video pesado de forma reanudable...", true);
                        setProgress(progressBarEl, progressTextEl, 4, { force: true });

                        const downloadUrl = await new Promise((resolve, reject) => {
                            const uploadTask = storageRef.put(file, metadata);

                            uploadTask.on(
                                "state_changed",
                                (snapshot) => {
                                    const totalBytes = snapshot.totalBytes || file.size || 1;
                                    const uploadedRatio = Math.max(0, Math.min(1, snapshot.bytesTransferred / totalBytes));
                                    const progressValue = mapProgress(uploadedRatio, 4, 55);
                                    setProgress(progressBarEl, progressTextEl, progressValue);

                                    if (snapshot.state === firebase.storage.TaskState.PAUSED) {
                                        updateStatus("Subida pausada por la red. Reanudando automáticamente...", true);
                                    } else {
                                        updateStatus("Subiendo video pesado a almacenamiento seguro...", true);
                                    }
                                },
                                (error) => {
                                    reject(error);
                                },
                                async () => {
                                    try {
                                        const url = await uploadTask.snapshot.ref.getDownloadURL();
                                        resolve(url);
                                    } catch (error) {
                                        reject(error);
                                    }
                                },
                            );
                        });

                        uploadedTranscriptionSourceCache = {
                            key: fileCacheKey,
                            url: downloadUrl,
                        };
                        return downloadUrl;
                    }

                    async function transcribeRemoteUrlWithDeepgram(mediaUrl, url, apiKey, progressBarEl, progressTextEl, statusMessages, uploadStartPercent) {
                        const processingStart = Math.max(55, uploadStartPercent || 55);
                        let processingInterval = null;

                        try {
                            return await new Promise((resolve, reject) => {
                                const xhr = new XMLHttpRequest();
                                xhr.open("POST", url);
                                xhr.timeout = 20 * 60 * 1000;
                                xhr.setRequestHeader("Authorization", "Token " + apiKey);
                                xhr.setRequestHeader("Content-Type", "application/json");

                                updateStatus(statusMessages.remoteProcessing || "Enviando URL segura a Deepgram...", true);
                                setProgress(progressBarEl, progressTextEl, processingStart);

                                processingInterval = setInterval(() => {
                                    const currentValue = parseFloat(progressBarEl.style.width) || processingStart;
                                    if (currentValue < 96) {
                                        const nextValue = currentValue + Math.max(0.8, (96 - currentValue) * 0.08);
                                        setProgress(progressBarEl, progressTextEl, nextValue);
                                    }
                                }, 900);

                                xhr.onload = () => {
                                    if (processingInterval) clearInterval(processingInterval);
                                    if (xhr.status >= 200 && xhr.status < 300) {
                                        try {
                                            resolve(JSON.parse(xhr.responseText));
                                        } catch (error) {
                                            reject(new Error("Respuesta inválida de Deepgram."));
                                        }
                                    } else {
                                        reject({ status: xhr.status, text: xhr.responseText });
                                    }
                                };
                                xhr.onerror = () => {
                                    if (processingInterval) clearInterval(processingInterval);
                                    reject(new Error("Error de red"));
                                };
                                xhr.ontimeout = () => {
                                    if (processingInterval) clearInterval(processingInterval);
                                    reject(new Error("Timeout consultando Deepgram por URL"));
                                };
                                xhr.send(JSON.stringify({ url: mediaUrl }));
                            });
                        } finally {
                            if (processingInterval) clearInterval(processingInterval);
                        }
                    }

                    async function transcribeSegmentRange(file, segment, requestConfig) {
                        const {
                            url,
                            apiKey,
                            progressBarEl,
                            progressTextEl,
                            subtitleLanguage,
                            segmentIndex,
                            segmentCount,
                            minSegmentDuration = 8,
                        } = requestConfig;

                        try {
                            const segmentAudio = await createOptimizedAudioForTranscription(file, progressBarEl, progressTextEl, {
                                clipRange: { start: segment.start, end: segment.end },
                            });

                            const json = await transcribeBlobWithRetries(
                                segmentAudio,
                                url,
                                apiKey,
                                progressBarEl,
                                progressTextEl,
                                {
                                    upload: "Subiendo segmento " + segmentIndex + " de " + segmentCount + "...",
                                    optimizedUpload: "Subiendo audio del segmento " + segmentIndex + "...",
                                    processing: "Procesando segmento " + segmentIndex + " de " + segmentCount + "...",
                                },
                                Math.max(25, ((segmentIndex - 1) / Math.max(1, segmentCount)) * 100 + 5),
                            );

                            return await buildCuesFromDeepgramResponse(
                                json,
                                segment.dur,
                                subtitleLanguage,
                            );
                        } catch (error) {
                            if (!shouldRetrySegmentWithSplit(error, segment.dur) || segment.dur <= minSegmentDuration) {
                                throw error;
                            }

                            const childSegments = buildTranscriptionSegmentsForRange(segment.start, segment.end, Math.max(minSegmentDuration, Math.ceil(segment.dur / 2)));
                            let childCues = [];
                            let childWords = null;

                            updateStatus(
                                "La red va lenta o Deepgram rechazó un tramo; reintentando el segmento " + segmentIndex + " en partes más pequeñas...",
                                true,
                            );

                            for (let childIndex = 0; childIndex < childSegments.length; childIndex++) {
                                const childSegment = childSegments[childIndex];
                                const childResult = await transcribeSegmentRange(file, childSegment, {
                                    ...requestConfig,
                                    segmentIndex: segmentIndex + "." + (childIndex + 1),
                                    segmentCount,
                                });
                                childCues.push(...shiftCuesToTimeline(childResult.cues, childSegment.start - segment.start));
                                childWords = childWords || childResult.words || null;
                            }

                            return {
                                cues: normalizeCueTimeline(childCues, segment.dur),
                                words: childWords,
                            };
                        }
                    }

                    async function transcribeVideoInSegments(file, segments, url, apiKey, progressBarEl, progressTextEl, subtitleLanguage, timelineDuration) {
                        const mergedCues = [];
                        let usedPreciseWords = false;

                        for (let index = 0; index < segments.length; index++) {
                            const segment = segments[index];
                            const progressStart = (index / segments.length) * 100;
                            const progressEnd = ((index + 1) / segments.length) * 100;

                            updateStatus(
                                "Transcribiendo segmento " + (index + 1) + " de " + segments.length + "...",
                                true,
                            );

                            const segmentResult = await transcribeSegmentRange(file, segment, {
                                url,
                                apiKey,
                                progressBarEl,
                                progressTextEl,
                                subtitleLanguage,
                                segmentIndex: index + 1,
                                segmentCount: segments.length,
                            });
                            const shiftedSegmentCues = shiftCuesToTimeline(segmentResult.cues, segment.start);
                            mergedCues.push(...shiftedSegmentCues);
                            usedPreciseWords = usedPreciseWords || Boolean(segmentResult.words && segmentResult.words.length > 0);
                            setProgress(progressBarEl, progressTextEl, progressEnd);
                        }

                        return {
                            cues: normalizeCueTimeline(mergedCues, timelineDuration || undefined),
                            words: usedPreciseWords,
                        };
                    }

                    function applySubtitleDataForCurrentSelection() {
                        if (selectedClip) {
                            if (selectedClip.subtitleData?.cues?.length) {
                                cues = selectedClip.subtitleData.cues;
                                setTranscriptPreviewText(selectedClip.subtitleData.previewText);
                                return;
                            }

                            if (fullVideoSubtitleData?.cues?.length) {
                                const clipCues = filterCuesToClipRange(fullVideoSubtitleData.cues, selectedClip);
                                cues = clipCues;
                                setTranscriptPreviewText(createPreviewTextFromCues(clipCues));
                                return;
                            }

                            cues = [];
                            setTranscriptPreviewText("Transcribe este clip para ver sus subtitulos aqui.");
                            return;
                        }

                        cues = fullVideoSubtitleData?.cues || [];
                        setTranscriptPreviewText(fullVideoSubtitleData?.previewText || "");
                    }

                    async function getSharedFfmpeg() {
                        if (sharedFfmpeg) return sharedFfmpeg;
                        if (sharedFfmpegLoadPromise) return sharedFfmpegLoadPromise;

                        const ffmpegLib = window.FFmpegWasm || window.FFmpeg;
                        if (!ffmpegLib) {
                            throw new Error("FFmpeg no está disponible en este navegador.");
                        }

                        sharedFfmpegLoadPromise = (async () => {
                            const { FFmpeg, toBlobURL } = ffmpegLib;
                            const ffmpeg = new FFmpeg();
                            const baseURL = "https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.6/dist/umd";

                            await ffmpeg.load({
                                coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
                                wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, "application/wasm"),
                            });

                            sharedFfmpeg = ffmpeg;
                            return ffmpeg;
                        })().catch((error) => {
                            sharedFfmpegLoadPromise = null;
                            throw error;
                        });

                        return sharedFfmpegLoadPromise;
                    }

                    function setProgress(progressBarEl, progressTextEl, value, options = {}) {
                        const safeValue = Math.max(0, Math.min(100, value));
                        const currentValue = parseFloat(progressBarEl.style.width) || 0;
                        const nextValue = options.force ? safeValue : Math.max(currentValue, safeValue);
                        progressBarEl.style.width = nextValue + "%";
                        progressTextEl.textContent = Math.round(nextValue) + "%";
                    }

                    function mapProgress(value, from, to) {
                        return from + (to - from) * value;
                    }

                    function shouldPreprocessBeforeUpload(file, duration) {
                        if (!file || !file.type.startsWith("video/")) return false;
                        const largeFileThreshold = 45 * 1024 * 1024;
                        const longVideoThreshold = 8 * 60;
                        return file.size >= largeFileThreshold || duration >= longVideoThreshold;
                    }

                    function getFileCacheKey(file) {
                        return [
                            file?.name || "",
                            file?.size || 0,
                            file?.lastModified || 0,
                            file?.type || "",
                        ].join("::");
                    }

                    function getFileExtension(fileName) {
                        const match = String(fileName || "").match(/\.([a-z0-9]+)$/i);
                        return match ? match[0].toLowerCase() : "";
                    }

                    function resampleMonoChannel(channelData, sourceRate, targetRate) {
                        if (sourceRate === targetRate) {
                            return channelData;
                        }

                        const ratio = sourceRate / targetRate;
                        const resampledLength = Math.max(1, Math.round(channelData.length / ratio));
                        const resampled = new Float32Array(resampledLength);

                        for (let index = 0; index < resampledLength; index++) {
                            const sourceIndex = index * ratio;
                            const leftIndex = Math.floor(sourceIndex);
                            const rightIndex = Math.min(channelData.length - 1, leftIndex + 1);
                            const blend = sourceIndex - leftIndex;
                            const leftValue = channelData[leftIndex] || 0;
                            const rightValue = channelData[rightIndex] || 0;
                            resampled[index] = leftValue + (rightValue - leftValue) * blend;
                        }

                        return resampled;
                    }

                    function encodeWavFromMonoPcm(samples, sampleRate) {
                        const buffer = new ArrayBuffer(44 + samples.length * 2);
                        const view = new DataView(buffer);
                        const writeString = (offset, value) => {
                            for (let index = 0; index < value.length; index++) {
                                view.setUint8(offset + index, value.charCodeAt(index));
                            }
                        };

                        writeString(0, "RIFF");
                        view.setUint32(4, 36 + samples.length * 2, true);
                        writeString(8, "WAVE");
                        writeString(12, "fmt ");
                        view.setUint32(16, 16, true);
                        view.setUint16(20, 1, true);
                        view.setUint16(22, 1, true);
                        view.setUint32(24, sampleRate, true);
                        view.setUint32(28, sampleRate * 2, true);
                        view.setUint16(32, 2, true);
                        view.setUint16(34, 16, true);
                        writeString(36, "data");
                        view.setUint32(40, samples.length * 2, true);

                        let offset = 44;
                        for (let index = 0; index < samples.length; index++) {
                            const sample = Math.max(-1, Math.min(1, samples[index] || 0));
                            view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7fff, true);
                            offset += 2;
                        }

                        return new Blob([buffer], { type: "audio/wav" });
                    }

                    function buildMonoSamplesFromDecodedBuffer(decodedBuffer, clipRange = null) {
                        const sourceSampleRate = decodedBuffer.sampleRate;
                        const safeStart = Math.max(0, clipRange?.start || 0);
                        const safeEnd = Math.max(safeStart, clipRange?.end || decodedBuffer.duration || 0);
                        const startSample = Math.max(0, Math.floor(safeStart * sourceSampleRate));
                        const endSample = Math.min(decodedBuffer.length, Math.ceil(safeEnd * sourceSampleRate));
                        const sampleLength = Math.max(1, endSample - startSample);
                        const channelCount = Math.max(1, decodedBuffer.numberOfChannels || 1);
                        const monoSamples = new Float32Array(sampleLength);

                        for (let channelIndex = 0; channelIndex < channelCount; channelIndex++) {
                            const channelData = decodedBuffer.getChannelData(channelIndex);
                            for (let sampleIndex = 0; sampleIndex < sampleLength; sampleIndex++) {
                                monoSamples[sampleIndex] += channelData[startSample + sampleIndex] || 0;
                            }
                        }

                        for (let sampleIndex = 0; sampleIndex < sampleLength; sampleIndex++) {
                            monoSamples[sampleIndex] /= channelCount;
                        }

                        return {
                            monoSamples,
                            sourceSampleRate,
                        };
                    }

                    async function createWavFallbackFromDecodedAudio(file, clipRange, progressBarEl, progressTextEl) {
                        const targetSampleRate = 16000;

                        updateStatus(
                            clipRange
                                ? "Extrayendo audio del clip sin depender del codec del navegador..."
                                : "Extrayendo audio estable para Deepgram...",
                            true,
                        );
                        setProgress(progressBarEl, progressTextEl, 8);

                        const decodedBuffer = await getDecodedAudioBuffer(file);
                        const { monoSamples, sourceSampleRate } = buildMonoSamplesFromDecodedBuffer(decodedBuffer, clipRange);

                        setProgress(progressBarEl, progressTextEl, mapProgress(0.5, 8, 25));
                        const resampledSamples = resampleMonoChannel(monoSamples, sourceSampleRate, targetSampleRate);
                        const wavBlob = encodeWavFromMonoPcm(resampledSamples, targetSampleRate);
                        setProgress(progressBarEl, progressTextEl, 25);

                        return new File(
                            [wavBlob],
                            file.name.replace(/\.[^.]+$/, "") + (clipRange ? "_clip_transcripcion.wav" : "_transcripcion.wav"),
                            {
                                type: "audio/wav",
                                lastModified: Date.now(),
                            },
                        );
                    }

                    function ensureUsableTranscriptionBlob(blob, label = "audio") {
                        const minBytes = 512;
                        if (!blob || typeof blob.size !== "number" || blob.size < minBytes) {
                            throw new Error("No se pudo generar un " + label + " valido para transcribir.");
                        }
                        return blob;
                    }

                    async function getDecodedAudioBuffer(file) {
                        const fileCacheKey = getFileCacheKey(file);
                        if (decodedAudioCacheKey === fileCacheKey && decodedAudioBufferPromise) {
                            return decodedAudioBufferPromise;
                        }

                        decodedAudioCacheKey = fileCacheKey;
                        decodedAudioBufferPromise = (async () => {
                            if (!audioCtx) {
                                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                            }
                            const fileBuffer = await file.arrayBuffer();
                            return await audioCtx.decodeAudioData(fileBuffer.slice(0));
                        })().catch((error) => {
                            decodedAudioBufferPromise = null;
                            throw error;
                        });

                        return decodedAudioBufferPromise;
                    }

                    async function seekVideoToTime(targetTime) {
                        const safeTime = Math.max(0, Number(targetTime) || 0);
                        if (Math.abs((videoEl.currentTime || 0) - safeTime) < 0.05) {
                            return;
                        }

                        await new Promise((resolve, reject) => {
                            const handleSeeked = () => {
                                cleanup();
                                resolve();
                            };
                            const handleError = () => {
                                cleanup();
                                reject(new Error("No se pudo posicionar el video en el clip."));
                            };
                            const cleanup = () => {
                                videoEl.removeEventListener("seeked", handleSeeked);
                                videoEl.removeEventListener("error", handleError);
                            };

                            videoEl.addEventListener("seeked", handleSeeked);
                            videoEl.addEventListener("error", handleError);
                            videoEl.currentTime = safeTime;
                        });
                    }

                    async function captureClipAudioFallback(file, clipRange, progressBarEl, progressTextEl) {
                        if (!clipRange) {
                            throw new Error("No hay clip seleccionado para capturar audio.");
                        }
                        return await createWavFallbackFromDecodedAudio(file, clipRange, progressBarEl, progressTextEl);
                    }

                    async function createOptimizedAudioForTranscription(file, progressBarEl, progressTextEl, options = {}) {
                        const clipRange = options.clipRange || null;

                        try {
                            const ffmpeg = await getSharedFfmpeg();
                            const stamp = Date.now().toString(36);
                            const inputName = `transcribe_input_${stamp}${getFileExtension(file.name)}`;
                            const outputName = `transcribe_audio_${stamp}.wav`;
                            const inputBytes = new Uint8Array(await file.arrayBuffer());

                            setProgress(progressBarEl, progressTextEl, 5);
                            await ffmpeg.writeFile(inputName, inputBytes);
                            updateStatus(
                                clipRange
                                    ? "Extrayendo audio del clip seleccionado..."
                                    : "Extrayendo audio liviano para evitar timeouts...",
                                true,
                            );
                            setProgress(progressBarEl, progressTextEl, 12);

                            const ffmpegArgs = clipRange
                                ? [
                                      "-ss", String(Math.max(0, clipRange.start || 0)),
                                      "-to", String(Math.max(0, clipRange.end || 0)),
                                      "-i", inputName,
                                      "-vn",
                                      "-map", "0:a:0?",
                                      "-ac", "1",
                                      "-ar", "16000",
                                      "-c:a", "pcm_s16le",
                                                                            "-f", "wav",
                                      outputName,
                                  ]
                                : [
                                      "-i", inputName,
                                      "-vn",
                                      "-map", "0:a:0?",
                                      "-ac", "1",
                                      "-ar", "16000",
                                      "-c:a", "pcm_s16le",
                                                                            "-f", "wav",
                                      outputName,
                                  ];

                            await ffmpeg.exec(ffmpegArgs);

                            setProgress(progressBarEl, progressTextEl, 25);
                            const data = await ffmpeg.readFile(outputName);
                            const optimizedBlob = new Blob([data], { type: "audio/wav" });
                            ensureUsableTranscriptionBlob(optimizedBlob);
                            return new File([optimizedBlob], file.name.replace(/\.[^.]+$/, "") + "_transcripcion.wav", {
                                type: "audio/wav",
                                lastModified: Date.now(),
                            });
                        } catch (error) {
                            const fallbackFile = await createWavFallbackFromDecodedAudio(file, clipRange, progressBarEl, progressTextEl);
                            return ensureUsableTranscriptionBlob(fallbackFile);
                        }
                    }

                    async function transcribeBlobWithDeepgram(blob, url, apiKey, progressBarEl, progressTextEl, statusMessages, uploadStartPercent) {
                        const uploadStart = uploadStartPercent;
                        const uploadEnd = 85;
                        let processingInterval = null;

                        try {
                            return await new Promise((resolve, reject) => {
                                const xhr = new XMLHttpRequest();
                                xhr.open("POST", url);
                                xhr.timeout = 15 * 60 * 1000;
                                xhr.setRequestHeader("Authorization", "Token " + apiKey);
                                xhr.setRequestHeader("Content-Type", blob.type || "application/octet-stream");

                                xhr.upload.onprogress = (e) => {
                                    if (!e.lengthComputable) return;
                                    const percent = mapProgress(e.loaded / e.total, uploadStart, uploadEnd);
                                    setProgress(progressBarEl, progressTextEl, percent);
                                    if (percent >= uploadEnd - 1) {
                                        updateStatus(statusMessages.processing, true);
                                    }
                                };

                                xhr.upload.onload = () => {
                                    let val = Math.max(uploadEnd, uploadStart);
                                    processingInterval = setInterval(() => {
                                        if (val < 99) {
                                            val += (99 - val) * 0.05;
                                            setProgress(progressBarEl, progressTextEl, val);
                                        }
                                    }, 500);
                                };

                                xhr.onload = () => {
                                    if (processingInterval) clearInterval(processingInterval);
                                    if (xhr.status >= 200 && xhr.status < 300) {
                                        try {
                                            resolve(JSON.parse(xhr.responseText));
                                        } catch (error) {
                                            reject(new Error("Respuesta inválida de Deepgram."));
                                        }
                                    } else {
                                        reject({ status: xhr.status, text: xhr.responseText });
                                    }
                                };
                                xhr.onerror = () => {
                                    if (processingInterval) clearInterval(processingInterval);
                                    reject(new Error("Error de red"));
                                };
                                xhr.ontimeout = () => {
                                    if (processingInterval) clearInterval(processingInterval);
                                    reject(new Error("Timeout de subida"));
                                };
                                xhr.send(blob);
                            });
                        } finally {
                            if (processingInterval) clearInterval(processingInterval);
                        }
                    }

                    populateSubtitleLanguageOptions();
        
                    function updateStatus(msg, active) {
                        statusEl.innerHTML =
                            '<span class="status-dot"></span> ' + (msg || "");
                        if (typeof active === "boolean")
                            statusEl.classList.toggle("active", active);
                    }
        
                    const fileInfoCard = document.getElementById("fileInfoCard");
                    const fileInfoName = document.getElementById("fileInfoName");
                    const fileInfoSize = document.getElementById("fileInfoSize");
                    const fileInfoRemove = document.getElementById("fileInfoRemove");
                    const aiSplitSection = document.getElementById("aiSplitSection");
                    const previewPlaceholder =
                        document.getElementById("previewPlaceholder");
                    const previewBadge = document.getElementById("previewBadge");
                    const dropZone = document.getElementById("dropZone");
        
                    function showFileInfo(file) {
                        fileInfoName.textContent = file.name;
                        fileInfoSize.textContent =
                            (file.size / (1024 * 1024)).toFixed(1) + " MB";
                        fileInfoCard.style.display = "flex";
                        dropZone.style.display = "none";
                        aiSplitSection.style.display = "block";
                        previewPlaceholder.style.display = "none";
                        previewBadge.textContent =
                            file.name.slice(0, 20) +
                            (file.name.length > 20 ? "..." : "");
                        statusEl.classList.add("active");
                    }
        
                    function startDrawLoop(){
                        if(raf) cancelAnimationFrame(raf);
                        function draw(){
                            const vw = videoEl.videoWidth;
                            const vh = videoEl.videoHeight;
                            if(!vw || !vh){
                                raf = requestAnimationFrame(draw);
                                return;
                            }
        
                            // 1. DIBUJAR FONDO BORROSO (Efecto "Blur" universal)
                            // Escalamos para cubrir todo el lienzo (Cover)
                            const scaleCover = Math.max(CANVAS_W / vw, CANVAS_H / vh);
                            const bgW = vw * scaleCover;
                            const bgH = vh * scaleCover;
                            const bgX = (CANVAS_W - bgW) / 2;
                            const bgY = (CANVAS_H - bgH) / 2;
        
                            ctx.save();
                            ctx.filter = `blur(${BLUR_PX}px) brightness(0.65)`;
                            ctx.drawImage(videoEl, 0, 0, vw, vh, bgX, bgY, bgW, bgH);
                            ctx.restore();
        
                            // 2. DIBUJAR VIDEO PRINCIPAL (Encajado sin recortes)
                            const scaleFit = Math.min(CANVAS_W / vw, CANVAS_H / vh);
                            const drawW = vw * scaleFit;
                            const drawH = vh * scaleFit;
                            const dx = (CANVAS_W - drawW) / 2;
                            const dy = (CANVAS_H - drawH) / 2;
        
                            ctx.filter = 'none';
                            ctx.drawImage(videoEl, 0, 0, vw, vh, dx, dy, drawW, drawH);
        
                            // draw subtitles on canvas (only during export to avoid duplicates in preview)
                            if (isRecording) {
                                const t = videoEl.currentTime || 0;
                                for(const s of cues){
                                    if(t >= s.start && t <= s.end){
                                        drawSubtitleOnCanvas(s);
                                    }
                                }
                            }
        
                            // draw overlay image on canvas (only during export to avoid duplicates in preview)
                            if (isRecording && overlayWrap) {
                                const img = overlayWrap.querySelector('img');
                                if (img && img.complete) {
                                    const scaleX = CANVAS_W / videoContainer.clientWidth;
                                    const scaleY = CANVAS_H / videoContainer.clientHeight;
                                    
                                    const x = (parseFloat(overlayWrap.style.left) || 0) * scaleX;
                                    const y = (parseFloat(overlayWrap.style.top) || 0) * scaleY;
                                    const w = (parseFloat(overlayWrap.style.width) || 0) * scaleX;
                                    const h = (parseFloat(overlayWrap.style.height) || 0) * scaleY;
                                    
                                    ctx.drawImage(img, x, y, w, h);
                                }
                            }
        
                            raf = requestAnimationFrame(draw);
                        }
                        draw();
                    }
        
                    /* Draw subtitle directly on canvas (used for export) */
                    function drawSubtitleOnCanvas(s){
                      if (!s || (!s.text && !s.words)) return;
                      
                      // Resolvedor de estilos para que el Canvas coincida 1:1 con las 100 plantillas CSS
                      const getStyleConfig = (id) => {
                          let cfg = { bg: "rgba(0, 0, 0, 0.6)", text: "#ffffff", grad: null, radius: 15, paddingX: 30, paddingY: 15 };
                          
                          if ([1, 5, 9, 16, 27].includes(id)) cfg.bg = null;
                          if ([2, 7, 12, 17, 21, 23, 29, 39, 47, 63, 71].includes(id)) cfg.text = "#111111";
                          if ([4, 7, 14, 25, 26, 34, 45, 50, 55, 60, 74, 99].includes(id)) cfg.radius = 999;
        
                          if (id === 2) cfg.bg = "#fff0a8";
                          else if ([6, 32, 46, 51, 59, 69, 78, 92].includes(id)) cfg.bg = "#ef4444";
                          else if (id === 7) cfg.bg = "#a7f3d0";
                          else if ([11, 33, 57, 76, 94].includes(id)) cfg.bg = "#f97316";
                          else if (id === 12) cfg.bg = "#93c5fd";
                          else if ([17, 63, 71].includes(id)) cfg.bg = "#fef08a";
                          else if ([23, 42, 54, 65, 79, 90, 97].includes(id)) cfg.bg = "#10b981";
                          else if ([28, 53, 62, 80, 98].includes(id)) cfg.bg = "#7c3aed";
                          else if ([29, 34, 38, 43, 48, 52, 58, 68, 74, 77, 88, 93].includes(id)) cfg.bg = "#06b6d4";
                          else if ([39, 73].includes(id)) cfg.bg = "#7dd3fc";
                          else if ([40, 66, 82, 95].includes(id)) cfg.bg = "#a78bfa";
                          else if ([41, 67, 83].includes(id)) cfg.bg = "#f472b6";
                          else if ([47, 87].includes(id)) cfg.bg = "#f59e0b";
                          else if (id === 86) cfg.bg = "#fb7185";
                          
                          if ([4, 20, 30, 49, 60, 99].includes(id)) cfg.grad = ["#06b6d4", "#7c3aed"];
                          else if ([14, 37, 70].includes(id)) cfg.grad = ["#06b6d4", "#60a5fa"];
                          else if (id === 24) cfg.grad = ["#ef4444", "#f97316"];
                          
                          if (cfg.radius > 100) cfg.paddingX = 45;
                          return cfg;
                      };
        
                      ctx.save();
                      
                      // 1. Configuración de Estilo, Fuente y Alineación
                      const styleId = parseInt(currentStyle.replace('style-', '')) || 1;
                      const cfg = getStyleConfig(styleId);
                      
                      const baseFontSize = (parseInt(sizeRange.value) || 20) * 2.2;
                      const alignment = document.querySelector('.align-btn.active')?.dataset.align || 'center';
                      
                      // Mapeo de fuentes exacto de las plantillas
                      let fontFamily = "Inter, sans-serif";
                      if ([1, 9, 17, 28, 34, 40, 46, 52, 58, 64, 70, 76, 82, 88, 94].includes(styleId)) fontFamily = "Oswald, sans-serif";
                      else if ([2, 7, 13, 18, 23, 29, 35, 41, 47, 53, 59, 65, 71, 77, 83, 89, 95, 100].includes(styleId)) fontFamily = "Poppins, sans-serif";
                      else if ([5, 12, 19, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84, 90, 96].includes(styleId)) fontFamily = "Space Grotesk, sans-serif";
                      else if ([3, 8, 14, 20, 25, 31, 37, 43, 49, 55, 61, 67, 73, 79, 85, 91, 97].includes(styleId)) fontFamily = "Montserrat, sans-serif";
                      else if ([4, 10, 15, 21, 26, 32, 38, 44, 50, 56, 62, 68, 74, 80, 86, 92, 98].includes(styleId)) fontFamily = "Rubik, sans-serif";
        
                      ctx.font = `900 ${baseFontSize}px ${fontFamily}`;
                      ctx.textBaseline = "middle";
        
                      const t = videoEl.currentTime;
                      const py = CANVAS_H - (parseInt(vPos.value) * (CANVAS_H / 520) || 100);
        
                      // 2. Procesar palabras y agrupar en líneas para evitar desbordamiento (Ajuste para 9:16)
                      const wordsData = s.words && s.words.length > 0 ? s.words : s.text.split(' ').map((w, i, arr) => ({
                          word: w,
                          start: s.start + (i / arr.length) * (s.end - s.start),
                          end: s.end
                      }));
        
                      const maxW = CANVAS_W * 0.88; // Margen de seguridad para que no toque los bordes
                      const lines = [];
                      let currentLineWords = [];
                      let curW = 0;
                      const spaceW = ctx.measureText(" ").width;
        
                      wordsData.forEach((w) => {
                          const wordW = ctx.measureText(w.word.toUpperCase()).width;
                          if (curW + wordW > maxW && currentLineWords.length > 0) {
                              lines.push({ words: currentLineWords, width: curW - spaceW });
                              currentLineWords = [];
                              curW = 0;
                          }
                          currentLineWords.push({ ...w, width: wordW });
                          curW += wordW + spaceW;
                      });
                      if (currentLineWords.length > 0) lines.push({ words: currentLineWords, width: curW - spaceW });
        
                      const lineHeight = baseFontSize * 1.4;
        
                      // 3 & 4. Dibujar líneas y palabras individualmente
                      lines.forEach((line, lineIdx) => {
                          const lineY = py - (lines.length - 1 - lineIdx) * lineHeight;
                          let lineX;
                          if (alignment === 'left') lineX = CANVAS_W * 0.06;
                          else if (alignment === 'right') lineX = CANVAS_W * 0.94 - line.width;
                          else lineX = (CANVAS_W - line.width) / 2;
        
                          if (cfg.bg || cfg.grad) {
                              ctx.filter = 'none';
                              const boxW = line.width + (cfg.paddingX * 2);
                              const boxH = baseFontSize * 1.4;
                              const boxX = lineX - cfg.paddingX;
                              if (cfg.grad) {
                                  const g = ctx.createLinearGradient(Math.round(boxX), 0, Math.round(boxX + boxW), 0);
                                  g.addColorStop(0, cfg.grad[0]); g.addColorStop(1, cfg.grad[1]);
                                  ctx.fillStyle = g;
                              } else ctx.fillStyle = cfg.bg;
                              roundRect(ctx, Math.round(boxX), Math.round(lineY - (boxH / 2) + (baseFontSize * 0.05)), Math.round(boxW), Math.round(boxH), cfg.radius > 100 ? boxH / 2 : cfg.radius);
                              ctx.fill();
                          }
        
                          let currentX = lineX;
                          line.words.forEach((w, i) => {
                              const wordText = w.word.toUpperCase();
                              const wordWidth = w.width;
                              
                              // Sincronización exacta con lógica de Preview
                              const cleanWord = w.word.replace(/[.,!?;:'"()]/g, "").toLowerCase();
                              const negList = ["no","never","none","nothing","nowhere","nobody","neither","nor","can't","won't","don't","doesn't","didn't","isn't","aren't","wasn't","weren't","haven't","hasn't","hadn't","shouldn't","wouldn't","couldn't","mightn't","mustn't"];
                              const isNeg = negList.includes(cleanWord);
                              let isCap = w.word.length > 3 && w.word[0] === w.word[0].toUpperCase();
        
                              // Fallback: Si no hay mayúsculas y hay un color de énfasis activo, 
                              // coloreamos una palabra por línea (la del medio) para que coincida con el preview.
                              const hasAnyCap = line.words.some(word => word.word.length > 3 && word.word[0] === word.word[0].toUpperCase());
                              if (!hasAnyCap && !isNeg && currentEmphColor && i === Math.floor(line.words.length / 2)) {
                                  isCap = true;
                              }
        
                              let fill = cfg.text;
                              
                              // IMPORTANTE: Limpiar filtros y sombras antes de cada palabra
                              ctx.filter = 'none';
                              ctx.shadowBlur = 0;
                              ctx.shadowColor = "transparent";
                              ctx.shadowOffsetY = 0;
        
                              if (isNeg) {
                                  fill = "#ff6b6b"; // Rojo de la clase .negative
                                  ctx.shadowColor = "rgba(255, 107, 107, 0.4)";
                                  ctx.shadowBlur = 10;
                              } else if (isCap) {
                                  fill = currentEmphColor || "#7cfc9a"; // Clase .emph (verde por defecto)
                                  ctx.shadowColor = currentEmphGlow || fill;
                                  ctx.shadowBlur = 15;
                              } else if (!cfg.bg && !cfg.grad) {
                                  ctx.shadowColor = "rgba(0,0,0,0.95)";
                                  ctx.shadowBlur = 12;
                                  ctx.shadowOffsetY = 4;
                              }
        
                              const wordMidX = currentX + wordWidth / 2;
                              const wordElapsed = t - w.start;
        
                              if (wordElapsed >= 0) {
                                  ctx.save();
                                  let opacity = 1, scale = 1, yOff = 0, xOff = 0, blur = 0, skew = 0, rotate = 0;
                                  const animDur = 0.32;
                                  const p = Math.min(1, wordElapsed / animDur);
        
                                  if (currentAnim === 'typewriter') { opacity = p; yOff = (1-p)*6; }
                                  else if (currentAnim === 'float') { opacity = p; yOff = p < 0.6 ? (1-p/0.6)*10 : (p-0.6)/0.4*-3; if(p>0.6) yOff = -3 + (p-0.6)/0.4*3; }
                                  else if (currentAnim === 'bounce') {
                                      opacity = p;
                                      if(p<0.6) { scale = (p/0.6)*1.2; yOff = (1-p/0.6)*8; }
                                      else if(p<0.8) { scale = 1.2 - ((p-0.6)/0.2)*0.28; }
                                      else { scale = 0.92 + ((p-0.8)/0.2)*0.08; }
                                  }
                                  else if (currentAnim === 'cinematic') { opacity = p; xOff = (1-p)*-20; skew = (1-p)*6; blur = (1-p)*4; }
                                  else if (currentAnim === 'glitch') { opacity = p; if(p<0.2) xOff = -4; else if(p<0.4) xOff=4; else if(p<0.6) xOff=-2; }
                                  else if (currentAnim === 'neon') { opacity = p; }
                                  else if (currentAnim === 'wave') { opacity = p; yOff = p < 0.7 ? (1-p/0.7)*12 : (p-0.7)/0.3*-2; rotate = (1-p)*-4; }
                                  else if (currentAnim === 'blur-in') { opacity = p; blur = (1-p)*10; scale = 1.08 - (p*0.08); }
                                  else if (currentAnim === 'flip') { rotate = (1-p)*90; opacity = p; }
                                  else if (currentAnim === 'swing') { rotate = p<0.6 ? (1-p/0.6)*-15 : (p-0.6)/0.4*6; opacity = p; }
                                  else if (currentAnim === 'pop') {
                                      opacity = p;
                                      if(p<0.6) scale = (p/0.6)*1.15;
                                      else if(p<0.8) scale = 1.15 - ((p-0.6)/0.2)*0.2;
                                      else scale = 0.95 + ((p-0.8)/0.2)*0.05;
                                  }
                                  else if (currentAnim === 'slide-up') { opacity = p; yOff = (1-p)*20; }
                                  else if (currentAnim === 'slide-left') { opacity = p; xOff = (1-p)*30; }
                                  else if (currentAnim === 'zoom-blur') { scale = 1.6 - (p*0.6); blur = (1-p)*8; opacity = p; }
        
                                  ctx.globalAlpha = opacity;
                                  if (blur > 0) ctx.filter = `blur(${blur}px)`;
                                  ctx.translate(Math.round(wordMidX), Math.round(lineY + yOff));
                                  if (skew !== 0) ctx.transform(1, 0, Math.tan(skew * Math.PI / 180), 1, xOff, 0);
                                  else ctx.translate(xOff, 0);
                                  ctx.scale(scale, scale);
                                  ctx.rotate(rotate * Math.PI / 180);
        
                                  ctx.fillStyle = fill; ctx.textAlign = "left"; ctx.fillText(wordText, -wordWidth/2, 0);
                                  ctx.restore();
                              }
                              currentX += wordWidth + spaceW;
                          });
                      });
                      ctx.restore();
                    }
        
                    /* Text helpers */
                    function roundRect(ctx,x,y,w,h,r){
                      ctx.beginPath();
                      ctx.moveTo(x+r,y);
                      ctx.arcTo(x+w,y,x+w,y+h,r);
                      ctx.arcTo(x+w,y+h,x,y+h,r);
                      ctx.arcTo(x,y+h,x,y,r);
                      ctx.arcTo(x,y,x+w,y,r);
                      ctx.closePath();
                    }
                    function wrapTextLines(text, maxWidth){
                      const words = text.split(/\s+/);
                      const lines = [];
                      let cur = '';
                      for(const w of words){
                        const test = cur ? cur + ' ' + w : w;
                        const width = ctx.measureText(test).width;
                        if(width > maxWidth && cur){
                          lines.push(cur);
                          cur = w;
                        } else {
                          cur = test;
                        }
                      }
                      if(cur) lines.push(cur);
                      return lines;
                    }
        
                    async function triggerFileLoad(file) {
                        lastLoadedFile = file;
                        generatedClips = [];
                        fullVideoSubtitleData = null;
                        decodedAudioCacheKey = null;
                        decodedAudioBufferPromise = null;
                        uploadedTranscriptionSourceCache = { key: null, url: null };
                        selectedClip = null;
                        isViewingClip = false;
                        showFileInfo(file);
                        const url = URL.createObjectURL(file);
                        
                        // Clear previous state
                        videoEl.pause();
                        videoEl.currentTime = 0;
                        
                        // Set crossOrigin before setting src
                        videoEl.crossOrigin = "anonymous";
                        videoEl.src = url;
                        videoEl.load();
                        
                        updateStatus("Archivo cargado: " + file.name, true);
                        setTranscriptPreviewText("");
                        cues = [];
                        lastCueIndex = -1;
                        subtitleEl.textContent = "";
                        
                        // Handle metadata loading
                        const handleMetadata = () => {
                            videoDuration = videoEl.duration || 0;
                            updateTimeLabel();
                            fileInfoSize.textContent = (file.size / (1024 * 1024)).toFixed(1) + " MB • " + formatTime(videoDuration);
                            downloadBtn.disabled = false;
                            downloadBtn.style.opacity = "1";
                            updateStatus("Video listo. Haz clic en Play para reproducir.", true);
                            
                            startDrawLoop();
                        };
                        
                        // Remove any existing listener
                        videoEl.removeEventListener("loadedmetadata", handleMetadata);
                        videoEl.addEventListener("loadedmetadata", handleMetadata, { once: true });
                        
                        // Fallback
                        setTimeout(() => {
                            if (videoDuration === 0 && videoEl.duration > 0) {
                                videoDuration = videoEl.duration;
                                updateTimeLabel();
                                fileInfoSize.textContent = (file.size / (1024 * 1024)).toFixed(1) + " MB • " + formatTime(videoDuration);
                                downloadBtn.disabled = false;
                                downloadBtn.style.opacity = "1";
                            }
                        }, 4000);
                    }
        
                    document.querySelectorAll(".tab-btn").forEach((btn) => {
                        btn.addEventListener("click", () => {
                            document
                                .querySelectorAll(".tab-btn")
                                .forEach((b) => b.classList.remove("active"));
                            document
                                .querySelectorAll(".tab-content")
                                .forEach((t) => t.classList.remove("active"));
                            btn.classList.add("active");
                            document
                                .getElementById("tab-" + btn.dataset.tab)
                                .classList.add("active");
                        });
                    });
        
                    ["dragenter", "dragover"].forEach((ev) => {
                        dropZone.addEventListener(ev, (e) => {
                            e.preventDefault();
                            dropZone.classList.add("dragover");
                        });
                    });
                    ["dragleave", "drop"].forEach((ev) => {
                        dropZone.addEventListener(ev, (e) => {
                            e.preventDefault();
                            dropZone.classList.remove("dragover");
                        });
                    });
                    dropZone.addEventListener("drop", (e) => {
                        const file = e.dataTransfer.files[0];
                        if (file && file.type.startsWith("video/"))
                            triggerFileLoad(file);
                    });
        
                    fileInfoRemove.addEventListener("click", () => {
                        fileInfoCard.style.display = "none";
                        dropZone.style.display = "block";
                        aiSplitSection.style.display = "none";
                        videoEl.src = "";
                        previewPlaceholder.style.display = "flex";
                        previewBadge.textContent = "Sin video";
                        cues = [];
                        lastCueIndex = -1;
                        lastLoadedFile = null;
                        generatedClips = [];
                        fullVideoSubtitleData = null;
                        decodedAudioCacheKey = null;
                        decodedAudioBufferPromise = null;
                        uploadedTranscriptionSourceCache = { key: null, url: null };
                        selectedClip = null;
                        isViewingClip = false;
                        setTranscriptPreviewText("");
                        updateStatus("Esperando archivo...", false);
                    });
        
                    const sizeValEl = document.getElementById("sizeVal");
                    sizeRange.addEventListener("input", () => {
                        subtitleEl.style.fontSize = sizeRange.value + "px";
                        if (sizeValEl) sizeValEl.textContent = sizeRange.value + "px";
                    });
        
                    const noBgStyles = new Set([1, 2, 9, 14, 29, 37, 49, 99]);
                    const specialTemplates = [
                        {
                            id: "style-1-red",
                            label: "1 - Rojo",
                            emphColor: "#ff4d4d",
                            glow: "rgba(255,77,77,0.6)",
                        },
                        {
                            id: "style-1-green",
                            label: "1.1 - Verde",
                            emphColor: "#4dff91",
                            glow: "rgba(77,255,145,0.6)",
                        },
                        {
                            id: "style-1-yellow",
                            label: "1.2 - Amarillo",
                            emphColor: "#ffe94d",
                            glow: "rgba(255,233,77,0.6)",
                        },
                        {
                            id: "style-1-blue",
                            label: "1.3 - Azul",
                            emphColor: "#4daeff",
                            glow: "rgba(77,174,255,0.6)",
                        },
                    ];
                    specialTemplates.forEach((tpl) => {
                        const btn = document.createElement("button");
                        btn.className = "style-btn special-tpl";
                        btn.dataset.style = tpl.id;
                        const label = document.createElement("div");
                        label.className = "style-btn-label";
                        label.textContent = "Plantilla " + tpl.label;
                        const preview = document.createElement("div");
                        preview.className = "style-btn-preview";
                        preview.style.background = "rgba(0,0,0,0.55)";
                        preview.style.borderRadius = "0 0 10px 10px";
                        const sampleSpan = document.createElement("span");
                        sampleSpan.className = "style-1";
                        sampleSpan.style.fontFamily = "Oswald, Inter";
                        sampleSpan.style.textTransform = "uppercase";
                        sampleSpan.innerHTML =
                            'Hola <span style="color:' +
                            tpl.emphColor +
                            ";text-shadow:0 0 8px " +
                            tpl.glow +
                            ';font-weight:900">mundo</span>';
                        preview.appendChild(sampleSpan);
                        btn.appendChild(label);
                        btn.appendChild(preview);
                        btn.addEventListener("click", () => {
                            document
                                .querySelectorAll(".style-btn")
                                .forEach((b) =>
                                    b.classList.remove("active", "active-check"),
                                );
                            btn.classList.add("active", "active-check");
                            currentStyle = "style-1";
                            currentEmphColor = tpl.emphColor;
                            currentEmphGlow = tpl.glow;
                            subtitleEl.className = "subtitle style-1 no-bg";
                        });
                        stylesGrid.appendChild(btn);
                    });
                    for (let i = 1; i <= 100; i++) {
                        const btn = document.createElement("button");
                        btn.className =
                            "style-btn" + (i === 1 ? " active active-check" : "");
                        btn.dataset.style = "style-" + i;
                        const label = document.createElement("div");
                        label.className = "style-btn-label";
                        label.textContent = "Plantilla " + i;
                        const preview = document.createElement("div");
                        preview.className = "style-btn-preview";
                        const sampleSpan = document.createElement("span");
                        sampleSpan.className = "style-" + i;
                        sampleSpan.textContent = "Subtitulo";
                        if (noBgStyles.has(i)) {
                            preview.style.background = "rgba(0,0,0,0.55)";
                            preview.style.borderRadius = "0 0 10px 10px";
                        }
                        preview.appendChild(sampleSpan);
                        btn.appendChild(label);
                        btn.appendChild(preview);
                        btn.addEventListener("click", () => {
                            document
                                .querySelectorAll(".style-btn")
                                .forEach((b) =>
                                    b.classList.remove("active", "active-check"),
                                );
                            btn.classList.add("active", "active-check");
                            currentStyle = btn.dataset.style;
                            currentEmphColor = null;
                            currentEmphGlow = null;
                            subtitleEl.className = "subtitle " + currentStyle;
                            if (noBgStyles.has(i)) subtitleEl.classList.add("no-bg");
                            else subtitleEl.classList.remove("no-bg");
                        });
                        stylesGrid.appendChild(btn);
                    }
        
                    const navHamburger = document.getElementById("navHamburger");
                    const navMobileMenu = document.getElementById("navMobileMenu");
                    navHamburger.addEventListener("click", () => {
                        navHamburger.classList.toggle("open");
                        navMobileMenu.classList.toggle("open");
                    });
                    navMobileMenu.querySelectorAll("a").forEach((link) => {
                        link.addEventListener("click", () => {
                            navHamburger.classList.remove("open");
                            navMobileMenu.classList.remove("open");
                        });
                    });
        
                    animList.addEventListener("click", (e) => {
                        const chip = e.target.closest(".chip");
                        if (!chip) return;
                        animList
                            .querySelectorAll(".chip")
                            .forEach((c) => c.classList.remove("active"));
                        chip.classList.add("active");
                        currentAnim = chip.dataset.anim;
                    });
        
                    function setAlignment(a) {
                        subtitleEl.style.textAlign = a;
                        if (a === "left") {
                            subtitlesContainer.style.justifyContent = "flex-start";
                            subtitlesContainer.style.alignItems = "flex-start";
                            subtitleEl.style.maxWidth = "90%";
                        } else if (a === "right") {
                            subtitlesContainer.style.justifyContent = "flex-start";
                            subtitlesContainer.style.alignItems = "flex-end";
                            subtitleEl.style.maxWidth = "90%";
                        } else {
                            subtitlesContainer.style.justifyContent = "center";
                            subtitlesContainer.style.alignItems = "center";
                            subtitleEl.style.maxWidth = "92%";
                        }
                    }
                    document
                        .getElementById("alignGroup")
                        .addEventListener("click", (e) => {
                            const btn = e.target.closest(".align-btn");
                            if (!btn) return;
                            document
                                .querySelectorAll(".align-btn")
                                .forEach((b) => b.classList.remove("active"));
                            btn.classList.add("active");
                            setAlignment(btn.dataset.align);
                        });
        
                    vPos.addEventListener("input", () => {
                        subtitlesContainer.style.bottom =
                            parseInt(vPos.value, 10) + "px";
                        subtitlesContainer.style.top = "auto";
                    });
        
                    fileInput.addEventListener("change", (e) => {
                        const f = e.target.files[0];
                        if (!f) return;
                        triggerFileLoad(f);
                    });
        
                    transcribeBtn.addEventListener("click", async () => {
                        const file = fileInput.files[0] || lastLoadedFile;
                        if (!file) {
                            updateStatus("Selecciona un archivo primero");
                            return;
                        }
                        if (!DEEPGRAM_API_KEY) {
                            updateStatus(
                                "Token Deepgram no configurado. Usa Prueba local.",
                            );
                            return;
                        }
                        const pBar = document.getElementById("transcribeProgressBar");
                        const pText = document.getElementById("transcribePercent");
                        loaderWrap.style.display = "block";
                        setProgress(pBar, pText, 0, { force: true });
                        const subtitleLanguage = getSelectedSubtitleLanguage();
                        const deepgramLanguage = "es";
                        const activeClip = isViewingClip && selectedClip ? selectedClip : null;
                        const currentRangeStart = activeClip ? activeClip.start : 0;
                        const currentRangeEnd = activeClip ? activeClip.end : videoDuration || 0;
                        const currentRangeDuration = Math.max(0, currentRangeEnd - currentRangeStart);
                        const preferredSegmentDuration = getPreferredTranscriptionSegmentDuration(file, currentRangeDuration || videoDuration || 0);
                        const shouldUseRemoteTranscription = !activeClip && shouldUseRemoteStorageTranscription(file, currentRangeDuration || videoDuration || 0);
                        const shouldUseSegmentedTranscription = file.type.startsWith("video/") && currentRangeDuration > 0;
                        const wantsOptimizedAudio = file.type.startsWith("video/") || Boolean(activeClip) || shouldUseSegmentedTranscription;
                        const params = new URLSearchParams({ language: deepgramLanguage, punctuate: "true" });
                        const url = "https://api.deepgram.com/v1/listen?" + params.toString();
                        const baseStatusMessages = {
                            upload:
                                activeClip
                                    ? "Subiendo clip " + getClipDisplayLabel(activeClip) + " a Deepgram..."
                                    : subtitleLanguage.code === "es"
                                    ? "Subiendo archivo a Deepgram en Español..."
                                    : "Subiendo audio para transcribir en español y traducir a " + subtitleLanguage.label + "...",
                            optimizedUpload:
                                activeClip
                                    ? "Subiendo audio del clip " + getClipDisplayLabel(activeClip) + "..."
                                    : subtitleLanguage.code === "es"
                                    ? "Subiendo audio optimizado a Deepgram..."
                                    : "Subiendo audio optimizado para traducir a " + subtitleLanguage.label + "...",
                            processing:
                                activeClip
                                    ? "Procesando subtitulos del clip seleccionado..."
                                    : subtitleLanguage.code === "es"
                                    ? "Procesando audio en Español..."
                                    : "Transcribiendo en español y preparando traducción...",
                            remoteProcessing:
                                subtitleLanguage.code === "es"
                                    ? "Deepgram está leyendo el video desde almacenamiento seguro..."
                                    : "Deepgram está leyendo el video y preparando la traducción...",
                        };
        
                        updateStatus(
                            activeClip
                                ? "Preparando audio del clip seleccionado..."
                                : shouldUseRemoteTranscription
                                ? "Preparando transcripción por URL para videos pesados..."
                                : wantsOptimizedAudio
                                ? "Preparando transcripción reforzada para conexión mala..."
                                : baseStatusMessages.upload,
                            true,
                        );
                        try {
                            let transcriptionSource = file;
                            let uploadStartPercent = 0;

                            if (wantsOptimizedAudio && !shouldUseSegmentedTranscription) {
                                try {
                                    transcriptionSource = await createOptimizedAudioForTranscription(file, pBar, pText, {
                                        clipRange: activeClip
                                            ? { start: activeClip.start, end: activeClip.end }
                                            : null,
                                    });
                                    updateStatus(baseStatusMessages.optimizedUpload, true);
                                    uploadStartPercent = 25;
                                } catch (preprocessError) {
                                    console.warn("No se pudo optimizar el audio antes de subirlo:", preprocessError);
                                    if (file.type.startsWith("video/")) {
                                        throw new Error(
                                            "No se pudo extraer un audio compatible desde este video en este navegador. Prueba Chrome actualizado o sirve la app desde http://localhost en vez de abrirla como archivo local.",
                                        );
                                    }
                                    setProgress(pBar, pText, 0, { force: true });
                                    updateStatus("No se pudo optimizar el audio; probando subida directa...", true);
                                    transcriptionSource = file;
                                    uploadStartPercent = 0;
                                }
                            }

                            let transcriptionResult = null;
                            try {
                                if (shouldUseRemoteTranscription) {
                                    const remoteMediaUrl = await uploadVideoToFirebaseStorage(file, pBar, pText);
                                    const json = await transcribeRemoteUrlWithDeepgram(
                                        remoteMediaUrl,
                                        url,
                                        DEEPGRAM_API_KEY,
                                        pBar,
                                        pText,
                                        baseStatusMessages,
                                        55,
                                    );
                                    transcriptionResult = await buildCuesFromDeepgramResponse(
                                        json,
                                        videoDuration || currentRangeDuration || 30,
                                        subtitleLanguage,
                                    );
                                } else if (shouldUseSegmentedTranscription) {
                                    const segments = buildTranscriptionSegmentsForRange(
                                        currentRangeStart,
                                        currentRangeEnd,
                                        preferredSegmentDuration,
                                    );
                                    transcriptionResult = await transcribeVideoInSegments(
                                        file,
                                        segments,
                                        url,
                                        DEEPGRAM_API_KEY,
                                        pBar,
                                        pText,
                                        subtitleLanguage,
                                        currentRangeDuration,
                                    );
                                } else {
                                    const json = await transcribeBlobWithRetries(
                                        transcriptionSource,
                                        url,
                                        DEEPGRAM_API_KEY,
                                        pBar,
                                        pText,
                                        baseStatusMessages,
                                        uploadStartPercent,
                                    );
                                    transcriptionResult = await buildCuesFromDeepgramResponse(
                                        json,
                                        activeClip ? activeClip.dur : videoDuration || 30,
                                        subtitleLanguage,
                                    );
                                }
                            } catch (firstError) {
                                const canFallbackToSegmentedVideo =
                                    file.type.startsWith("video/") &&
                                    currentRangeDuration > 0 &&
                                    (shouldUseRemoteTranscription || shouldUseSegmentedTranscription);
                                const shouldRetryWithOptimizedAudio =
                                    !wantsOptimizedAudio &&
                                    file.type.startsWith("video/") &&
                                    ((firstError?.status === 504) || String(firstError?.message || "").toLowerCase().includes("red") || isDeepgramDecodeError(firstError));

                                if (canFallbackToSegmentedVideo) {
                                    console.warn("Fallo la transcripcion remota; usando segmentos locales como respaldo:", firstError);
                                    updateStatus(
                                        "La ruta rápida del video pesado falló; continuando con segmentos más pequeños para evitar errores...",
                                        true,
                                    );
                                    setProgress(pBar, pText, Math.max(12, parseFloat(pBar.style.width) || 12));
                                    const fallbackSegments = buildTranscriptionSegmentsForRange(
                                        currentRangeStart,
                                        currentRangeEnd,
                                        Math.min(preferredSegmentDuration, 60),
                                    );
                                    transcriptionResult = await transcribeVideoInSegments(
                                        file,
                                        fallbackSegments,
                                        url,
                                        DEEPGRAM_API_KEY,
                                        pBar,
                                        pText,
                                        subtitleLanguage,
                                        currentRangeDuration,
                                    );
                                    firstError = null;
                                }

                                if (transcriptionResult) {
                                    // El respaldo por segmentos resolvió la transcripción.
                                } else {
                                    if (!shouldRetryWithOptimizedAudio) throw firstError;

                                    updateStatus(
                                        isDeepgramDecodeError(firstError)
                                            ? "Deepgram no pudo decodificar el video; reintentando con WAV estable..."
                                            : "Deepgram tardó demasiado; reintentando con audio optimizado...",
                                        true,
                                    );
                                    setProgress(pBar, pText, 5);
                                    transcriptionSource = await createOptimizedAudioForTranscription(file, pBar, pText);
                                    updateStatus(baseStatusMessages.optimizedUpload, true);
                                    const json = await transcribeBlobWithRetries(
                                        transcriptionSource,
                                        url,
                                        DEEPGRAM_API_KEY,
                                        pBar,
                                        pText,
                                        baseStatusMessages,
                                        25,
                                    );
                                    transcriptionResult = await buildCuesFromDeepgramResponse(
                                        json,
                                        activeClip ? activeClip.dur : videoDuration || 30,
                                        subtitleLanguage,
                                    );
                                }
                            }
        
                            // Al recibir respuesta, completamos al 100%
                            setProgress(pBar, pText, 100);

                            let activeCues = transcriptionResult.cues;

                            if (activeClip) {
                                activeCues = normalizeCueTimeline(
                                    shiftCuesToTimeline(activeCues, activeClip.start),
                                    activeClip.end,
                                );
                            }

                            const previewText = createPreviewTextFromCues(activeCues);

                            if (activeClip) {
                                activeClip.subtitleData = {
                                    cues: activeCues,
                                    previewText,
                                    languageCode: subtitleLanguage.code,
                                    languageLabel: subtitleLanguage.label,
                                };
                            } else {
                                fullVideoSubtitleData = {
                                    cues: activeCues,
                                    previewText,
                                    languageCode: subtitleLanguage.code,
                                    languageLabel: subtitleLanguage.label,
                                };
                            }

                            cues = activeCues;

                            setTranscriptPreviewText(previewText);

                            updateStatus(
                                (activeClip
                                    ? "Subtitulos del clip " + getClipDisplayLabel(activeClip) + " listos"
                                    : "Subtitulos en " + subtitleLanguage.label + " listos") +
                                    " - sincronizacion " + (transcriptionResult.words ? "precisa" : "aproximada"),
                                true,
                            );
                            
                            // Pequeño retardo para que el usuario vea el 100% antes de cerrar
                            setTimeout(() => {
                                loaderWrap.style.display = "none";
                            }, 600);
        
                            videoEl.currentTime = activeClip ? activeClip.start : 0;
                            await videoEl.play();
                        } catch (err) {
                            loaderWrap.style.display = "none";
                            const status = err.status || 0;
                            const text = err.text || err.message || "Error desconocido";
                            if (status === 429 || text.toLowerCase().includes("quota")) {
                                updateStatus("Deepgram: cuota excedida. Usa Prueba local.");
                            } else if (status === 504 || shouldRetryDeepgramError(err) || isDeepgramDecodeError(err)) {
                                updateStatus("La conexión está demasiado inestable para terminar ahora mismo. La app ya intentó varias veces y en segmentos pequeños. Vuelve a intentarlo dejando la pestaña abierta.");
                            } else {
                                updateStatus("No se pudo completar la transcripción en este intento. Reintenta en unos segundos.");
                            }
                            console.error(err);
                        }
                    });
        
                    function buildCuesFromWords(words) {
                        const grouped = [];
                        let seg = { start: null, end: null, words: [] };
                        for (let i = 0; i < words.length; i++) {
                            const w = words[i];
                            if (seg.start === null) seg.start = w.start;
                            seg.end = w.end;
                            seg.words.push(w);
                            const segDur = seg.end - seg.start;
                            if (
                                segDur >= 2.5 ||
                                seg.words.length >= 10 ||
                                i === words.length - 1
                            ) {
                                grouped.push({
                                    start: Math.max(0, seg.start),
                                    end: Math.max(seg.start + 0.2, seg.end),
                                    words: seg.words.slice(),
                                });
                                seg = { start: null, end: null, words: [] };
                            }
                        }
                        return grouped.map((g) => ({
                            start: g.start,
                            end: g.end,
                            text: g.words.map((w) => w.word).join(" "),
                            words: g.words,
                        }));
                    }
        
                    function generateCuesFromTranscript(text, duration) {
                        if (!text)
                            return [
                                { start: 0, end: Math.max(3, duration || 3), text: "" },
                            ];
                        const parts = text
                            .split(/(?<=[.?!])\s+/)
                            .filter((p) => p.trim().length > 0);
                        const n = Math.max(1, parts.length);
                        const avg =
                            duration && duration > 0
                                ? duration / n
                                : Math.max(3, parts.length);
                        let t = 0;
                        const out = [];
                        for (let i = 0; i < parts.length; i++) {
                            const start = t;
                            const end = Math.min(duration || t + avg, t + avg);
                            out.push({ start, end, text: parts[i].trim() });
                            t += avg;
                        }
                        return out;
                    }
        
                    // Play/Pause button
                    playBtn.addEventListener("click", async () => {
                        if (!videoEl.src) {
                            alert("Carga un video primero");
                            return;
                        }
                        if (videoEl.paused || videoEl.ended) {
                            await videoEl.play();
                        } else {
                            videoEl.pause();
                        }
                    });
        
                    videoEl.addEventListener("timeupdate", () => {
                        // Si estamos viendo un clip, limitar la reproducción al rango del clip
                        if (isViewingClip && selectedClip) {
                            if (videoEl.currentTime >= selectedClip.end) {
                                videoEl.currentTime = selectedClip.end;
                                videoEl.pause();
                            }
                            if (videoEl.currentTime < selectedClip.start) {
                                videoEl.currentTime = selectedClip.start;
                            }
                        }

                        updateProgress();
                        updateTimeLabel();
                        
                        if (!cues || cues.length === 0) return;
                        const t = videoEl.currentTime;
                        const idx = cues.findIndex((c) => t >= c.start && t <= c.end);
                        if (idx === -1) {
                            subtitleEl.classList.remove("show");
                            lastCueIndex = -1;
                            clearTyping();
                            return;
                        }
                        if (idx !== lastCueIndex) {
                            lastCueIndex = idx;
                            const cue = cues[idx];
                            if (cue.words && cue.words.length > 0)
                                renderCueWithWords(cue);
                            else renderCueText(cue.text, cue.start, cue.end);
                        } else if (
                            currentAnim === "typewriter" &&
                            activeTypewriterCue &&
                            cueMatchesActiveTypewriter(cues[idx])
                        ) {
                            syncTypewriterWords(videoEl.currentTime);
                        }
                    });
                    videoEl.addEventListener("pause", () => {
                        playBtn.textContent = "\u25B6";
                        subtitleEl.classList.remove("show");
                        clearTyping();
                    });
                    videoEl.addEventListener(
                        "play",
                        () => (playBtn.textContent = "\u275A\u275A"),
                    );
                    subtitleEl.addEventListener("click", () => {
                        if (lastCueIndex >= 0 && lastCueIndex < cues.length - 1)
                            videoEl.currentTime = cues[lastCueIndex + 1].start + 0.05;
                    });
        
                    function clearTyping() {
                        if (typingTimer) {
                            clearInterval(typingTimer);
                            typingTimer = null;
                        }
                        if (typingFrameId) {
                            cancelAnimationFrame(typingFrameId);
                            typingFrameId = null;
                        }
                        activeTypewriterCue = null;
                        activeTypewriterContainer = null;
                        subtitleEl.innerHTML = "";
                    }

                    function cueMatchesActiveTypewriter(cue) {
                        return (
                            activeTypewriterCue &&
                            cue &&
                            activeTypewriterCue.start === cue.start &&
                            activeTypewriterCue.end === cue.end &&
                            activeTypewriterCue.text === cue.text
                        );
                    }

                    function syncTypewriterWords(currentTime) {
                        if (!activeTypewriterCue || !activeTypewriterContainer) return;
                        const spans = Array.from(activeTypewriterContainer.children);
                        spans.forEach((span, index) => {
                            const wordData = activeTypewriterCue.words[index];
                            const shouldShow = currentTime >= (wordData?.start ?? activeTypewriterCue.start);
                            if (!shouldShow) {
                                span.style.opacity = "0";
                                span.dataset.revealed = "0";
                                return;
                            }
                            if (span.dataset.revealed !== "1") {
                                if (currentEmphColor) {
                                    applyWordEmphasisColored(
                                        span,
                                        wordData.word,
                                        index,
                                        currentEmphColor,
                                        currentEmphGlow,
                                    );
                                } else {
                                    applyWordEmphasis(span, wordData.word, index);
                                }
                                applyAnimToWord(span, 0, "typewriter");
                                span.dataset.revealed = "1";
                            }
                            span.style.opacity = "1";
                        });
                        if (currentEmphColor) {
                            applyColorVariantToRenderedWords(
                                activeTypewriterContainer.children,
                                currentEmphColor,
                                currentEmphGlow,
                            );
                        }
                    }
        
                    function applyAnimToWord(span, delay, anim) {
                        const dur = 320;
                        const opts = {
                            duration: dur,
                            delay: delay,
                            fill: "both",
                            easing: "cubic-bezier(0.2,0.9,0.3,1)",
                        };
                        const anims = {
                            typewriter: [
                                { transform: "translateY(6px)", opacity: 0 },
                                { transform: "translateY(0)", opacity: 1 },
                            ],
                            float: [
                                { transform: "translateY(10px)", opacity: 0 },
                                {
                                    transform: "translateY(-3px)",
                                    opacity: 1,
                                    offset: 0.6,
                                },
                                { transform: "translateY(0)", opacity: 1 },
                            ],
                            bounce: [
                                { transform: "scale(0) translateY(8px)", opacity: 0 },
                                {
                                    transform: "scale(1.2) translateY(-4px)",
                                    opacity: 1,
                                    offset: 0.6,
                                },
                                { transform: "scale(0.92)", offset: 0.8 },
                                { transform: "scale(1)", opacity: 1 },
                            ],
                            cinematic: [
                                {
                                    transform: "translateX(-20px) skewX(6deg)",
                                    opacity: 0,
                                    filter: "blur(4px)",
                                },
                                {
                                    transform: "translateX(0) skewX(0)",
                                    opacity: 1,
                                    filter: "blur(0)",
                                },
                            ],
                            glitch: [
                                { transform: "translateX(0)", opacity: 0 },
                                {
                                    transform: "translateX(-4px)",
                                    opacity: 1,
                                    offset: 0.2,
                                },
                                { transform: "translateX(4px)", offset: 0.4 },
                                { transform: "translateX(-2px)", offset: 0.6 },
                                { transform: "translateX(0)", opacity: 1 },
                            ],
                            neon: [
                                { opacity: 0, textShadow: "0 0 0 transparent" },
                                {
                                    opacity: 1,
                                    textShadow:
                                        "0 0 8px currentColor, 0 0 20px currentColor",
                                    offset: 0.5,
                                },
                                { opacity: 1, textShadow: "0 0 4px currentColor" },
                            ],
                            wave: [
                                {
                                    transform: "translateY(12px) rotate(-4deg)",
                                    opacity: 0,
                                },
                                {
                                    transform: "translateY(-2px) rotate(1deg)",
                                    opacity: 1,
                                    offset: 0.7,
                                },
                                { transform: "translateY(0) rotate(0)", opacity: 1 },
                            ],
                            "blur-in": [
                                {
                                    filter: "blur(10px)",
                                    opacity: 0,
                                    transform: "scale(1.08)",
                                },
                                {
                                    filter: "blur(0)",
                                    opacity: 1,
                                    transform: "scale(1)",
                                },
                            ],
                            flip: [
                                {
                                    transform: "rotateX(90deg) translateY(8px)",
                                    opacity: 0,
                                },
                                {
                                    transform: "rotateX(-10deg)",
                                    opacity: 1,
                                    offset: 0.6,
                                },
                                { transform: "rotateX(0)", opacity: 1 },
                            ],
                            swing: [
                                {
                                    transform: "rotate(-15deg) translateY(-8px)",
                                    opacity: 0,
                                    transformOrigin: "top center",
                                },
                                {
                                    transform: "rotate(6deg)",
                                    opacity: 1,
                                    offset: 0.6,
                                    transformOrigin: "top center",
                                },
                                {
                                    transform: "rotate(-3deg)",
                                    offset: 0.8,
                                    transformOrigin: "top center",
                                },
                                {
                                    transform: "rotate(0)",
                                    opacity: 1,
                                    transformOrigin: "top center",
                                },
                            ],
                            pop: [
                                { transform: "scale(0)", opacity: 0 },
                                { transform: "scale(1.15)", offset: 0.6 },
                                { transform: "scale(0.95)", offset: 0.8 },
                                { transform: "scale(1)", opacity: 1 },
                            ],
                            "slide-up": [
                                { transform: "translateY(20px)", opacity: 0 },
                                { transform: "translateY(0)", opacity: 1 },
                            ],
                            "slide-left": [
                                { transform: "translateX(30px)", opacity: 0 },
                                { transform: "translateX(0)", opacity: 1 },
                            ],
                            "zoom-blur": [
                                {
                                    transform: "scale(1.6)",
                                    filter: "blur(8px)",
                                    opacity: 0,
                                },
                                {
                                    transform: "scale(1)",
                                    filter: "blur(0)",
                                    opacity: 1,
                                },
                            ],
                        };
                        const kf = anims[anim] || anims["typewriter"];
                        span.animate(kf, opts);
                    }
        
                    function renderCueText(text, start, end) {
                        clearTyping();
                        subtitleEl.className = "subtitle " + currentStyle + (noBgStyles.has(parseInt(currentStyle.replace('style-',''))) ? " no-bg" : "");
                        subtitleEl.style.fontSize = sizeRange.value + "px";
                        const parsed = parseMarkupAndEmphasis(text);
                        if (currentAnim === "typewriter") typeText(parsed, start, end);
                        else {
                            subtitleEl.innerHTML = parsedToHTML(parsed);
                            subtitleEl.classList.add("show");
                            subtitleEl.querySelectorAll(".word").forEach((w, i) => {
                                applyAnimToWord(w, i * 55, currentAnim);
                            });
                            if (!subtitleEl.querySelectorAll(".word").length) {
                                applyAnimToWord(subtitleEl, 0, currentAnim);
                            }
                            if (currentEmphColor) {
                                applyColorVariantToRenderedWords(
                                    subtitleEl.querySelectorAll(".word"),
                                    currentEmphColor,
                                    currentEmphGlow,
                                );
                            }
                        }
                    }
        
                    function renderCueWithWords(cue) {
                        clearTyping();
                        subtitleEl.className = "subtitle " + currentStyle + (noBgStyles.has(parseInt(currentStyle.replace('style-',''))) ? " no-bg" : "");
                        subtitleEl.style.fontSize = sizeRange.value + "px";
                        subtitleEl.innerHTML = "";
                        const container = document.createElement("div");
                        container.style.display = "inline-block";
                        cue.words.forEach((w, i) => {
                            const span = document.createElement("span");
                            span.className = "word";
                            span.textContent =
                                w.word + (i < cue.words.length - 1 ? " " : "");
                            container.appendChild(span);
                        });
                        subtitleEl.appendChild(container);
                        subtitleEl.classList.add("show");
                        if (currentAnim === "typewriter") {
                            activeTypewriterCue = cue;
                            activeTypewriterContainer = container;
                            Array.from(container.children).forEach((span) => {
                                span.style.opacity = "0";
                                span.dataset.revealed = "0";
                            });
                            syncTypewriterWords(videoEl.currentTime);
                            return;
                        }
                        cue.words.forEach((w, i) => {
                            const delay = Math.max(
                                0,
                                (w.start - videoEl.currentTime) * 1000,
                            );
                            const span = container.children[i];
                            span.style.opacity = "0";
                            setTimeout(
                                () => {
                                    if (currentEmphColor) {
                                        applyWordEmphasisColored(
                                            span,
                                            w.word,
                                            i,
                                            currentEmphColor,
                                            currentEmphGlow,
                                        );
                                    } else {
                                        applyWordEmphasis(span, w.word, i);
                                    }
                                    applyAnimToWord(span, 0, currentAnim);
                                },
                                Math.max(0, delay),
                            );
                        });
                        if (currentEmphColor && container.children.length > 0) {
                            setTimeout(() => {
                                applyColorVariantToRenderedWords(
                                    container.children,
                                    currentEmphColor,
                                    currentEmphGlow,
                                );
                            }, 100);
                        }
                    }
        
                    function typeText(parsed, start, end) {
                        subtitleEl.innerHTML = "";
                        const container = document.createElement("div");
                        container.style.display = "inline-block";
                        subtitleEl.appendChild(container);
                        subtitleEl.classList.add("show");
                        const fullText = parsed.map((p) => p.text).join("");
                        const renderFrame = () => {
                            const totalDuration = Math.max(0.2, end - start);
                            const elapsed = Math.max(0, Math.min(videoEl.currentTime - start, totalDuration));
                            const progress = totalDuration > 0 ? elapsed / totalDuration : 1;
                            const idx = Math.max(0, Math.min(fullText.length, Math.floor(fullText.length * progress)));
                            if (idx >= fullText.length || videoEl.currentTime >= end) {
                                if (typingFrameId) {
                                    cancelAnimationFrame(typingFrameId);
                                    typingFrameId = null;
                                }
                                subtitleEl.innerHTML = parsedToHTML(parsed);
                                subtitleEl.classList.add("show");
                                if (currentEmphColor) {
                                    applyColorVariantToRenderedWords(
                                        subtitleEl.querySelectorAll(".word"),
                                        currentEmphColor,
                                        currentEmphGlow,
                                    );
                                }
                                return;
                            }
                            let built = "";
                            let rem = idx + 1;
                            for (const p of parsed) {
                                if (rem <= 0) break;
                                if (rem >= p.text.length) {
                                    built += p.text;
                                    rem -= p.text.length;
                                } else {
                                    built += p.text.slice(0, rem);
                                    rem = 0;
                                }
                            }
                            container.innerHTML =
                                escapeHtml(built) + '<span class="caret"></span>';
                            typingFrameId = requestAnimationFrame(renderFrame);
                        };
                        renderFrame();
                    }
        
                    function parseMarkupAndEmphasis(text) {
                        const tokens = [];
                        let i = 0;
                        while (i < text.length) {
                            if (text.startsWith("**", i)) {
                                const end = text.indexOf("**", i + 2);
                                if (end !== -1) {
                                    tokens.push({
                                        type: "emph",
                                        text: text.slice(i + 2, end),
                                    });
                                    i = end + 2;
                                    continue;
                                }
                            }
                            if (text.startsWith("__", i)) {
                                const end = text.indexOf("__", i + 2);
                                if (end !== -1) {
                                    tokens.push({
                                        type: "underline",
                                        text: text.slice(i + 2, end),
                                    });
                                    i = end + 2;
                                    continue;
                                }
                            }
                            if (text.startsWith("*", i)) {
                                const end = text.indexOf("*", i + 1);
                                if (end !== -1) {
                                    tokens.push({
                                        type: "highlight",
                                        text: text.slice(i + 1, end),
                                    });
                                    i = end + 1;
                                    continue;
                                }
                            }
                            const next = findNextMarkup(text, i);
                            tokens.push({ type: "text", text: text.slice(i, next) });
                            i = next;
                        }
                        const out = [];
                        tokens.forEach((t) => {
                            if (t.type === "text") {
                                const parts = t.text.split(/(\s+)/);
                                parts.forEach((p) => {
                                    if (p.trim() === "")
                                        out.push({ type: "text", text: p });
                                    else {
                                        const isCapitalized =
                                            p.length > 0 &&
                                            p[0] === p[0].toUpperCase() &&
                                            p.length > 3;
                                        const negList = [
                                            "no",
                                            "never",
                                            "none",
                                            "nothing",
                                            "nowhere",
                                            "nobody",
                                            "neither",
                                            "nor",
                                            "can't",
                                            "won't",
                                            "don't",
                                            "doesn't",
                                            "didn't",
                                            "isn't",
                                            "aren't",
                                            "wasn't",
                                            "weren't",
                                            "haven't",
                                            "hasn't",
                                            "hadn't",
                                            "shouldn't",
                                            "wouldn't",
                                            "couldn't",
                                            "mightn't",
                                            "mustn't",
                                        ];
                                        const cleanLower = p
                                            .replace(/[.,!?;:'"()]/g, "")
                                            .toLowerCase();
                                        if (negList.includes(cleanLower))
                                            out.push({ type: "negative", text: p });
                                        else if (isCapitalized)
                                            out.push({ type: "highlight", text: p });
                                        else out.push({ type: "text", text: p });
                                    }
                                });
                            } else {
                                out.push(t);
                            }
                        });
                        return out;
                    }
        
                    function findNextMarkup(text, start) {
                        const idxs = ["**", "__", "*"]
                            .map((m) => text.indexOf(m, start))
                            .filter((i) => i !== -1);
                        return idxs.length > 0 ? Math.min(...idxs) : text.length;
                    }
        
                    function parsedToHTML(tokens) {
                        return tokens
                            .map((t) => {
                                const escaped = escapeHtml(t.text);
                                if (t.type === "emph")
                                    return `<span class="word emph">${escaped}</span>`;
                                if (t.type === "underline")
                                    return `<span class="word underline">${escaped}</span>`;
                                if (t.type === "highlight")
                                    return `<span class="word highlight">${escaped}</span>`;
                                if (t.type === "negative")
                                    return `<span class="word negative">${escaped}</span>`;
                                return `<span class="word">${escaped}</span>`;
                            })
                            .join("");
                    }

                    function isNegativeWord(word) {
                        const clean = (word || "")
                            .replace(/[.,!?;:'"()]/g, "")
                            .toLowerCase();
                        const negList = [
                            "no",
                            "never",
                            "none",
                            "nothing",
                            "nowhere",
                            "nobody",
                            "neither",
                            "nor",
                            "can't",
                            "won't",
                            "don't",
                            "doesn't",
                            "didn't",
                            "isn't",
                            "aren't",
                            "wasn't",
                            "weren't",
                            "haven't",
                            "hasn't",
                            "hadn't",
                            "shouldn't",
                            "wouldn't",
                            "couldn't",
                            "mightn't",
                            "mustn't",
                        ];
                        return negList.includes(clean);
                    }

                    function applyColoredWordStyle(span, emphColor, emphGlow) {
                        span.classList.add("emph");
                        span.style.color = emphColor;
                        span.style.textShadow = `0 0 12px ${emphGlow || emphColor}, 0 0 4px ${emphColor}`;
                        span.style.fontWeight = "900";
                    }

                    function applyColorVariantToRenderedWords(words, emphColor, emphGlow) {
                        const wordNodes = Array.from(words || []).filter(
                            (span) => span.textContent && span.textContent.trim().length > 0,
                        );
                        if (!wordNodes.length) return;

                        const highlightedNodes = wordNodes.filter(
                            (span) =>
                                span.classList.contains("emph") ||
                                span.classList.contains("highlight"),
                        );

                        if (highlightedNodes.length > 0) {
                            highlightedNodes.forEach((span) => {
                                applyColoredWordStyle(span, emphColor, emphGlow);
                            });
                            return;
                        }

                        const eligibleNodes = wordNodes.filter(
                            (span) => !span.classList.contains("negative") && !isNegativeWord(span.textContent),
                        );
                        const fallbackNodes = eligibleNodes.length > 0 ? eligibleNodes : wordNodes;
                        const fallbackIndex = Math.floor((fallbackNodes.length - 1) / 2);
                        applyColoredWordStyle(fallbackNodes[fallbackIndex], emphColor, emphGlow);
                    }
        
                    function escapeHtml(unsafe) {
                        return unsafe
                            .replace(/&/g, "&amp;")
                            .replace(/</g, "&lt;")
                            .replace(/>/g, "&gt;")
                            .replace(/"/g, "&quot;")
                            .replace(/'/g, "&#039;");
                    }
        
                    function applyWordEmphasis(span, word, idx) {
                        if (isNegativeWord(word)) {
                            span.classList.add("negative");
                        } else if (
                            word.length > 3 &&
                            word[0] === word[0].toUpperCase()
                        ) {
                            span.classList.add("emph");
                            if (currentEmphColor) {
                                span.style.color = currentEmphColor;
                                span.style.textShadow = `0 0 10px ${currentEmphGlow || currentEmphColor}`;
                            }
                        }
                    }
        
                    function applyWordEmphasisColored(
                        span,
                        word,
                        idx,
                        emphColor,
                        emphGlow,
                    ) {
                        applyWordEmphasis(span, word, idx);
                        if (
                            span.classList.contains("emph") ||
                            span.classList.contains("highlight")
                        ) {
                            applyColoredWordStyle(span, emphColor, emphGlow);
                        }
                    }
        
                    let dragging = false,
                        dragStartY = 0,
                        startBottom = 0;
                    subtitleEl.addEventListener("pointerdown", (e) => {
                        dragging = true;
                        dragStartY = e.clientY;
                        const style = window.getComputedStyle(subtitlesContainer);
                        startBottom = parseInt(style.bottom) || 36;
                        subtitleEl.setPointerCapture(e.pointerId);
                        e.preventDefault();
                    });
                    subtitleEl.addEventListener("pointermove", (e) => {
                        if (!dragging) return;
                        const dy = dragStartY - e.clientY;
                        let newBottom = startBottom + dy;
                        newBottom = Math.max(0, Math.min(520, newBottom));
                        subtitlesContainer.style.bottom = newBottom + "px";
                        vPos.value = newBottom;
                    });
                    subtitleEl.addEventListener("pointerup", () => {
                        dragging = false;
                    });
        
                    progress.addEventListener("click", (e) => {
                        const rect = progress.getBoundingClientRect();
                        const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                        
                        if (isViewingClip && selectedClip) {
                            // Si estamos viendo un clip, calcular dentro del rango del clip
                            videoEl.currentTime = selectedClip.start + pct * selectedClip.dur;
                        } else {
                            // Si es el video completo, calcular normalmente
                            videoEl.currentTime = pct * videoDuration;
                        }
                    });
        
                    function getPreviewPlaybackState() {
                        const rawTime = Number.isFinite(videoEl.currentTime) ? videoEl.currentTime : 0;
                        if (isViewingClip && selectedClip) {
                            const clipStart = Number.isFinite(selectedClip.start) ? selectedClip.start : 0;
                            const clipEnd = Number.isFinite(selectedClip.end) ? selectedClip.end : clipStart;
                            const clipDuration = Math.max(0, clipEnd - clipStart);
                            const relativeTime = Math.max(0, Math.min(rawTime - clipStart, clipDuration));
                            return {
                                currentTime: relativeTime,
                                duration: clipDuration,
                            };
                        }

                        const duration = Number.isFinite(videoDuration) && videoDuration > 0 ? videoDuration : 0;
                        const currentTime = Math.max(0, Math.min(rawTime, duration || rawTime));
                        return {
                            currentTime,
                            duration,
                        };
                    }

                    function updateProgress() {
                        const playback = getPreviewPlaybackState();
                        const duration = playback.duration > 0 ? playback.duration : 1;
                        const pct = (playback.currentTime / duration) * 100;
                        progressBar.style.width = pct + "%";
                    }
        
                    function updateTimeLabel() {
                        const playback = getPreviewPlaybackState();
                        timeLabel.textContent = formatTime(playback.currentTime) + " / " + formatTime(playback.duration);
                    }
        
                    function formatTime(sec) {
                        if (!Number.isFinite(sec) || sec <= 0) return "00:00";
                        const m = Math.floor(sec / 60);
                        const s = Math.floor(sec % 60);
                        return (
                            m.toString().padStart(2, "0") +
                            ":" +
                            s.toString().padStart(2, "0")
                        );
                    }
        
                    /* ── AI Clips Generator ── */
                    const aiSplitBtn = document.getElementById("aiSplitBtn");
                    const aiClipsCarousel = document.getElementById("aiClipsCarousel");
                    const aiClipsMeta = document.getElementById("aiClipsMeta");
                    const aiClipsSection = document.getElementById("aiClipsSection");
                    const closeClipsBtn = document.getElementById("closeClipsBtn");
                    const resetClipsBtn = document.getElementById("resetClipsBtn");
                    
                    // Variables globales para rastrear clips
                    let selectedClip = null;
                    let isViewingClip = false;
        
                    // Generar miniatura de video en un punto específico
                    function getVideoThumbnail(videoUrl, timeInSeconds) {
                        return new Promise((resolve) => {
                            const v = document.createElement("video");
                            v.src = videoUrl;
                            v.muted = true;
                            v.crossOrigin = "anonymous";
                            v.addEventListener(
                                "loadeddata",
                                () => {
                                    v.currentTime = timeInSeconds;
                                },
                                { once: true },
                            );
                            v.addEventListener(
                                "seeked",
                                () => {
                                    try {
                                        const c = document.createElement("canvas");
                                        c.width = 100;
                                        c.height = 180;
                                        const ctx = c.getContext("2d");
                                        const vw = v.videoWidth || 1;
                                        const vh = v.videoHeight || 1;
                                        const scale = Math.max(c.width / vw, c.height / vh);
                                        const dw = vw * scale;
                                        const dh = vh * scale;
                                        const dx = (c.width - dw) / 2;
                                        const dy = (c.height - dh) / 2;
                                        ctx.drawImage(v, dx, dy, dw, dh);
                                        resolve(c.toDataURL("image/jpeg", 0.7));
                                    } catch (err) {
                                        console.warn("Thumbnail error:", err);
                                        resolve(null);
                                    }
                                    v.pause();
                                },
                                { once: true },
                            );
                        });
                    }
        
                    // Cerrar sección de clips
                    closeClipsBtn.addEventListener("click", () => {
                        aiClipsSection.style.display = "none";
                        aiSplitBtn.innerHTML = '← Abrir panel de clips';
                        aiSplitBtn.disabled = false;
                    });
                    
                    // Función para restablecer el panel de clips
                    function resetClipsPanel() {
                        document.querySelectorAll(".clip-card").forEach(c => c.classList.remove("selected"));
                        selectedClip = null;
                        isViewingClip = false;
                        resetClipsBtn.style.display = "none";
                        videoEl.currentTime = 0;
                        applySubtitleDataForCurrentSelection();
                        updateProgress();
                        updateTimeLabel();
                    }
                    
                    // Botón Restablecer dentro del panel
                    resetClipsBtn.addEventListener("click", () => {
                        resetClipsPanel();
                    });
        
                    aiSplitBtn.addEventListener("click", async () => {
                        // Si el botón dice "Abrir panel de clips", simplemente abrir el panel
                        if (aiSplitBtn.innerHTML.includes("Abrir panel")) {
                            aiClipsSection.style.display = "block";
                            return;
                        }
                        
                        if (!videoEl.src || !videoDuration) {
                            alert("Carga un video primero.");
                            return;
                        }
                        aiSplitBtn.disabled = true;
                        aiSplitBtn.innerHTML =
                            '<div style="width:14px;height:14px;border:2px solid rgba(4,32,40,0.3);border-top-color:#042028;border-radius:50%;animation:spin 0.8s linear infinite"></div> Analizando...';
                        await new Promise((r) => setTimeout(r, 1800));
        
                        const clipDur = 60;
                        const clips = [];
                        let t = 0;
                        const importanceKeywords = [
                            "increible",
                            "brutal",
                            "epic",
                            "wow",
                            "pero",
                            "entonces",
                            "porque",
                            "cuando",
                            "nunca",
                            "siempre",
                            "todo",
                            "nada",
                            "mejor",
                            "peor",
                            "mas",
                            "menos",
                        ];
        
                        while (t < videoDuration) {
                            const end = Math.min(t + clipDur, videoDuration);
                            const dur = end - t;
                            if (dur < 5) break;
                            let score = Math.random() * 40 + 60;
                            const scoringCues = fullVideoSubtitleData?.cues?.length
                                ? fullVideoSubtitleData.cues
                                : cues;
                            if (scoringCues && scoringCues.length) {
                                const cuesInRange = scoringCues.filter(
                                    (c) => c.start >= t && c.end <= end,
                                );
                                cuesInRange.forEach((c) => {
                                    const txt = (c.text || "").toLowerCase();
                                    importanceKeywords.forEach((kw) => {
                                        if (txt.includes(kw)) score += 5;
                                    });
                                });
                            }
                            clips.push({
                                id: "clip-" + (clips.length + 1),
                                start: t,
                                end,
                                dur,
                                score: Math.min(100, Math.round(score)),
                                subtitleData: null,
                            });
                            t += clipDur;
                        }
        
                        clips.sort((a, b) => b.score - a.score);
                        generatedClips = clips;
                        aiClipsCarousel.innerHTML = "";
        
                        // Generar miniaturas para cada clip
                        for (let idx = 0; idx < clips.length; idx++) {
                            const clip = clips[idx];
                            const card = document.createElement("div");
                            card.className = "clip-card";
                            
                            const thumb = document.createElement("div");
                            thumb.className = "clip-thumb-placeholder";
                            thumb.style.position = "relative";
                            thumb.style.overflow = "hidden";
                            
                            // Generar miniatura del video en el punto de inicio del clip
                            const thumbnailData = await getVideoThumbnail(videoEl.src, clip.start);
                            if (thumbnailData) {
                                const img = document.createElement("img");
                                img.src = thumbnailData;
                                img.style.width = "100%";
                                img.style.height = "100%";
                                img.style.objectFit = "cover";
                                img.style.display = "block";
                                thumb.textContent = "";
                                thumb.appendChild(img);
                            } else {
                                thumb.textContent = "📹";
                            }
                            
                            const badge = document.createElement("div");
                            badge.className = "clip-badge-ai";
                            badge.textContent = clip.score + "%";
                            
                            const info = document.createElement("div");
                            info.className = "clip-info";
                            info.innerHTML = `<div class="clip-time">${formatTime(clip.start)} – ${formatTime(clip.end)}</div><div class="clip-label">Clip ${idx + 1} · ${Math.round(clip.dur)}s</div>`;
                            
                            card.appendChild(thumb);
                            card.appendChild(badge);
                            card.appendChild(info);
                            
                            card.addEventListener("click", () => {
                                document
                                    .querySelectorAll(".clip-card")
                                    .forEach((c) => c.classList.remove("selected"));
                                card.classList.add("selected");
                                
                                // Guardar el clip seleccionado
                                selectedClip = clip;
                                isViewingClip = true;
                                applySubtitleDataForCurrentSelection();
                                
                                // Mostrar botón Restablecer
                                resetClipsBtn.style.display = "flex";
                                
                                // Iniciar reproducción desde el inicio del clip
                                videoEl.currentTime = clip.start;
                                updateProgress();
                                updateTimeLabel();
                                updateStatus(
                                    clip.subtitleData?.cues?.length
                                        ? "Mostrando subtitulos guardados del clip " + getClipDisplayLabel(clip) + "."
                                        : "Clip " + getClipDisplayLabel(clip) + " listo para transcribir.",
                                    true,
                                );
                                videoEl.play();
                            });
                            
                            aiClipsCarousel.appendChild(card);
                        }
        
                        aiClipsSection.style.display = "block";
                        aiClipsMeta.textContent =
                            clips.length + " clips · selecciona uno para editarlo";
                        aiSplitBtn.disabled = false;
                        aiSplitBtn.innerHTML =
                            '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg> Regenerar Shorts';
                    });
        
                    /* ── Overlay image logic ── */
                    const overlayImgInput = document.getElementById("overlayImgInput");
                    const removeOverlayBtn =
                        document.getElementById("removeOverlayBtn");
                    const videoContainer = document.getElementById("videoContainer");
                    let overlayWrap = null;
        
                    overlayImgInput.addEventListener("change", (e) => {
                        const file = e.target.files[0];
                        if (!file) return;
                        const url = URL.createObjectURL(file);
                        if (overlayWrap) overlayWrap.remove();
                        overlayWrap = document.createElement("div");
                        overlayWrap.className = "overlay-img-wrap";
                        overlayWrap.style.width = "120px";
                        overlayWrap.style.height = "120px";
                        overlayWrap.style.left = "20px";
                        overlayWrap.style.top = "20px";
                        const img = document.createElement("img");
                        img.src = url;
                        overlayWrap.appendChild(img);
                        ["tl", "tr", "bl", "br"].forEach((pos) => {
                            const h = document.createElement("div");
                            h.className = "resize-handle " + pos;
                            overlayWrap.appendChild(h);
                            makeResizable(overlayWrap, h, pos);
                        });
                        videoContainer.appendChild(overlayWrap);
                        makeDraggable(overlayWrap);
                        e.target.value = "";
                    });
        
                    removeOverlayBtn.addEventListener("click", () => {
                        if (overlayWrap) {
                            overlayWrap.remove();
                            overlayWrap = null;
                        }
                    });
        
                    function makeDraggable(el) {
                        let isDragging = false,
                            ox = 0,
                            oy = 0;
                        el.addEventListener("pointerdown", (e) => {
                            if (e.target.classList.contains("resize-handle")) return;
                            isDragging = true;
                            ox = e.clientX - el.offsetLeft;
                            oy = e.clientY - el.offsetTop;
                            el.setPointerCapture(e.pointerId);
                            e.preventDefault();
                        });
                        el.addEventListener("pointermove", (e) => {
                            if (!isDragging) return;
                            const px = e.clientX - ox;
                            const py = e.clientY - oy;
                            const maxX = videoContainer.clientWidth - el.offsetWidth;
                            const maxY = videoContainer.clientHeight - el.offsetHeight;
                            el.style.left = Math.max(0, Math.min(px, maxX)) + "px";
                            el.style.top = Math.max(0, Math.min(py, maxY)) + "px";
                        });
                        el.addEventListener("pointerup", () => {
                            isDragging = false;
                        });
                    }
        
                    function makeResizable(el, handle, corner) {
                        handle.addEventListener("pointerdown", (e) => {
                            e.stopPropagation();
                            const startX = e.clientX,
                                startY = e.clientY;
                            const startW = el.offsetWidth,
                                startH = el.offsetHeight;
                            const startL = el.offsetLeft,
                                startT = el.offsetTop;
                            handle.setPointerCapture(e.pointerId);
                            function onMove(ev) {
                                const dx = ev.clientX - startX;
                                const dy = ev.clientY - startY;
                                let w = startW,
                                    h = startH,
                                    l = startL,
                                    t = startT;
                                if (corner.includes("r")) w = Math.max(40, startW + dx);
                                if (corner.includes("l")) {
                                    w = Math.max(40, startW - dx);
                                    l = startL + (startW - w);
                                }
                                if (corner.includes("b")) h = Math.max(40, startH + dy);
                                if (corner.includes("t")) {
                                    h = Math.max(40, startH - dy);
                                    t = startT + (startH - h);
                                }
                                el.style.width = w + "px";
                                el.style.height = h + "px";
                                el.style.left = l + "px";
                                el.style.top = t + "px";
                            }
                            function onUp() {
                                handle.removeEventListener("pointermove", onMove);
                                handle.removeEventListener("pointerup", onUp);
                            }
                            handle.addEventListener("pointermove", onMove);
                            handle.addEventListener("pointerup", onUp);
                            e.preventDefault();
                        });
                    }
        
                    /* ── Download button ── */
                    let isRecording = false;
                    let exportRecorder = null;
                    let exportChunks = [];
                    let combinedStream = null;
                    // Nodos de audio persistentes para evitar errores de reconexión
                    let persistentSourceNode = null;
                    let persistentDestination = null;
        
                    downloadBtn.addEventListener("click", async () => {
                        if (!videoEl.src) { alert("Carga un video primero"); return; }
                        if (isRecording) { alert("Descarga en progreso..."); return; }
        
                        // DETERMINAR RANGO: Si hay un clip activo, solo descargamos ese rango
                        const startTime = isViewingClip && selectedClip ? selectedClip.start : 0;
                        const endTime = isViewingClip && selectedClip ? selectedClip.end : videoDuration;
        
                        // Ocultar subtítulos HTML para la grabación (drawSubtitleOnCanvas ya los dibuja)
                        subtitleEl.style.visibility = "hidden";
        
                        isRecording = true;
                        downloadBtn.disabled = true;
                        downloadBtn.innerHTML = '<div style="width:14px;height:14px;border:2px solid rgba(4,32,40,0.3);border-top-color:#042028;border-radius:50%;animation:spin 0.8s linear infinite"></div> Procesando...';
                        
                        // Asegurar volumen y salida de audio
                        videoEl.muted = false;
                        videoEl.volume = 1.0;
        
                        try {
                            await seekVideoToTime(startTime);
                            await videoEl.play().catch(err => console.warn("Play:", err));
        
                            const exportFps = Math.max(30, Math.min(60, Math.round(videoEl.getVideoPlaybackQuality?.().totalVideoFrames ? 60 : 30)));
                            const vStream = canvas.captureStream(exportFps);
                            try {
                                if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                                if (audioCtx.state === 'suspended') await audioCtx.resume();
                                
                                if (!mediaSourceNode) {
                                    mediaSourceNode = audioCtx.createMediaElementSource(videoEl);
                                    mediaStreamDestination = audioCtx.createMediaStreamDestination();
                                    mediaSourceNode.connect(mediaStreamDestination);
                                    mediaSourceNode.connect(audioCtx.destination);
                                }
                            } catch(e){ console.warn("Audio Context:", e); }
        
                            combinedStream = new MediaStream();
                            vStream.getVideoTracks().forEach((track) => {
                                combinedStream.addTrack(track.clone());
                            });
                            if (mediaStreamDestination) {
                                mediaStreamDestination.stream.getAudioTracks().forEach((track) => {
                                    combinedStream.addTrack(track.clone());
                                });
                            }

                            if (combinedStream.getAudioTracks().length === 0) {
                                updateStatus('No se detectó audio para exportar; reintentando enlace de audio...', true);
                                if (mediaSourceNode && mediaStreamDestination) {
                                    try {
                                        mediaSourceNode.disconnect(mediaStreamDestination);
                                    } catch (disconnectError) {
                                        console.warn('No se pudo reiniciar el destino de audio:', disconnectError);
                                    }
                                }
                                mediaStreamDestination = audioCtx.createMediaStreamDestination();
                                if (mediaSourceNode) {
                                    mediaSourceNode.connect(mediaStreamDestination);
                                }
                                mediaStreamDestination.stream.getAudioTracks().forEach((track) => {
                                    combinedStream.addTrack(track.clone());
                                });
                            }
        
                            exportChunks = [];
                            // Grabación optimizada para exportar con más nitidez.
                            let options = {
                                mimeType: 'video/webm;codecs=vp9,opus',
                                videoBitsPerSecond: 22000000,
                                audioBitsPerSecond: 192000,
                            };
                            if (!MediaRecorder.isTypeSupported(options.mimeType)) {
                                options = {
                                    mimeType: 'video/webm;codecs=vp8,opus',
                                    videoBitsPerSecond: 18000000,
                                    audioBitsPerSecond: 192000,
                                };
                            }
                            if (!MediaRecorder.isTypeSupported(options.mimeType)) options = { mimeType: 'video/webm' };
                            
                            try {
                                exportRecorder = new MediaRecorder(combinedStream, options);
                            } catch(e){
                                try { exportRecorder = new MediaRecorder(combinedStream); } catch(err){
                                    statusEl.textContent = 'Error: MediaRecorder no soportado para este stream.';
                                    cleanupDownload(); return;
                                }
                            }
        
                            exportRecorder.ondataavailable = (ev) => {
                                if(ev.data && ev.data.size > 0) exportChunks.push(ev.data);
                            };
                            exportRecorder.onstop = () => {
                                processToMp4(exportChunks);
                                if(combinedStream) combinedStream.getTracks().forEach(t=>t.stop());
                            };
        
                            const checkEnd = setInterval(() => {
                                if (videoEl.currentTime >= endTime || videoEl.currentTime >= videoDuration || videoEl.ended) {
                                    clearInterval(checkEnd);
                                    if (exportRecorder && exportRecorder.state === 'recording') {
                                        exportRecorder.stop();
                                        videoEl.pause();
                                    }
                                }
                            }, 100);
        
                            async function processToMp4(recordedChunks) {
                                const mimeType = exportRecorder.mimeType;
                                // Si ya se grabó en mp4 nativamente, descargamos directamente
                                if (mimeType.includes('mp4')) {
                                    downloadBlob(new Blob(recordedChunks, { type: mimeType }), 'mp4');
                                    cleanupDownload();
                                    return;
                                }
        
                                downloadBtn.innerHTML = '<div style="width:14px;height:14px;border:2px solid rgba(4,32,40,0.3);border-top-color:#042028;border-radius:50%;animation:spin 0.8s linear infinite"></div> Convirtiendo a MP4...';
                                const webmBlob = new Blob(recordedChunks, { type: 'video/webm' });
                                
                                // Lógica para FFmpeg.wasm v0.12.6 (Soporte para MP4 real)
                                const ffmpegLib = window.FFmpegWasm || window.FFmpeg;
                                if (ffmpegLib) {
                                    try {
                                        const { FFmpeg, toBlobURL } = ffmpegLib;
                                        const ffmpeg = new FFmpeg();
                                        const baseURL = 'https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.6/dist/umd';
                                        
                                        await ffmpeg.load({
                                            coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
                                            wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
                                        });
        
                                        await ffmpeg.writeFile('input.webm', new Uint8Array(await webmBlob.arrayBuffer()));
                                        
                                        // Exportación MP4 de mayor calidad con tasa de bits menos agresiva.
                                        await ffmpeg.exec([
                                            '-i', 'input.webm',
                                            '-r', String(exportFps),
                                            '-c:v', 'libx264',
                                            '-preset', 'medium',
                                            '-crf', '14',
                                            '-pix_fmt', 'yuv420p',
                                            '-profile:v', 'high',
                                            '-level', '4.2',
                                            '-b:v', '20M',
                                            '-maxrate', '24M',
                                            '-bufsize', '40M',
                                            '-c:a', 'aac',
                                            '-b:a', '192k',
                                            '-ar', '48000',
                                            '-movflags', '+faststart', 'output.mp4'
                                        ]);
        
                                        const data = await ffmpeg.readFile('output.mp4');
                                        downloadBlob(new Blob([data.buffer], { type: 'video/mp4' }), 'mp4');
                                    } catch (e) {
                                        console.error("Error FFmpeg (Verifica encabezados COOP/COEP):", e);
                                        downloadBlob(webmBlob, 'webm');
                                    }
                                } else {
                                    downloadBlob(webmBlob, 'webm');
                                }
                                cleanupDownload();
                            }
        
                            function downloadBlob(blob, ext) {
                                const url = URL.createObjectURL(blob);
                                const a = document.createElement('a');
                                a.href = url;
                                a.download = `ediclip_${isViewingClip ? 'short' : 'full'}_${Date.now()}.${ext}`;
                                document.body.appendChild(a);
                                a.click();
                                a.remove();
                                setTimeout(() => URL.revokeObjectURL(url), 2000);
                            }
        
                            exportRecorder.start(1000);
                            updateStatus('Exportando video...', true);
        
                        } catch (error) {
                            console.error("Error descargando:", error);
                            alert("Error: " + error.message);
                            cleanupDownload();
                        }
                    });
        
                    function cleanupDownload() {
                        isRecording = false;
                        subtitleEl.style.visibility = "visible";
                        downloadBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Descargar Short';
                        downloadBtn.disabled = false;
                        updateStatus('Listo para otra edición', true);
                    }
    }

    return { markup, initApp };
})();
