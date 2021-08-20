const REGEX = {
  uuid: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
};

export interface UuidLike {
  id: string;
}

export class Uuid {
  public static stringExportFormat = 'lowercase';

  /**
   * Converts the JSON representation of this class to this class.
   * Example JSON: `{ "id": "...THE UUID..." }`.
   * Use: `JSON.stringify(thisClassInstance)` to convert this class to JSON string.
   * @param json Json object or string.
   */
  public static fromJson(json: string | UuidLike): Uuid {
    if (typeof json === 'string') {
      json = JSON.parse(json) as UuidLike;
    }

    if (!json || !json.id) {
      throw new TypeError('The input cannot be converted to Uuid.');
    }

    return new Uuid(json.id);
  }

  private id = '';

  /**
   * UUID
   * @param uuid Optional UUID as string or byte array. Otherwise generates a new UUID.
   */
  constructor(uuid?: string | number[]) {
    if (typeof uuid === 'string') {
      this.fromString(uuid);
    } else if (Array.isArray(uuid)) {
      this.fromBytes(uuid);
    } else {
      this.generate();
    }
  }

  /**
   * Re-generates a new UUID for this instance.
   */
  public generate(): this {
    // Generate pseudo UUID by random bytes.
    const bytes = new Array(16)
      .fill(0)
      .map(() => (Math.random() * 256) & 0xff);
    // Brand version.
    bytes[6] = (bytes[6] | 0x40) & 0x4f;
    // Parse it as string.
    this.fromBytes(bytes);

    return this;
  }

  /**
   * Converts an UUID byte array to an UUID string. (length: 36)
   * @param bytes UUID Byte array (length 16 bytes of bytes)
   */
  public fromBytes(bytes: number[]): this {
    this.id = bytes
      .map((b) => ('00' + b.toString(16)).slice(-2))
      .join('')
      .replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/, '$1-$2-$3-$4-$5');

    this.id = this.toString();
    return this;
  }

  /**
   * Converts this UUID to an UUID byte array. (length: 16)
   * @return UUID byte array. (length: 16)
   */
  public toBytes(): number[] {
    return (this.id.replace(/-/g, '').match(/.{2}/g) || []).map((b) =>
      parseInt(b, 16)
    );
  }

  /**
   * Sets this UUID from a string.
   * @param uuid UUID string e.g. '1FBD384C-B2A1-41C6-84AF-43CABDF44124'
   */
  public fromString(uuid: string): this {
    this.id = uuid.trim();
    this.id = this.toString();
    return this;
  }

  /**
   * To UUID string.
   * @return UUID string e.g. '1FBD384C-B2A1-41C6-84AF-43CABDF44124'
   */
  public toString(): string {
    switch (Uuid.stringExportFormat) {
      default:
      case 'lowercase':
        return this.id.toLowerCase();
      case 'uppercase':
        return this.id.toUpperCase();
    }
  }

  /**
   * Validates this UUID.
   * @return True if valid, otherwise false.
   */
  public isValid(): boolean {
    if (typeof this.id !== 'string' || this.id.length !== 36) {
      return false;
    }
    return REGEX.uuid.test(this.id);
  }

  /**
   * Compares this UUID with another UUID.
   * @param uuid Another UUID or UUID-string.
   * @return True if equal, otherwise false.
   */
  public equals(uuid: Uuid | string): boolean {
    if (typeof uuid === 'string') {
      uuid = new Uuid(uuid);
    }

    return this.toString() === uuid.toString();
  }
}
