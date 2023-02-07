import { describe, expect, it } from 'vitest';
import Counter  from './Counter';
import { render, screen, userEvent } from './test/test-utils';
describe('Sample App vitest', () => {
    it('the title is visible', () => {
        render(<Counter />);
        expect(screen.getByText(/React Counter/i)).toBeInTheDocument();
    });

    it('should increment the count when icon (+) clicked', async() => {
    render(<Counter />);
    userEvent.click(screen.getByText('+'));
    expect(await screen.findByText(/count is: 1/i)).toBeInTheDocument();
    });

    it('should decrement the count when icon (-) clicked', async() => {
    render(<Counter />);
    userEvent.click(screen.getByText('-'));
    expect(await screen.findByText(/count is: -1/i)).toBeInTheDocument();
    });
});