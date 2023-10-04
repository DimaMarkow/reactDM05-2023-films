import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Modal from 'components/Modal/Modal';

const NotFound = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setIsModalOpen(true);
    setTimeout(() => {
      navigate('/');
    }, 3000);
  }, [navigate]);

  return (
    <>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <main style={{ textAlign: 'center' }}>
            <b style={{ fontSize: 48 }}>404</b>
            <p>Sorry, we couldn't find that page...</p>
          </main>
        </Modal>
      )}
    </>
  );
};

export default NotFound;
