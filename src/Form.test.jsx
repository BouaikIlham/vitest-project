import { describe, expect, it } from 'vitest';
import Form  from './Form';
import { render, screen, userEvent } from './test/test-utils';
describe('Sample App vitest', () => {
    it('the title is visible', () => {
        render(<Form />);
        expect(screen.getByText(/Form/i)).toBeInTheDocument();
    });
    it('should render the input', () => {
        render(<Form />);
        expect(screen.getByDisplayValue(/john/i)).toBeInTheDocument();
    })
    it('should render the input', () => {
        render(<Form />);
        expect(screen.getByDisplayValue(/Doe/i)).toBeInTheDocument();
    })
    it('should render the input', () => {
        render(<Form />);
        expect(screen.getByRole('button', {
        name: /submit/i
        }))
    })
    
  
});