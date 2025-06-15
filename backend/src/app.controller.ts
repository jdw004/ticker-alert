import { Controller, Get } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Controller()
export class AppController {
  constructor(private dataSource: DataSource) {}

  @Get()
  async dbCheck() {
    try {
      await this.dataSource.query('SELECT 1');
      return { status: 'connected' };
    } catch (err) {
      console.error('DB connection failed:', err);
      return { status: 'failed', error: err.message };
    }
  }
}
