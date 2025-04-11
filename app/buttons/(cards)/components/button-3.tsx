export const button3 = `
          <button class="button-58392">
            <div class="icon-27384">
              <span class="text-icon-10894 hide">Icon</span>
              <svg
                class="css-i6dzq1-78932"
                stroke-linejoin="round"
                stroke-linecap="round"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                height="24"
                width="24"
                viewBox="0 0 24 24"
              >
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
              </svg>
            </div>
            <span class="title-12340">Anatomy</span>
            <div class="padding-left-90428 hide">
              <div class="padding-left-line-38217">
                <span class="padding-left-text-79421">Padding</span>
              </div>
            </div>
            <div class="padding-right-48562 hide">
              <div class="padding-right-line-92734">
                <span class="padding-right-text-15392">Padding</span>
              </div>
            </div>
            <div class="background-68273 hide">
              <span class="background-text-47215">Background</span>
            </div>
            <div class="border-97846 hide">
              <span class="border-text-56231">Radius</span>
            </div>
          </button>
          <style>
            .button-58392 {
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 10px;
              font-size: 14px;
              background-image: linear-gradient(#3470fa, #313ed7);
              color: white;
              border: solid 2px #0618db;
              height: 50px;
              padding: 0px 20px;
              border-radius: 5px;
              font-weight: 600;
              transform: scale(0.89);
              position: relative;
            }
            .button-58392:not(:hover) .hide,
            .button-58392:not(:hover) .icon-27384::before,
            .button-58392:not(:hover) .icon-27384::after {
              opacity: 0;
              visibility: hidden;
              transform: scale(1.4);
            }
            .hide {
              transition: all 0.2s ease;
            }
            .button-58392:active {
              background-image: linear-gradient(#313ed7, #3470fa);
              border-color: #313ed7;
            }
            .icon-27384 {
              position: relative;
            }
            .icon-27384::before {
              content: "";
              position: absolute;
              left: 0;
              top: 0;
              width: 6px;
              height: 6px;
              transform: translate(-50%, -50%);
              background-color: #ffffff;
              border-radius: 100%;
            }
            .icon-27384::after {
              content: "";
              position: absolute;
              right: 0;
              bottom: 0;
              transform: translate(-19%, -60%);
              width: 100px;
              height: 33px;
              background-color: transparent;
              border-radius: 12px 22px 2px 2px;
              border-right: solid 2px #ffffff;
              border-top: solid 2px transparent;
            }
            .icon-27384 .text-icon-10894 {
              color: #ffffff;
              position: absolute;
              font-size: 12px;
              left: -37px;
              top: -38px;
            }
            .icon-27384 svg {
              width: 20px;
              height: 20px;
              border: solid 2px transparent;
              display: flex;
            }
            .button-58392:hover .icon-27384 svg {
              border: solid 2px #ffffff;
            }
            .padding-left-90428 {
              position: absolute;
              width: 20px;
              height: 2px;
              background-color: #ffffff;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
            }
            .padding-left-90428:before {
              content: "";
              width: 2px;
              height: 10px;
              background-color: #ffffff;
              position: absolute;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
            }
            .padding-left-90428:after {
              content: "";
              width: 2px;
              height: 10px;
              background-color: #ffffff;
              position: absolute;
              right: 0;
              top: 50%;
              transform: translateY(-50%);
            }
            .padding-left-line-38217 {
              position: absolute;
              width: 30px;
              height: 2px;
              background-color: #ffffff;
              left: -24px;
              top: 11px;
              transform: rotate(-50deg);
            }
            .padding-left-line-38217::before {
              content: "";
              position: absolute;
              left: 0;
              top: 0;
              width: 6px;
              height: 6px;
              transform: translate(-50%, -50%);
              background-color: #ffffff;
              border-radius: 100%;
            }
            .padding-left-text-79421 {
              color: #ffffff;
              font-size: 12px;
              position: absolute;
              white-space: nowrap;
              transform: rotate(50deg);
              bottom: 30px;
              left: -67px;
            }
            .padding-right-48562 {
              position: absolute;
              width: 20px;
              height: 2px;
              background-color: #ffffff;
              right: 0;
              top: 50%;
              transform: translateY(-50%);
            }
            .padding-right-48562:before {
              content: "";
              width: 2px;
              height: 10px;
              background-color: #ffffff;
              position: absolute;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
            }
            .padding-right-48562:after {
              content: "";
              width: 2px;
              height: 10px;
              background-color: #ffffff;
              position: absolute;
              right: 0;
              top: 50%;
              transform: translateY(-50%);
            }
            .padding-right-line-92734 {
              position: absolute;
              width: 30px;
              height: 2px;
              background-color: #ffffff;
              right: -24px;
              top: 11px;
              transform: rotate(50deg);
            }
            .padding-right-line-92734::before {
              content: "";
              position: absolute;
              left: 30px;
              top: 0;
              width: 6px;
              height: 6px;
              transform: translate(-50%, -50%);
              background-color: #ffffff;
              border-radius: 100%;
            }
            .padding-right-text-15392 {
              color: #ffffff;
              font-size: 12px;
              position: absolute;
              white-space: nowrap;
              transform: rotate(-50deg);
              bottom: 34px;
              left: 21px;
            }
            .background-68273 {
              position: absolute;
            }
            .background-68273::before {
              content: "";
              position: absolute;
              right: 27px;
              bottom: -70px;
              width: 100px;
              height: 53px;
              background-color: transparent;
              border-radius: 0px 0px 22px 22px;
              border-right: solid 2px #ffffff;
              border-bottom: solid 2px transparent;
            }
            .background-68273::after {
              content: "";
              position: absolute;
              right: 25px;
              bottom: -20px;
              width: 6px;
              height: 6px;
              background-color: #ffffff;
              border-radius: 100%;
            }
            .background-text-47215 {
              position: absolute;
              color: #ffffff;
              font-size: 12px;
              bottom: -70px;
              left: -115px;
            }
            .border-97846 {
              position: absolute;
              right: 0;
              top: 0;
            }
            .border-97846:before {
              content: "";
              width: 15px;
              height: 15px;
              border: solid 2px #ffffff;
              position: absolute;
              right: 0%;
              top: 0;
              transform: translate(50%, -50%);
              border-radius: 100%;
            }
            .border-97846:after {
              content: "";
              width: 2px;
              height: 25px;
              background-color: #ffffff;
              position: absolute;
              right: -10px;
              top: -15px;
              transform: translate(50%, -50%) rotate(60deg);
            }
            .border-97846 .border-text-56231 {
              position: absolute;
              color: #ffffff;
              font-size: 12px;
              right: -65px;
              top: -30px;
              white-space: nowrap;
            }
          </style>
        `;
