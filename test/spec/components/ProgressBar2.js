'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import ProgressBar2 from 'components/ProgressBar2.js';

describe('ProgressBar2', () => {
    let ProgressBar2Component;

    beforeEach(() => {
        ProgressBar2Component = createComponent(ProgressBar2);
    });

    it('should have its component name as default className', () => {
        expect(ProgressBar2Component._store.props.className).toBe('ProgressBar2');
    });
});
