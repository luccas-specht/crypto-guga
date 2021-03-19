import { injectable } from 'tsyringe';
import CryptoJS from 'crypto-js';

type Request = {
  password: string;
  encryptedText: string;
};

@injectable()
export class SymmetricDecryptService {
  public decrypt({ password, encryptedText }: Request): String {
    const bytes = CryptoJS.AES.decrypt(encryptedText, password);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}
