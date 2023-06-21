import { Injectable } from '@nestjs/common';

@Injectable()
export class GameaService {
  uploadFile(file: Express.Multer.File) {
    console.log(file);
  }
}
