import Firebase, { FirebaseContext } from '../../components/Firebase';

import { hocCreator } from '../helpers';

export default hocCreator(FirebaseContext.Provider , { value: new Firebase() });
