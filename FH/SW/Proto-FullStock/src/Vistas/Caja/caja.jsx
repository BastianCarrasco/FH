import React, { useState } from 'react';
import MenuArray from '../../querys/getMenuarray';
import insertarPedido from '../../querys/post/insertaPedido';
import jsPDF from 'jspdf';
import Modal from './ventana';

function Caja() {
  const menu = MenuArray();
  const [selectedItems, setSelectedItems] = useState([]);
  const [showSummary, setShowSummary] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [barcode, setBarcode] = useState('');

  // Función para manejar la adición de un ítem al pedido
  const handleAddItem = (item) => {
    const itemIndex = selectedItems.findIndex((selectedItem) => selectedItem.id === item.id);
    if (itemIndex !== -1) {
      const updatedItems = [...selectedItems];
      updatedItems[itemIndex].count += 1;
      updatedItems[itemIndex].totalPrice = updatedItems[itemIndex].count * item.precio;
      setSelectedItems(updatedItems);
    } else {
      setSelectedItems([...selectedItems, { ...item, count: 1, totalPrice: item.precio }]);
    }
  };

  // Función para generar un código aleatorio de 9 dígitos
  const generateRandomCode = () => {
    return Math.floor(100000000 + Math.random() * 900000000);
  };

  // Función para generar el PDF de la boleta
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Boleta de Pedido', 20, 20);
    doc.setFontSize(12);

    let yPos = 30;
    selectedItems.forEach((item, index) => {
      yPos += 5;
      doc.text(`Producto: ${item.nombre}`, 5, yPos);
      yPos += 5;
      doc.text(`Precio Unitario: $${item.precio}`, 5, yPos);
      yPos += 5;
      doc.text(`Cantidad: ${item.count}`, 5, yPos);
      yPos += 5;
      doc.text(`Precio: $${item.totalPrice}`, 5, yPos);
      yPos += 5;
    });
    doc.setFontSize(18);
    yPos += 10;
    doc.text(`Numero de Orden: ${orderNumber}`, 5, yPos);
    yPos += 10;
    doc.text(`Total: $${totalPrice}`, 5, yPos);
    yPos += 10;
    doc.text(`Barcode: ${barcode}`, 5, yPos);

    doc.save('boleta.pdf');

    // Insertar cada pedido individualmente
    selectedItems.forEach((item) => {
      const pedidoData = {
        nombre: item.nombre,
        precio: item.precio,
        tipo: item.tipo,
        stock: item.stock,
        cantidad: item.count,
        total: item.precio*item.count,
        numero_orden: orderNumber,
        codigo_barras: barcode
      };

      insertarPedido(pedidoData)
        .then(() => {
          console.log('Pedido insertado correctamente');
          // Opcional: Puedes agregar lógica adicional después de insertar cada pedido si es necesario
        })
        .catch((error) => {
          console.error('Error al insertar pedido:', error);
          // Maneja el error según tus necesidades
        });
    });

    // Limpiar los items seleccionados después de insertar los pedidos
    setSelectedItems([]);
    setShowSummary(false); // Opcional: cerrar el resumen después de insertar los pedidos
  };

  // Función para mostrar el resumen y generar el número de orden y código de barras
  const showSummaryAndGenerateData = () => {
    let total = 0;
    selectedItems.forEach((item) => {
      total += item.totalPrice;
    });
    const orderNum = generateRandomCode();
    const randomBarcode = generateRandomCode();
    const formattedTotal = total;
    setTotalPrice(formattedTotal);
    setOrderNumber(orderNum);
    setBarcode(randomBarcode);
    setShowSummary(true);
  };

  // Función para cerrar el resumen
  const closeSummary = () => {
    setShowSummary(false);
  };

  return (
    <div className="caja-container" style={{ width: "100%" }}>
      <h1 style={{ marginBottom: '20px' }}>Caja</h1>
      <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', alignItems: 'flex-start' }}>
        <div style={{ flex: '1', textAlign: 'left' }}>
          <h2 style={{ marginBottom: '20px' }}>Pedido</h2>
          <div style={{ width: '100%', overflowY: 'auto', maxHeight: '50vh' }}>
            <table style={{ width: '100%' }}>
              <thead>
                <tr style={{ textAlign: 'center' }}>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Tipo</th>
                  <th>Stock</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {selectedItems.map((item, index) => (
                  <tr key={index} >
                    <td>{item.nombre}</td>
                    <td style={{ textAlign: 'center' }}>${item.precio}</td>
                    <td style={{ textAlign: 'center' }}>{item.tipo}</td>
                    <td style={{ textAlign: 'center' }}>{item.stock}</td>
                    <td style={{ textAlign: 'center' }}>{item.count}</td>
                    <td>${item.totalPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div style={{ flex: '1', marginLeft: '20px', marginRight: '100px', textAlign: 'left' }}>
          <h2 style={{ marginBottom: '20px' }}>Menú</h2>
          <div style={{ overflowY: 'auto', maxHeight: '50vh' }}>
            {menu.map((item) => (
              <button key={item.id} onClick={() => handleAddItem(item)} style={{ marginRight: '20px', marginBottom: '5px' }}>
                {item.nombre}
              </button>
            ))}
          </div>
        </div>
        <div style={{ flex: '1', textAlign: 'left' }}>
          <h2 style={{ marginBottom: '20px' }}>Acciones</h2>
          {showSummary &&
            <button onClick={generatePDF} style={{ marginBottom: '10px' }}>
              Generar Boleta en PDF
            </button>
          }
          <br />
          <button onClick={showSummaryAndGenerateData}>
            Mostrar Resumen y Datos
          </button>
          <Modal
            isOpen={showSummary}
            closeModal={closeSummary}
            totalPrice={totalPrice}
            orderNumber={orderNumber}
            barcode={barcode}
          />
        </div>
      </div>
    </div>
  );
}

export default Caja;
