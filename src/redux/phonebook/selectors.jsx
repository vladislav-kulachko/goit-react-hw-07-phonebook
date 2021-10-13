export const getContacts = state => state.contacts.items;
export const getFilterValue = state => state.contacts.filter;
export const getFilteredContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilterValue(state).toLowerCase();
  return contacts.filter(({name}) => name.toLowerCase().includes(filter));
};
