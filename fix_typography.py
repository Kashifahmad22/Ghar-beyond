from pathlib import Path

root = Path(r'c:\Users\kashi.ASUS\OneDrive\Desktop\ghar-beyond - Copy')
replacements = {
    'â†’': '→',
    'â€”': '—',
    'â€“': '–',
    'â€œ': '“',
    'â€': '”',
    'â€™': '’',
    'â€˜': '‘',
    'Ã—': '×',
    'Â©': '©',
    'â€¢': '•',
    'â˜…': '★',
    'à¤œà¤¹à¤¾à¤ à¤¸à¥‡ à¤¹à¤° à¤¸à¤«à¤¼à¤° à¤¶à¥à¤°à¥‚ à¤¹à¥‹à¤¤à¤¾ à¤¹à¥ˆà¥¤': 'जहाँ से हर सफ़र शुरू होता है।',
    'à¤œà¤¹à¤¾à¤ à¤¸à¥‡ à¤¹à¤° à¤¸à¤«à¤¼à¤° à¤¶à¥à¤°à¥‚ à¤¹à¥‹à¤¤à¤¾ à¤¹à¥ˆà¥¤': 'जहाँ से हर सफ़र शुरू होता है।',
    'Â': '',
    'Ã': '',
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
