// =================================================== //
// SRC/CONTEXT/TOGGLE_CONTEXT.TSX
// =================================================== //




// ===================
// 1. Import Libraries
// ===================
import fs from 'fs';
import path from 'path';



// ===========
// 2. Function
// ===========
async function loadTranslations(locale: string, baseDir: string = 'messages') {
  const directoryPath = path.join(process.cwd(), baseDir, locale);
  let mergedTranslations = {};

  function readDirRecursively(dirPath: string): any {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    entries.forEach((entry) => {
      const fullPath = path.join(dirPath, entry.name);

      if (entry.isDirectory()) {
        // Recursive call for nested directories
        mergedTranslations = { ...mergedTranslations, ...readDirRecursively(fullPath) };
      } else if (entry.isFile() && entry.name.endsWith('.json')) {
        const fileContent = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
        mergedTranslations = { ...mergedTranslations, ...fileContent };
      }
    });

    return mergedTranslations;
  }

  return readDirRecursively(directoryPath);
}



// ==================
// 3. Export Function
// ==================
export default loadTranslations;