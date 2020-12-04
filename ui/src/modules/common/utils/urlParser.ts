import { urlParser } from 'erxes-common-ui'

// check if valid url
export const isValidURL = (url: string) => {
  return urlParser.isValidURL(url);
};

// extract hostname e.g: www.domain.com
const extractHostname = (url: string) => {
  return urlParser.extractHostname(url);
};

// extract root domain e.g: domain.com
const extractRootDomain = (url: string) => {
  return urlParser.extractRootDomain(url);
};

export default {
  isValidURL,
  extractHostname,
  extractRootDomain
};
