export const button5 = `
            <button class="unique-cssbuttons-io">
              <span>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                    fill="currentColor"
                  ></path>
                </svg>
                Code
              </span>
            </button>
            <style>
              .unique-cssbuttons-io {
                position: relative;
                font-family: inherit;
                font-weight: 500;
                font-size: 18px;
                letter-spacing: 0.05em;
                border-radius: 0.8em;
                cursor: pointer;
                border: none;
                background: linear-gradient(to right, #8e2de2, #4a00e0);
                color: ghostwhite;
                overflow: hidden;
              }
              .unique-cssbuttons-io svg {
                width: 1.2em;
                height: 1.2em;
                margin-right: 0.5em;
              }
              .unique-cssbuttons-io span {
                position: relative;
                z-index: 10;
                transition: color 0.4s;
                display: inline-flex;
                align-items: center;
                padding: 0.8em 1.2em 0.8em 1.05em;
              }
              .unique-cssbuttons-io::before,
              .unique-cssbuttons-io::after {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 0;
              }
              .unique-cssbuttons-io::before {
                content: "";
                background: #000;
                width: 120%;
                left: -10%;
                transform: skew(30deg);
                transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
              }
              .unique-cssbuttons-io:hover::before {
                transform: translate3d(100%, 0, 0);
              }
              .unique-cssbuttons-io:active {
                transform: scale(0.95);
              }
            </style>
          `;
