import { injectable } from 'tsyringe';

interface Request {
  key: string;
  text: string;
}

@injectable()
export class SymmetricEncryptionService {
  constructor() {}

  public async execute({ key, text }: Request): Promise<String> {
    return 'oiiii';
  }
}
