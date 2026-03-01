
export interface Email {
  id: number;
  sender: string;
  subject: string;
  body: string;
  timestamp?: string;
  received_at: string;
  is_read: boolean;
}

export type ViewState = 'landing' | 'inbox';
