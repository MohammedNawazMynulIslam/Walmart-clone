import { Result } from "@/typings/searchTypings";

async function fetchSearch(searchTerm:  string) {
    const username = process.env.OXYLABS_USERNAME;
    const password= process.env.OXYLABS_PASSWORD


const newUrl = new URL(`https://www.walmart.com/search?q=${searchTerm}`);


const body = {
    source: "universal_ecommerce",
    url: newUrl.toString(),
    geo_location : "United States",
    parse: true,
};
try{
const response = await  fetch('https://realtime.oxylabs.io/v1/queries', {
  method: 'post',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
  },
});
const data = await response.json();


if(data.results && data.results.length>0){
  const result : Result = data.result[0];
  return result;
}else{
  return null;
}
} catch (error) {
  console.log(error);
  throw new Error("Failed to fetch search results");
}
}
export default fetchSearch;