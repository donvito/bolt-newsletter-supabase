import { pgTable, text, integer } from 'drizzle-orm/pg-core';

export const participants = pgTable('participants', {
  name: text('name'),
  age: integer('age')
});