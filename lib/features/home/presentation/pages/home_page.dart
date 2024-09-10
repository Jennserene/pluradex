import 'package:flutter/material.dart';
import 'package:pluradex/features/structure/presentation/widgets/plur_scaffold.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return const PlurScaffold(
      body: Text('Welcome to the Pluradex Homepage!'),
    );
  }
}
