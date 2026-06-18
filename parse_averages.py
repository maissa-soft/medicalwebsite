import json
import re

spec_map = {
    "INFIMIERS DE SANTE PUBLIQUE": "isp",
    "KINESITHERAPEUTES DE SANTE PUBLIQUE": "kine",
    "MANIPULATEURS EN IMAGERIE MEDICALE DE SANTE PUBLIQUE": "manip-radio",
    "MANIPULATEURS EN IMAGERIE MEDICALE DE SANTE": "manip-radio",
    "LABORANTINS DE SANTE PUBLIQUE": "labo",
    "PREPARATEURS EN PHARMACIE DE SANTE PUBLIQUE": "prep-pharma",
    "ASSISTANTS MEDICAUX DE SANTE PUBLIQUE": "ass-med",
    "ERGOTHERAPEUTES DE SANTE PUBLIQUE": "ergo",
    "HYGIENISTES DE SANTE PUBLIQUE": "hygiene",
    "ASSISTANTS SOCIAUX DE SANTE PUBLIQUE": "ass-soc",
    "DIETETICIENS DE SANTE PUBLIQUE": "diet",
    "PROTHESISTES DENTAIRES DE SANTE PUBLIQUE": "prothese",
    "PSYCHOMOTRICIENS DE SANTE PUBLIQUE": "psycho",
    "ORTHOPTISTES DE SANTE PUBLIQUE": "orthoptie",
    "APPAREILLEURS ORTHOPEDISTES DE SANTE PUBLIQUE": "ortho-app",
    "AUDIOPROTHESISTES DE SANTE PUBLIQUE": "audioprothese",
}

inst_map = {
    "ADRAR": "infsp-adrar",
    "BATNA": "infsp-batna",
    "BEJAIA": "infsp-bejaia",
    "BISKRA": "infsp-biskra",
    "BECHAR": "infsp-bechar",
    "BLIDA": "infsp-blida",
    "BOUIRA": "infsp-bouira",
    "TEBESSA": "infsp-tebessa",
    "TIARET": "infsp-tiaret",
    "ALGER": "infsp-alger",
    "JIJEL": "infsp-jijel",
    "SETIF": "infsp-setif",
    "SAIDA": "infsp-saida",
    "SKIKDA": "infsp-skikda",
    "SIDI BEL ABBES": "infsp-sba",
    "CONSTANTINE": "infsp-constantine",
    "MEDEA": "infsp-medea",
    "MOSTAGANEM": "infsp-mostaganem",
    "MSILA": "infsp-msila",
    "MASCARA": "infsp-mascara",
    "OUARGLA": "infsp-ouargla",
    "ORAN GUEABI DJEDIA": "infsp-oran",
    "ORAN HAI SALAM": "infsp-oran",
    "AIN DEFLA": "infsp-ain-defla",
    "TLEMCEN": "infssf-tlemcen",
    "TIZI OUZOU": "infssf-tizi-ouzou",
    "ANNABA": "infssf-annaba"
}

# Add lowercase variations
inst_name_map = {
    "infsp-adrar": "INFSPM ADRAR",
    "infsp-batna": "INFSPM BATNA",
    "infsp-bejaia": "INFSPM BEJAIA",
    "infsp-biskra": "INFSPM BISKRA",
    "infsp-bechar": "INFSPM BECHAR",
    "infsp-blida": "INFSPM BLIDA",
    "infsp-bouira": "INFSPM BOUIRA",
    "infsp-tebessa": "INFSPM TEBESSA",
    "infsp-tiaret": "INFSPM TIARET",
    "infsp-alger": "INFSPM ALGER",
    "infsp-jijel": "INFSPM JIJEL",
    "infsp-setif": "INFSPM SETIF",
    "infsp-saida": "INFSPM SAIDA",
    "infsp-skikda": "INFSPM SKIKDA",
    "infsp-sba": "INFSPM SIDI BEL ABBES",
    "infsp-constantine": "INFSPM CONSTANTINE",
    "infsp-medea": "INFSPM MEDEA",
    "infsp-mostaganem": "INFSPM MOSTAGANEM",
    "infsp-msila": "INFSPM MSILA",
    "infsp-mascara": "INFSPM MASCARA",
    "infsp-ouargla": "INFSPM OUARGLA",
    "infsp-oran": "INFSPM ORAN",
    "infsp-ain-defla": "INFSPM AIN DEFLA",
    "infssf-tlemcen": "INFSSF TLEMCEN",
    "infssf-tizi-ouzou": "INFSSF TIZI OUZOU",
    "infssf-annaba": "INFSSF ANNABA"
}

