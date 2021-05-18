import React from "react";

interface AccordionAction {
  type: "toggle_index";
  payload: {
    index: number;
  };
}
export type AccordionReducer = React.Reducer<number[], AccordionAction>;
export type SingleActionReducer = (
  state: number[],
  action: AccordionAction
) => number[] | undefined;

export const accordionReducer: AccordionReducer = (
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

export const useFirstReducer = (
  ...reducers: (AccordionReducer | SingleActionReducer)[]
): AccordionReducer => {
  return (state, action) => {
    for (const reducer of reducers) {
      const result = reducer(state, action);
      if (result) return result;
    }

    return state;
  };
};

export const useAccordion = ({ reducer = accordionReducer }) => {
  const [openIndexes, dispatch] = React.useReducer<
    React.Reducer<number[], AccordionAction>
  >(reducer, [0]);

  const toggleIndex = (index: number) =>
    dispatch({ type: "toggle_index", payload: { index } });
  return { openIndexes, toggleIndex };
};
