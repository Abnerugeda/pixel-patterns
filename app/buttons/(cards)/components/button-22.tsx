export const button22 = `
      <button class="btn-binary-pulse">
        Hover me
      </button>
      <style>
        .btn-binary-pulse {
  width: 10em;
  position: relative;
  height: 3.5em;
  border: 3px ridge #149CEA;
  outline: none;
  background-color: transparent;
  color: white;
  transition: 1s;
  border-radius: 0.3em;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

.btn-binary-pulse::after {
  content: "";
  position: absolute;
  top: -10px;
  left: 3%;
  width: 95%;
  height: 40%;
  transition: 0.5s;
  transform-origin: center;
}

.btn-binary-pulse::before {
  content: "";
  transform-origin: center;
  position: absolute;
  top: 80%;
  left: 3%;
  width: 95%;
  height: 40%;
  transition: 0.5s;
}

.btn-binary-pulse:hover::before, .btn-binary-pulse:hover::after {
  transform: scale(0);
}

.btn-binary-pulse:hover {
  box-shadow: inset 0px 0px 25px #1479EA;
}
      </style>
    `;
