import React, { useEffect, useState, Props } from 'react';
import logo from '../../assets/logo.svg';
import {
  Container,
  GoBack, Header, IconGoBack, Main
} from './styles';
import Card from '../../components/Card'
import api from '../../service/api';
export default function DetailPoint({ history }: any) {
  const [points, setPoints] = useState<any[]>([])
  useEffect(() => {
    if (history.location.state === undefined)
      return history.goBack();
    let { uf, city } = history.location.state;
    api.get(`points?city=${city}&uf=${uf}&items`).then((response: any) => {
      setPoints(response.data);
    });
  }, []);
  return (
    <Container>
      <Header>
        <img src={logo} alt='logo' />
        <GoBack to=''>
          <IconGoBack /><strong>Voltar para Home</strong>
        </GoBack>
        <p><span>{points.length} Pontos</span> encontrados</p>
      </Header>
      <Main>
        {
          points.length === 0 ? <span></span> : points.map((point: any, index: any) => {
            return <Card point={point} key={index} />
          })
        }
      </Main>

    </Container >
  );
}
