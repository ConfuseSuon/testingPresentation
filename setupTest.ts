
import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
import {server} from './src/mockApi/server'
expect.extend(matchers);


beforeAll(() => server.listen())
beforeEach(() => server.resetHandlers())
afterAll(() => server.close())