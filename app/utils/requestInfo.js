export const requestURLs = {
  default: `https://jhavacorsproxy.herokuapp.com/https://api.igdb.com/v4/`,
};

export const options = {
  popular: {
    method: 'post',
    headers: {
      'Client-ID': '6llto5s67z1ag9f3p4gmbfchrph4jo',
      Authorization: 'Bearer l00lzsmqfzgr8o3g45qcr51sdnuudk',
    },
    body: `fields name, rating, cover; where rating != null; sort rating desc; limit 20;`,
  },
};
