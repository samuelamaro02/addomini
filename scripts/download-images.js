import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.resolve(__dirname, '../src');
const PUBLIC_IMG_DIR = path.resolve(__dirname, '../public/images');

// Ensure public/images exists
if (!fs.existsSync(PUBLIC_IMG_DIR)) {
    fs.mkdirSync(PUBLIC_IMG_DIR, { recursive: true });
}

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            if (file.match(/\.(tsx|ts|scss|css)$/)) {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });

    return arrayOfFiles;
}

function extractUrls(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    // Regex to match the specific domain URLs
    const regex = /https:\/\/adconsultoriaetreinamento\.com\.br\/wp-content\/uploads\/[^"'\s)]+/g;
    return content.match(regex) || [];
}

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);
        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to consume '${url}', status code: ${response.statusCode}`));
                return;
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(filepath, () => reject(err));
        });
    });
};

async function main() {
    const files = getAllFiles(SRC_DIR);
    const allUrls = new Set();

    files.forEach(file => {
        const urls = extractUrls(file);
        urls.forEach(url => allUrls.add(url));
    });

    console.log(`Found ${allUrls.size} unique images.`);

    const downloads = Array.from(allUrls).map(async (url) => {
        const filename = path.basename(url);
        // Handle potential query parameters or weird chars if any (though unlikely in these WP uploads)
        const cleanFilename = filename.split('?')[0];
        const destPath = path.join(PUBLIC_IMG_DIR, cleanFilename);

        if (fs.existsSync(destPath)) {
            console.log(`Skipping ${cleanFilename} (already exists)`);
            return;
        }

        try {
            console.log(`Downloading ${cleanFilename}...`);
            await downloadImage(url, destPath);
            console.log(`✓ Downloaded ${cleanFilename}`);
        } catch (error) {
            console.error(`✗ Error downloading ${url}:`, error.message);
        }
    });

    await Promise.all(downloads);
    console.log('All downloads processed.');
}

main();
