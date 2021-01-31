import { Uuid } from './uuid';

export class UuidTool {
  /**
   * Converts an UUID string to an UUID byte array.
   * @param uuid UUID string e.g. '1FBD384C-B2A1-41C6-84AF-43CABDF44124'
   * @return UUID byte array. (length: 16)
   */
  public static toBytes(uuid: string): number[] {
    return new Uuid().fromString(uuid).toBytes();
  }

  /**
   * Converts an UUID byte array to an UUID string.
   * @param bytes UUID Byte array (length 16 bytes of bytes)
   * @return UUID string. (length 36)
   */
  public static toString(bytes: number[]): string {
    return new Uuid().fromBytes(bytes).toString();
  }

  /**
   * Generates a new (pseudo) UUID RFC 4122 Version 4.
   * @return UUID e.g. '1FBD384C-B2A1-41C6-84AF-43CABDF44124'
   */
  public static newUuid(): string {
    return new Uuid().toString();
  }

  /**
   * Validated an UUID string.
   * @param uuid UUID string e.g. '1FBD384C-B2A1-41C6-84AF-43CABDF44124'
   * @return True if valid, otherwise false.
   */
  public static isUuid(uuid: string): boolean {
    return new Uuid().fromString(uuid).isValid();
  }

  /**
   * Compares two UUIDs.
   * @param uuid1 UUID string.
   * @param uuid2 UUID string.
   * @return True if equal, otherwise false.
   */
  public static compare(uuid1: string, uuid2: string): boolean {
    return new Uuid(uuid1).equals(new Uuid(uuid2));
  }
}
