import produce from 'immer';

export default function cart(state = [], action) {
    switch (action.type) {
        case '@CART/ADD_SUCESS':
            return produce(state, (draft) => {
                const productIndex = draft.findIndex((p) => p.id === action.id);

                if (productIndex >= 0) {
                    draft[productIndex].amount += 1;
                } else {
                    draft.push({
                        ...action.product,
                        amount: 1,
                    });
                }
            });

        case '@CART/REMOVE':
            return produce(state, (draft) => {
                const productIndex = draft.findIndex((p) => p.id === action.id);
                if (productIndex >= 0) {
                    draft.splice(productIndex, 1);
                }
            });

        case '@CART/UPDATE_AMOUNT': {
            if (action.amount <= 0) {
                return state;
            }
            return produce(state, (draft) => {
                const productIndex = draft.findIndex((p) => p.id === action.id);
                if (productIndex >= 0) {
                    draft[productIndex].amount = Number(action.amount);
                }
            });
        }

        default:
            return state;
    }
}
