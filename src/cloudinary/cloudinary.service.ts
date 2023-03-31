import { Injectable } from '@nestjs/common';
import { v2 } from 'cloudinary';
import { getCloudinary } from 'src/common';
import { CloudinaryDto } from './dto/cloudinary.dto';
import { DeleteDto } from './dto/delete.dto';

@Injectable()
export class CloudinaryService {
  cloudinary: typeof v2;

  constructor() {
    this.cloudinary = getCloudinary();
  }

  async getResources() {
    return this.cloudinary.api.resources().then((result) => result);
  }

  async uploadImage(dto: CloudinaryDto) {
    try {
      const result = await this.cloudinary.uploader.upload(dto.file, {
        //public_id: 'sample_id',
        folder: dto.folder,
      });
      console.log(result.public_id);
      return { public_id: result.public_id };
    } catch (error) {
      console.log(error);
    }
  }

  async deleteImage(dto: DeleteDto) {
    console.log(dto.publicId);

    try {
      this.cloudinary.uploader
        .destroy(dto.publicId, {
          resource_type: 'image',
        })
        .then((res) => console.log(res))
        .catch((err) =>
          console.log('handle later for not deleting properly', err),
        );
    } catch (error) {
      return error;
    }
  }
}
