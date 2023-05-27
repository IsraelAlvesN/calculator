import * as C from './styles'

const Button = ({label, onClick}) => {
    return (
        <C.ButtonContainer onClick={onClick} type="button">
            {label}
        </C.ButtonContainer>
    );
}
  
export default Button;
  