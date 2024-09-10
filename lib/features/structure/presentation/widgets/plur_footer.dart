import 'package:flutter/material.dart';

class PlurFooter extends StatelessWidget {
  const PlurFooter({
    super.key,
    required this.height,
  });

  final double height;

  @override
  Widget build(BuildContext context) {
    return Placeholder(
      fallbackHeight: height,
    );
  }
}
