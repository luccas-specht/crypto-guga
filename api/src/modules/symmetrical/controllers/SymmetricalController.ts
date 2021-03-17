import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { SymmetricEncryptionService } from '../services/SymmetricEncryptionService';

export class SymmetricalController {
  public async symmetricEncryption(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { key, text } = request.body;

    const symmetricEncryptionService = container.resolve(
      SymmetricEncryptionService
    );

    const encryptedText = await symmetricEncryptionService.execute({
      key,
      text,
    });

    return response.json({ encryptedText });
  }
}
