export const button14 = `
          <button class="unique-clickme-201">Click me!</button>
          <style>
            .unique-clickme-201 {
              padding: 15px 25px;
              border: unset;
              border-radius: 15px;
              color: #212121;
              z-index: 1;
              background: #e8e8e8;
              position: relative;
              font-weight: 1000;
              font-size: 17px;
              -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
              box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
              transition: all 250ms;
              overflow: hidden;
            }

            .unique-clickme-201::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              height: 100%;
              width: 0;
              border-radius: 15px;
              background-color: #212121;
              z-index: -1;
              -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
              box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
              transition: all 250ms;
            }

            .unique-clickme-201:hover {
              color: #e8e8e8;
            }

            .unique-clickme-201:hover::before {
              width: 100%;
            }
          </style>
        `;
