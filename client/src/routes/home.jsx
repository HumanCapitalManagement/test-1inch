import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from "react-router-dom";
import axios from '../utils/axios.config';

export async function loader() {
  const response = await axios.get('/blockchains');
  return { blockchains: response.data };
}

export default function Home() {
  const { blockchains } = useLoaderData();
  return (
    <>
      <h2>Blockchains</h2>
      <ul>
        {
          blockchains.map(blockchain => (
            <li key={blockchain.id}>
              <Link to={`/${blockchain.id}`}>{blockchain.name}</Link>
            </li>
          ))
        }
      </ul>
    </>
  );
}
