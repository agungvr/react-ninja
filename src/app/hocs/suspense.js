import React, { Suspense } from 'react';

import { hocCreator } from '../helpers';

export default hocCreator(Suspense, { fallback: <div>Loading...</div> });
