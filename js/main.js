let uuidString = document.querySelector('.uuid.string');
let uuidBytes = document.querySelector('.uuid.bytes');

let uuid = new UUID();

uuidString.innerText = uuid.toString();
uuidBytes.innerText = '[' + uuid.toBytes().map(b => '0x' + ('00' + b.toString(16)).slice(-2).toUpperCase()).join(', ') + ']';
