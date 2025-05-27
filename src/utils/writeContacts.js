import { PATH_DB } from '../constants/contacts.js';
import { writeFile } from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  const data = JSON.stringify(updatedContacts, null, 2);
  try {
    await writeFile(PATH_DB, data, 'utf8');
  } catch (error) {
    console.error('Помилка читання файлу: ', error);
  }
};
