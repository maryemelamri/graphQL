const { request, gql } = require("graphql-request");

const endpoint = "http://localhost:4000/graphql";

// Define your GraphQL query
const query = gql`
  {
    hello
  }
`;

// Send the query to the server
request(endpoint, query)
  .then((data) => console.log("Response:", data))
  .catch((error) => console.error("Error:", error));
