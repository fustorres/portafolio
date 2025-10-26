
const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Construye la ruta absoluta al archivo HTML
  const htmlPath = path.resolve(__dirname, 'acerca.html');

  // Abre el archivo HTML local
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  // Genera el PDF
  await page.pdf({
    path: 'cv-gustavo-torres.pdf',
    format: 'A4',
    printBackground: true,
    margin: {
      top: '20px',
      right: '20px',
      bottom: '20px',
      left: '20px',
    },
    displayHeaderFooter: true,
    headerTemplate: `<div style="font-size: 10px; padding: 10px; width: 100%; text-align: center;">
        <span class="title"></span> | Generated on <span class="date"></span>
    </div>`,
    footerTemplate: `<div style="font-size: 10px; padding: 10px; width: 100%; text-align: center;">
        Page <span class="pageNumber"></span> of <span class="totalPages"></span>
    </div>`
    
  });

  await browser.close();
  console.log('¡PDF generado exitosamente: cv-gustavo-torres.pdf!');
})();
