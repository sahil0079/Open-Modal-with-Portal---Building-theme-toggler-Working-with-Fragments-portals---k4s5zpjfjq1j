import { useState } from 'react';
import Modal from '../components/Modal';

const HomePage = () => {
  

  return (
    <div>
      <button>Open Modal</button>

      <Modal >
        <h2>This is a Modal</h2>
        <p>Using React Portals with Next.js</p>
        <button >Close Modal</button>
      </Modal>
    </div>
  );
};

export default HomePage;
