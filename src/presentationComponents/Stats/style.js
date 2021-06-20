export default (theme)=>({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2,auto)',
    width:'100%',
    padding: theme.spacing(2),
  },
  value: {
    justifySelf: "end",
  },
  label: {
    justifySelf: "start",
  }
});