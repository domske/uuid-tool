/**
 * UUID
 * @author Dominik Geng
 * @copyright 2018 Dominik Geng
 * @license Apache-2.0
 */
export declare class UUID {
    static stringExportFormat: string;
    private static REGEX;
    private value;
    /**
     * UUID
     * @param uuid Optional UUID as string or byte array. Otherwise generates a new UUID.
     */
    constructor(uuid?: string | number[]);
    /**
     * Re-generates a new UUID for this instance.
     */
    generate(): this;
    /**
     * Converts an UUID byte array to an UUID string. (length: 36)
     * @param bytes UUID Byte array (length 16 bytes of bytes)
     */
    fromBytes(bytes: number[]): this;
    /**
     * Converts this UUID to an UUID byte array. (length: 16)
     * @return UUID byte array. (length: 16)
     */
    toBytes(): number[];
    /**
     * Sets this UUID from a string.
     * @param uuid UUID string e.g. '1FBD384C-B2A1-41C6-84AF-43CABDF44124'
     */
    fromString(uuid: string): this;
    /**
     * To UUID string.
     * @return UUID string e.g. '1FBD384C-B2A1-41C6-84AF-43CABDF44124'
     */
    toString(): string;
    /**
     * Validates this UUID.
     * @return True if valid, otherwise false.
     */
    isValid(): boolean;
    /**
     * Compares this UUID with another UUID.
     * @param uuid Another UUID or uuid-string.
     * @return True if equal, otherwise false.
     */
    equals(uuid: UUID | string): boolean;
}
