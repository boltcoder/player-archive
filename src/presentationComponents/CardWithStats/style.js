export default (theme)=>({

  container: {
    position: 'relative',
    padding: theme.spacing(2),
    maxWidth: 400,
    height: 500,
    backgroundColor: (console.log(theme),theme.palette.background.paper),
    boxShadow: theme.shadows[1],
    ...theme.flexboxes.horizontallyCentered,
    [theme.breakpoints.between('xs', 'sm')]: {
      flexDirection: "column",  
    }
    

  },
  loading: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: 0,
    width: '100%',
    ...theme.flexboxes.horizontallyCentered,

  }
  
  
});