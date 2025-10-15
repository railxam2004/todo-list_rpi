export function generateID() {
  // Используем текущее время + случайную часть для минимизации коллизий
  const ts = Date.now().toString(36);
  const rnd = Math.random().toString(36).slice(2, 10);
  return `${ts}-${rnd}`;
}