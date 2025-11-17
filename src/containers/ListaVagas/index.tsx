import { useState } from 'react'
import FormVagas from '../../components/FormVagas'
import Vaga from '../../components/Vaga'

import { Lista } from './styles'

type VagaTipo = {
  id: string
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const vagas: VagaTipo[] = [
  {
    id: '1',
    titulo: 'Desenvolvedor front-end',
    localizacao: 'remoto',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 3000,
    salarioMax: 4500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: '2',
    titulo: 'Desenvolvedor NodeJS',
    localizacao: 'remoto',
    nivel: 'pleno',
    modalidade: 'pj',
    salarioMin: 5000,
    salarioMax: 8000,
    requisitos: ['NodeJS', 'Express', 'MongoDB']
  },
  {
    id: '3',
    titulo: 'UX Designer',
    localizacao: 'São Paulo/SP',
    nivel: 'pleno',
    modalidade: 'clt',
    salarioMin: 4000,
    salarioMax: 6000,
    requisitos: ['Figma', 'Prototipação', 'Pesquisa com usuários']
  },
  {
    id: '4',
    titulo: 'Desenvolvedor fullstack',
    localizacao: 'remoto',
    nivel: 'senior',
    modalidade: 'pj',
    salarioMin: 8000,
    salarioMax: 12000,
    requisitos: ['React', 'NodeJS', 'TypeScript']
  },
  {
    id: '5',
    titulo: 'Desenvolvedor front-end',
    localizacao: 'remoto',
    nivel: 'senior',
    modalidade: 'clt',
    salarioMin: 7000,
    salarioMax: 8000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  },
  {
    id: '6',
    titulo: 'Desenvolvedor front-end',
    localizacao: 'Rio de Janeiro/RJ',
    nivel: 'pleno',
    modalidade: 'clt',
    salarioMin: 5000,
    salarioMax: 7000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'React']
  },
  {
    id: '7',
    titulo: 'Desenvolvedor front-end',
    localizacao: 'São Paulo/SP',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 4000,
    salarioMax: 5000,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  }
]

const ListaVagas = () => {
  const [filtro, setFiltro] = useState<string>('')

  const vagasFiltradas = vagas.filter(
    (x) => x.titulo.toLocaleLowerCase().search(filtro) >= 0
  )

  return (
    <div>
      <FormVagas aoPesquisar={(termo: string) => setFiltro(termo)} />
      <Lista>
        {vagasFiltradas.map((vag) => (
          <Vaga
            key={vag.id}
            titulo={vag.titulo}
            localizacao={vag.localizacao}
            nivel={vag.nivel}
            modalidade={vag.modalidade}
            salarioMin={vag.salarioMin}
            salarioMax={vag.salarioMax}
            requisitos={vag.requisitos}
          />
        ))}
      </Lista>
    </div>
  )
}

export default ListaVagas
