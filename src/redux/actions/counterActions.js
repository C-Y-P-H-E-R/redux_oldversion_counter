export const incrementCounter = () => {
  return {
    type: "INCREMENT"
  };
};

export const reduceCounter = () => {
  return {
    type: "REDUCE"
  };
};

export const resetCounter = () => {
  return {
    type: "RESET"
  };
};
