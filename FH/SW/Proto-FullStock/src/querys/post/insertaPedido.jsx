// pedidoApi.js

import axios from 'axios';

const url = 'http://localhost:3000/insertarPedido';

const insertarPedido = async (pedidoData) => {
  try {
    const response = await axios.post(url, pedidoData);
    console.log('Respuesta del servidor:', response.data); // Aquí puedes manejar la respuesta del servidor
    return response.data;
  } catch (error) {
    console.error('Error al insertar pedido:', error);
    throw new Error('Error al insertar pedido'); // Lanza un nuevo error para que se maneje en el componente que llama a esta función
  }
};

export default insertarPedido;
