import * as C from './styles.js'

const Input = ({value}) => {
    return (
        <C.InputContainer>
            <div>
                <input value={value} disabled/>
            </div>
        </C.InputContainer>
    );
}
  
export default Input;