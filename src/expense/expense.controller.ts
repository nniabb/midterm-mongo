import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { Expense } from './entities/expense.entity';
import { ExpenseIdParamsDto } from './dto/expenseid.dto';


@Controller('expense')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Post()
  async create(@Body() dto: CreateExpenseDto): Promise<Expense> {
    return this.expenseService.create(dto);
  }

  @Get(':id')
  async findOne(@Param() params: ExpenseIdParamsDto): Promise<Expense> {
    const expense = await this.expenseService.findOne(params.id)
    if (!expense) throw new NotFoundException(`ID ${params.id} not found`)
    return expense;
  }

  @Get()
  async findAll(): Promise<Expense[]> {
    return this.expenseService.findAll();
  }

  @Patch(':id')
  async update(@Param() params: ExpenseIdParamsDto, @Body() dto: UpdateExpenseDto): Promise<Expense> {
    const updatedExpense = await this.expenseService.update(params.id, dto)
    if (!updatedExpense) throw new NotFoundException(`ID ${params.id} not found`)
    return updatedExpense;
  }

  @Delete(':id')
  async remove(@Param() params: ExpenseIdParamsDto): Promise<void> {
    const deleted = await this.expenseService.remove(params.id)
    if (!deleted) throw new NotFoundException(`ID ${params.id} not found`)
  }
}
