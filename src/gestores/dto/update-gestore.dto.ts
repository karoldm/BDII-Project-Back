import { PartialType } from '@nestjs/mapped-types';
import { CreateGestoreDto } from './create-gestore.dto';

export class UpdateGestoreDto extends PartialType(CreateGestoreDto) {}
