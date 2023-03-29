import { Body, Controller, Get, Post } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';
import { CloudinaryDto } from './dto/cloudinary.dto';
import { DeleteDto } from './dto/delete.dto';

@Controller('cloudinary')
export class CloudinaryController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}
  @Get('resources')
  async getResources() {
    return this.cloudinaryService.getResources();
  }

  @Post('upload')
  async uploadImage(@Body() dto: CloudinaryDto) {
    return await this.cloudinaryService.uploadImage(dto);
  }

  @Post('delete')
  async deleteImage(@Body() dto: DeleteDto) {
    return await this.cloudinaryService.deleteImage(dto);
  }
}
