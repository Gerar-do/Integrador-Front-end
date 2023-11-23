import React, { useState, useEffect, Fragment } from 'react';
import Header from '../Components/Header';
import { Dialog, Transition } from '@headlessui/react';


const AdminUser = () => {
  const [userData, setUserData] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    // Reemplaza 'YOUR_API_URL' con la URL real de tu API http://localhost:3000/api/users
    const apiUrl = '';

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (userId) => {
    setSelectedUserId(userId);
    setIsDialogOpen(true);
  };

  const confirmDelete = async () => {
    try {
      // Reemplaza 'YOUR_API_URL' con la URL real de tu API http://localhost:3000/api/users/:id
      const apiUrl = `${selectedUserId}`;

      // Realiza la solicitud para eliminar el usuario con el ID seleccionado
      await fetch(apiUrl, { method: 'DELETE' });

      // Actualiza el estado después de la eliminación
      setUserData(userData.filter((user) => user._id !== selectedUserId));

      // Cierra el cuadro de diálogo después de eliminar
      setIsDialogOpen(false);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto">
        <br></br>
        <h1 className="text-2xl font-bold mb-4 p-8">Tabla de usuarios</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">_id</th>
                <th className="py-2 px-4 border-b">Username</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Password</th>
                <th className="py-2 px-4 border-b">CreatedAt</th>
                <th className="py-2 px-4 border-b">UpdatedAt</th>
                <th className="py-2 px-4 border-b">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                <tr key={user._id}>
                  <td className="py-2 px-4 border-b">{user._id}</td>
                  <td className="py-2 px-4 border-b">{user.username}</td>
                  <td className="py-2 px-4 border-b">{user.email}</td>
                  <td className="py-2 px-4 border-b">{user.password}</td>
                  <td className="py-2 px-4 border-b">{user.createdAt}</td>
                  <td className="py-2 px-4 border-b">{user.updatedAt}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="text-red-500 hover:text-red-700 focus:outline-none"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Diálogo de confirmación para eliminar */}
      <Transition show={isDialogOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setIsDialogOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle">&#8203;</span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Confirmar eliminación
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    ¿Estás seguro de que deseas eliminar este usuario?
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={confirmDelete}
                  >
                    Eliminar
                  </button>
                  <button
                    type="button"
                    className="ml-3 inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 border border-transparent rounded-md hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AdminUser;
