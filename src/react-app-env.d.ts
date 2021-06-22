/// <reference types="react-scripts" />

interface ToggleAction {
  type: "toggle_index";
  payload: {
    index: number;
  };
}

type ToggleReducer = React.Reducer<number[], ToggleAction>;

type SingleActionReducer = (
  state: number[],
  action: ToggleAction
) => number[] | undefined;
