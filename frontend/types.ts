
export interface Email {
  id: string;
  sender: string;
  subject: string;
  content: string;
  timestamp: string;
  isRead: boolean;
}

export type ViewState = 'landing' | 'inbox';
