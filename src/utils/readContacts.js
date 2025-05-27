import { PATH_DB } from '../constants/contacts.js';
import { readFile } from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const data = await readFile(PATH_DB, 'utf8');
    if (!data) return [];
    const parsedData = JSON.parse(data);
    if (!Array.isArray(parsedData)) return [];
    return parsedData;
  } catch (error) {
    console.error('Помилка читання файлу: ', error);
    return [];
  }
};
