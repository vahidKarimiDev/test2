const isLogin = (user) => {
  const isCheck = user ? true : false;
  return isCheck;
};

const register = () => {
  const isRegister = isLogin ? true : false;

  console.log(isRegister);
};

const checkValue = (value) => {
  const values = value ? value : null;

  return values;
};
