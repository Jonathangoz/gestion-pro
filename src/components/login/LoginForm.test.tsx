// // src/components/login/LoginForm.test.tsx
// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { expect, test } from 'vitest';
// import LoginForm from './LoginForm';

// test('renders the login form with all fields', () => {
//   render(<LoginForm />);

//   // Probar que los campos de usuario y contraseña estén en el documento
//   const usernameInput = screen.getByLabelText(/usuario/i);
//   const passwordInput = screen.getByLabelText(/contraseña/i);
//   const submitButton = screen.getByRole('button', { name: /iniciar sesión/i });

//   expect(usernameInput).toBeInTheDocument();
//   expect(passwordInput).toBeInTheDocument();
//   expect(submitButton).toBeInTheDocument();
// });

// test('submits the form when fields are filled and button is clicked', async () => {
//   // Para este ejemplo, simulamos una función de envío del formulario
//   const mockSubmit = vitest.fn();

//   render(<LoginForm onSubmit={mockSubmit} />);
//   const user = userEvent.setup();

//   // Obtener los elementos por su rol
//   const usernameInput = screen.getByRole('textbox', { name: /usuario/i });
//   const passwordInput = screen.getByLabelText(/contraseña/i);
//   const submitButton = screen.getByRole('button', { name: /iniciar sesión/i });

//   // Simular la interacción del usuario
//   await user.type(usernameInput, 'testuser');
//   await user.type(passwordInput, 'password123');
//   await user.click(submitButton);

//   // Aserción: Comprobar que la función de envío fue llamada
//   expect(mockSubmit).toHaveBeenCalledTimes(1);
// });

/* 
render: Renderiza el componente en un entorno virtual.

screen: Proporciona métodos para buscar elementos en el componente renderizado.

userEvent.setup(): Crea una instancia que simula el comportamiento del usuario.

expect: La aserción que comprueba si una condición es verdadera.
*/
