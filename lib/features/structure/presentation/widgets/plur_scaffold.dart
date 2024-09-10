import 'package:flutter/material.dart';
import 'package:pluradex/features/structure/presentation/widgets/plur_title.dart';
import 'package:pluradex/features/structure/presentation/widgets/plur_footer.dart';
import 'package:pluradex/src/settings/settings_view.dart';

class PlurScaffold extends StatelessWidget {
  const PlurScaffold({
    super.key,
    required this.body,
    this.title,
    this.actions,
  });

  final Widget body;
  final String? title;
  final List<Widget>? actions;

  final double footerHeight = 100;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      extendBody: true,
      appBar: AppBar(
        title: PlurTitle(title: title),
        actions: [
          IconButton(
            icon: const Icon(Icons.settings),
            onPressed: () {
              // Navigate to the settings page. If the user leaves and returns
              // to the app after it has been killed while running in the
              // background, the navigation stack is restored.
              Navigator.restorablePushNamed(context, SettingsView.routeName);
            },
          ),
        ],
      ),
      body: LayoutBuilder(
        builder: (BuildContext context, BoxConstraints constraints) {
          return Container(
            height: constraints.maxHeight,
            width: constraints.maxWidth,
            constraints: const BoxConstraints.expand(),
            child: SingleChildScrollView(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Container(
                    constraints: BoxConstraints(
                      minHeight: constraints.maxHeight - footerHeight,
                    ),
                    child: body,
                  ),
                  PlurFooter(height: footerHeight),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}
