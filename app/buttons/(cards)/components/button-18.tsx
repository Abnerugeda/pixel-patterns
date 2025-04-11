export const button18 = `
      <button class="space-btn" type="button">
        <strong class="space-text">SPACE</strong>
        <div class="stars-container">
          <div class="stars"></div>
        </div>
        <div class="glow-effect">
          <div class="glow-circle glow-circle1"></div>
          <div class="glow-circle glow-circle2"></div>
        </div>
      </button>
      <style>
        .space-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 13rem;
          height: 3rem;
          background-size: 300% 300%;
          cursor: pointer;
          backdrop-filter: blur(1rem);
          border-radius: 5rem;
          transition: 0.5s;
          animation: gradientAnimation 5s ease infinite;
          border: double 4px transparent;
          background-image: linear-gradient(#212121, #212121),
            linear-gradient(
              137.48deg,
              #ffdb3b 10%,
              #fe53bb 45%,
              #8f51ea 67%,
              #0044ff 87%
            );
          background-origin: border-box;
          background-clip: content-box, border-box;
          position: relative;
          overflow: hidden;
        }

        .stars-container {
          position: absolute;
          z-index: -1;
          width: 100%;
          height: 100%;
          overflow: hidden;
          transition: 0.5s;
          backdrop-filter: blur(1rem);
          border-radius: 5rem;
        }

        .space-text {
          z-index: 2;
          font-family: "Avalors Personal Use";
          font-size: 12px;
          letter-spacing: 5px;
          color: #ffffff;
          text-shadow: 0 0 4px white;
        }

        .glow-effect {
          position: absolute;
          display: flex;
          width: 12rem;
        }

        .glow-circle {
          width: 100%;
          height: 30px;
          filter: blur(2rem);
          animation: pulseAnimation 4s infinite;
          z-index: -1;
        }

        .glow-circle1 {
          background: rgba(254, 83, 186, 0.636);
        }

        .glow-circle2 {
          background: rgba(142, 81, 234, 0.704);
        }

        .space-btn:hover .stars-container {
          z-index: 1;
          background-color: #212121;
        }

        .space-btn:hover {
          transform: scale(1.1);
        }

        .space-btn:active {
          border: double 4px #fe53bb;
          background-origin: border-box;
          background-clip: content-box, border-box;
          animation: none;
        }

        .space-btn:active .glow-circle {
          background: #fe53bb;
        }

        .stars {
          position: relative;
          background: transparent;
          width: 200rem;
          height: 200rem;
        }

        .stars::after {
          content: "";
          position: absolute;
          top: -10rem;
          left: -100rem;
          width: 100%;
          height: 100%;
          animation: starRotateAnimation 90s linear infinite;
          background-image: radial-gradient(#ffffff 1px, transparent 1%);
          background-size: 50px 50px;
        }

        .stars::before {
          content: "";
          position: absolute;
          top: 0;
          left: -50%;
          width: 170%;
          height: 500%;
          animation: starAnimation 60s linear infinite;
          background-image: radial-gradient(#ffffff 1px, transparent 1%);
          background-size: 50px 50px;
          opacity: 0.5;
        }

        @keyframes starAnimation {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-135rem);
          }
        }

        @keyframes starRotateAnimation {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0);
          }
        }

        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes pulseAnimation {
          0% {
            transform: scale(0.75);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
          }
          100% {
            transform: scale(0.75);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
          }
        }
      </style>
    `;
