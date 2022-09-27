import { Form, redirect } from "react-router-dom";
import axios from '../utils/axios.config';

export async function action({ request }) {
  const formData = await request.formData();
  const response = await axios.post('/blockchain', {
    id: formData.get('id'),
    name: formData.get('name'),
  });
  return redirect('/');
}

export default function AddBlockchain() {
  return (
    <>
      <h2>Add blockchain</h2>
      <Form method="post">
        <div className="form-group">
          <label htmlFor="inputId">ID</label>
          <input className="form-control" id="inputId" name="id" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label htmlFor="inputName">Name</label>
          <input className="form-control" id="inputName" name="name" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </Form>
    </>
  );
}
