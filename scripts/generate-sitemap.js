import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.aiproconsultants.com';
const PUBLIC_DIR = path.resolve(__dirname, '../public');

// Helper to get all HTML files recursively in a folder
function getHtmlFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) {
    return fileList;
  }
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

function generateSitemap() {
  console.log('Generating sitemap dynamically...');
  try {
    const htmlFiles = getHtmlFiles(PUBLIC_DIR);
    
    // Always include the main app root path first
    const pages = [
      {
        loc: `${BASE_URL}/`,
        priority: '1.0',
        changefreq: 'monthly',
        lastmod: new Date().toISOString().split('T')[0]
      }
    ];

    for (const file of htmlFiles) {
      const relativePath = path.relative(PUBLIC_DIR, file).replace(/\\/g, '/');
      
      // Ignore google site verification, templates, or any system HTML files
      if (relativePath.startsWith('google') || relativePath.includes('/google')) {
        continue;
      }
      
      let loc = '';
      let priority = '0.8';
      let changefreq = 'weekly';

      if (relativePath === 'blog/index.html') {
        loc = `${BASE_URL}/blog/`;
        priority = '0.9';
        changefreq = 'weekly';
      } else if (relativePath.endsWith('index.html')) {
        // e.g. blog/ai-automation-texas/index.html -> blog/ai-automation-texas/
        const dirPath = relativePath.slice(0, -10); // Remove 'index.html'
        loc = `${BASE_URL}/${dirPath}`;
        priority = '0.8';
        changefreq = 'weekly';
      } else {
        // e.g. ai-automation-guide-for-b2b.html -> /ai-automation-guide-for-b2b.html
        loc = `${BASE_URL}/${relativePath}`;
        priority = '0.8';
        changefreq = 'weekly';
      }

      // Get last modification date or use today's date
      const stats = fs.statSync(file);
      const lastmod = stats.mtime.toISOString().split('T')[0];

      pages.push({
        loc,
        priority,
        changefreq,
        lastmod
      });
    }

    // Dynamic SEO and local pages that are handled client-side in React
    const dynamicRoutes = [
      '/ai-automation-for-law-firms-houston',
      '/seo-services-texas',
      ...['houston', 'dallas', 'austin', 'san-antonio', 'fort-worth', 'el-paso', 'arlington', 'corpus-christi', 'plano', 'lubbock', 'amarillo'].map(city => `/seo-services-${city}`)
    ];

    const todayStr = new Date().toISOString().split('T')[0];
    for (const route of dynamicRoutes) {
      const locUrl = `${BASE_URL}${route}`;
      if (!pages.some(page => page.loc === locUrl)) {
        pages.push({
          loc: locUrl,
          priority: '0.8',
          changefreq: 'weekly',
          lastmod: todayStr
        });
      }
    }

    // Build XML content string
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    for (const page of pages) {
      xml += '  <url>\n';
      xml += `    <loc>${page.loc}</loc>\n`;
      xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
      xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
      xml += `    <priority>${page.priority}</priority>\n`;
      xml += '  </url>\n';
    }
    
    xml += '</urlset>\n';

    const sitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, xml, 'utf8');
    console.log(`\n======================================================`);
    console.log(`Sitemap generated successfully containing ${pages.length} pages!`);
    console.log(`Path: ${sitemapPath}`);
    console.log(`======================================================\n`);
  } catch (error) {
    console.error('Failed to generate sitemap:', error);
  }
}

generateSitemap();
