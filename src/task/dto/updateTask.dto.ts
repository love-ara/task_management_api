import { IsString, MaxLength, IsOptional, IsDateString, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto {
  @ApiProperty({
    description: 'The updated title of the task',
    example: 'Revised Task Title',
    required: false,
  })

  @IsString()
  @MaxLength(100)
  @IsOptional()
  title?: string;

  @ApiProperty({
    description: 'The updated description of the task',
    example: 'Revised task description with additional details',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    description: 'Updated start date of the task',
    example: '2025-03-02T10:00:00Z',
    required: false,
  })
  @IsDateString()
  @IsOptional()
  startDate?: string;

  @ApiProperty({
    description: 'Updated end date of the task',
    example: '2025-03-06T17:00:00Z',
    required: false,
  })
  @IsDateString()
  @IsOptional()
  endDate?: string;

  @ApiProperty({
    description: 'Whether the task is completed',
    example: true,
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  isCompleted?: boolean;
}