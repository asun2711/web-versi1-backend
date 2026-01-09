import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseInterceptors,
  UploadedFiles,
  BadRequestException,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join, extname } from 'path';
import { existsSync, mkdirSync, renameSync } from 'fs';
import { PerusahaanService } from './perusahaan.service';
import sharp from 'sharp';

@Controller('api/dataperusahaan')
export class PerusahaanController {
  constructor(private readonly service: PerusahaanService) {}

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
    FileFieldsInterceptor([
      { name: 'logoperusahaan', maxCount: 1 },
      { name: 'iconperusahaan', maxCount: 1 }
    ], {
      storage: diskStorage({
        destination: (req, file, callback) => {
          const uploadDir = join(process.cwd(), 'uploads/perusahaan');
          if (!existsSync(uploadDir)) mkdirSync(uploadDir, { recursive: true });
          callback(null, uploadDir);
        },
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          callback(null, `${uniqueSuffix}${ext}`);
        },
      }),
      fileFilter: (req, file, callback) => {
        const allowedTypes = /jpg|jpeg|png|gif|svg/;
        const mimetype = allowedTypes.test(file.mimetype);
        const extnameCheck = allowedTypes.test(extname(file.originalname).toLowerCase());
        if (mimetype && extnameCheck) callback(null, true);
        else callback(new BadRequestException('Only image files (jpg, jpeg, png, gif, svg) are allowed!'), false);
      },
    }),
  )
  async create(@Body() data: any, @UploadedFiles() files: any) {
    try {
      const uploadDir = join(process.cwd(), 'uploads/perusahaan');
      
      // Handle logo perusahaan
      if (files && files.logoperusahaan && files.logoperusahaan[0]) {
        const file = files.logoperusahaan[0];
        const filepath = join(uploadDir, file.filename);
        const tempPath = join(uploadDir, 'tmp-' + file.filename);
        const ext = extname(file.filename).toLowerCase();

        let image = sharp(filepath);
        if (ext === '.jpg' || ext === '.jpeg') image = image.jpeg({ quality: 70 });
        if (ext === '.png') image = image.png({ compressionLevel: 8 });
        if (ext === '.webp') image = image.webp({ quality: 70 });

        await image.toFile(tempPath);
        renameSync(tempPath, filepath);

        data.logoperusahaan = file.filename;
      }

      // Handle icon perusahaan
      if (files && files.iconperusahaan && files.iconperusahaan[0]) {
        const file = files.iconperusahaan[0];
        const ext = extname(file.filename).toLowerCase();
        
        // Jika icon adalah SVG, simpan langsung tanpa kompres
        if (file.mimetype === 'image/svg+xml' || ext === '.svg') {
          data.iconperusahaan = file.filename;
        } else {
          // Jika bukan SVG, kompres seperti logo
          const filepath = join(uploadDir, file.filename);
          const tempPath = join(uploadDir, 'tmp-icon-' + file.filename);

          let image = sharp(filepath);
          if (ext === '.jpg' || ext === '.jpeg') image = image.jpeg({ quality: 70 });
          if (ext === '.png') image = image.png({ compressionLevel: 8 });
          if (ext === '.webp') image = image.webp({ quality: 70 });

          await image.toFile(tempPath);
          renameSync(tempPath, filepath);

          data.iconperusahaan = file.filename;
        }
      }

      return await this.service.create(data);
    } catch (error) {
      console.error('CREATE ERROR:', error);
      throw new BadRequestException('Failed to save perusahaan data: ' + error.message);
    }
  }

  @Put(':id')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'logoperusahaan', maxCount: 1 },
      { name: 'iconperusahaan', maxCount: 1 }
    ], {
      storage: diskStorage({
        destination: (req, file, callback) => {
          const uploadDir = join(process.cwd(), 'uploads/perusahaan');
          if (!existsSync(uploadDir)) mkdirSync(uploadDir, { recursive: true });
          callback(null, uploadDir);
        },
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          callback(null, `${uniqueSuffix}${ext}`);
        },
      }),
      fileFilter: (req, file, callback) => {
        const allowedTypes = /jpg|jpeg|png|gif|svg/;
        const mimetype = allowedTypes.test(file.mimetype);
        const extnameCheck = allowedTypes.test(extname(file.originalname).toLowerCase());
        if (mimetype && extnameCheck) callback(null, true);
        else callback(new BadRequestException('Only image files (jpg, jpeg, png, gif, svg) are allowed!'), false);
      },
    }),
  )
  async update(@Param('id') id: string, @Body() data: any, @UploadedFiles() files: any) {
    try {
      const uploadDir = join(process.cwd(), 'uploads/perusahaan');
      
      // Handle logo perusahaan
      if (files && files.logoperusahaan && files.logoperusahaan[0]) {
        const file = files.logoperusahaan[0];
        const filepath = join(uploadDir, file.filename);
        const tempPath = join(uploadDir, 'tmp-' + file.filename);
        const ext = extname(file.filename).toLowerCase();

        let image = sharp(filepath);
        if (ext === '.jpg' || ext === '.jpeg') image = image.jpeg({ quality: 70 });
        if (ext === '.png') image = image.png({ compressionLevel: 8 });
        if (ext === '.webp') image = image.webp({ quality: 70 });

        await image.toFile(tempPath);
        renameSync(tempPath, filepath);

        data.logoperusahaan = file.filename;
      }

      // Handle icon perusahaan
      if (files && files.iconperusahaan && files.iconperusahaan[0]) {
        const file = files.iconperusahaan[0];
        const ext = extname(file.filename).toLowerCase();
        
        // Jika icon adalah SVG, simpan langsung tanpa kompres
        if (file.mimetype === 'image/svg+xml' || ext === '.svg') {
          data.iconperusahaan = file.filename;
        } else {
          // Jika bukan SVG, kompres seperti logo
          const filepath = join(uploadDir, file.filename);
          const tempPath = join(uploadDir, 'tmp-icon-' + file.filename);

          let image = sharp(filepath);
          if (ext === '.jpg' || ext === '.jpeg') image = image.jpeg({ quality: 70 });
          if (ext === '.png') image = image.png({ compressionLevel: 8 });
          if (ext === '.webp') image = image.webp({ quality: 70 });

          await image.toFile(tempPath);
          renameSync(tempPath, filepath);

          data.iconperusahaan = file.filename;
        }
      }

      return await this.service.update(+id, data);
    } catch (error) {
      console.error('UPDATE ERROR:', error);
      throw new BadRequestException('Failed to update perusahaan data: ' + error.message);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.service.remove(+id);
    } catch (error) {
      console.error('DELETE ERROR:', error);
      throw new BadRequestException('Failed to remove perusahaan data: ' + error.message);
    }
  }
}