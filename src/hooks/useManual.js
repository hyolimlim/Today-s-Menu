function useManual(data) {
  const extractManual = Object.keys(data)
    .filter((key) => key.includes("MANUAL"))
    .reduce((cur, key) => {
      return Object.assign(cur, { [key]: data[key] });
    }, {});

  const manual = Object.fromEntries(
    Object.entries(extractManual).filter(([_, v]) => v !== "")
  );

  const recipestep = Object.values(manual)
    .sort()
    .slice(0, Object.keys(manual).length / 2);

  const recipeStepImg = Object.values(manual)
    .sort()
    .slice(Object.keys(manual).length / 2, Object.keys(manual).length);

  const result = recipestep.reduce((acc, curr, idx) => {
    acc[curr] = recipeStepImg[idx];
    return acc;
  }, new Object());

  return result;
}

export default useManual;
