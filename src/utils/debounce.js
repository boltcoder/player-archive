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