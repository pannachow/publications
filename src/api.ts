import qs from "qs";

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
  status: PublicationStatus;
  category: string;
  level: string;
  created_on: string;
  modified_on: string;
  options: object;
};

export type PublicationStatus = "draft" | "published" | "offline";

export async function getPublications(
  loginInfo: LoginInfo,
  page: number,
  nameSearch: string,
  statusFilter?: PublicationStatus
): Promise<Publications> {
  const params = {
    page,
    limit: 20,
    query: [] as { field: string; type: string; value: string }[],
  };
  if (nameSearch) {
    params.query.push({
      field: "name",
      type: "like",
      value: `%${nameSearch.toLowerCase()}%`
    })
  }
  if (statusFilter) {
    params.query.push({
      field: "status",
      type: "eq",
      value: statusFilter,
    });
  }
  const url = `https://api.foleon.com/v2/magazine/edition?${qs.stringify(
    params
  )}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `${loginInfo.token_type} ${loginInfo.access_token}`,
    },
  });
  return await response.json();
}
