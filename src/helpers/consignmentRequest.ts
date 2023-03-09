import axios from 'axios';

interface IConsignmentRequest {
  key: string;
  TTN: string;
}

const consignmentRequest = async ({ key, TTN }: IConsignmentRequest) => {
  const data = await axios({
    method: `post`,
    url: `https://api.novaposhta.ua/v2.0/json/`,
    headers: {
      'Content-Typel': `application/json`,
    },
    data: {
      apiKey: `${key}`,
      modelName: 'TrackingDocument',
      calledMethod: 'getStatusDocuments',
      methodProperties: {
        Documents: [
          {
            DocumentNumber: `${TTN}`,
          },
        ],
      },
    },
  });
  return data.data.data;
};

export default consignmentRequest;
