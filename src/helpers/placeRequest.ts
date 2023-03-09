import axios from 'axios';

interface IPlaceRequest {
  key: string;
  city: string;
  page?: number;
}

const placeRequest = async ({ key, city, page = 1 }: IPlaceRequest) => {
  const data = await axios({
    method: `post`,
    url: `https://api.novaposhta.ua/v2.0/json/`,
    headers: {
      'Content-Typel': `application/json`,
    },
    data: {
      apiKey: `${key}`,
      modelName: 'Address',
      calledMethod: 'getWarehouses',
      methodProperties: {
        CityName: `${city}`,
        Limit: `50`,
        Page: `${page}`,
      },
    },
  });
  return data.data.data;
};

export default placeRequest;
