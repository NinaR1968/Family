const statusEl = document.getElementById('status');

async function checkHealth() {
  try {
    const res = await fetch('/api/health');
    const data = await res.json();
    if (res.ok && data.ok) {
      statusEl.textContent = '✓ השרת תקין';
      statusEl.className = 'status ok';
      return;
    }
  } catch {
    // נופלים להודעת השגיאה
  }
  statusEl.textContent = '! השרת לא זמין כרגע';
  statusEl.className = 'status error';
}

checkHealth();
