# UUID Tool

[![Version][version]][package] [![MIT License][license-badge]][license]

Lightweight UUID library for JavaScript.
No bullshit, simple to use, easy to learn.
Well tested and no dependencies.

Parse and generate UUIDs. Convert between UUID string (36 byte) to 16 byte array.
Inclusive TypeScript definition file (types).

For NodeJS and Browser.

UUID RFC 4122 Version 4

## Install

```bash
npm i uuid-tool
```

[NPM Package](https://www.npmjs.com/package/uuid-tool)

## Example

```js
let uuid = UUIDTool.newUUID();
let bytes = UUIDTool.toBytes(uuid);
let strAgain = UUIDTool.toString(bytes);
let isValid = UUIDTool.isUUID(strAgain);
let isEqual = UUIDTool.compare(uuid1, uuid2);
```

You can also use the `UUID` class.

```js
let uuid = new UUID(byteOrString);
let str = uuid.toString();
let bytes = uuid.toBytes();
```

```js
// Generate a new UUID
let uuid = new UUID();
```

```js
// Compare (case insensitive)
let uuid1 = new UUID('3C09B262-49C7-466F-8B4F-626BCA1EC9BC');
let uuid2 = new UUID('3c09b262-49c7-466f-8b4f-626bca1ec9bc');

if (uuid1.equals(uuid2)) {
  console.log('The IDs match.');
} else {
  console.log('The IDs do not match.');
}

// Result: The IDs match.
```

In NodeJS e.g.

```js
const UUID = require('uuid-tool').UUID;
console.log(new UUID().toString());
```

## API

## UUIDTool

---

### **toBytes** (uuid)

Converts an UUID string to an UUID byte array.

| Param | Type   | Description                                             |
| ----- | ------ | ------------------------------------------------------- |
| uuid  | string | UUID string e.g. '1FBD384C-B2A1-41C6-84AF-43CABDF44124' |

**Returns** `number[]` UUID byte array (length: 16)

---

### **toString** (bytes)

Converts an UUID byte array to an UUID string.

| Param | Type     | Description                                |
| ----- | -------- | ------------------------------------------ |
| bytes | number[] | UUID Byte array (length 16 bytes of bytes) |

**Returns** `string` UUID string. (length 36)

---

### **newUUID** ()

Generates a new (pseudo) UUID RFC 4122 Version 4.

**Returns** `string` UUID e.g. '1FBD384C-B2A1-41C6-84AF-43CABDF44124'

---

### **isUUID** (uuid)

Converts an UUID byte array to an UUID string.

| Param | Type   | Description                                             |
| ----- | ------ | ------------------------------------------------------- |
| uuid  | string | UUID string e.g. '1FBD384C-B2A1-41C6-84AF-43CABDF44124' |

**Returns** `boolean` True if valid, otherwise false.

---

### **compare** (uuid1, uuid2)

Compares two UUIDs.

| Param | Type   | Description |
| ----- | ------ | ----------- |
| uuid1 | string | UUID string |
| uuid2 | string | UUID string |

**Returns** `boolean` True if equal, otherwise false.

---

## UUID

### **generate** ()

Re-generates a new UUID for this instance.

**Returns** `this` The same UUID instance.

---

### **fromBytes** (bytes)

Converts an UUID byte array to an UUID string. (length: 36)

| Param | Type     | Description                                |
| ----- | -------- | ------------------------------------------ |
| bytes | number[] | UUID Byte array (length 16 bytes of bytes) |

**Returns** `this` The same UUID instance.

---

### **toBytes** ()

Converts this UUID to an UUID byte array. (length: 16)

**Returns** `number[]` The UUID as byte array.

---

### **fromString** (uuid)

Converts an UUID byte array to an UUID string. (length: 36)

| Param | Type   | Description                                        |
| ----- | ------ | -------------------------------------------------- |
| uuid  | string | string e.g. '1FBD384C-B2A1-41C6-84AF-43CABDF44124' |

**Returns** `this` The same UUID instance.

---

### **toString** ()

To UUID string.
HINT Set case mode by UUID.stringExportFormat = 'uppercase' | 'lowercase';

**Returns** `string` UUID string e.g. '1FBD384C-B2A1-41C6-84AF-43CABDF44124'

---

### **isValid** ()

Validate this UUID.

**Returns** `boolean` True if valid, otherwise false.

---

### **equals** (uuid)

Compares this UUID with another UUID.

| Param | Type           | Description                           |
| ----- | -------------- | ------------------------------------- |
| uuid  | UUID \| string | Another UUID instance or uuid-string. |

**Returns** `boolean` True if equal, otherwise false.

---

## License

**[MIT](LICENSE)** © Copyright 2020 Dominik-Andreas Geng ([@domske](https://github.com/domske))

<!-- badges (common) -->

[license-badge]: https://img.shields.io/npm/l/uuid-tool.svg?style=flat-square
[license]: https://opensource.org/licenses/MIT
[version]: https://img.shields.io/npm/v/uuid-tool.svg?style=flat-square
[package]: https://www.npmjs.com/package/uuid-tool
