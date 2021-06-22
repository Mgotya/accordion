import React from "react";

export const toggleDefaultReducer: ToggleReducer = (
  openIndexes,
  { type, payload }
) => {
  const { index } = payload;
  switch (type) {
    case "toggle_index": {
      const closing = openIndexes.includes(index);
      return closing
        ? openIndexes.filter((i) => i !== index)
        : [...openIndexes, index];
    }
    default: {
      throw new Error(`Unhandled type in accordionReducer: ${type}`);
    }
  }
};

export const useIndexToggle = ({ reducer = toggleDefaultReducer }) => {
  const [openIndexes, dispatch] = React.useReducer<
    React.Reducer<number[], ToggleAction>
  >(reducer, [0]);

  const toggleIndex = (index: number) =>
    dispatch({ type: "toggle_index", payload: { index } });
  return { openIndexes, toggleIndex };
};

export const firstReducerPipe = (
    ...reducers: (ToggleReducer | SingleActionReducer)[]
  ): ToggleReducer => {
    return (state, action) => {
      for (const reducer of reducers) {
        const result = reducer(state, action);
        if (result) return result;
      }
  
      return state;
    };
  };