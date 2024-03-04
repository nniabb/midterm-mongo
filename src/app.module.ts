import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpenseModule } from './expense/expense.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://niania:nia12345@cluster0.31mpgxd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    ExpenseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
