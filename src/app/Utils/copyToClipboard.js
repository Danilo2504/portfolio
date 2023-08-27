export const copyToClipboard = async (text) => {
  return await navigator.clipboard
    .writeText(text)
    .then(() => {
      alert(`Copiado al portapapeles: ${text}`);
    })
    .catch((error) => {
      alert(`Error al copiar al portapapeles: ${error}`);
    });
};
