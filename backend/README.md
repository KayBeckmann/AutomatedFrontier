# Automated Frontier Backend

Das Multiplayer-Backend wird ebenfalls in Dart umgesetzt, damit wir Sprachkonsistenz mit dem Flutter-Frontend behalten. Der aktuelle Aufbau:

- `bin/server.dart` dient als Einstiegspunkt für den Server (z. B. Shelf, Dart Frog oder Flutter Desktop-Runner).
- `lib/api` sammelt Request-/Response-Handler und Routing.
- `lib/domain` modelliert Spielobjekte wie Drohnen, Schiffe, Routen und Ressourcen.
- `lib/services` kapselt Logik für Matchmaking, Persistenz, Simulation und Sync.
- `lib/models` enthält DTOs für Netzwerkverkehr.
- `config` ist reserviert für Environment/Runtime-Konfiguration.

Von hier aus kann ein konkretes Server-Framework ergänzt werden, sobald Multiplayer-Spezifikationen feststehen.
