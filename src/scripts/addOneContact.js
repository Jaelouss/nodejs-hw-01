import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  let existingContacts = await readContacts();
  let newContact = createFakeContact();
  existingContacts.push(newContact);
  try {
    await writeContacts(existingContacts);
  } catch (error) {
    console.log(error);
  }
};

addOneContact();
