export const getBase64 = (file) =>
  new Promise(function (res, rej) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => res(reader.result);
    reader.onerror = (error) => rej('Error', error);
  });
