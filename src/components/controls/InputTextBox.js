// import { ReactPropTypes } from "react";
import { UncontrolledTooltip} from "reactstrap";
import PropTypes from 'prop-types';

const InputTextBox = (props) =>{
    const onChangeText = (event) =>{
        if (props.onChangeEvent){
            props.onChangeEvent(event);
        }
    }
    
    const isValidate = () =>{
        if(props.isNotValid && props.isRequired){
            return 'validation-error';
        }
        return null;
    }
    return (
        <>
         <input type={props.type} id={props.id} placeholder={props.placeHolder} name={props.name} onChange={(event) => onChangeText(event)} className={ `${props.css}${props.isValidate()}` }/>
         {props.isNotValid && props.isRequired && <UncontrolledTooltip placement="top" target={props.id}>{props.errorMessage}</UncontrolledTooltip>}
        </>
    )
}

InputTextBox.propTypes = {
    type:PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    regexp: PropTypes.string,
    onChangeEvent: PropTypes.func,
    placeHolder: PropTypes.string,
    // class: PropTypes.string.isRequired;
    name: PropTypes.string.isRequired,
    css: PropTypes.string,
    isRequired: PropTypes.bool,
    isNotValid: PropTypes.bool,
    errorMessage: PropTypes.string

}
export default InputTextBox;