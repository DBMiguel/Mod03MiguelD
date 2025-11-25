// src/utils/validateId.js
export const validateId = (id) => {
    return !isNaN(id) && Number(id) > 0;
  };
  