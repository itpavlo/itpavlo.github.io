import axios from "axios";
import {Endpoints} from "./endpoints";
const { REACT_APP_API_BASEURL } = process.env


const instance = axios.create({
  baseURL: REACT_APP_API_BASEURL,
  headers:{
    "Content-Type": "application/json",
  }
})

// const tokenInstance = (token) => axios.create({
//   baseURL: REACT_APP_API_BASEURL,
//   headers:{
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${token}`
//   }
// })


// export const getCharacters = (token) =>
//     tokenInstance(token).get(Endpoints.CHARACTERS)

export const getMethods = {
  getCharacters: () =>
      instance.get(Endpoints.CHARACTER),
  getCharactersByPageNumber: (pageNumber:number): Promise<any> =>
      instance.get(Endpoints.CHARACTER + '?page=' + pageNumber),
  universalGetCharacters:(pageNumber: number) =>
      instance.get(`${Endpoints.CHARACTER}${pageNumber !==1 ? '?page=' + pageNumber : ""}`),
}


export const getCharacters = () =>
    instance.get(Endpoints.CHARACTER)

export const getCharactersByPageNumber = (pageNumber: number) =>
    instance.get(Endpoints.CHARACTER + '?page=' + pageNumber)

export const postPost = (obj: any) =>
    instance.post('https://jsonplaceholder.typicode.com/posts', obj)
