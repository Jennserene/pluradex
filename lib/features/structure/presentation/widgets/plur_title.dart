import 'package:flutter/material.dart';
import 'package:pluradex/src/localization/l10n.dart';

class PlurTitle extends StatelessWidget {
  const PlurTitle({
    super.key,
    this.title,
  });

  final String? title;

  @override
  Widget build(BuildContext context) {
    final defaultTitle = L10n(context).lang.appTitle;
    final actualTitle = title ?? defaultTitle;
    
    return Text(actualTitle);
  }
}
