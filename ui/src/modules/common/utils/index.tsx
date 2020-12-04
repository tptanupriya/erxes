import {
  core
} from 'erxes-common-ui'
import { getEnv } from 'apolloClient';
import dayjs from 'dayjs';
import T from 'i18n-react';
import { IUser, IUserDoc } from 'modules/auth/types';
import React from 'react';
import Tip from '../components/Tip';
import { Limited } from '../styles/main';
import { IAttachment } from '../types';
import Alert from './Alert';
import confirm from './confirmation/confirm';
import router from './router';
import toggleCheckBoxes from './toggleCheckBoxes';
import uploadHandler from './uploadHandler';
import urlParser from './urlParser';

export const renderFullName = data => {
  return core.renderFullName(data);
};

export const renderUserFullName = data => {
  return core.renderUserFullName(data);
};

export const setTitle = (title: string, force: boolean) => {
  core.setTitle(title, force)
};

export const setBadge = (count: number, title: string) => {
  core.setBadge(count, title)
};

export const reorder = (
  list: string[],
  startIndex: number,
  endIndex: number
) => {
  return core.reorder(list, startIndex, endIndex)
};

export const generateRandomColorCode = () => {
  return core.generateRandomColorCode
};

export const isNumeric = n => {
  return core.isNumeric(n);
};

export const isTimeStamp = timestamp => {
  return core.isTimeStamp(timestamp);
};

// Create an array with "stop" numbers, starting from "start"
export const range = (start: number, stop: number) => {
  return core.range(start, stop);
};

// Return the list of values that are the intersection of two arrays
export const intersection = (array1: any[], array2: any[]) => {
  return core.intersection(array1, array2);
};

// Computes the union of the passed-in arrays: the list of unique items
export const union = (array1: any[], array2: any[]) => {
  return core.union(array1, array2);
};

// Similar to without, but returns the values from array that are not present in the other arrays.
export const difference = (array1: any[], array2: any[]) => {
  return core.difference(array1, array2);
};

export { Alert, uploadHandler, router, confirm, toggleCheckBoxes, urlParser };

export const can = (actionName: string, currentUser: IUser): boolean => {
  return core.can(actionName, currentUser);
};

export const __ = (key: string, options?: any) => {
  const translation = T.translate(key, options);

  if (!translation) {
    return '';
  }

  return translation.toString();
};

/**
 * Request to get file's URL for view and download
 * @param {String} - value
 * @return {String} - URL
 */
export const readFile = (value: string): string => {
  const { REACT_APP_API_URL } = getEnv();

  return core.readFile(value, REACT_APP_API_URL);
};

export const getUserAvatar = (user: IUserDoc) => {
  if (!user) {
    return '';
  }

  const { details = {} } = user;

  if (!details.avatar) {
    return '/images/avatar-colored.svg';
  }

  return readFile(details.avatar);
};

export function withProps<IProps>(
  Wrapped: new (props: IProps) => React.Component<IProps>
) {
  return class WithProps extends React.Component<IProps, {}> {
    render() {
      return <Wrapped {...this.props} />;
    }
  };
}

export function renderWithProps<Props>(
  props: Props,
  Wrapped: new (props: Props) => React.Component<Props>
) {
  return <Wrapped {...props} />;
}

export const isValidDate = date => {
  return core.isValidDate(date);
};

export const extractAttachment = (attachments: IAttachment[]) => {
  return core.extractAttachment(attachments);
};

export const setCookie = (cname: string, cvalue: string, exdays = 100) => {
  core.setCookie(cname, cvalue, exdays);
};

export const getCookie = cname => {
  return core.getCookie(cname);
};

/**
 * Generate random string
 */
export const generateRandomString = (len: number = 10) => {
  return core.generateRandomString();
};

/**
 * Generate random int number between 0 and max
 */

export const getRandomNumber = (max: number = 10) => {
  return core.getRandomNumber(max);
};

/**
 * Send desktop notification
 */
export const sendDesktopNotification = (doc: {
  title: string;
  content?: string;
}) => {
  core.sendDesktopNotification(doc);
};

export const roundToTwo = value => {
  return core.roundToTwo(value);
};

function createLinkFromUrl(url) {
  if (!url.includes('http')) {
    url = 'http://' + url;
  }

  const onClick = e => {
    e.stopPropagation();
    window.open(url);
  };

  return (
    <a href="#website" onClick={onClick}>
      {urlParser.extractRootDomain(url)}
    </a>
  );
}

export function formatValue(value) {
  if (typeof value === 'boolean') {
    return value.toString();
  }

  if (urlParser.isValidURL(value)) {
    return createLinkFromUrl(value);
  }

  if (typeof value === 'string') {
    if (
      dayjs(value).isValid() &&
      (value.includes('/') || value.includes('-'))
    ) {
      return (
        <Tip text={dayjs(value).format('D MMM YYYY, HH:mm')} placement="top">
          <time>{dayjs(value).format('L')}</time>
        </Tip>
      );
    }

    return <Limited>{value}</Limited>;
  }

  if (value && typeof value === 'object') {
    return value.toString();
  }

  return value || '-';
}

export function isEmptyContent(content: string) {
  return core.isEmptyContent(content);
}

export const isValidUsername = (username: string) => {
  return core.isValidUsername(username);
};

export const storeConstantToStore = (key, values) => {
  core.storeConstantToStore(key, values);
};

export const getConstantFromStore = (
  key,
  isMap?: boolean,
  isFlat?: boolean
) => {
  return core.getConstantFromStore(key, isMap, isFlat);
};

// Most basic frontend solution for click-jack defense
export const bustIframe = () => {
  core.bustIframe();
};
