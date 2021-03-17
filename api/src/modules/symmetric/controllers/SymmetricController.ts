import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { SymmetricService } from '../services/SymmetricService';

export class SymmetricController {
  public symmetricEncryption(request: Request, response: Response): Response {
    const { password, text } = request.body;

    const symmetricEncryptionService = container.resolve(SymmetricService);

    const encryptedText = symmetricEncryptionService.encryption({
      password,
      text,
    });

    return response.json({ encryptedText });
  }

  public symmetricDecryption(request: Request, response: Response): Response {
    const { password, text } = request.body;

    const symmetricEncryptionService = container.resolve(SymmetricService);

    const decryptionText = symmetricEncryptionService.decryption({
      password,
      text,
    });

    return response.json({ decryptionText });
  }
}
