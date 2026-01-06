import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join, extname } from 'path';
import { existsSync, mkdirSync, renameSync } from 'fs';
import sharp from 'sharp';
import { SosialMediaService } from './sosialmedia.service';

@Controller('api/datasosialmedia')
export class SosialMediaController {
  constructor(private readonly service: SosialMediaService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('iconsosialmedia', {
      storage: diskStorage({
        destination: (req, file, callback) => {
          const uploadDir = join(process.cwd(), 'uploads/sosialmedia');
          if (!existsSync(uploadDir)) mkdirSync(uploadDir, { recursive: true });
          callback(null, uploadDir);
        },
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          callback(null, `${uniqueSuffix}${ext}`);
        },
      }),
      fileFilter: (_req, file, callback) => {
        const allowedTypes = /jpg|jpeg|png|gif/;
        const isValid = allowedTypes.test(file.mimetype) && allowedTypes.test(extname(file.originalname).toLowerCase());
        if (isValid) callback(null, true);
        else callback(new BadRequestException('Only image files are allowed!'), false);
      },
    }),
  )
  async create(@Body() data: any, @UploadedFile() file: any) {
    try {
      if (file) {
        const uploadDir = join(process.cwd(), 'uploads/sosialmedia');
        const filepath = join(uploadDir, file.filename);
        const tempPath = join(uploadDir, 'tmp-' + file.filename);
        const ext = extname(file.filename).toLowerCase();

        // Kompres gambar
        let image = sharp(filepath);
        if (ext === '.jpg' || ext === '.jpeg') image = image.jpeg({ quality: 70 });
        if (ext === '.png') image = image.png({ compressionLevel: 8 });
        if (ext === '.webp') image = image.webp({ quality: 70 });

        await image.toFile(tempPath);
        renameSync(tempPath, filepath);

        data.iconsosialmedia = file.filename;
      }

      return await this.service.create(data);
    } catch (error: any) {
      throw new BadRequestException('Failed to save sosialmedia data: ' + error.message);
    }
  }

  @Put(':id')
  @UseInterceptors(
    FileInterceptor('iconsosialmedia', {
      storage: diskStorage({
        destination: (req, file, callback) => {
          const uploadDir = join(process.cwd(), 'uploads/sosialmedia');
          if (!existsSync(uploadDir)) mkdirSync(uploadDir, { recursive: true });
          callback(null, uploadDir);
        },
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          callback(null, `${uniqueSuffix}${ext}`);
        },
      }),
      fileFilter: (_req, file, callback) => {
        const allowedTypes = /jpg|jpeg|png|gif/;
        const isValid = allowedTypes.test(file.mimetype) && allowedTypes.test(extname(file.originalname).toLowerCase());
        if (isValid) callback(null, true);
        else callback(new BadRequestException('Only image files are allowed!'), false);
      },
    }),
  )
  async update(@Param('id') id: string, @Body() data: any, @UploadedFile() file: any) {
    try {
      if (file) {
        const uploadDir = join(process.cwd(), 'uploads/sosialmedia');
        const filepath = join(uploadDir, file.filename);
        const tempPath = join(uploadDir, 'tmp-' + file.filename);
        const ext = extname(file.filename).toLowerCase();

        let image = sharp(filepath);
        if (ext === '.jpg' || ext === '.jpeg') image = image.jpeg({ quality: 70 });
        if (ext === '.png') image = image.png({ compressionLevel: 8 });
        if (ext === '.webp') image = image.webp({ quality: 70 });

        await image.toFile(tempPath);
        renameSync(tempPath, filepath);

        data.iconsosialmedia = file.filename;
      }

      return await this.service.update(+id, data);
    } catch (error: any) {
      throw new BadRequestException('Failed to update sosialmedia data: ' + error.message);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.service.remove(+id);
    } catch (error: any) {
      throw new BadRequestException('Failed to remove sosialmedia data: ' + error.message);
    }
  }
}
