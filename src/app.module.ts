import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { KnowledgeModule } from './knowledge/knowledge.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/',
    }),
    ConfigModule,
    KnowledgeModule,
  ],
})
export class AppModule {}
