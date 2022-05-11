export type LoginInfo = {
  token_type: string;
  access_token: string;
};

export async function login(): Promise<LoginInfo> {
  const url = "https://api.foleon.com/oauth";
  const body = {
    grant_type: "client_credentials",
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
  };
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

export type Publications = {
  _embedded: {
    edition: Publication[];
  };
  page: 1;
  count: 20;
  total: 30;
};

export type Publication = {
  id: number;
  name: string;
  identifier: string;
  status: string;
  created_on: string;
};

export async function getPublications(
  loginInfo: LoginInfo,
  page: number
): Promise<Publications> {
  const url = `https://api.foleon.com/v2/magazine/edition?page=${page}&limit=20`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `${loginInfo.token_type} ${loginInfo.access_token}`,
    },
  });
  return await response.json();
}
