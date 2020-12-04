import { router } from 'erxes-ui-utils';

/**
 * @param {Object} query
 */
const setParams = (history: any, query: any, replace: boolean = false) => {
  return router.setParams(history, query, replace);
};

/**
 * @param {String} name
 */
const getParam = (history: any, name: string | string[]) => {
  return router.getParam(history, name);
};

/**
 * @param {...String} queryNames
 */
const removeParams = (history: any, ...queryNames: string[]) => {
  return router.removeParams(history, ...queryNames);
};

/*
 * @param {Object} query
 */
const refetchIfUpdated = (history: any, query: any) => {
  router.refetchIfUpdated(history, query)
};

/**
 * Replace specific param
 * @param {Object} history
 * @param {Object} params - Updated params
 * @query {Object} query
 */
const replaceParam = (history: any, params: any, query: any) => {
  return router.replaceParam(history, params, query);
};

export const generatePaginationParams = (queryParams: {
  page?: string;
  perPage?: string;
}) => {
  return router.generatePaginationParams(queryParams);
};

/**
 * Set selected option param
 * @param {String} selected values
 * @param {String} param name
 * @param {Object}  history
 */
const onParamSelect = (
  name: string,
  values: string[] | string,
  history: any
) => {
  router.setParams(history, { [name]: values });
};

/**
 * Get hash from URL and check
 * given key exists in hash
 * @param {Object} history - location
 * @returns {Boolean} hashKey
 */
const checkHashKeyInURL = ({ location }, hashKey?: string): boolean => {
  return router.checkHashKeyInURL(location, hashKey);
};

/**
 * Remove selected hash from URL
 * @param {Object} history - location
 * @param {String} hashKey
 */
const removeHash = (history: any, hashKey?: string) => {
  router.removeHash(history, hashKey);
};

export default {
  onParamSelect,
  setParams,
  getParam,
  replaceParam,
  removeParams,
  removeHash,
  refetchIfUpdated,
  checkHashKeyInURL
};
