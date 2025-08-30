// components/Tour.jsx

'use client';

import { useEffect } from 'react';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

const Tour = () => {
  useEffect(() => {
    // Definimos la instancia del driver
    const driverObj = driver({
      showProgress: true,
      steps: [
        {
          element: '#sidebar', // Selector CSS del primer elemento
          popover: {
            title: 'Menú principal',
            description:
              'Usa este menú para navegar entre las secciones de la aplicación.',
          },
        },
        {
          element: '#profile-button', // Selector CSS del segundo elemento
          popover: {
            title: 'Tu Perfil',
            description: 'Haz clic aquí para ver o editar tu información.',
          },
        },
        {
          element: '#main-dashboard', // Selector CSS del tercer elemento
          popover: {
            title: 'Dashboard de Actividad',
            description:
              'En esta área verás un resumen de todos tus proyectos y tareas.',
          },
        },
      ],
    });

    // Condición para iniciar el tour solo la primera vez que un usuario visita
    const hasVisited = localStorage.getItem('hasVisitedTour');
    if (!hasVisited) {
      driverObj.drive();
      localStorage.setItem('hasVisitedTour', 'true');
    }
  }, []); // El array vacío asegura que se ejecute solo una vez al montar el componente

  // Este componente no renderiza nada en la UI
  return null;
};

export default Tour;
