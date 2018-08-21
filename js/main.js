let uuidString = document.querySelector('.uuid.string');
let uuidBytes = document.querySelector('.uuid.bytes');

uuidString.innerText = new UUID().toString();
uuidBytes.innerText = '[' +
  new UUID()
  .toBytes()
  .map(b => '0x' + ('00' + b.toString(16)).slice(-2).toUpperCase())
  .join(', ') +
  ']';
