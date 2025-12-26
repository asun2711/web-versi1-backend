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
import { extname } from 'path';
import { DokterService } from './dokter.service';

@Controller('api/datadokter')
export class DokterController {
  constructor(private readonly service: DokterService) {}

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
    FileInterceptor('gambardokter', {
      storage: diskStorage({
       destination: './uploads/dokter', // Pastikan folder ini ada
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          callback(null, `${uniqueSuffix}${ext}`);
        },
      }),
      fileFilter: (req, file, callback) => {
        const allowedTypes = /jpg|jpeg|png|gif/;
        const mimetype = allowedTypes.test(file.mimetype);
        const extnameCheck = allowedTypes.test(extname(file.originalname).toLowerCase());

        if (mimetype && extnameCheck) {
          callback(null, true);
        } else {
          callback(new BadRequestException('Only image files are allowed!'), false);
        }
      },
    }),
  )
  async create(@Body() data: any, @UploadedFile() file: any) {
    try {
      if (file) {
        data.gambardokter = file.filename;
      }
      return await this.service.create(data);
    } catch (error) {
      throw new BadRequestException('Failed to save dokter data: ' + error.message);
    }
  }

  @Put(':id')
  @UseInterceptors(
    FileInterceptor('gambardokter', {
      storage: diskStorage({
       destination: './uploads/dokter', // Pastikan folder ini ada
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          callback(null, `${uniqueSuffix}${ext}`);
        },
      }),
      fileFilter: (req, file, callback) => {
        const allowedTypes = /jpg|jpeg|png|gif/;
        const mimetype = allowedTypes.test(file.mimetype);
        const extnameCheck = allowedTypes.test(extname(file.originalname).toLowerCase());

        if (mimetype && extnameCheck) {
          callback(null, true);
        } else {
          callback(new BadRequestException('Only image files are allowed!'), false);
        }
      },
    }),
  )
  async update(@Param('id') id: string, @Body() data: any, @UploadedFile() file: any) {
    try {
      if (file) {
        data.gambardokter = file.filename;
      }
      return await this.service.update(+id, data);
    } catch (error) {
      throw new BadRequestException('Failed to update dokter data: ' + error.message);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.service.remove(+id);
    } catch (error) {
      throw new BadRequestException('Failed to remove dokter data: ' + error.message);
    }
  }
}
