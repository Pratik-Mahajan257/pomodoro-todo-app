import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='absolute bottom-0 p-5 right-1/4 lg:right-auto   '>
      {/* Your page content goes here */}
      {children}
      
      {/* Fixed footer */}
      <Footer />
    </div>
  );
};

export default Layout;
