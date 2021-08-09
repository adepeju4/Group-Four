import { render, screen, cleanup } from '@testing-library/react';
import About from '../About';

test('should render aboutPage in dom', () => {
    render(<About />);
    const AboutElement = document.querySelector('.about_cont');
    expect(AboutElement).toBeInTheDocument();
});

