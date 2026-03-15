(function () {
    const ua = navigator.userAgent;

    const isMobile = {
      android: () => /android/i.test(ua),
      ios: () => /iphone|ipad|ipod/i.test(ua),
      windows: () => /windows phone/i.test(ua),
      any() {
        return this.android() || this.ios() || this.windows();
      },
    };

    const isDesktop = {
      linux: () => /linux/i.test(ua),
      mac: () => /mac os/i.test(ua),
      windows: () => /windows nt/i.test(ua),
      any() {
        if (this.linux()) return "Linux";
        if (this.mac()) return "macOS";
        if (this.windows()) return "Windows";
        return null;
      },
    };

    const isBrowser = {
      chrome: () => /chrome/i.test(ua) && !/edg/i.test(ua),
      safari: () => /safari/i.test(ua) && !/chrome/i.test(ua),
      firefox: () => /firefox/i.test(ua),
      opera: () => /opera|opera mini/i.test(ua),
      edge: () => /edg/i.test(ua),
      any() {
        if (this.edge()) return "Edge";
        if (this.chrome()) return "Chrome";
        if (this.firefox()) return "Firefox";
        if (this.safari()) return "Safari";
        if (this.opera()) return "Opera";
        return "Unknown";
      },
    };

    const platform = isMobile.any() ? "Mobile" : isDesktop.any() || "Unknown";
    const browser = isBrowser.any();

    // Evitar enviar muchas veces: por ejemplo, 1 vez por día
    const STORAGE_KEY = "deviceInfoSent";
    const lastSent = localStorage.getItem(STORAGE_KEY);
    const today = new Date().toISOString().slice(0, 10);
    if (lastSent === today) return; // ya lo enviamos hoy

    const form = document.getElementById("device-info-form");
    if (!form) return;

    // Preparamos los datos en un objeto FormData
const formData = new FormData(form);
formData.set("userAgent", ua);
formData.set("platform", platform);
formData.set("browser", browser);

// Enviamos de forma asíncrona (AJAX)
fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
        'Accept': 'application/json'
    }
})
.then(response => {
    if (response.ok) {
        localStorage.setItem(STORAGE_KEY, today);
        console.log("Datos enviados discretamente.");
    }
})
.catch(error => console.error("Error al enviar:", error));
    
  })();
