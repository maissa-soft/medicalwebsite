const fs = require('fs');

const standardize = (w) => {
  if (!w) return w;
  const l = w.toLowerCase();
  if (l === 'eltarf') return 'el tarf';
  if (l === 'el mghaier') return 'el m\'ghair';
  if (l === 'khenchla') return 'khenchela';
  if (l === 'm\'sila') return 'msila';
  if (l === 'sidi bel abbès') return 'sidi bel abbes';
  if (l === 'béjaïa') return 'bejaia';
  if (l === 'béchar') return 'bechar';
  if (l === 'sétif') return 'setif';
  if (l === 'tébessa') return 'tebessa';
  if (l === 'médéa') return 'medea';
  if (l === 'saïda') return 'saida';
  if (l === 'béni abbès') return 'beni abbes';
  if (l === 'boumerdès') return 'boumerdes';
  if (l === 'aïn defla') return 'ain defla';
  if (l === 'aïn témouchent') return 'ain temouchent';
  if (l === 'ghardaïa') return 'ghardaia';
  if (l === 'oum el-bouaghi') return 'oum el bouaghi';
  if (l === 'bordj bou-arreridj') return 'bordj bou arreridj';
  return w; // keep original case for others unless matched
};

const processFile = (file) => {
  if (!fs.existsSync(file)) return;
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  
  if (Array.isArray(data)) {
    data.forEach(item => {
      if (item.wilaya) item.wilaya = standardize(item.wilaya);
      if (item.targetWilaya) item.targetWilaya = standardize(item.targetWilaya);
      if (item.instituteWilaya) item.instituteWilaya = standardize(item.instituteWilaya);
      if (item.location) item.location = standardize(item.location);
    });
  }
  
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
  console.log('Processed', file);
};

processFile('src/data/json/averages_2025.json');
processFile('src/data/json/averages_2024.json');
processFile('src/data/json/averages_2023.json');
processFile('src/data/json/averages_2022.json');
processFile('src/data/json/institutes.json');
