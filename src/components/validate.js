const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required !';
  }
  if (!values.phone) {
    errors.phone = 'Required !';
  } else if (!/^[0-9,+-]{6,20}$/i.test(values.phone)) {
    errors.phone = 'min 6, max 20 digits. (should only be 0-9, -, +, (,) !)';
  }
  if (!values.email) {
    errors.email = 'Required !';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address !';
  }
  if (!values.address) {
    errors.address = 'Required !';
  } else if (values.address.length > 120) {
    errors.address = 'max 120 !';
  }
  if (!values.dropshipperName) {
    errors.dropshipperName = 'Required !';
  }
  if (!values.dropshipperPhone) {
    errors.dropshipperPhone = 'Required !';
  } else if (!/^[0-9,+-]{6,20}$/i.test(values.dropshipperPhone)) {
    errors.dropshipperPhone = '6-20 digits. should 0-9,-,+,(,)';
  }
  return errors;
};

export default validate;
