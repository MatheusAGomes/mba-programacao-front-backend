import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button.js';
import Pacotes from './Pacotes.js';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
`;

const Header = styled.h1`
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5em;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
`;

const Controls = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

function App() {
  const [dados, setData] = useState([]);

  return (
    <Container>
      <Header>Pacotes de Viagem</Header>
      <Controls>
        <Button setData={setData}/>
      </Controls>
      <Pacotes dados={dados}/>
    </Container>
  );
}

export default App;