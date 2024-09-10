import 'package:flutter/material.dart';

import 'package:flutter_gen/gen_l10n/app_localizations.dart';

class L10n {
  L10n(
    this.context,
  );

  final BuildContext context;

  AppLocalizations get lang => AppLocalizations.of(context)!;
}