inst_wilaya_map = {
    "infsp-adrar": "Adrar",
    "infsp-batna": "Batna",
    "infsp-bejaia": "Béjaïa",
    "infsp-biskra": "Biskra",
    "infsp-bechar": "Béchar",
    "infsp-blida": "Blida",
    "infsp-bouira": "Bouira",
    "infsp-tebessa": "Tébessa",
    "infsp-tiaret": "Tiaret",
    "infsp-alger": "Alger",
    "infsp-jijel": "Jijel",
    "infsp-setif": "Sétif",
    "infsp-saida": "Saïda",
    "infsp-skikda": "Skikda",
    "infsp-sba": "Sidi Bel Abbès",
    "infsp-constantine": "Constantine",
    "infsp-medea": "Médéa",
    "infsp-mostaganem": "Mostaganem",
    "infsp-msila": "M'Sila",
    "infsp-mascara": "Mascara",
    "infsp-ouargla": "Ouargla",
    "infsp-oran": "Oran",
    "infsp-ain-defla": "Ain Defla",
    "infssf-tlemcen": "Tlemcen",
    "infssf-tizi-ouzou": "Tizi Ouzou",
    "infssf-annaba": "Annaba"
}

results = []

def parse_data(data_text):
    current_inst_id = None
    current_spec_id = None
    
    lines = data_text.split('\n')
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        if not line:
            i += 1
            continue
            
        # Check for Institute
        matched_inst = False
        for key in inst_map:
            if key in line.upper() and ("INFSPM" in line.upper() or "INFSSF" in line.upper()):
                current_inst_id = inst_map[key]
                matched_inst = True
                # Reset specialty when institute changes (unless it's Sages Femmes section)
                if "INFSSF" not in line.upper(): # INFSSF implies specialty is Sage Femme
                    current_spec_id = None
                else:
                    current_spec_id = "sage-femme"
                break
        
        if matched_inst:
            i += 1
            continue
            
        # Check for Specialty
        matched_spec = False
        for key in spec_map:
            if key in line.upper() and ("•" in line or "-" in line):
                current_spec_id = spec_map[key]
                matched_spec = True
                break
        
        if matched_spec:
            i += 1
            continue
            
        # Check for Wilaya and Average
        # Example: ADRAR (min 1 : 13.85, min 2 : --)
        # Example: TAMANRASSET min 1 : 11.97, min 2 : 12.21, min 3 : 12.99)
        # Example: IN SALAH (min 1 : 10.82, 13.62)
        match = re.search(r'([A-Z\s\-]+)[\s:]+\(?(?:min\s*1\s*:\s*(\d+\.\d+)|(\d+\.\d+))', line, re.IGNORECASE)
        if match and current_inst_id and current_spec_id:
            target_wilaya = match.group(1).strip().capitalize()
            # Clean up target_wilaya (e.g. "Oum el bouaghi" -> "Oum El Bouaghi")
            target_wilaya = " ".join([w.capitalize() for w in target_wilaya.split()])
            
            avg1 = match.group(2) or match.group(3)
            if avg1:
                results.append({
                    "instituteId": current_inst_id,
                    "instituteName": inst_name_map[current_inst_id],
                    "instituteWilaya": inst_wilaya_map[current_inst_id],
                    "specialtyId": current_spec_id,
                    "year": 2024,
                    "average": float(avg1),
                    "targetWilaya": target_wilaya
                })
        
        i += 1

# I will input the raw text here from file
# We append data since we will read multiple text files
try:
    with open('e:/medicalwebsite/data_2024.txt', 'r', encoding='utf-8') as f:
        raw_data = f.read()
except FileNotFoundError:
    raw_data = ""

try:
    with open('e:/medicalwebsite/data_2024_2.txt', 'r', encoding='utf-8') as f:
        raw_data += "\n" + f.read()
except FileNotFoundError:
    pass

parse_data(raw_data)

# Handle special case for Oran
# ... already handled in inst_map

with open('e:/medicalwebsite/src/data/json/averages_2024.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2, ensure_ascii=False)

print(f"Generated {len(results)} records.")
