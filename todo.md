# TODO / Ideen-Sammlung für das Space-Automation-Game

## Grundkonzept
- Sci-Fi Automatisierungs- & Programmier-Spiel (ähnlich wie "The Farmer Was Replaced")
- Fokus auf Drohnen- und Raumschiff-Automation
- Spieler steuert Abläufe über eigene Scripts / Logik
- Kombination aus Ressourcenabbau, Exploration, Forschung und Logistik
- Startet als reines Singleplayer-Erlebnis; Multiplayer-/Backend-Anbindung folgt erst nach dem MVP.

## Basis / Hauptquartier
- Zentrale Basis auf einem Planeten oder einer Raumstation
- Alle Rohstoffe müssen hier angeliefert werden
- Basis kann erweitert/ausgebaut werden
- Speicher für Ressourcen
- Forschungszentrum für neue Technologien
- Hangars für Drohnen, Trägerschiffe, Frachter

## Drohnen-System
### Allgemeines
- Drohnen arbeiten *nur innerhalb eines einzelnen Systems*
- Drohne hat programmierbaren Ablauf (eigene Mini-Sprache)
- Drohnen bewegen sich über Planetenoberflächen, Asteroidenfelder oder Stationen

### Drohnen-Typen
- **Mining-Drohne**: Erz, Gas, Eis, Kristalle abbauen
- **Scout-Drohne**: Sektoren scannen, Fog-of-War aufdecken
- **Builder-Drohne**: kleine Außenposten, Sensoren, Minerspots bauen
- **Salvage-Drohne**: Schrott aus Wracks bergen

### Drohnen-Features
- begrenzte Reichweite
- begrenzte Energie
- Inventargröße abhängig vom Modell
- Level-/Upgrade-System

## Raumschiff-System
### Trägerschiffe (Carrier)
- Transportieren mehrere Drohnen
- Können zwischen Systemen reisen
- Unterschiedliche Antriebe beeinflussen Reisezeit
- Benötigen Treibstoff
- Können automatisch Systemrouten abfliegen

### Frachtschiffe (Cargo Ships)
- Transportieren große Mengen Ressourcen
- Für interstellare Logistik gedacht
- Können feste Reiserouten bekommen (A zu B zu C)
- Später: Piraten / Gefahren möglich

### Kleinschiffe / Utility Ships
- z. B. Shuttle für kleine Mengen
- können leichte Aufträge übernehmen

## Routen- & Logistiksystem
- Spieler kann Routen definieren:
  - "System A → System B → System C → zurück zur Basis"
- Routen haben Wegpunkte
- Schiffe folgen Route automatisch
- Routen können priorisiert werden (z. B. wichtige Ressourcen zuerst)
- Optional: dynamische Routen (sammle alles Erz aus allen Systemen im Umkreis X)

## Galaxy-System
- Galaxy ist in **Sektoren** unterteilt
- Jeder Sektor hat mehrere **Systeme** (Sterne, Planeten, Asteroidenfelder)
- Systeme haben unterschiedliche Ressourcenverteilung
- Erforschung über Scouts
- Fog-of-War
- Anomalien, Monster und Piraten bevölkern Sektoren und erzeugen Events / Gefahren.

## Gefahren & Anomalien
- **Anomalien**: temporäre Modifikatoren (z. B. Energieanstieg, Sensorstörungen) auf Kartenkacheln.
- **Monster**: NPC-Gegner, die Drohnen/Schiffe bedrohen; reagieren auf Aktivitäten, benötigen Verteidigungs-Skripte.
- **Piraten**: greifen Routen und Frachter an, verursachen Verluste oder verzögern Lieferketten.
- Gefahren müssen mit Sensoren entdeckt, in Logs angezeigt und ggf. mit Skripten beantwortet werden.

## Ressourcen / Wirtschaft
- Verschiedene Ressourcen:
  - Erz (Metal Ore)
  - Gas (Fuel Gas)
  - Kristalle (Rare Crystals)
  - Wasser/Eis
  - Exotische Materialien (für spätere Technologien)
- Verarbeitung in der Basis zu Zwischenprodukten
- Benötigt für:
  - Drohnen-Upgrades
  - Schiffsbau
  - Technologie-Forschung

## Technologien / Forschung
- Forschungsbaum (Tech-Tree):
  - bessere Drohnen (z. B. Scan-Reichweite, Energieeffizienz)
  - neue Kommandos für die Programmiersprache
  - schnellere Antriebe
  - größere Frachtschiffe
  - Energie-Systeme
  - Verteidigungstechnologien
  - Automatisierte Produktionslinien

## Script-/Programmiersystem
- Eigene Mini-Sprache
- Befehle werden über Forschung erweitert
- **Multilingualität**: Die Programmiersprache soll von Anfang an multilingual konzipiert werden (z.B. "IF" -> "WENN", "True" -> "Wahr"). Dies soll das Spiel Kindern und Nicht-Englischsprachigen zugänglich machen. Weitere Sprachen sollen später ergänzt werden.
- Mögliche Befehle:
  - MOVE, SCAN, MINE, UNLOAD
  - IF, ELSE, ENDIF
  - LOOP, WAIT
  - SENSOR-GAS, SENSOR-RESOURCE
- Später:
  - Variablen
  - Funktionen
  - Ereignisgesteuerte Abläufe

## UI & Bedienung
- Map-Ansicht für Planetensysteme
- Galaxy-Ansicht für Reiserouten
- Drohnensteuerung mit Code-Editor
- Schiffsmanagement (Routen, Fracht, Treibstoff)
- Basis-Ausbau Menü
- Tech-Tree Ansicht

## Mögliche Erweiterungen später
- Piraten / Feindfraktionen
- Diplomatie / Handel
- Kolonien auf Planeten
- Automatisierte Produktionsketten
- Multiplayer-Koop
- Mod-Support (neue Drohnen, Skriptbefehle)

## Nächste Schritte
- Basis-MVP definieren
- Drohnen + Mining als Kernmechanik
- einfache Programmiersprache erstellen
- Planet & Ressourcen generieren
- GameLoop in Flutter/Flame bauen
- grundlegende UI für Karte + Code Editor
- Karten-Seed-Handling spezifizieren:
  - Spieler kann beim Start einen Seed eingeben
  - Optionaler Zufallsgenerator erzeugt Seed für neue Karte
  - Seed muss im UI angezeigt und lokal gespeichert werden (Persistenz, später ggf. Backend-Sync)
- Gefahren-Design finalisieren (Verhalten, Spawn-Regeln, Rewards) und erste Implementierung planen.
- Backend-Erstellung bewusst zurückstellen, bis Singleplayer-Loop stabil ist.
