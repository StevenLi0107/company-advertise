export const storeInBrowserStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};

export const getValueForKeyInBrowserStorage = (key) => {
  const item = localStorage.getItem(key);

  return item ? JSON.parse(item) : null;
};

export const removeFromBrowserStorage = (key) => {
  localStorage.removeItem(key);
};
