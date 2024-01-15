/* ************Menu************ */
((d)=>{
    const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");
    $btnMenu.addEventListener("click", e=>{
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
    });

    d.addEventListener("click", e=>{
        if(!e.target.matches(".menu a")) return false;
        
        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active");
    });
})(document);

/* ************ContactForm************ */
((d)=> {
    const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");

    $form.addEventListener("submit", e=>{
        e.preventDefault();
        $loader.classList.remove("none");
        fetch("https://formsubmit.co/ajax/fuscontacam@gmail.com", {
            method: "POST",
            body: new FormData(e.target)
        })
         .then((res) => (res.ok ? res.json() : Promise.reject(res)))
         .then(json=> {
            console.log(json);            
            location.hash = "#gracias";
            $form.reset();
         })
         .catch(err=> {
            console.log(err);
            let message = err.statusText || "Ocurrió en error al enviar, intenta nuevamente"
            $response.querySelector("h3").innerHTML = `Error ${err.status}: ${message}`;            
         }).finally(()=>{
            $loader.classList.add("none");
            setTimeout(()=>{
                location.hash = "#close";                
            },3000)
         });
    })
})(document);

/* ************Detección Dispositivos************ */
((d)=>{     
        const n = navigator,
        ua = n.userAgent;        
            
            const $id = d.getElementById("user-device"),           
         
            isMobile = {
                android:() => ua.match(/android/i),
                ios:() => ua.match(/iphone|ipad|ipod|/i),
                windows:() => ua.match(/windows phone/i),
                any: function(){
                    return this.android() || this.ios() || this.windows();
                },
            },
            isDesktop = {
                linux:() => ua.match(/linux/i),
                mac:() => ua.match(/mac os/i),
                windows:() => ua.match(/windows nt/i),
                any: function(){
                    return this.linux() || this.mac() || this.windows();
                },
    
            },

            isBrowser = {
                chrome:() => ua.match(/chrome/i),
                brave:() => ua.match(/brave/i),
                safari:() => ua.match(/safari/i),
                firefox:() => ua.match(/firefox/i),            
                opera:() => ua.match(/opera|opera mini/i),            
                ie:() => ua.match(/msie|iemobile/i),            
                edge:() => ua.match(/edge/i),
                any: function () {
                    return (
                        this.ie()||
                        this.brave()||
                        this.edge()||
                        this.chrome()||
                        this.safari()||
                        this.firefox()||
                        this.opera()
                    );
                },            
            }; 
            
            
            $id.innerHTML = `
            <form class="info-web">
            <ul>
             <li>User Agent: <b>${ua}</b></li>
             <li>Plataforma: <b>${isMobile.any()? isMobile.any(): isDesktop.any()}</b></li>
             <li>Navegador: <b>${isBrowser.any()}</b></li>
            </ul>
            </form>
            `;  
            

             

})(document);
