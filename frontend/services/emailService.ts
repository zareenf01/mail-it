
import { Email } from '../types';

const SENDER_POOL = [
  'support@amazon.com',
  'hello@netflix.com',
  'billing@cloudflare.com',
  'security@google.com',
  'no-reply@github.com',
  'newsletter@wired.com',
  'admin@testingsite.io',
];

const SUBJECT_POOL = [
  'Verify your email address',
  'Your subscription is active',
  'Account login from new device',
  'Exclusive offer for you',
  'Your temporary password',
  'New message in your inbox',
  'Testing your mail server integration',
];

const CONTENT_POOL = [
  'Welcome to the platform. Please click the link below to verify your account.',
  'Your order #12345 has been processed. You can track your shipment here.',
  'We noticed a login from a new IP address: 192.168.1.1. If this was not you, please contact support.',
  'Thanks for signing up for our newsletter. Stay tuned for more updates!',
  'Your OTP is: 982341. Do not share this with anyone.',
];

export const generateEmailAddress = (): string => {
  const randomStr = Math.random().toString(36).substring(2, 10);
  return `${randomStr}@mailit.temp`;
};

export const generateMockEmail = (): Email => {
  const now = new Date();
  return {
    id: Math.random().toString(36).substring(2, 9),
    sender: SENDER_POOL[Math.floor(Math.random() * SENDER_POOL.length)],
    subject: SUBJECT_POOL[Math.floor(Math.random() * SUBJECT_POOL.length)],
    content: CONTENT_POOL[Math.floor(Math.random() * CONTENT_POOL.length)],
    timestamp: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    isRead: false,
  };
};
