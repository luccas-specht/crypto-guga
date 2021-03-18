import { injectable } from 'tsyringe';

import crypto, { KeyObject } from 'crypto';

type Request = {
  text: string;
};

@injectable()
export class AsymmetricService {
  static privateKey: KeyObject;

  public encrypt({ text }: Request) {
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
}
