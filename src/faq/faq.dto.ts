export interface FaqEntity {
    id: number;
    question: string;
    answer: string;
    category: string | null;
    tags: string[] | null;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
  }
  
  export interface SearchResult {
    id: number;
    question: string;
    answer: string;
    category: string | null;
    tags: string[] | null;
    similarity: number;
  }
  
  export interface ChatResponse {
    answer: string;
    sources: SearchResult[];
    sessionId: string;
  }