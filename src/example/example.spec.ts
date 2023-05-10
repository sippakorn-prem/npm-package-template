import logging from './example';
describe('hello', () => {
	it('exports the correct logging', () => {
		expect(logging).toBe('hello world');
	});
});
