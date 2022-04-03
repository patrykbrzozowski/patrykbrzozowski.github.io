import React from 'react';
import '../../App.css';
import Footer from '../Footer';

function About() {
  return (
    <>
      <section className="about" id="about">
        <h2>O MNIE</h2>
        <div className="description">
          <div className="text">
            Nazywam się Patryk i jestem <span>studentem</span> Informatyki.
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            laborum neque nulla nisi distinctio dolorum, corrupti quibusdam
            ullam amet explicabo enim at dolorem nemo! Culpa optio dicta dolorum
            possimus nisi temporibus, consequatur et quis laborum ut ipsa
            blanditiis iste ullam odio, placeat accusantium? Inventore, eaque
            fuga hic maxime reiciendis amet atque voluptas quis rerum unde
            nostrum aliquid ab laborum in.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
