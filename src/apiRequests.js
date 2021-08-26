import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com';

async function getUsers(){
    const resp = await axios.get(`${url}/users`);
    console.log(resp);
    return resp.data;
}

// async function getCharacter(): Promise<CharacterModel> {
//     const url = 'http://localhost:5000/character';
//     const resp = await axios.get<CharacterModel>(url);
//     return resp.data;
// }

export { getUsers } 
