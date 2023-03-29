import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
// eslint-disable-next-line @typescript-eslint/no-var-requires
//const cloudinary = require('cloudinary').v2;
import { v2 as cloudinary } from 'cloudinary';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    // Return "https" URLs by setting secure: true
    /*    cloudinary.config({
      secure: true,
      api_key: '466955631533284',
      api_secret: '38uT_BaqTfC0f2ABpXnPwuG-gDY',
      cloud_name: 'escrow',
    }); */

    // Log the configuration
    console.log(cloudinary.config());
    //this.logger.log('GET / called');
    //return this.appService.getHello();
    cloudinary.api.resources().then((result) => console.log(result));
  }
}
