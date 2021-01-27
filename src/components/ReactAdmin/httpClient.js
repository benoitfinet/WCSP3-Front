import { fetchUtils } from 'react-admin';
import eventEmitter from './eventEmitter';

function decorateFetch (fetchJson) {
  return function decoratedFetchJson (url, options) {
    if (options && options.method && ['POST', 'PUT', 'DELETE']) {
      eventEmitter.emit('change');
    }
    return fetchJson(url, options);
  };
}
const token = localStorage.getItem('token');
console.log('Token: ' + token);
const httpClient = (url, options = {}) => {
  const token = localStorage.getItem('token');
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  options.headers.set('Authorization', `Bearer ${token}`);

  return fetchUtils.fetchJson(url, options);
};
export default decorateFetch(httpClient);
