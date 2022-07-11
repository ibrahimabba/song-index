// Search a list of items across the desired search fields
export const searchItems = (list = [], query = '', searchFields = []) => {
  return list.filter((el) => {
    let isMatch = false;
    searchFields.forEach((field) => {
      if (el[field].toLowerCase().indexOf(query.toLowerCase()) !== -1) {
        isMatch = true;
        return
      }
    })
    return isMatch;
  });
};