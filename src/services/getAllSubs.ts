import axios from 'axios';
import {Sub, SubsResponseFromApi} from './../types';
const API = 'http://localhost:3001/data';

export const getAllSubs = () => {
    return fetchSubs().then(mapFromApiToSubs);
}

export const fetchSubs = async (): Promise<SubsResponseFromApi> => {
    //return fetch(API).then(res => res.json());
    const response = await axios
      .get(API);
    return response.data;
  }

export const mapFromApiToSubs = (apiResponse: SubsResponseFromApi):Array<Sub> => {
    return apiResponse.map(subFromApi => {
      const {
        nick,
        months: subMonths,
        profileUrl: avatar,
        description
      } = subFromApi;

      return {
        nick,
        description,
        avatar,
        subMonths
      }
    })
  }