
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
      left: '20px'
    }
  });

  await browser.close();
  console.log('¡PDF generado exitosamente: cv-gustavo-torres.pdf!');
})();
