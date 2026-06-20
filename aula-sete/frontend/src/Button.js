
import styled from 'styled-components';
import { loadPacotes } from './stub.js';

const InnerButton = styled.button`
  padding: 12px 30px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

function Button(props) {
  const { setData } = props;
  const onClick = async () => {
    const data = await loadPacotes();
    setData(data)
  }

  return (
      <InnerButton onClick={onClick}>Carregar</InnerButton>
  );
}

export default Button;