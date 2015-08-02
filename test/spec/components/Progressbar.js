'use strict';

// Uncomment the following lines to use the react test utilities
// import React from 'react/addons';
// const TestUtils = React.addons.TestUtils;

import createComponent from 'helpers/createComponent';
import Progressbar from 'components/ProgressBar.js';

describe('ProgressBar', () => {
    let ProgressbarComponent;

    beforeEach(() => {
        ProgressbarComponent = createComponent(Progressbar);
    });

    it('should have its component name as default className', () => {
        expect(ProgressbarComponent._store.props.className).toBe('ProgressBar');
    });
});
