export const getJWT = () => localStorage.getItem("chatter-auth");
export const authHeader = {
  headers: {
    Authorization: `JWT ${getJWT()}`
  }
};

export const toCapitalize = str => {
  return (
    str &&
    str
      .split(" ")
      .map(d => d && d[0].toUpperCase() + d.slice(1))
      .join(" ")
  );
};
