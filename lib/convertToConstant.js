const convertToConstant = (str) => {
  let s = str.slice(0);
  if (s.indexOf('-') > -1) s = s.toUpperCase().split('-').join('_');
  else s = s.split(/(?=[A-Z])/).join('_').toUpperCase();

  return s;
};

export default convertToConstant;