import { UUIDTool } from '../uuid-tool';

const REGEX = {
  UUID: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
};

test('parse', () => {
  const uuid = '1FBD384C-B2A1-41C6-84AF-43CABDF44124';
  const bytes = UUIDTool.toBytes(uuid);
  expect(bytes.toString()).toBe(
    [0x1f, 0xbd, 0x38, 0x4c, 0xb2, 0xa1, 0x41, 0xc6, 0x84, 0xaf, 0x43, 0xca, 0xbd, 0xf4, 0x41, 0x24].toString(),
  );
});

test('unparse', () => {
  const bytes = [0x1f, 0xbd, 0x38, 0x4c, 0xb2, 0xa1, 0x41, 0xc6, 0x84, 0xaf, 0x43, 0xca, 0xbd, 0xf4, 0x41, 0x24];

  const uuid = UUIDTool.toString(bytes);
  expect(uuid).toBe('1FBD384C-B2A1-41C6-84AF-43CABDF44124');
});

test('generate', () => {
  for (let i = 0; i < 12; i++) {
    expect(REGEX.UUID.test(UUIDTool.newUUID())).toBe(true);
  }
});

test('validate', () => {
  expect(UUIDTool.isUUID('1FBD384C-B2A1-41C6-84AF-43CABDF44124')).toBe(true);
});

test('all', () => {
  const uuid = UUIDTool.newUUID();
  const bytes = UUIDTool.toBytes(uuid);
  const strAgain = UUIDTool.toString(bytes);
  const isValid = UUIDTool.isUUID(strAgain);
  expect(isValid).toBe(true);
});
