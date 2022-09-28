import { useLoaderData } from "react-router-dom";
import axios from '../utils/axios.config';

export async function loader({ params }) {
  const response = await axios.get(`/token/${params.tokenId}`);
  console.info(response)
  return response.data;
}

export default function Token() {
  const tokenData = useLoaderData();

  return (
    <>
      <h2 className="mt-4 mb-4">Details of <strong>{tokenData.info.symbol}</strong></h2>
      <div className="card mb-4" style={{ maxWidth: 500 }}>
        <div className="row no-gutters">
          <div className="col-md-4 token-logo-container">
            <img src={tokenData.info.logo_uri} alt={tokenData.info.symbol + ' logo'} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{tokenData.info.name}</h5>
              <p className="card-text">Symbol: <code>{tokenData.info.symbol}</code></p>
              <a href={tokenData.link} target="_blank" className="btn btn-primary">View on external link</a>
            </div>
          </div>
        </div>
      </div>
      <h4 className="mt-4 mb-4">Latest orders</h4>
      <table className="table table-sm table-hover token-table">
        <thead>
          <tr>
            <th scope="col">Timestamp</th>
            <th scope="col">Taking amount</th>
            <th scope="col">Taker rate</th>
          </tr>
        </thead>
        <tbody>
          {tokenData.orders.map((order => (
            <tr key={order.orderHash} title={JSON.stringify(order, null, 2)}>
              <td><code>{order.createDateTime}</code></td>
              <td><code>{order.data.takingAmount}</code></td>
              <td><code>{order.takerRate}</code></td>
            </tr>
          )))
          }
        </tbody>
      </table>
    </>
  )
}
