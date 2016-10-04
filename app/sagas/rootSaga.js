/**
 * Created by Elf on 01.10.2016.
 */
import startWatchTalks from './talksSagas';
import startWatchCategories from './categoriesSagas';
import startWatchLocations from './locationSagas';

export default function* rootSaga() {
    yield [
        startWatchTalks(),
        startWatchCategories(),
        startWatchLocations(),
    ];
};
