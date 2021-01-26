import { fetchUtils } from 'react-admin';
import eventEmitter from './eventEmitter';

function decorateFetch (fetchJson) {
  return function decoratedFetchJson (url, options) {
    if (
      options && options.method && ['POST', 'PUT', 'DELETE']
    ) {
      eventEmitter.emit('change');
    }
    return fetchJson(url, options);
  };
}
const windowGlobal = typeof window !== 'undefined' && window;
const decoratedFetchJson = decorateFetch(fetchUtils.fetchJson);
const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = windowGlobal.localStorage.getItem('token');
  options.headers.set('Authorization', `Bearer ${token}`);
  return decoratedFetchJson(url, options);
};
export default decorateFetch(httpClient);
