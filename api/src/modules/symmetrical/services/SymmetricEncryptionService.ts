import { injectable } from 'tsyringe';

import CryptoJS from 'crypto-js';
interface Request {
  password: string;
  text: string;
}

@injectable()
export class SymmetricEncryptionService {
  constructor() {}

  public encryption({ password, text }: Request): String {
    return CryptoJS.AES.encrypt(text, password).toString();
  }

  public decryption({ password, text }: Request): String {
    const bytes = CryptoJS.AES.decrypt(text, password);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}
