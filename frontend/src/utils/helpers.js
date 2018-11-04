export const getJWT = () => localStorage.getItem("onpay-jwt");
export const authHeader = {
  headers: {
    Authorization: getJWT()
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
