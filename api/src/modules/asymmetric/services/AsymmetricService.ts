import { injectable } from 'tsyringe';
import crypto, { KeyObject } from 'crypto';

interface Request {
  publicKey?: string;
  text: any;
}

@injectable()
export class AsymmetricService {
  static privateKey: any;

  public encryption({ text }: Request) {
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
      modulusLength: 2048,
    });

    AsymmetricService.privateKey = privateKey;

    const encryptedData = crypto.publicEncrypt(
      {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256',
      },
      Buffer.from(text)
    );

    return {
      publicKey: publicKey
        .export({ type: 'pkcs1', format: 'pem' })
        .toString('base64'),
      decodedText: encryptedData.toString('base64'),
    };
  }

  public decryption({ publicKey = '', text }: Request) {
    console.log('meu cac', AsymmetricService.privateKey);

    const isVerified = crypto.verify(
      'sha256',
      Buffer.from(text),
      {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
      },
      crypto.sign('sha256', Buffer.from(text), {
        key: AsymmetricService.privateKey,
        padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
      })
    );

    if (isVerified) {
      const decryptedData = crypto.privateDecrypt(
        {
          key: AsymmetricService.privateKey,
          padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
          oaepHash: 'sha256',
        },
        text
      );
      return {
        decrypt: decryptedData.toString(),
      };
    }
  }
}
