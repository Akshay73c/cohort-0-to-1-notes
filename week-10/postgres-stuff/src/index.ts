import { Client } from "pg";

const client = new Client({
  user: "avnadmin",
  password: "AVNS_FuhdsrY83pZM9a7tsWY",
  host: "cohort-postgres-stuff-akshay-project.h.aivencloud.com",
  port: 23134,
  database: "defaultdb",
  ssl: {
    rejectUnauthorized: true,
    ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUAm3G4qxXaejYD0uuGn757TttIhUwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvNjgwZjViNDQtMDIwMC00NTdmLWI2YjktMTk1ZmM0ZmVi
NzA1IFByb2plY3QgQ0EwHhcNMjQwMTMxMTE0NTI3WhcNMzQwMTI4MTE0NTI3WjA6
MTgwNgYDVQQDDC82ODBmNWI0NC0wMjAwLTQ1N2YtYjZiOS0xOTVmYzRmZWI3MDUg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBALGgA9rC
EF8e6ir+1hsswipXIB1he/4RbIhu/JeYdSamypEmZSfgCU44Euy5GfUdh+RuPLZs
4+YPZeOliYI1jd3rNtRJfbKpPVg2XXhIWyZ713rgGnQzVAq08mASTchP/kHNSOJA
txA2oPElKXOxZFWaf1bBxEPjWIR8JjS709pLznN3Fy2H5enfO9KrbhE366+DeJ6t
73zA42i2SsZTCo3CsOZHDhFnN7Y2ObQPV9c16H4x3kzr5zIEBUJfQAWzNX8wkBjE
tvV5W0f1JIGh2DjKmOP1vX9QMDNdJfjeiPpiaT3vm/SaeHoDKimmm8WVBczCoIj+
lEoOulMimTwR9VWmxOnoxJpmwT/la+Rn1BDlCOrWBxERwG7K3rnrM9W9mN8DZuTq
mgYWmiXVD7v0MZ/Rj5QDpbb4p8JfDStYaNhLCAMD4poIpf1GXpOQfuUKHtK/RTPx
uDeb4m1x+S/gXCxnGzJJ2BmX6SmqnGrxg1UCV2i/hR02wGol9cA0VQfjDQIDAQAB
oz8wPTAdBgNVHQ4EFgQUPiJsiIhWEBbWSJVvbvIhnZCFFkcwDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAD9InPUVSUPh2egw
4e9GRCY5MysQy253jgCLGrG+VAeOVEKY1b1jN2ORJYpWCWkpbSDgtYSzNeW1PLrA
U6tV+hzZlnF1CVFmcYTf5QNvwrVqMC0n0ewh+p1YyDhFaIu3HM5F29mA8yWU64RK
avvwRhrLiMJcyDwFYAik9ekqZ0HPTZu2GNgCQWCqAK5aUTYK9HN3PTF8GerJZMlN
yaJ8/xe3xKwYuEDKhhLZnEBlSXlBt97ekqiX0YIy10I2+PgJV1e0gwweUtMlZKgS
/+X4KPwpk0bz0RGyhRIhDQpN/ruDm9Eo8ZaEmJXqvKijvxq1qj29UqMZs27Tlsu/
4Q97xV2tJjTT2scmzMiIO46szGfA+HCvlJhITW7sHTO1AmXktdkensQD3jn+97FP
l2vDcx+Wc8hOPmdoibbd2bO8xi1o5zO3Qd5uYeVmjih6Wr1agJ6+Q47zYZhhr7sT
FAMnXebvYyV8RELxUmyT9cE2veXe9fdaT6aacYZ8KbHi5C3yCQ==
-----END CERTIFICATE-----
`,
  },
});

client.connect();

async function createUsersTable() {
  const result = await client.query(`
    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `);

  console.log(result);
}

async function insertData(username: string, email: string, password: string) {
  const inserQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3);`;
  const values = [username, email, password];

  const result = await client.query(inserQuery, values);
  console.log(`_____________Insertion success_______________
      ${result}
      `);
}

async function getUser(email: string) {
  const inserQuery = `SELECT * FROM users WHERE email = $1`;
  const values = [email];

  const result = await client.query(inserQuery, values);
  if (result.rows.length <= 0) {
    console.log("No user found");
  } else {
    console.log(`_____________Select result_______________
      ${result.rows[0]}
      `);
  }
}

createUsersTable();
// insertData("akshat22", "akshay2@gmail.com", "akshay_15");
// getUser("akshay@gmail.com");

// client.end();
