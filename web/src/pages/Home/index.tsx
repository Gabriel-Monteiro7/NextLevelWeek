import React, { useState, useEffect } from 'react'
import {
  Container, Header, Contente, Main, NewPoint,
  IconNewPoint, Title, SearchPoint, IconSearchPoint,
  SearchPoints, ContainerOut, ContainerSearchPoints, Form,
  Input, ButtonSubmit, ContainerInput, Item, ContainerItems
} from './styles';
import logo from '../../assets/logo.svg'
import { schema, fields } from './data'
import axios from 'axios';
import history from '../../service/history'
interface InterfaceInput {
  placeHolder: string;
  label: string;
  name: string;
}
interface IBGEUFReponse {
  sigla: string
}
interface IBGECityReponse {
  nome: string
}
export default function Home() {
  const [search, setSearch] = useState(false);
  const [searchInput, setSearchInput] = useState<any>([[], []]);
  const [fieldInput, setFieldInput] = useState([{ value: '', change: false }, { value: '', change: false }]);
  function handleSubmit({ uf, city }: any, { resetForm }: any) {
    if (fieldInput[0].change && fieldInput[1].change) {
      history.push('/detailPoints', { uf, city });
      resetForm();
    }

  }
  useEffect(() => {
  }, [fieldInput])
  useEffect(() => {
    axios.get<IBGEUFReponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then((response) => {
      const ufInitials = response.data.map(uf => { return uf.sigla });
      setSearchInput([ufInitials, searchInput[1]])
    })
  }, []);
  useEffect(() => {
    if (fieldInput[0].value !== "")
      axios.get<IBGECityReponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${fieldInput[0].value}/municipios`).then((response) => {
        const cityInitials = response.data.map(city => { return city.nome });
        setSearchInput([searchInput[0], cityInitials]);
      })
  }, [fieldInput[0]]);
  return (
    <Container>
      {search && <SearchPoints ><ContainerOut title={"Clique para sair"} onClick={() => { setSearch(false) }} />
        <ContainerSearchPoints>
          <span>Pontos de coleta</span>
          <Form schema={schema} onSubmit={handleSubmit}>
            <ContainerInput >
              <Input
                maxLength={2}
                value={fieldInput[0].value}
                onChange={
                  (e: any) => setFieldInput([{ value: e.target.value.toUpperCase(), change: false }, fieldInput[1]])}
                name={fields[0].name}
                placeholder={fields[0].placeHolder}
              />
              {(fieldInput[0].value !== "" && fieldInput[0].change === false)
                &&
                <ContainerItems>
                  {searchInput[0].map((value: string, indice: any) => {
                    return (value.indexOf(fieldInput[0].value) === 0)
                      && <Item key={indice} onClick={() => { setFieldInput([{ value, change: true }, fieldInput[1]]) }}>
                        {fieldInput[0].value.toUpperCase()}<span>{value.slice(fieldInput[0].value.length, value.length)}</span></Item>
                  })}
                  <div />
                </ContainerItems>
              }
            </ContainerInput>
            <ContainerInput >
              <Input
                disabled={!fieldInput[0].change}
                maxLength={50}
                value={fieldInput[1].value}
                onChange={
                  (e: any) => setFieldInput([fieldInput[0], { value: e.target.value.toLowerCase(), change: false }])}
                name={fields[1].name}
                placeholder={fields[1].placeHolder}
              />
              {(fieldInput[1].value !== "" && fieldInput[1].change === false)
                &&
                <ContainerItems>
                  {searchInput[1].map((value: string, indice: any) => {
                    return (value.toLowerCase().indexOf(fieldInput[1].value) === 0)
                      && <Item key={indice} onClick={() => { setFieldInput([fieldInput[0], { value, change: true },]) }}>
                        {fieldInput[1].value}<span>
                          {value.toLowerCase().slice(fieldInput[1].value.length, value.length)}</span></Item>

                  })}
                  <div />
                </ContainerItems>
              }
            </ContainerInput>
            <ButtonSubmit type="submit">Buscar</ButtonSubmit>
          </Form>
        </ContainerSearchPoints>
      </SearchPoints>}
      <Contente>
        <Header> <img src={logo} alt='logo' /> <NewPoint to="createPoint"><IconNewPoint /><strong>Cadastre um novo ponto de coleta</strong></NewPoint></Header>
        <Main>
          <Title>Seu Marketplace <br /> de coleta de resíduos.</Title>
          <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</p>
          <SearchPoint onClick={() => { setSearch(true) }}><IconSearchPoint /><strong>Pesquisar pontos de coleta</strong></SearchPoint>
        </Main>
      </Contente>
    </Container>
  );
}
