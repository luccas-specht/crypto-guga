import { injectable } from 'tsyringe';

import crypto from 'crypto';

import { CHARS } from '@constants/chars';

import { AsymmetricService } from './AsymmetricEncryptService';

type Request = {
  publicKey: any;
  text: string;
};

@injectable()
export class AsymmetricDecryptService {
  public decrypt({ publicKey, text }: Request): { decrypt: string } {
    const textConvertedToArrayBuffer = this.encodedArrayBuffer(text);

    const isVerified = crypto.verify(
      'sha256',
      Buffer.from(textConvertedToArrayBuffer),
      {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
      },
      crypto.sign('sha256', Buffer.from(textConvertedToArrayBuffer), {
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
        Buffer.from(textConvertedToArrayBuffer)
      );
      return {
        decrypt: decryptedData.toString(),
      };
    }
    return { decrypt: '' };
  }

  private encodedArrayBuffer(base64: string): ArrayBuffer {
    const lookUp = new Uint8Array(256);

    let bufferLength = base64.length * 0.75;
    let length = base64.length;
    let position = 0;

    let encoded1;
    let encoded2;
    let encoded3;
    let encoded4;

    for (let i = 0; i < CHARS.length; i++) {
      lookUp[CHARS.charCodeAt(i)] = i;
    }

    if (base64[base64.length - 1] === '=') {
      bufferLength--;
      if (base64[base64.length - 2]) {
        bufferLength--;
      }
    }

    const arraybuffer = new ArrayBuffer(bufferLength);
    const bytes = new Uint8Array(arraybuffer);

    for (let i = 0; i < length; i += 4) {
      encoded1 = lookUp[base64.charCodeAt(i)];
      encoded2 = lookUp[base64.charCodeAt(i + 1)];
      encoded3 = lookUp[base64.charCodeAt(i + 2)];
      encoded4 = lookUp[base64.charCodeAt(i + 3)];

      bytes[position++] = (encoded1 << 2) | (encoded2 >> 4);
      bytes[position++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      bytes[position++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }
    return arraybuffer;
  }
}
