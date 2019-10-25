import { BackOfficeError } from 'infra/errors';

function catchError(target, name, descriptor) {
  const original = descriptor.value;

  if (typeof original === 'function') {
    descriptor.value = async function (...args) {
      try {
        const result = await original.apply(this, args);

        return result;
      } catch (error) {
        const httpCode = error.status || 500;
        const message = error.response ? error.response.text || error : error;

        throw new BackOfficeError('back office error', { httpCode, message });
      }
    };
  }

  return descriptor;
}

export default catchError;
