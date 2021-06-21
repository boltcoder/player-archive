/**
 * Debounces supplied function to batch run after ts milliseconds.
 * @param {Function} fn 
 * @param {Number} ts 
 * @returns Function
 */
const debounce = (fn,ts) => {
  let timer = null;
  return (...args)=>{
    clearTimeout(timer)
    timer = setTimeout(()=>{
      fn.apply(this,args);
    },ts);
  }
}
export default debounce;