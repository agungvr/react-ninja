import React, { Suspense } from 'react';
import PreloaderIcon from 'react-preloader-icon';
import Puff from 'react-preloader-icon/loaders/Puff';

import { hocCreator } from '../helpers';

export default hocCreator(Suspense, {
  fallback:
    <div className="preload">
      <PreloaderIcon
        loader={Puff}
        size={100}
        strokeWidth={8} // min: 1, max: 50
        strokeColor={"#ffffff"}
        duration={1500}
      />
    </div>
});
