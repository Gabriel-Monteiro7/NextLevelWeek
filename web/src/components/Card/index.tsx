import React, { useEffect, useState } from 'react'
import { Container, AddressCard, TitleCard, ItemsLabel, Image, ContainerItems, ContainerAddress } from './styles'
import axios from 'axios'
import api from '../../service/api';
import Lottie from "react-lottie";
import load from "../../assets/loadCard.json";

export default function Card(props: any) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: load,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [point, setPoint] = useState({ ...props.point, address: {}, items: null });

  useEffect(() => {
    api.get('points/' + point.id).then((response) => {
      axios.get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${point.latitude}&lon=${point.longitude}`).then((responseAdress) => {
        let { address } = responseAdress.data;
        setPoint({ ...point, address, items: response.data.items });

      })
    })

  }, [])
  return (
    <Container>
      {
        point.items === null ? <Lottie options={defaultOptions} />
          : <><Image image={point.image_url} />
            <TitleCard>{point.name}</TitleCard>
            <ContainerItems>
              {point?.items.map((item: any, index: any) => {
                return index < 3 && <ItemsLabel key={index}>{item.title}</ItemsLabel>
              })}
            </ContainerItems>
            <ContainerAddress>
              <AddressCard>{point.address?.city || point?.city}, {point.address?.state || point.uf}</AddressCard>
              <AddressCard>{point.address?.state_district} </AddressCard>
              <AddressCard> {point.address?.postcode}</AddressCard>
            </ContainerAddress>

          </>
      }

    </Container>
  )
}
