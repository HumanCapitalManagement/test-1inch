import { Form, redirect, useNavigation } from "react-router-dom";
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
  const navigation = useNavigation();
  return (
    <>
      <h2 className="mt-4 mb-4">Add blockchain</h2>
      <Form method="post">
        <div className="form-group">
          <label htmlFor="inputId">ID</label>
          <input className="form-control" id="inputId" name="id" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label htmlFor="inputName">Name</label>
          <input className="form-control" id="inputName" name="name" />
        </div>
        <button type="submit" className="btn btn-primary" disabled={navigation.state === 'submitting'}>Submit</button>
      </Form>
    </>
  );
}
