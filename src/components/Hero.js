import React from 'react';

const Hero = ({ title, subtitle }) => (
  <section class="hero is-primary is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {title}
        </h1>
        <h2 class="subtitle">
          {subtitle}
        </h2>
      </div>
    </div>
  </section>
);

export default Hero;
