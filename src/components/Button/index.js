import * as C from './styles.js'

const Button = ({label, onClick}) => {
    return (
        <C.ButtonContainer onClick={onClick}>
            {label}
        </C.ButtonContainer>
    );
}
  
export default Button;
  