// api.ts

const BASE_URL = '/api';

export const fetchRepoData = async (owner: string, repo: string) => {
  const response = await fetch(`${BASE_URL}/github/${owner}/${repo}`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  return await response.json();
};
