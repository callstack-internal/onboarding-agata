import React from 'react';
import {render} from '@testing-library/react-native';

import {Loader} from '../../components/Loader';

describe('Loader component', () => {
  it('should render correctly', () => {
    render(<Loader />);
  });
});
