// ? Reference: https://testing-library.com/docs/react-testing-library/setup/

import '@testing-library/jest-dom/extend-expect.js';

import userEvent from '@testing-library/user-event';

export * from '@testing-library/react';

// ? Reference: https://github.com/testing-library/user-event/issues/833#issuecomment-1013632841
export const user = userEvent.setup({ delay: null });
