import { environment as ENV } from '../../environments/environment';

export const GET_URL = (url: string, obj?: { [key: string]: any }): string => {
  let prepareUrl = `${ENV.apiUrl}/${url}`;
  let separator = '?';

  if (!obj) {
    return prepareUrl;
  }

  for (const [key, value] of Object.entries(obj)) {
    prepareUrl = `${prepareUrl}${separator}${key}=${value}`;
    separator = '&';
  }

  return prepareUrl;
};
