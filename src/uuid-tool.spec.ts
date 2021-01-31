import { UuidTool } from './uuid-tool';
import { Uuid } from './uuid';

const REGEX = {
  uuid: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
};

beforeEach(() => {
  Uuid.stringExportFormat = 'lowercase';
});

test('parse', () => {
  const uuid = '1FBD384C-B2A1-41C6-84AF-43CABDF44124';
  const bytes = UuidTool.toBytes(uuid);
  expect(bytes.toString()).toBe(
    [
      0x1f,
      0xbd,
      0x38,
      0x4c,
      0xb2,
      0xa1,
      0x41,
      0xc6,
      0x84,
      0xaf,
      0x43,
      0xca,
      0xbd,
      0xf4,
      0x41,
      0x24,
    ].toString()
  );
});

test('unparse', () => {
  const bytes = [
    0x1f,
    0xbd,
    0x38,
    0x4c,
    0xb2,
    0xa1,
    0x41,
    0xc6,
    0x84,
    0xaf,
    0x43,
    0xca,
    0xbd,
    0xf4,
    0x41,
    0x24,
  ];

  const uuid = UuidTool.toString(bytes);
  expect(uuid).toBe('1fbd384c-b2a1-41c6-84af-43cabdf44124');
});

test('generate', () => {
  for (let i = 0; i < 12; i++) {
    expect(REGEX.uuid.test(UuidTool.newUuid())).toBe(true);
  }
});

test('validate', () => {
  expect(UuidTool.isUuid('1FBD384C-B2A1-41C6-84AF-43CABDF44124')).toBe(true);
});

test('equals', () => {
  const uuid1 = '3C09B262-49C7-466F-8B4F-626BCA1EC9BC';
  const uuid2 = '3c09b262-49c7-466f-8b4f-626bca1ec9bc';
  expect(UuidTool.compare(uuid1, uuid2)).toBe(true);
});

test('not equals', () => {
  const uuid1 = '3C09B262-49C7-466F-8B4F-626BCA1EC9BC';
  const uuid2 = '3c09b262-49A7-466f-8b4f-626bca1ec9bc';
  expect(UuidTool.compare(uuid1, uuid2)).toBe(false);
});

test('Uuid equals string', () => {
  const uuid1 = '3C09B262-49C7-466F-8B4F-626BCA1EC9BC';
  const uuid2 = '3c09b262-49c7-466f-8b4f-626bca1ec9bc';
  expect(new Uuid(uuid1).equals(uuid2)).toBe(true);
});

test('string format lowercase', () => {
  Uuid.stringExportFormat = 'lowercase';
  const uuid = new Uuid('3C09B262-49C7-466F-8B4F-626BCA1EC9BC');
  expect(uuid.toString()).toBe('3c09b262-49c7-466f-8b4f-626bca1ec9bc');
});

test('string format uppercase', () => {
  Uuid.stringExportFormat = 'uppercase';
  const uuid = new Uuid('3c09b262-49c7-466f-8b4f-626bca1ec9bc');
  expect(uuid.toString()).toBe('3C09B262-49C7-466F-8B4F-626BCA1EC9BC');
});

test('from bytes', () => {
  const uuid = new Uuid([
    0x0e,
    0xc6,
    0x3d,
    0x93,
    0x30,
    0x00,
    0x46,
    0xd2,
    0xee,
    0xd2,
    0xa3,
    0x15,
    0x38,
    0xb9,
    0x85,
    0xb9,
  ]);
  expect(uuid).toBeDefined();
  expect(uuid.toString()).toBe('0ec63d93-3000-46d2-eed2-a31538b985b9');
});

test('valid', () => {
  const uuid = new Uuid();
  expect(uuid.isValid()).toBe(true);
});

test('invalid', () => {
  const uuid = new Uuid('1234');
  expect(uuid.isValid()).toBe(false);
});

test('to bytes', () => {
  const uuid = new Uuid('0ec63d93-3000-46d2-eed2-a31538b985b9');
  expect(uuid.toBytes()).toEqual([
    0x0e,
    0xc6,
    0x3d,
    0x93,
    0x30,
    0x00,
    0x46,
    0xd2,
    0xee,
    0xd2,
    0xa3,
    0x15,
    0x38,
    0xb9,
    0x85,
    0xb9,
  ]);
});

test('JSON success', () => {
  const uuidToTest = '3c09b262-49c7-466f-8b4f-626bca1ec9bc';
  const jsonToTest = `{"id":"${uuidToTest}"}`;
  const uuid = new Uuid(uuidToTest);
  const json = JSON.stringify(uuid);
  expect(json).toBe(jsonToTest);
  const uuid2 = Uuid.fromJson(jsonToTest);
  expect(uuid2.toString()).toBe(uuidToTest);
});

test('JSON fail', () => {
  expect(() => {
    Uuid.fromJson(null);
  }).toThrowError();
});

test('all', () => {
  const uuid = UuidTool.newUuid();
  const bytes = UuidTool.toBytes(uuid);
  const strAgain = UuidTool.toString(bytes);
  const isValid = UuidTool.isUuid(strAgain);
  expect(isValid).toBe(true);
});
