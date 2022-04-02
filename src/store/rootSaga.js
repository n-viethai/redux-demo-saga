import { all } from 'redux-saga/effects';


function loadSagas(sagas) {
    return sagas.map(sagaFn => sagaFn());
}

function createRootSaga(sagas) {
    return function* () {
        yield all(loadSagas(sagas));
    };
}

const rootSaga = createRootSaga([
    
])

export default rootSaga
