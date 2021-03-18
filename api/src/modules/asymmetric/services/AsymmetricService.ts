import { injectable } from 'tsyringe';
import crypto from 'crypto';

type Request = {
  publicKey?: any;
  text: any;
};

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
      text: encryptedData.toString('base64'),
    };
  }

  private encodedArrayBuffer(base64: any) {
    var chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

    var lookup = new Uint8Array(256);

    for (var i = 0; i < chars.length; i++) {
      lookup[chars.charCodeAt(i)] = i;
    }

    var bufferLength = base64.length * 0.75,
      len = base64.length,
      p = 0,
      encoded1,
      encoded2,
      encoded3,
      encoded4;

    if (base64[base64.length - 1] === '=') {
      bufferLength--;
      if (base64[base64.length - 2] === '=') {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
      bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i += 4) {
      encoded1 = lookup[base64.charCodeAt(i)];
      encoded2 = lookup[base64.charCodeAt(i + 1)];
      encoded3 = lookup[base64.charCodeAt(i + 2)];
      encoded4 = lookup[base64.charCodeAt(i + 3)];

      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }
    return arraybuffer;
  }

  public decryption({ publicKey = '', text }: Request) {
    text = this.encodedArrayBuffer(text);

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
        Buffer.from(text)
      );
      return {
        decrypt: decryptedData.toString(),
      };
    }
    return { decrypt: '' };
  }
}
