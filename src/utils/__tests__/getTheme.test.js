import getTheme from '../getTheme';

describe('GetTheme Util',()=> {
  
  it('Expect theme to return palette based on themeType argument', ()=> {
    const theme = getTheme({themeType: 'light'});
    expect(theme.palette.type).toBe('light');
  });
  it('Expect theme to return flexboxes', ()=> {
    const theme = getTheme({themeType: 'light'});
    expect(theme.flexboxes).toMatchObject(
      { 
        horizontallyVerticallyCentered:{},
        verticallyCentered:{},
        horizontallyCentered: {},
      }
    );
  });
  
  
})