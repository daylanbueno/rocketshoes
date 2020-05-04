import { all } from 'redux-saga/effects';

import cart from './cart/sagas';

export default function* roogSaga() {
    return yield all([cart]);
}
