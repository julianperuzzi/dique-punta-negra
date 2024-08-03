function ContactDirectoryScreen() {
    return (
      <div className="bg-white py-12 px-6" data-aos="fade-up">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Directorio de Contactos</h2>
          <ul className="space-y-4">
            <li className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Restaurante La Costa</h3>
              <p>Teléfono: (123) 456-7890</p>
              <p>Dirección: Av. del Lago 123</p>
            </li>
            <li className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Alquiler de Kayaks Punta Negra</h3>
              <p>Teléfono: (098) 765-4321</p>
              <p>Dirección: Calle de los Deportes 456</p>
            </li>
            {/* Agrega más contactos aquí */}
          </ul>
        </div>
      </div>
    );
  }
  
  export default ContactDirectoryScreen;
  