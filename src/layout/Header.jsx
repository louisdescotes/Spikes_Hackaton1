import React from "react";

export default function Header() {
  return (
    <header className="relative top-10">
      <nav className="bg-dark flex items-center justify-between py-[6px] px-[10px] rounded-[10px] w-full md:w-4/5 m-auto">
        <div className="">
          <img
            src="/fullLogoWhite.png"
          />
        </div>
        <div className="flex">
          <a href="" className="flex items-center text-white gap-[5px] px-[10px] py-[5px]">
            <svg
              width="19"
              height="13"
              viewBox="0 0 19 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_112)">
                <path
                  d="M7.42261 12.4998C12.4083 12.4998 15.1348 8.36786 15.1348 4.78475C15.1348 4.66741 15.1324 4.5506 15.1271 4.43427C15.6576 4.05026 16.1155 3.57479 16.4792 3.03015C15.9935 3.24615 15.4709 3.39153 14.9226 3.45708C15.4823 3.1214 15.9119 2.59033 16.1146 1.95731C15.5825 2.27307 15.0004 2.49566 14.3934 2.61549C13.8988 2.08843 13.1946 1.75879 12.4148 1.75879C10.918 1.75879 9.70411 2.97312 9.70411 4.46996C9.70411 4.68277 9.72793 4.88969 9.77444 5.08824C7.52164 4.97484 5.52402 3.89585 4.18711 2.25519C3.94632 2.66899 3.81967 3.1393 3.82009 3.61806C3.82009 4.55882 4.2986 5.38929 5.02631 5.87516C4.59586 5.86201 4.17486 5.7457 3.79871 5.53601C3.79831 5.5474 3.79831 5.55849 3.79831 5.57065C3.79831 6.88382 4.73262 7.98024 5.97289 8.22868C5.73995 8.29214 5.49958 8.32423 5.25815 8.32409C5.0838 8.32409 4.91388 8.30693 4.74873 8.27522C5.09382 9.3526 6.09445 10.1366 7.28083 10.1585C6.3531 10.8859 5.18444 11.3192 3.91429 11.3192C3.69822 11.3194 3.48233 11.3068 3.26773 11.2816C4.46734 12.0508 5.89177 12.4996 7.42274 12.4996"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_112">
                  <rect
                    width="17.8147"
                    height="12"
                    fill="white"
                    transform="translate(0.615387 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            Follow us on Twitter
          </a>
        </div>
      </nav>
    </header>
  );
}
