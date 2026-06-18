const fs = require('fs');

const institutes = JSON.parse(fs.readFileSync('src/data/json/institutes.json', 'utf8'));

const restoredInstitutes = institutes.map(inst => {
    return {
        id: inst.id,
        name: inst.name,
        type: inst.type,
        wilaya: inst.wilaya,
        location: inst.location,
        bacAverage: inst.bacAverage || inst.minAverage || 0,
        minAverage: inst.minAverage,
        maxAverage: inst.maxAverage,
        description: inst.description,
        specialties: inst.specialties
    };
});

fs.writeFileSync('src/data/json/institutes.json', JSON.stringify(restoredInstitutes, null, 2));
console.log('Institutes data cleaned up.');
