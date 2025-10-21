const replaceIdByInArray = data => {
  if (!Array.isArray(data)) return [];
  return data.map(item => {
    const { _id, ...rest } = item || {};
    return { id: _id ? String(_id) : undefined, ...rest };
  });
};

const replaceIdByInObject = data => {
  if (!data || typeof data !== "object") return {};
  const { _id, ...rest } = data;
  return { id: _id ? String(_id) : undefined, ...rest };
};

export { replaceIdByInArray, replaceIdByInObject };
