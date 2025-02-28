import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/createTask.dto';
import { UpdateTaskDto } from './dto/updateTask.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async create(createTaskDto : CreateTaskDto): Promise<Task> {
    const task = new Task();
    task.title = createTaskDto.title;
    task.description = createTaskDto.description || null;

    if (createTaskDto.startDate) {
      task.startDate = new Date(createTaskDto.startDate);
    }

    if (createTaskDto.endDate) {
      task.endDate = new Date(createTaskDto.endDate);
    }

    task.isCompleted = createTaskDto.isCompleted ?? false;


    return this.taskRepository.save(task);
  }

  async findOne(id: string): Promise<Task> {
    const task = await this.taskRepository.findOne({ where: { id } });
    if (!task) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
    return task;
  }
  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.findOne(id);

    if (updateTaskDto.title !== undefined) {
      task.title = updateTaskDto.title;
    }

    if (updateTaskDto.description !== undefined) {
      task.description = updateTaskDto.description;
    }

    if (updateTaskDto.startDate !== undefined) {
      task.startDate = updateTaskDto.startDate ? new Date(updateTaskDto.startDate) : null;
    }

    if (updateTaskDto.endDate !== undefined) {
      task.endDate = updateTaskDto.endDate ? new Date(updateTaskDto.endDate) : null;
    }

    if (updateTaskDto.isCompleted !== undefined) {
      task.isCompleted = updateTaskDto.isCompleted;
    }
    return this.taskRepository.save(task);
  }

  async remove(id: string): Promise<void> {
    const result = await this.taskRepository.delete(id);
    if(result.affected === 0){
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }

  async markAsCompleted(id: string): Promise<Task> {
    const task = await this.findOne(id);
    task.isCompleted = true;
    return this.taskRepository.save(task);
  }


}


