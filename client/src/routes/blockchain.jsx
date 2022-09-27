import { useLoaderData } from "react-router-dom";
import axios from '../utils/axios.config';

export async function loader({ params }) {
  const response = await axios.get('/blockchains');
  return response.data.find(b => b.id == params.blockchainId) || {};
}

export default function Blockchain() {
  const blockchain = useLoaderData();
  return (
    <>
      <h2>Tokens on {blockchain.name}</h2>
    </>
  )
}
