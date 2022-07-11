export const searchItems= (list = [], query = '', searchField= '') => {
  return list.filter((el) => el[searchField].toLowerCase().indexOf(query.toLowerCase()) !== -1);
};