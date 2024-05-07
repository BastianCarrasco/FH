import React from 'react';

function Hardware() {
  // Datos de ejemplo en forma de arreglos de objetos
  const impresorasTermicas = [
    { nombre: 'Impresora Térmica XYZ-100', marca: 'XYZPrint', precio: '$150', tienda: 'TechStore' },
    { nombre: 'Impresora Térmica SwiftPrint S200', marca: 'SwiftTech', precio: '$180', tienda: 'ElectroMall' },
    { nombre: 'Impresora Térmica ProLine PT-300', marca: 'ProLine', precio: '$200', tienda: 'MegaElectronics' },
    { nombre: 'Impresora Térmica NeoPrint NTX-500', marca: 'NeoTech', precio: '$220', tienda: 'FutureTech' },
    { nombre: 'Impresora Térmica RapidPrint R4000', marca: 'RapidTech', precio: '$190', tienda: 'DigitalWorld' },
    { nombre: 'Impresora Térmica MaxPrint M600', marca: 'MaxTech', precio: '$230', tienda: 'SmartGadget' },
    { nombre: 'Impresora Térmica TechLine T800', marca: 'TechLine', precio: '$210', tienda: 'GigaElectronics' },
    { nombre: 'Impresora Térmica UltraPrint UP-700', marca: 'UltraTech', precio: '$240', tienda: 'ElectroZone' },
    { nombre: 'Impresora Térmica NovaPrint N900', marca: 'NovaTech', precio: '$250', tienda: 'FutureStore' },
    { nombre: 'Impresora Térmica SmartPrint SP-1000', marca: 'SmartTech', precio: '$260', tienda: 'TechMart' }
  ];

  const monitores = [
    { nombre: 'Monitor LED UltraView UHD-27', marca: 'UltraView', precio: '$300', tienda: 'TechStore' },
    { nombre: 'Monitor HD EliteView E240', marca: 'EliteView', precio: '$250', tienda: 'ElectroMall' },
    { nombre: 'Monitor Gaming ProGamer PG-32X', marca: 'ProGamer', precio: '$400', tienda: 'MegaElectronics' },
    { nombre: 'Monitor Curvo UltraWide UW-34', marca: 'UltraWide', precio: '$350', tienda: 'FutureTech' },
    { nombre: 'Monitor 4K VisionTech V400', marca: 'VisionTech', precio: '$450', tienda: 'DigitalWorld' },
    { nombre: 'Monitor SlimView S300', marca: 'SlimView', precio: '$280', tienda: 'SmartGadget' },
    { nombre: 'Monitor TouchScreen TechTouch T500', marca: 'TechTouch', precio: '$380', tienda: 'GigaElectronics' },
    { nombre: 'Monitor IPS BrightView B200', marca: 'BrightView', precio: '$320', tienda: 'ElectroZone' },
    { nombre: 'Monitor UltraSlim US-25', marca: 'UltraSlim', precio: '$270', tienda: 'FutureStore' },
    { nombre: 'Monitor ErgoView E300', marca: 'ErgoView', precio: '$330', tienda: 'TechMart' }
  ];

  const tablets = [
    { nombre: 'Tablet SwiftPad S100', marca: 'SwiftPad', precio: '$200', tienda: 'TechStore' },
    { nombre: 'Tablet ProTab P200', marca: 'ProTab', precio: '$180', tienda: 'ElectroMall' },
    { nombre: 'Tablet NeoPad N300', marca: 'NeoPad', precio: '$220', tienda: 'MegaElectronics' },
    { nombre: 'Tablet NovaPad N400', marca: 'NovaPad', precio: '$250', tienda: 'FutureTech' },
    { nombre: 'Tablet VisionPad V500', marca: 'VisionPad', precio: '$280', tienda: 'DigitalWorld' },
    { nombre: 'Tablet TechPad T600', marca: 'TechPad', precio: '$230', tienda: 'SmartGadget' },
    { nombre: 'Tablet UltraTab U700', marca: 'UltraTab', precio: '$270', tienda: 'GigaElectronics' },
    { nombre: 'Tablet MaxPad M800', marca: 'MaxPad', precio: '$260', tienda: 'ElectroZone' },
    { nombre: 'Tablet SlimPad S900', marca: 'SlimPad', precio: '$240', tienda: 'FutureStore' },
    { nombre: 'Tablet SmartTab S2000', marca: 'SmartTab', precio: '$300', tienda: 'TechMart' }
  ];

  // Función para renderizar la tabla
  const renderTable = (data) => (
    <table style={{maxWidth: '100%'}}>
      <thead style={{maxWidth: '100%'}}>
        <tr>
          <th>Nombre</th>
          <th>Marca</th>
          <th>Precio</th>
          <th>Tienda</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.nombre}</td>
            <td>{item.marca}</td>
            <td>{item.precio}</td>
            <td>{item.tienda}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div style={{marginTop:"60px", textAlign:"left",fontSize:"24px", maxWidth: '100%'}}>
      <h2>Impresoras Térmicas</h2>
      {renderTable(impresorasTermicas)}

      <h2>Monitores</h2>
      {renderTable(monitores)}

      <h2>Tablets</h2>
      {renderTable(tablets)}
    </div>
  );
}

export default Hardware;
