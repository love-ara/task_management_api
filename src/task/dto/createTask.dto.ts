import { IsNotEmpty, IsString, MaxLength, IsOptional, IsDateString, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    description: 'The title of the task',
    example: 'Complete task management API Project',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  title: string;

  @ApiProperty({
    description: 'Detailed description of the task',
    example: 'Finish the task management API with all required endpoints',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'Start date of the task',
    example: '2025-03-01T09:00:00Z',
    required: false,
  })
  @IsDateString()
  @IsOptional()
  startDate?: string;

  @ApiProperty({
    description: 'End date of the task',
    example: '2025-03-05T18:00:00Z',
    required: false,
  })
  @IsDateString()
  @IsOptional()
  endDate?: string;

  @ApiProperty({
    description: 'Whether the task is completed',
    example: false,
    default: false,
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  isCompleted?: boolean;
}