export default (theme)=>({
  weight: ({weight})=> {
    switch(weight) {
      case 'regular': return {
        fontWeight: 400,
      };break;
      case 'medium': return {
        fontWeight: 600,
      };break;
      case 'bold': return {
        fontWeight: 700,
      };break;
    }
  }
});