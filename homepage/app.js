const features = [
  'Automatisierte Drohnenflotten (Mining, Scout, Builder, Salvage)',
  'Carrier-, Cargo- und Utility-Schiffe mit Routen & Logistik',
  'Script-Sprache für MOVE/SCAN/MINE & Co.',
  'Tech-Tree mit neuen Kommandos & Upgrades',
  'Multiplayer-Basis für gemeinsame Operationen'
];

document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('#features');
  features.forEach((feature) => {
    const item = document.createElement('li');
    item.textContent = feature;
    list.appendChild(item);
  });

  document.querySelector('#cta').addEventListener('click', () => {
    alert('Newsletter folgt – solange bitte README & todo.md beobachten.');
  });
});
