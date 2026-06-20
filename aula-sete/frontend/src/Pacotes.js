
import styled from 'styled-components';
import Tabela from './Tabela.js';

const Message = styled.p`
  text-align: center;
  color: #2c3e50;
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.8);
  border-left: 4px solid #667eea;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

function Pacotes(props) {
  const { dados } = props;

  if (dados.length === 0) {
    return (<></>);
  } else {
    return (
      <>
        <Tabela itens={dados}></Tabela>
        <Message>{dados.length} pacotes carregados</Message>
      </>
    );
  }
}

export default Pacotes;