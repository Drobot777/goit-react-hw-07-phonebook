import axios from 'axios';
export {fetchContactsAxios};
export {deleteContactAxios};
export{addContactAxios}
const bazeUrl = 'https://64f1b51d0e1e60602d2429e5.mockapi.io/contacts';

async function fetchContactsAxios () {
  const response = await axios.get (bazeUrl);
  return response;
}
async function addContactAxios(post){
   const respons= await axios.post(bazeUrl,post)
   return respons
}

async function deleteContactAxios (id) {
  const respons = await axios.delete (`${bazeUrl}/${id}`);
  return respons;
}
