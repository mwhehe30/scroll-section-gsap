import '@/css/TextScroll.css';
import AnimatedText from './AnimatedText';

const TextScroll = () => {
  return (
    <section className='about'>
      <div className='header-about'>
        <h1>From Foundation to Future</h1>
      </div>
      <AnimatedText>
        <p>
          We believe in a holistic approach to creation. It starts with a strong
          foundation, uses the finest materials, follows a meticulous process,
          and always looks toward the future. Explore our methodology through
          the sections below.
        </p>
      </AnimatedText>
    </section>
  );
};

export default TextScroll;
