// src/parseCSV.js
import Papa from 'papaparse';

export const parseCSV = (csvText, callback) => {
  Papa.parse(csvText, {
    header: true,
    dynamicTyping: true,
    complete: (results) => {
      callback(results.data);
    },
  });
};
