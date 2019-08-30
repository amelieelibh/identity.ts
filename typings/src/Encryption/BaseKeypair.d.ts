export declare abstract class BaseKeypair {
    protected publicKey: string;
    protected privateKey: string;
    constructor();
    abstract PublicEncrypt(message: string): Promise<Buffer>;
    abstract PrivateDecrypt(input: Buffer): Promise<string>;
    abstract Sign(dataToSign: string): Buffer;
    abstract Verify(dataToCheck: string, signatureToVerify: Buffer): boolean;
    abstract GetKeyType(): string;
    GetPublicKey(): string;
    SetPrivateKey(privateKey: string): void;
    GetPrivateKey(): string;
}