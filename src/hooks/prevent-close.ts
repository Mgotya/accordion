export const preventCloseReducer: SingleActionReducer = (
  openIndexes,
  { type, payload }
) => {
  if (type === "toggle_index") {
    const closing = openIndexes.includes(payload.index);
    const isLast = openIndexes.length < 2;
    if (closing && isLast) {
      return openIndexes;
    }
  }
};
