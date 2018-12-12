import Firebase, { FirebaseContext } from '../../components/firebase';

import { hocCreator } from '../helpers';

export default hocCreator(FirebaseContext.Provider , { value: new Firebase() });
