import sys
import os
import re

try:
    import pypdf
except ImportError:
    os.system('pip install pypdf')
    import pypdf

pdf_path = r'C:\Users\home\.gemini\antigravity\brain\4c23116d-00c6-4f71-b07f-2e0583e9f7b9\.tempmediaStorage\2fb14f8863411a55.pdf'

try:
    reader = pypdf.PdfReader(pdf_path)
    text = ""
    for i in range(len(reader.pages)):
        page_text = reader.pages[i].extract_text()
        if page_text:
            text += page_text + "\n"

    # Search for keywords
    keywords = ["infirmier", "sage-femme", "sage", "paramédical", "paramedical", "imagerie", "radiologie", "laboratoire", "kinesithérapie", "anesthésie", "ergothérapie", "orthophonie", "optique", "diététique", "anesthésie"]
    
    found_lines = []
    lines = text.split('\n')
    for i, line in enumerate(lines):
        if any(kw in line.lower() for kw in keywords):
            # Grab the line and some surrounding context
            context = " ".join(lines[max(0, i-1):min(len(lines), i+2)])
            found_lines.append(context)
            
    with open('paramedical_extracted.txt', 'w', encoding='utf-8') as f:
        for fl in found_lines:
            f.write(fl + "\n---\n")
            
    print(f"Extraction terminée. {len(found_lines)} occurences trouvées.")
except Exception as e:
    print("Erreur:", str(e))
