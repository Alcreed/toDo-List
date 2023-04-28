import React, { useState, useEffect } from 'react';
// import { ITask } from '../App';

// type ItemHook = 'toDoList_V1';

// function useLocalStorage(itemName: ItemHook, initialValue: []) {
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<boolean>(false);
//   const [item, setItem] = useState<ITask[]>(initialValue);

//   useEffect(() => {
//     setTimeout(() => {
//       try {
//         const localStorageItem: (string | null) = localStorage.getItem(itemName);
//         let parsedItem: ITask[] = localStorageItem ? JSON.parse(localStorageItem) : [];

//         if (!localStorageItem) localStorage.setItem(itemName, JSON.stringify(initialValue));

//         setItem(parsedItem);
//         setLoading(false);
//       } catch (error) {
//         setError(true);
//       }
//     }, 1000)

//     const saveItemList = (newItemList: ITask[]): void => {
//       try {
//         localStorage.setItem(itemName, JSON.stringify(newItemList));
//         setItem(newItemList);
//       } catch(error) {
//         setError(true);
//       }
//     };

//     return {
//       item,
//       saveItemList,
//       loading,
//       error
//     };
//   }, [])
// }
