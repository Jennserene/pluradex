import 'package:flutter/material.dart';
import 'package:pluradex/features/home/presentation/pages/home_page.dart';
import 'package:pluradex/features/structure/presentation/widgets/plur_scaffold.dart';

class PublicScaffold extends StatefulWidget {
  const PublicScaffold({super.key});

  @override
  State<PublicScaffold> createState() => _PublicScaffoldState();
}

class _PublicScaffoldState extends State<PublicScaffold> {
  @override
  Widget build(BuildContext context) {
    return const PlurScaffold(
      body: HomePage(),
    );
  }
}