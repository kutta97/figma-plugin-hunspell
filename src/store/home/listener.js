import { PAGE_TYPE } from '@consts/index';

import { asyncMessage } from '@utils/messages';
import request from '@utils/request';

import { nextPage } from '@store/root';

import { searchListenerConnect } from './index';

const searchListener = async (action, listenerApi) => {
  const { dispatch } = listenerApi;

  dispatch(nextPage({ page: PAGE_TYPE.SEARCHING }));

  try {
    // TODO Change request.promise to request.fetch and use the Search API
    window.parent.postMessage({ pluginMessage: { query: 'search' } }, '*');
    const data = await request.promise(() => asyncMessage('search'));
    console.log('data', data);
    dispatch(nextPage({ page: PAGE_TYPE.RESULT, isNotRecord: true }));
  } catch (e) {
    /* empty */
    console.error(e);
  }
};

const homeListeners = [
  { actionCreator: searchListenerConnect, effect: searchListener },
];

export default homeListeners;
