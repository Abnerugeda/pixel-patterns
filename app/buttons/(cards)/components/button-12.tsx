export const button12 = `
          <button class="unique-btn-101">
            <span class="unique-text-102">Delete</span>
            <span class="unique-icon-103">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
              </svg>
            </span>
          </button>
          <style>
            .unique-btn-101 {
              width: 150px;
              height: 50px;
              cursor: pointer;
              display: flex;
              align-items: center;
              background: #e62222;
              border: none;
              border-radius: 5px;
              box-shadow: 1px 1px 3px rgba(0,0,0,0.15);
              position: relative;
              transition: background 200ms, box-shadow 200ms;
            }

            .unique-btn-101, .unique-btn-101 span {
              transition: transform 200ms, color 200ms;
            }

            .unique-text-102 {
              transform: translateX(35px);
              color: white;
              font-weight: bold;
            }

            .unique-icon-103 {
              position: absolute;
              border-left: 1px solid #c41b1b;
              transform: translateX(110px);
              height: 40px;
              width: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: width 200ms, transform 200ms;
            }

            .unique-btn-101 svg {
              width: 15px;
              fill: #eee;
            }

            .unique-btn-101:hover {
              background: #ff3636;
            }

            .unique-btn-101:hover .unique-text-102 {
              color: transparent;
            }

            .unique-btn-101:hover .unique-icon-103 {
              width: 150px;
              border-left: none;
              transform: translateX(0);
            }

            .unique-btn-101:focus {
              outline: none;
            }

            .unique-btn-101:active .unique-icon-103 svg {
              transform: scale(0.8);
            }
          </style>
        `;
