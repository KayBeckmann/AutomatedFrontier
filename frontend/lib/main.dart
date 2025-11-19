import 'package:flutter/material.dart';

/// Einstiegspunkt für das Space-Automation-Game Frontend.
void main() {
  runApp(const AutomatedFrontierApp());
}

class AutomatedFrontierApp extends StatelessWidget {
  const AutomatedFrontierApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Automated Frontier',
      theme: ThemeData.dark(useMaterial3: true),
      home: const Placeholder(),
    );
  }
}
