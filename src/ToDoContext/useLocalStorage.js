import React, { useState, useEffect } from 'react';

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem = localStorageItem ? JSON.parse(localStorageItem) : [];

        if (!localStorageItem) localStorage.setItem(itemName, JSON.stringify(initialValue));

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    }, 1000)

  }, []);

  const saveItemList = (newItemList) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItemList));
      setItem(newItemList);
    } catch(error) {
      setError(true);
    }
  };

  return {
    item,
    saveItemList,
    loading,
    error
  };
}

export { useLocalStorage };
