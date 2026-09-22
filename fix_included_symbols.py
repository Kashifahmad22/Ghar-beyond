from pathlib import Path

root = Path(r'c:\Users\kashi.ASUS\OneDrive\Desktop\ghar-beyond - Copy')
replacements = {
    'âœ“': '✓',
    'â€˜': '‘',
    'â€™': '’',
    'â€œ': '“',
    'â€': '”',
    'â€”': '—',
    'Ã—': '×',
    'â€¢': '•'
}

count = 0
for path in root.rglob('*.html'):
    try:
        text = path.read_text(encoding='utf-8')
    except UnicodeDecodeError:
        text = path.read_text(encoding='latin-1')

    updated = text
    for old, new in replacements.items():
        updated = updated.replace(old, new)

    if updated != text:
        path.write_text(updated, encoding='utf-8', newline='')
        count += 1

print(f'updated {count} html files')
