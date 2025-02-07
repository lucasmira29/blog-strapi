import { useEffect, useState } from 'react';
import './Footer.css';
import getData from '../../utils/fetchData.js';

function Footer() {
  

const [footerData, setFooterData] = useState({});


  useEffect(() => {
    async function fetch() {
      const response = await getData('/api/footer?populate=*');

      setFooterData(response.data);
    }

    fetch();
  }, []);

  const imageSrc = "http://localhost:1337" + footerData.logo?.formats?.thumbnail?.url;  
  

  return (
    <footer className="footer">
      <div className="footer-content">
        <img className='footer-logo' src={imageSrc} alt="Logo" />
        <p className="footer-text">
          {footerData.copyright_text}
        </p>
        <div className="footer-description">
          <p>{footerData.footer_description}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
