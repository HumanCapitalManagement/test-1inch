/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS tokens (
  id VARCHAR(255) NOT NULL,
  blockchain_id VARCHAR(255) NOT NULL REFERENCES blockchains(id),
  "address" VARCHAR(255) NOT NULL,
  logo_uri TEXT,
  name VARCHAR(255) NOT NULL,
  symbol VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

