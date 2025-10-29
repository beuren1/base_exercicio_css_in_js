import { Vaga } from '../../types/vaga';
import VagaCard from '../Vaga';
import styled from 'styled-components';

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 18px;
`;

type Props = { vagas: Vaga[]; termo: string };

export default function ListaVagas({ vagas, termo }: Props) {
  const t = termo.toLowerCase();

  const filtradas = vagas.filter((v) => {
    const alvo = `${v.titulo} ${v.localizacao} ${v.nivel} ${v.modalidade} ${v.requisitos.join(' ')}`.toLowerCase();
    return alvo.includes(t);
  });

  return (
    <Grid>
      {filtradas.map((vaga) => (
        <VagaCard key={vaga.id} vaga={vaga} />
      ))}
    </Grid>
  );
}