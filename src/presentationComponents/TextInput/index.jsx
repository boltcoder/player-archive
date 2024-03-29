
import {
  TextField
} from '@material-ui/core';
import PropTypes from 'prop-types'
import noop from 'appUtils/noop';
import debounceUtil from 'appUtils/debounce';

const TextInput = (props)=> {
  const {
    onChange = noop,
    debounce = false,
    debounceOptions: {
      time = 100,
    } = {},
    ...restProps
  } = props;

  let onTextFieldChange = (evt) => {
    const newValue = evt.target.value;
    onChange(newValue);
  }
  if(debounce){
    onTextFieldChange = debounceUtil(onTextFieldChange,time);
  }
  return <TextField onChange={onTextFieldChange} {...restProps} inputProps={{role:"input"}} />;

}

TextInput.displayName = 'TextInput';
TextInput.propTypes = {
  onChange: PropTypes.func,
  debounce: PropTypes.bool,
  debounceOptions: PropTypes.objectOf(PropTypes.shape({
    time: PropTypes.number,
  })),
  
}

export default TextInput;