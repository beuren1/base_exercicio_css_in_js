import { FormEvent, useState } from 'react';
import * as S from './styles';

type Props = { aoPesquisar: (termo: string) => void };

export default function FormVagas({ aoPesquisar }: Props) {
  const [termo, setTermo] = useState<string>('');

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    aoPesquisar(termo.trim());
  }

  return (
    <S.Search onSubmit={onSubmit} role="search" aria-label="Pesquisar vagas">
      <S.Input
        placeholder="Front-end, full stack, node, design..."
        value={termo}
        onChange={(e) => setTermo(e.currentTarget.value)}
      />
      <S.Button type="submit">Pesquisar</S.Button>
    </S.Search>
  );
}