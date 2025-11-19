import 'dart:io';

Future<void> main(List<String> args) async {
  final port = int.parse(Platform.environment['PORT'] ?? '8080');
  stdout.writeln('Automated Frontier backend startet auf Port $port.');
  // TODO: Shelf/Server implementieren.
}
