# UUID Tool

Parse and generate UUIDs. Convert between UUID string (36 byte) to 16 byte array.
Inclusive TypeScript definition file (types).

For NodeJS and Browser.

UUID RFC 4122 Version 4

## Install

```bash
npm i uuid-tool
```

## Example

```js
let uuid = UUIDTool.newUUID();
let bytes = UUIDTool.toBytes(uuid);
let strAgain = UUIDTool.toString(bytes);
let isValid = UUIDTool.isUUID(strAgain);
```

You can also use the `UUID` class.

```js
let uuid = new UUID(byteOrString);
let str = uuid.toString();
let bytes = uuid.toBytes();
```

In NodeJS e.g.

```js
const UUID = require('uuid-tool').UUID;
console.log(new UUID().toString());
```

## API

---

### **toBytes** (uuid)

Converts an UUID string to an UUID byte array.

| Param | Type | Description |
| --- | --- | --- |
| uuid | string | UUID string e.g. '1FBD384C-B2A1-41C6-84AF-43CABDF44124' |

**Returns** `number` UUID byte array (length: 16)

---

### **toString** (bytes)

Converts an UUID byte array to an UUID string.

| Param | Type | Description |
| --- | --- | --- |
| bytes | number[] | UUID Byte array (length 16 bytes of bytes) |

**Returns** `string` UUID string. (length 36)

---

### **newUUID** ()

Generates a new (pseudo) UUID RFC 4122 Version 4.

**Returns** `string` UUID e.g. '1FBD384C-B2A1-41C6-84AF-43CABDF44124'

---

### **isUUID** (uuid)

Converts an UUID byte array to an UUID string.

| Param | Type | Description |
| --- | --- | --- |
| uuid | string | UUID string e.g. '1FBD384C-B2A1-41C6-84AF-43CABDF44124' |

**Returns** `boolean` True if valid, otherwise false.


## License

**Apache-2.0**

(C) Copyright 2018 Dominik-Andreas Geng
