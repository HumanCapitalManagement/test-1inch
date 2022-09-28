import { Link, useLoaderData, useParams } from "react-router-dom";
import axios from '../utils/axios.config';

export async function loader({ params }) {
  const response = await axios.get('/blockchains');
  const blockchain = response.data.find(b => b.id == params.blockchainId);
  if (!blockchain) return {
    id: params.blockchainId,
    name: '(Not supported)',
    tokens: [],
  };
  const response2 = await axios.get(`/blockchain/${params.blockchainId}/tokens`);
  console.log(response2.data);
  blockchain.tokens = response2.data;
  return blockchain;
}

export default function Blockchain() {
  const blockchain = useLoaderData();
  const { blockchainId } = useParams();
  return (
    <>
      <h2 className="mt-4 mb-4">Tokens on <strong>{blockchain.name}</strong></h2>
      <table className="table table-sm table-hover token-table">
        <thead>
          <tr>
            <th scope="col">Logo</th>
            <th scope="col">Symbol</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {blockchain.tokens.map((token => (
            <tr key={token.id}>
              <td><img src={token.logo_uri} title={token.name + ' logo'} height="30" width="30" /></td>
              <td><code>{token.symbol}</code></td>
              <td><Link to={`/${blockchainId}/${token.id}`}>{token.name}</Link></td>
              <td><code>{token.address}</code></td>
            </tr>
          )))
          }
        </tbody>
      </table>
    </>
  )
}
