
import {
  TextField
} from '@material-ui/core';
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
  return <TextField onChange={onTextFieldChange} {...restProps} />;

}

TextInput.displayName = 'TextInput';
export default TextInput;