import { getAuthorizationUrl, initAPIClient } from '../../../shared/oauth';

// Redirect the user to the authorization URL generated by the client
const handler = (req, res) => {
  const client = initAPIClient({});
  res.redirect(getAuthorizationUrl(client));
};

export default handler;
