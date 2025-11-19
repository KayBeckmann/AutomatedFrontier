# Automated Frontier Frontend

Dieses Verzeichnis enthält das Flutter/Flame-Frontend für das Space-Automation-Game. Die Struktur orientiert sich direkt an den Punkten aus der `todo.md`:

- `lib/core` fasst Systemlogik zusammen (Automation, Ressourcen, Galaxy/Sektor-Verwaltung).
- `lib/features` kapselt spielrelevante Feature-Blöcke wie Basis-Management, Drohnen, Schiffe, Logistik und Forschung.
- `lib/ui` hält Widgets für Karten, Tech-Tree, Code-Editor und weitere Screens.
- `assets` speichert zukünftige Artworks, Fonts und Skripte für das Script-System.
- `services`, `models` und `utils` helfen beim Aufbau des GameLoops, der Forschungssysteme sowie bei Persistenz.

Sobald wir das MVP aus der TODO-Liste angehen, können wir die jeweiligen Feature-Ordner mit Flutter/Flame-Widgets oder Providern bestücken.
