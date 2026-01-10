
export interface Email {
  id: string;
  sender: string;
  subject: string;
  body: string;
  timestamp?: string;
  received_at: string;
  is_read: boolean;
}

export type ViewState = 'landing' | 'inbox';
