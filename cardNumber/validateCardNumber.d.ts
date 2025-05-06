import { CardNumberStateType } from './useCardNumber';
declare const validateCardNumber: (cardNumber: CardNumberStateType) => {
    errorState: {
        first: boolean;
        second: boolean;
        third: boolean;
        fourth: boolean;
    };
    errorMessage: string;
};
export default validateCardNumber;
