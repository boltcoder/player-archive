import React from 'react';
import CardWithStats from './index.jsx';
import { MuiThemeProvider } from '@material-ui/core/styles';
import getTheme from 'appUtils/getTheme';
import renderer from 'react-test-renderer';
import { render, fireEvent} from '@testing-library/react';

const ThemeWrappedCardWithStats = (props) => <MuiThemeProvider theme={getTheme({themeType: "light"})}><CardWithStats {...props} /></MuiThemeProvider>;


describe("Testing CardWithStats", ()=> {

  it("Variant should render correct tags",()=>{
    const htmlTree = renderer.create(<ThemeWrappedCardWithStats title="test1" subtitle="test2" stats={[{label:"Age",value:12}] } />).toJSON;
    expect(htmlTree).toMatchSnapshot();


  })

  

})