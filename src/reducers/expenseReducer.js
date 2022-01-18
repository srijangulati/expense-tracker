import { ADD_CATEGORY, ADD_EXPENSE } from "../actions/expenseActions";

import { v4 as uuidv4 } from 'uuid';

const INITIAL_STATE = {
  categoryOrder: [],
  categories: {}
};


export default function expenseReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        categories: {
          ...state.categories,
          [action.payload.category]: {
            ...state.categories[action.payload.category],
            cost: state.categories[action.payload.category].cost + action.payload.cost,
            expenses:  [...state.categories[action.payload.category].expenses, {
              ...action.payload,
              id: uuidv4()
            }]
          }
        }
      };
    case ADD_CATEGORY: 
      return {
        ...state,
        categoryOrder: [...state.categoryOrder, action.payload.name],
        categories: {
          ...state.categories,
          [action.payload.name]: {
            limit: action.payload.limit,
            expenses: [],
            cost: 0,
            label: action.payload.name,
            id: uuidv4()
          }
        }
      };
    default:
      return state;
  }
}