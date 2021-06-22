export const singleReducer: SingleActionReducer = (
  openIndexes,
  { type, payload }
) => {
  if (type === "toggle_index") {
    const closing = openIndexes.includes(payload.index);
    if (!closing) {
      return [payload.index];
    }
  }
};
