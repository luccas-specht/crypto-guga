import { injectable } from 'tsyringe';
import crypto from 'crypto';

interface Request {
  text: string;
}

@injectable()
export class AsymmetricService {
  constructor() {}

  private generateKeyPair() {
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
      modulusLength: 2048,
    });

    return { publicKey, privateKey };
  }

  private encryptedText(text: string) {
    const { publicKey } = this.generateKeyPair();

    const encryptedData = crypto.publicEncrypt(
      {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256',
      },

      Buffer.from(text)
    );
    return encryptedData.toString('base64');
  }

  public geraai({ text }: Request) {
    const { publicKey } = this.generateKeyPair();
    const decodedText = this.encryptedText(text);

    return { publicKey, decodedText };
  }
}
