import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { SymmetricDecryptService } from '../services/SymmetricDecryptService';
import { SymmetricEncryptService } from '../services/SymmetricEncryptService';

export class SymmetricController {
  public symmetricEncrypt(request: Request, response: Response): Response {
    const { password, text } = request.body;

    const symmetricEncryptService = container.resolve(SymmetricEncryptService);

    const encryptedText = symmetricEncryptService.encrypt({
      password,
      text,
    });

    return response.json({ encryptedText });
  }

  public symmetricDecrypt(request: Request, response: Response): Response {
    const { password, encryptedText } = request.body;

    const symmetricDecryptService = container.resolve(SymmetricDecryptService);

    const decryptionText = symmetricDecryptService.decrypt({
      password,
      encryptedText,
    });

    return response.json({ decryptionText });
  }
}
