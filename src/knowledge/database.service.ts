import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Pool } from 'pg';
import { ConfigService } from '../config/config.service';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private pool: Pool;

  constructor(private config: ConfigService) {}

  async onModuleInit() {
    this.pool = new Pool({
      connectionString: this.config.databaseUrl,
      max: 10,
    });
    
    try {
      await this.pool.query('SELECT 1');
      console.log('✅ PostgreSQL conectado');
    } catch (error) {
      console.error('❌ Erro PostgreSQL:', error.message);
      throw error;
    }
  }

  async onModuleDestroy() {
    await this.pool.end();
  }

  async query<T = any>(text: string, params?: any[]): Promise<T[]> {
    const result = await this.pool.query(text, params);
    return result.rows;
  }

  async queryOne<T = any>(text: string, params?: any[]): Promise<T | null> {
    const result = await this.pool.query(text, params);
    return result.rows[0] || null;
  }
}
