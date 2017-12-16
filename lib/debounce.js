/**
 * 
 * @param {function} Function to be called
 * @param {number} Amount of time when to be called (MS)
 * 
 * @example
 * const add = (4, 6);
 * debounce(add, 1000);
 * // => after 1 second => 10
 */

const debounce = (func, wait) => {
  let timeout;
  return () => {
    const args = arguments;
    const later = () => {
      timeout = null;
      func.apply(args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};