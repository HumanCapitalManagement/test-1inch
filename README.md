A simple demo app utilizing 1inch APIs.

Try it live at https://api-integration-1inch.herokuapp.com/.

## How to set up locally

STEP 1: Clone the repo.

STEP 3: Create a new Postgres database and make sure it's up.

STEP 3: Under `/server`, create a `.env` file and populate it with information of the newly created DB:

	DB_USER=postgres
	DB_PASSWORD=postgres
	DB_HOST=localhost
	DB_PORT=5432
	DB_DATABASE=test_1inch

STEP 4: Under `/` (repo root), run `yarn` to install dependencies.

STEP 5: Under `/server`, run `yarn db-migrate up` to migrate the DB.

STEP 6: Under `/`, run `yarn dev` to spin up both the server and the client.

The app will be available at the location indicated by Vite, in the following format:

	VITE v3.1.3  ready in 1875 ms

	➜  Local:   http://127.0.0.1:5173/
	➜  Network: use --host to expose
