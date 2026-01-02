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
import { BeritaService } from './berita.service';

@Controller('api/databerita')
export class BeritaController {
  constructor(private readonly service: BeritaService) {}

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
    FileInterceptor('gambarberita', {
      storage: diskStorage({
        destination: join(process.cwd(), 'uploads/berita'),
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
        data.gambarberita = file.filename;
      }
      return await this.service.create(data);
    } catch (error) {
      throw new BadRequestException('Failed to save berita data: ' + error.message);
    }
  }

  @Put(':id')
  @UseInterceptors(
    FileInterceptor('gambarberita', {
      storage: diskStorage({
        destination: join(process.cwd(), 'uploads/berita'),
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
        data.gambarberita = file.filename;
      }
      return await this.service.update(+id, data);
    } catch (error) {
      throw new BadRequestException('Failed to update berita data: ' + error.message);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.service.remove(+id);
    } catch (error) {
      throw new BadRequestException('Failed to remove berita data: ' + error.message);
    }
  }
}
