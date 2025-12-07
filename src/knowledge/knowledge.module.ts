import { Module } from '@nestjs/common';
import { KnowledgeController } from './knowledge.controller';
import { KnowledgeService } from './knowledge.service';
import { DatabaseService } from './database.service';
import { EmbeddingService } from './embedding.service';
import { GroqService } from './groq.service';

@Module({
  controllers: [KnowledgeController],
  providers: [KnowledgeService, DatabaseService, EmbeddingService, GroqService],
})
export class KnowledgeModule {}
