import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { useDispatch } from 'react-redux';
import { setViewportMode } from '../../../redux/viewportRedux';

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const mode = width < 768 ? 'mobile' : width < 1024 ? 'tablet' : 'desktop';
      //console.log(`Viewport mode changed to: ${mode}`);
      dispatch(setViewportMode({ width, mode }));
    };
    handleResize(); // początkwe wywołanie, aby ustawić początkowy stan
    window.addEventListener('resize', handleResize); // dodanie nasluchiwnia na zmianę rozmiaru okna
  }, [dispatch]);

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
