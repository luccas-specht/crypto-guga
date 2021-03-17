import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AsymmetricService } from '../services/AsymmetricService';

export class AsymmetricController {
  public async asymmetricEncryption(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { text } = request.body;

    const asymmetricEncryptionService = container.resolve(AsymmetricService);

    const { publicKey, decodedText } = await asymmetricEncryptionService.geraai(
      {
        text,
      }
    );

    return response.json({ publicKey, decodedText });
  }
}
