import React from 'react';
import { useRouter } from 'next/router';
import 'isomorphic-fetch';

import { api } from '../services';

const getIdFromUrl = url => {
  const matches = url.match(/\/([0-9]{1,})\//);
  return matches && matches[1] && matches[1];
};

const Home = ({ pokemons }) => {
  const router = useRouter();

  return (
    <>
      <ul>
        {pokemons.map(pokemon =>
          <li key={getIdFromUrl(pokemon.url)}>
            {pokemon.name}
            <br />
            <span onClick={() => router.push('/details/[id]', `/details/${getIdFromUrl(pokemon.url)}`)}>
              <a>Details</a>
            </span>
          </li>)}
      </ul>
    </>
  )
};

Home.getInitialProps = async () => {
  const response = await api.get('/pokemon');
  const pokemons = response.data.results;

  console.log(response.data);

  return { pokemons };
}

export default Home;
