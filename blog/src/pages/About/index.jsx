import { useEffect, useState } from 'react';
import './About.css';
import getData from '../../utils/fetchData';

function About() {

  const [aboutData, setAboutData] = useState({});

  useEffect(() => {
    async function fetch() {
      const response = await getData('/api/about?populate=*');
      setAboutData(response.data);
    }
    
    fetch();
  }, [])
  
  const imageSrc = "http://localhost:1337" + aboutData.aboutImage?.formats?.medium?.url;
  
  return (
    <section className='about-container'>
      <img className='about-image' src={imageSrc} alt="Imagem Sobre Nós" />
      <div className='about-text-box'>
        <h2 className='about-title'>{aboutData.title}</h2>
        <p className='about-content-text'>
          {aboutData.aboutContent}
        </p>
      </div>
    </section>
  )
}


export default About;