const fs = require('fs');

const institutes = JSON.parse(fs.readFileSync('src/data/json/institutes.json', 'utf8'));
const averages = JSON.parse(fs.readFileSync('src/data/json/averages_2025.json', 'utf8'));
const specialties = JSON.parse(fs.readFileSync('src/data/json/specialties.json', 'utf8'));

const updatedInstitutes = institutes.map(inst => {
    const instAvg = averages.filter(a => a.instituteId === inst.id);
    if (instAvg.length === 0) return inst;

    // Sort to find Min and Max
    const sorted = [...instAvg].sort((a, b) => a.average - b.average);
    const minRec = sorted[0];
    const maxRec = sorted[sorted.length - 1];

    const getSpecName = (id) => specialties.find(s => s.id === id)?.name || id;

    return {
        ...inst,
        minAverage: minRec.average,
        maxAverage: maxRec.average,
        minDetail: {
            value: minRec.average,
            specialty: getSpecName(minRec.specialtyId),
            wilaya: (minRec.targetWilaya || inst.wilaya).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/^\w/, c => c.toUpperCase())
        },
        maxDetail: {
            value: maxRec.average,
            specialty: getSpecName(maxRec.specialtyId),
            wilaya: (maxRec.targetWilaya || inst.wilaya).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/^\w/, c => c.toUpperCase())
        }
    };
});

fs.writeFileSync('src/data/json/institutes.json', JSON.stringify(updatedInstitutes, null, 2));
console.log('Institutes updated with min/max details.');
