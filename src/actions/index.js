export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";

export const MEMORY_ADD = "Totali hafızaya ekle";
export const MEMORY_RECALL = "Hafızayı total ile işleme sok (applyNumber)";
export const MEMORY_CLEAR = "Hafızayı sıfırla";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};
