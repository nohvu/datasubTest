export const formatExpirationDate = (value, props) => {
  const clearNumber = (el) => {
    return el.toString().replace(/\D+/g, '');
  };

  const clearValue = clearNumber(value);

  if (clearValue.length >= 3) {
    const str = `${clearValue.slice(0, 2)}/${clearValue.slice(2, 6)}`;
    props.setFieldValue('expirationDate', str);
  } else {
    props.setFieldValue('expirationDate', clearValue);
  }
};
