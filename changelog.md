# Changelog

## 2.0.3

- Minor fixes to the random byte range. It uses the full range now.

## 2.0.0

- Some names have been changed to _StrictPascalCase_ / _strictCamelCase_ (`UUID` > `Uuid`).
- Changed UUID string output to lowercase by default.
- Changed the intern `value` of UUID to `id`. (e.g. for JSON.)
- New method `Uuid.fromJson(...)` to reverse a JSON representation of the class `Uuid`.

## 1.5.0

- Updated the project setup and the dev-dependencies.
- Replaced tslint (deprecated) with eslint (typescript support).
- Switched from Apache 2 to MIT license.

## 1.4.0

Initial version. (Before this changelog.)
