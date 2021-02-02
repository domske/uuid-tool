# UUID Tool

[![Version][version]][package] [![MIT License][license-badge]][license]

<h1 align="center">
	<img width="320" src="assets/uuid-logo.png">
</h1>
![](assets/uuid-logo.png)

Lightweight UUID library for JavaScript, written in TypeScript. (Types declarations included.)
Simple to use, simply works. Well tested and no dependencies. For NodeJS and Browser.

Parse and generate UUIDs. Convert between UUID string (36 byte) to 16 byte array.
UUID RFC 4122 Version 4

## Install

```bash
npm i uuid-tool
```

[NPM Package](https://www.npmjs.com/package/uuid-tool)

## Example

```js
let uuid = UuidTool.newUuid();
let bytes = UuidTool.toBytes(uuid);
let strAgain = UuidTool.toString(bytes);
let isValid = UuidTool.isUuid(strAgain);
let isEqual = UuidTool.compare(uuid1, uuid2);
```

You can also use the `Uuid` class.

```js
let uuid = new Uuid(byteOrString);
let str = uuid.toString();
let bytes = uuid.toBytes();
```

```js
// Generate a new UUID
let uuid = new Uuid();
```

```js
// Compare (case insensitive)
let uuid1 = new Uuid('3C09B262-49C7-466F-8B4F-626BCA1EC9BC');
let uuid2 = new Uuid('3c09b262-49c7-466f-8b4f-626bca1ec9bc');

if (uuid1.equals(uuid2)) {
  console.log('The IDs match.');
} else {
  console.log('The IDs do not match.');
}

// Result: The IDs match.
```

In NodeJS e.g.

```js
const Uuid = require('uuid-tool').Uuid;
console.log(new Uuid().toString());
```

From Json:

```js
const jsonStr = '{ "id": "3c09b262-49c7-466f-8b4f-626bca1ec9bc" }';
const uuid = Uuid.fromJson(jsonStr);
// or as already parsed json object:
const jsonObj = { id: '3c09b262-49c7-466f-8b4f-626bca1ec9bc' };
const uuid = Uuid.fromJson(jsonObj);
// otherwise it throws an error on invalid inputs.
```

## API

## UuidTool

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

### **newUuid** ()

Generates a new (pseudo) UUID RFC 4122 Version 4.

**Returns** `string` UUID e.g. '1FBD384C-B2A1-41C6-84AF-43CABDF44124'

---

### **isUuid** (uuid)

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

## Uuid

### **generate** ()

Re-generates a new UUID for this instance.

**Returns** `this` The same UUID instance.

---

### **fromBytes** (bytes)

Converts an UUID byte array to an UUID string. (length: 36)
Note that the internal UUID has not yet been validated. Use the method `isValid`.

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
Note that the internal UUID has not yet been validated. Use the method `isValid`.

| Param | Type   | Description                                        |
| ----- | ------ | -------------------------------------------------- |
| uuid  | string | string e.g. '1FBD384C-B2A1-41C6-84AF-43CABDF44124' |

**Returns** `this` The same UUID instance.

---

### **toString** ()

To UUID string.
HINT Set case mode by Uuid.stringExportFormat = 'uppercase' | 'lowercase';
This also affects the result of JSON.stringify(...);

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
| uuid  | Uuid \| string | Another UUID instance or uuid-string. |

**Returns** `boolean` True if equal, otherwise false.

---

### _static_ **fromJson** (json)

Converts the JSON representation of this class to this class.

| Param | Type               | Description                              |
| ----- | ------------------ | ---------------------------------------- |
| uuid  | UuidLike \| string | The string representation of this class. |

**Returns** `Uuid` The `Uuid` class with the parsed input object.

---

## License

**[MIT](LICENSE)** © Copyright 2018 - 2021 Dominik-Andreas Geng ([@domske](https://github.com/domske))

UUID logo © Copyright 2021 Dominik Geng

[license-badge]: https://img.shields.io/npm/l/uuid-tool.svg?style=flat-square
[license]: https://opensource.org/licenses/MIT
[version]: https://img.shields.io/npm/v/uuid-tool.svg?style=flat-square
[package]: https://www.npmjs.com/package/uuid-tool
