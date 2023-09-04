//Function for converting HTML elements in a string to their respective HTML code
function convertHTML(str) {
  const htmlCodes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '\"': '&quot;',
    '\'': '&apos;'
  };
  return str.replace(/[&<>'"]/g, match => htmlCodes[match])
}
