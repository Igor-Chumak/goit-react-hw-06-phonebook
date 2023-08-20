import { loadFromLocalStorage } from 'utilities/localStorage';
import { INITIAL_CONTACTS } from 'data/initial';

export const localStorageKey = 'phonebook';

const localStorage_contacts = loadFromLocalStorage(localStorageKey) ?? [];
// console.log('localStorage_contacts :>> ', localStorage_contacts);
export const initial_contacts = !localStorage_contacts.length
  ? [...INITIAL_CONTACTS]
  : [...localStorage_contacts];
// console.log('initial_contacts :>> ', initial_contacts);
