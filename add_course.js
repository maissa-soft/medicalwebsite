const fs = require('fs');
const readline = require('readline');

const coursesPath = 'src/data/json/courses.json';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  { key: 'specialtyId', label: 'ID Spécialité (ex: ergo, isp, labo, kine)' },
  { key: 'subjectId', label: 'Nom du Module (ex: Anatomie Physiologie.)' },
  { key: 'semester', label: 'Semestre (1-6)', type: 'number' },
  { key: 'title', label: 'Titre du Cours' },
  { key: 'type', label: 'Type (PDF, Video, Exam)' },
  { key: 'description', label: 'Description courte' },
  { key: 'size', label: 'Taille/Qualité (ex: 2.4 MB ou HD)' },
  { key: 'duration', label: 'Durée/Pages (ex: 12:45 ou 45 pages)' },
  { key: 'downloadUrl', label: 'Lien (URL YouTube ou chemin fichier)' }
];

const responses = {};

function ask(index) {
  if (index === questions.length) {
    saveCourse();
    return;
  }

  const q = questions[index];
  rl.question(`${q.label}: `, (answer) => {
    responses[q.key] = q.type === 'number' ? parseInt(answer) : answer;
    ask(index + 1);
  });
}

function saveCourse() {
  const courses = JSON.parse(fs.readFileSync(coursesPath, 'utf8'));
  
  // Générer un ID simple basé sur le titre
  const id = responses.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  const newCourse = {
    id: `${responses.specialtyId}-${id}`,
    ...responses,
    views: 0
  };

  courses.push(newCourse);
  fs.writeFileSync(coursesPath, JSON.stringify(courses, null, 2));
  
  console.log('\n✅ Cours ajouté avec succès !');
  console.log(newCourse);
  rl.close();
}

console.log('--- ADMINISTRATION PARAMÉDICAL DZ ---');
console.log('Ajout d\'une nouvelle ressource pédagogique\n');
ask(0);
