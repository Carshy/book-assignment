/* eslint-disable arrow-body-style */
export const formatString = (string: string) => {
  return string.toLowerCase().replace(/\s/g, '_');
};

export const toSnakeCase = (string: string) =>
  string.toLowerCase().replace(/\s/g, '_');
 
export const isValidString = (string) => string !== null && /[A-Za-z\d]/g.test(string);
