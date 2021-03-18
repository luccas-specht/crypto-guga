import { injectable } from 'tsyringe';
import CryptoJS from 'crypto-js';

type Request = {
  password: string;
  text: string;
};

@injectable()
export class SymmetricEncryptService {
  public encrypt({ password, text }: Request): String {
    return CryptoJS.AES.encrypt(text, password).toString();
  }
}
