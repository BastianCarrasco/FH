import React from 'react';

function Compania() {
  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>FULL$STOCK</h1>
      <div style={{ textAlign: 'left', maxWidth: '100%', fontSize:"26px" }}>
        <p><strong>Dirección:</strong> 123 Calle Ficticia, Ciudad Imaginaria, País Inventado</p>
        <p><strong>Teléfono:</strong> +123 456 789</p>
        <p><strong>Email:</strong> info@fullstock.com</p>
        <p><strong>Horario de atención:</strong> Lunes a Viernes: 9am - 5pm</p>
        <p><strong>Descripción:</strong> FULL$STOCK fue fundada en el año 2024 con la visión de abordar los desafíos que enfren
tan las pequeñas empresas en la gestión de inventarios y facturación. La idea surgió de la
 experiencia personal de los fundadores, quienes observaron la falta de soluciones accesibles
 y prácticas en el mercado para este segmento empresarial. Desde entonces, hemos traba
jado para desarrollar y perfeccionar nuestro producto, enfocándonos en la accesibilidad,
 la colaboración, la adaptabilidad, la eficiencia y la fiabilidad como pilares fundamentales
 de la empresa.</p>
        <p><strong>Misión:</strong> Nuestra misión es ayudar a nuestros clientes a optimizar sus operaciones comerciales mediante soluciones de punto de venta innovadoras y confiables.</p>
        <p><strong>Visión:</strong> Nos esforzamos por ser líderes en la industria de sistemas de punto de venta, ofreciendo productos y servicios de la más alta calidad que superen las expectativas de nuestros clientes.</p>
      </div>
    </div>
  );
}

export default Compania;
