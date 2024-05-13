import React from 'react';
import mockup_dashboard from '../assets/MacBook Pro 16 dashboard.png'; 
import mockup_summary from '../assets/MacBook Pro 16 summary.png'; 
import mockup_inventory from '../assets/MacBook Pro 16 inventory.png'; 

function Features() {
  return (
    <div>

      <section>
      <div className="flex h-screen w-full bg-fondo">

        <div className="w-1/2 flex items-center justify-center">
          <img src={mockup_dashboard} />
        </div>

        <div className="w-1/2 flex flex-col justify-center items-start p-12 text-white">
          <h1 className="text-3xl font-bold text-white mb-5">Interfaz de venta fácil</h1>
          <p className="text-m font-poppins text-white">
            Acelere su caja con funciones potentes y flexibles. Busque rápidamente el producto 
            escribiendo palabras clave o utilizando un escáner de código de barras. 
            Añada descuentos que se aplicarán a todos los artículos o a artículos concretos.
          </p>
        </div> 

      </div>
      </section>

      <section>
        <div className="flex h-screen w-full bg-fondo-light">

        <div className="w-1/2 flex flex-col justify-center items-start p-12 text-white">
          <h1 className="text-3xl font-bold text-white mb-5">Resumen de ventas</h1>
          <p className="text-m font-poppins text-white">
            Personaliza tus informes de ventas para ver fácilmente cómo están funcionando tus tiendas, qué productos te están haciendo ganar más dinero y descubre quiénes son tus mejores vendedores. Todos tus datos se almacenan de forma segura en la nube, para que puedas obtener tus informes desde donde estés, a cualquier hora del día.
          </p>
        </div> 

        <div className="w-1/2 flex items-center justify-center">
          <img src={mockup_summary}/>
        </div>

        </div>
      </section>

      <section>
        <div className="flex h-screen w-full bg-fondo">

          <div className="w-1/2 flex items-center justify-center">
            <img src={mockup_inventory} />
          </div>

          <div className="w-1/2 flex flex-col justify-center items-start p-12 text-white">
            <h1 className="text-3xl font-bold text-white mb-5">Control de inventario</h1>
            <p className="text-m font-poppins text-white">
              Añada rápidamente productos por cantidad o variante (tamaño, color, etc.), por categoría de producto y suba fotos del producto con sólo unos pocos pasos. Desactive o active un producto para que se visualice en la aplicación. Obtenga mayor control del inventario de su tienda agregando, modificando y eliminando productos.
            </p>
          </div> 

        </div>
      </section>

    </div>
    
  );
}

export default Features;
