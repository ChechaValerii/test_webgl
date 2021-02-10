const puppeteer = require('puppeteer');
const Table = require('cli-table');

(async () => {
  const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox', '--enable-webgl-draft-extensions', '--enable-webgl-image-chromium', '--enable-webgl-swap-chain', '--enable-webgl2-compute-context']});
  const page = await browser.newPage();

  page.on("console", msg => console.log(msg));
  page.on("error", msg => console.log(msg));
  page.on("pageerror", msg => console.log(msg));
  page.on("requestfailed", msg => console.log(msg));

  const table = new Table({
    head: ['Detection method', 'Context type', 'failIfMajorPerformanceCaveat', 'Result', 'Errors']
  });
  await page.exposeFunction('addTableRow', row => table.push(row.map(x => `${x}`)));
  await page.exposeFunction('drawTable', () => console.log(table.toString(), "\n"));
  await page.goto(`file://${__dirname}/diagnostics.html`);
  await page.waitFor(1000);
  await browser.close();
})();
