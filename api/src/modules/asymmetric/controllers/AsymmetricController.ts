import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AsymmetricService } from '../services/AsymmetricService';

export class AsymmetricController {
  public asymmetricEncryption(request: Request, response: Response): Response {
    const { text } = request.body;

    const asymmetricEncryptionService = container.resolve(AsymmetricService);

    const test = asymmetricEncryptionService.encryption({
      text,
    });

    return response.json(test);
  }

  public symmetricDecryption(request: Request, response: Response): Response {
    const { publicKey, text } = request.body;

    const symmetricEncryptionService = container.resolve(AsymmetricService);

    const decryptionText = symmetricEncryptionService.decryption({
      publicKey,
      text,
    });

    return response.json({ decryptionText });
  }
}
