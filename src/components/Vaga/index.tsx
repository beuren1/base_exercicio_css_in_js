import { Vaga } from '../../types/vaga';
import * as S from './styles';

type Props = { vaga: Vaga };

export default function VagaCard({ vaga }: Props) {
  const { titulo, localizacao, nivel, modalidade, salarioMin, salarioMax, requisitos } = vaga;

  const salarioFmt = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <S.Card>
      <S.Title>{titulo}</S.Title>
      <S.Meta>
        {localizacao} • {nivel} • {modalidade}
      </S.Meta>
      <S.Meta>
        Faixa: {salarioFmt.format(salarioMin)} – {salarioFmt.format(salarioMax)}
      </S.Meta>

      {requisitos?.length ? (
        <S.Tags aria-label="Requisitos da vaga">
          {requisitos.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </S.Tags>
      ) : null}
    </S.Card>
  );
}