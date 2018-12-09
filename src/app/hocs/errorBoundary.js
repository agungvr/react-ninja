import { ErrorBoundary, FallbackView } from 'react-error-boundaries';

import { hocCreator } from '../helpers';

export default hocCreator(ErrorBoundary, { FallbackComponent: FallbackView });
