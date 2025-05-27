import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  let allContacts = await readContacts();
  allContacts.pop();
  return await writeContacts(allContacts);
};

removeLastContact();
