// uses the reddit api to get data

async function fetchRedditData(after, count = 25) {
  return fetch(
    `https://www.reddit.com/r/programminghumor/new.json?count=${count}${
      after ? `&after=${after}` : ''
    }`
  )
    .then((response) => response.json())
    .then(({data}) => {
      return data.children.map(({data}) => ({
        name: data.name,
        title: data.title,
        url: data.url,
        permalink: data.permalink,
      }));
    });
}

export {fetchRedditData};
