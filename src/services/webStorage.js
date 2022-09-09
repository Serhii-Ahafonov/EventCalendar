const { JSON, localStorage } = window;

const getItem = (storage, key, defaultValue) => {
  try {
    let val = JSON.parse(storage.getItem(key));
    if (val === null && defaultValue !== undefined) {
      val = defaultValue;
    }
    return val;
  } catch (e) {
    return defaultValue;
  }
};
const setItem = (storage, key, value) => {
  storage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage = (key, defaultValue) => getItem(localStorage, key, defaultValue);
const setToLocalStorage = (key, value) => setItem(localStorage, key, value);

export const getStorageItemsEvents = () => {
  return getFromLocalStorage('cal-item-events', []);
};

export const setStorageItemsEvents = items => {
  setToLocalStorage('cal-item-events', items);
};

