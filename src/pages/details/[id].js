import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { api } from '../../services';

const Pokemon = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Details = () => {
  const router = useRouter();
  const { id } = router.query;

  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    (async () => {
      const response = await api.get(`/pokemon/${id}`);

      console.log(response.data);

      setPokemon(response.data);
    })();
  }, []);

  if (!pokemon) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <a onClick={() => router.push('/')}>Voltar</a>
      <Pokemon>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <h1>{pokemon.name}</h1>
      </Pokemon>
    </>
  )
};

Details.getInitialProps = async () => {

};

export default Details;
