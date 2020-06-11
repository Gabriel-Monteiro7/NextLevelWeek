import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg';
import { fields, schema } from './data';
import { toast } from 'react-toastify'
import {
  ButtonSubmit, Container, ContainerInput, Contente, Form,
  GoBack, Header, IconGoBack, Input, Label, Main, Title, ContainerMap,
  FlexBox, ListItems, CardItem, Select, Success, IconSuccess
} from './styles';
import { LeafletMouseEvent } from 'leaflet';
import history from '../../service/history'
import { Map, TileLayer, Marker } from 'react-leaflet';
import api from '../../service/api';
import axios from 'axios';

interface Item {
  id: number;
  title: string;
  image_url: string;
}
interface IBGEUFReponse {
  sigla: string
}
interface IBGECityReponse {
  nome: string
}
export default function CreatePoint() {
  const [items, setItems] = useState<Item[]>([])
  const [ufs, setUfs] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);
  const [selectedUf, setSelectedUf] = useState('');
  const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0, 0]);
  const [selectedItem, setSelectedItem] = useState<number[]>([]);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setSelectedPosition([latitude, longitude]);
    })
  }, []);

  useEffect(() => {
    axios.get<IBGEUFReponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then((response) => {
      const ufInitials = response.data.map(uf => { return { id: uf.sigla, title: uf.sigla } });
      setUfs(ufInitials);
    })
  }, []);
  useEffect(() => {
    if (selectedUf !== "")
      axios.get<IBGECityReponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then((response) => {
        const cityInitials = response.data.map(city => { return { id: city.nome, title: city.nome } });
        setCities(cityInitials);
      })
  }, [selectedUf]);
  useEffect(() => {
    api.get('items').then((response: any) => {
      setItems(response.data)
    });

  }, []);
  async function handleSubmit({ name, whatsapp, email, uf, city, road, number, district, }: any, { resetForm }: any) {
    if (selectedItem.length > 0) {
      const [latitude, longitude] = selectedPosition;
      const items = selectedItem;
      await api.post('points', { name, whatsapp, email, uf, city, items, latitude, longitude, road, number, district, });
      setSuccess(true);
      resetForm();
      toast.success("Ponto adicionado com sucesso");
    }

  }
  function handleSelectUf(e: any) {
    if (e.target.name === 'uf') {
      setSelectedUf(e.target.value)
    }

  }
  function handleSelectItem(id: number) {
    const alreadySelected = selectedItem.findIndex(item => item === id)
    if (alreadySelected === -1) {
      setSelectedItem([...selectedItem, id])
    }
    else {
      setSelectedItem(selectedItem.filter((item) => {
        return item !== id
      }))

    }

  }
  return (
    <Container>
      {success && <Success title={"Clique para voltar!"} onClick={() => {
        setSuccess(false); history.goBack();
      }}><div><IconSuccess /><span>Cadastro concluído!</span></div></Success>}
      <Contente>
        <Header> <img src={logo} alt='logo' /> <GoBack to=''><IconGoBack /><strong>Voltar para Home</strong></GoBack></Header>
        <Main>
          <Title>Cadastro do <br />ponto de coleta</Title>
          <Form schema={schema} onSubmit={handleSubmit}
            initialData={{ password: "", user: "" }} >
            <  FlexBox><Label>Dados</Label></FlexBox>

            {fields[0].map((input: any, index: any) => {
              return <ContainerInput width={input.width} key={index}>
                <Input
                  {...input}
                />
              </ContainerInput>
            })}
            <  FlexBox><Label>Endereços</Label> <span>Selecione o endereço no mapa</span></FlexBox>

            <ContainerMap>
              <Map center={selectedPosition} zoom={50} onClick={(e: LeafletMouseEvent) => { setSelectedPosition([e.latlng.lat, e.latlng.lng]) }}>
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={selectedPosition} />
              </Map>
            </ContainerMap>
            {fields[1].map((input: any, index: any) => {
              return <ContainerInput width={input.width} key={index}>
                <Input
                  {...input}
                />
              </ContainerInput>
            })}
            {fields[2].map((input: any, index: any) => {
              return <ContainerInput width={input.width} key={index}>
                <label>{input.label}</label>
                <Select name={input.name}
                  onChange={(e) => handleSelectUf(e)}
                  placeholder={input.placeHolder}
                  options={index === 0 ? ufs : cities}
                />
              </ContainerInput>
            })}
            <  FlexBox><Label>Itens de coleta</Label> <span>Selecione os item desejados</span></FlexBox>
            <ListItems>
              {items.map((item, index) => {
                return <CardItem selected={selectedItem.includes(item.id) ? true : false} key={index} onClick={() => handleSelectItem(item.id)}>
                  <img src={item.image_url} alt={item?.title} />
                  <span>{item.title}</span>
                </CardItem>
              })}
            </ListItems>
            <ButtonSubmit type="submit">Cadastrar ponto de coleta</ButtonSubmit>

          </Form>
        </Main>
      </Contente>

    </Container >
  );
}
