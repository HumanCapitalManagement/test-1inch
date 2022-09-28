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
      <h2 className="mt-4 mb-4">Blockchains</h2>
      {
        !blockchains.length &&
        <div><i>Hmm no blockchain to see here. Let's add one?</i></div>
      }
      <div className="list-group">
        {
          blockchains.map(blockchain => (
            <Link to={`/${blockchain.id}`} key={blockchain.id} className="list-group-item list-group-item-action">
              {blockchain.name}
            </Link>
          ))
        }
      </div>
    </>
  );
}
