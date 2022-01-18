export const ADD_EXPENSE    = '[EXPENSE] ADD_EXPENSE';
export const ADD_CATEGORY   = '[EXPENSE] ADD_CATEGORY';

export function addExpense(payload) {
  return {
    type: ADD_EXPENSE,
    payload
  }
}

export function addCategory(payload) {
  return {
    type: ADD_CATEGORY,
    payload
  }
}