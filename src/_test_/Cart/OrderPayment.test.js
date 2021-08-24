import { render, screen, cleanup } from "@testing-library/react";
import OrderPayment from "../../OrderPayment";

test('should render order page in dom', () => {
    render(<OrderPayment />);
    const orderPaymentElement = document.querySelector('.paymentContainer');
    expect(orderPaymentElement).toBeInTheDocument();
});


