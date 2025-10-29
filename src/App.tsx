import { useMemo, useState } from 'react';
import FormVagas from './components/FormVagas';
import ListaVagas from './components/ListaVagas';
import dados from './data/vagas.json';
import { Vaga } from './types/vaga';
import styled from 'styled-components';

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: linear-gradient(to bottom, rgba(15,23,42,0.85), rgba(15,23,42,0.65));
  backdrop-filter: blur(6px);
  border-bottom: 1px solid rgba(255,255,255,0.06);
`;

const Wrap = styled.div.attrs({ className: 'container' })`
  display: grid;
  gap: 6px;
`;

const Title = styled.h1`
  letter-spacing: -0.02em;
`;

const Main = styled.main.attrs({ className: 'container' })`
  display: grid;
  gap: 24px;
`;

export default function App() {
  const [termo, setTermo] = useState<string>('');
  const vagas = useMemo<Vaga[]>(() => dados as unknown as Vaga[], []);

  return (
    <>
      <Header>
        <Wrap>
          <Title>Lista de Vagas</Title>
          <p className="lead">Pesquise por stack, nível, localização, modalidade…</p>
          <FormVagas aoPesquisar={setTermo} />
        </Wrap>
      </Header>

      <Main>
        <ListaVagas vagas={vagas} termo={termo} />
      </Main>
    </>
  );
}