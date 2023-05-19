const QRCode = require('qrcode');

// Datos de ejemplo para el VCard
const vcardData = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  "N:Apellido;Nombre;;;",
  "FN:Emanuel Lezcano Aquino",
  "EMAIL:AquinoManu22@gmail.com",
  "TEL;TYPE=work,voice:+595994239074",
  "END:VCARD"
].join("\n");

// Genera el código QR como una cadena SVG
QRCode.toString(vcardData, { type: 'svg' }, function (err, svg) {
  if (err) throw err;
  console.log(svg);
});
