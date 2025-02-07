import './Container.css';

// eslint-disable-next-line react/prop-types
function Container({ children }) {
  return (
    <main className='container'>
      {children}
    </main>
  ) 
}

export default Container;