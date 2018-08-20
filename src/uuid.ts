/**
 * UUID
 * @author Dominik Geng
 * @copyright 2018 Dominik Geng
 * @license Apache-2.0
 */

export class UUID {

  private static REGEX = {
    UUID: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
  };

  private value: string;

  /**
   * UUID
   * @param uuid Optional UUID as string or byte array. Otherwise generates a new UUID.
   */
  constructor(uuid?: string | number[]) {
    if (typeof uuid === 'string' && uuid.length === 36) {
      this.fromString(uuid);
    } else if (typeof uuid === 'object' && uuid.length === 16) {
      this.fromBytes(uuid);
    } else {
      this.generate();
    }
  }

  /**
   * Re-generates a new UUID for this instance.
   */
  public generate(): this {
    // Generate pseudo uuid by random bytes.
    const bytes = new Array(16).fill(0).map(() => (Math.random() * 0xFF) & 0xFF);
    // Brand version.
    bytes[6] = (bytes[6] | 0x40) & 0x4F;
    // Parse it as string.
    this.fromBytes(bytes);

    return this;
  }

  /**
   * Converts an UUID byte array to an UUID string. (length: 36)
   * @param bytes UUID Byte array (length 16 bytes of bytes)
   */
  public fromBytes(bytes: number[]): this {
    this.value = bytes
      .map(b => ('00' + b.toString(16)).slice(-2))
      .join('')
      .replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5')
      .toUpperCase();

    return this;
  }

  /**
   * Converts this UUID to an UUID byte array. (length: 16)
   * @return UUID byte array. (length: 16)
   */
  public toBytes(): number[] {
    return this.value
      .replace(/-/g, '')
      .match(/.{2}/g)
      .map(b => parseInt(b, 16));
  }

  /**
   * Sets this UUID from a string.
   * @param uuid UUID string e.g. '1FBD384C-B2A1-41C6-84AF-43CABDF44124'
   */
  public fromString(uuid: string): this {
    this.value = uuid;

    return this;
  }

  /**
   * To UUID string.
   * @return UUID string e.g. '1FBD384C-B2A1-41C6-84AF-43CABDF44124'
   */
  public toString(): string {
    return this.value;
  }

  /**
   * Validates this UUID.
   * @return True if valid, otherwise false.
   */
  public isValid(): boolean {
    if ((typeof this.value !== 'string') || this.value.length !== 36) {
      return false;
    }
    return UUID.REGEX.UUID.test(this.value);
  }

}
