import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  let existingContacts = await readContacts();

  for (let i = 1; i <= number; i++) {
    let newContact = createFakeContact();
    existingContacts.push(newContact);
  }
  try {
    await writeContacts(existingContacts);
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);
