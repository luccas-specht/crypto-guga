import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AsymmetricService } from '../services/AsymmetricEncryptService';
import { AsymmetricDecryptService } from '../services/AsymmetricDecryptService';

export class AsymmetricController {
  public asymmetricEncrypt(request: Request, response: Response): Response {
    const { text } = request.body;
    const asymmetricEncryptionService = container.resolve(AsymmetricService);
    const encryptedText = asymmetricEncryptionService.encrypt({
      text,
    });
    return response.json(encryptedText);
  }

  public asymmetricDecrypt(request: Request, response: Response): Response {
    const { publicKey, text } = request.body;
    const asymmetricDecryptService = container.resolve(
      AsymmetricDecryptService
    );
    const decrytedText = asymmetricDecryptService.decrypt({
      publicKey,
      text,
    });
    return response.json(decrytedText);
  }
}
