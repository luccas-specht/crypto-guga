import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { SymmetricEncryptionService } from '../services/SymmetricEncryptionService';

export class SymmetricalController {
  public symmetricEncryption(request: Request, response: Response): Response {
    const { password, text } = request.body;

    const symmetricEncryptionService = container.resolve(
      SymmetricEncryptionService
    );

    const encryptedText = symmetricEncryptionService.encryption({
      password,
      text,
    });

    return response.json({ encryptedText });
  }

  public symmetricDecryption(request: Request, response: Response): Response {
    const { password, text } = request.body;

    const symmetricEncryptionService = container.resolve(
      SymmetricEncryptionService
    );

    const decryptionText = symmetricEncryptionService.decryption({
      password,
      text,
    });

    return response.json({ decryptionText });
  }
}
