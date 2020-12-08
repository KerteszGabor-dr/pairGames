.scene {
    width: 200px;
    height: 260px;
    perspective: 600px;
  }
  .card {
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 1s;
    transform-style: preserve-3d;
  }
  .card__face {
    position: absolute;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
  }
  .card__face--front {
    background: red;
  }
  
  .card__face--back {
    background: blue;
    transform: rotateY( 180deg );
  }
  .card.is-flipped {
    transform: rotateY(180deg);
  }