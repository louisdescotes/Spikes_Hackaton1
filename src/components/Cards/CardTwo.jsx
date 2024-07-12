import React from 'react'

export default function CardTwo() {
  return (
    <article className="relative max-w-80 flex-1 bg-white rounded-[10px] w-fit h-full px-4 py-6">
    <section className="flex flex-col justify-between h-full gap-4 jus">
      <div className="w-fit h-12 flex gap-[26px] ">
        <div className="flex gap-3">
          <div className="h-12 w-12 relative p-4 flex justify-center items-center">
            <div className="absolute  bg-[#EC9D40] opacity-10 rounded-full w-full h-full "></div>
            <svg
              className="z-10"
              width="17"
              height="22"
              viewBox="0 0 17 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.54534 6.00021V6.39826H1.92989C1.44862 6.39826 1.04017 6.75122 0.970397 7.2274L0.735069 8.83352C0.275526 11.9699 0.275525 15.1565 0.735069 18.2929C0.94098 19.6982 2.07423 20.7847 3.487 20.9312L4.16376 21.0014C7.1513 21.3112 10.1629 21.3112 13.1504 21.0014L13.8272 20.9312C15.24 20.7847 16.3732 19.6982 16.5791 18.2929C17.0387 15.1565 17.0387 11.9699 16.5791 8.83352L16.3438 7.22741C16.274 6.75122 15.8656 6.39826 15.3843 6.39826H13.7688V6.00021C13.7688 3.66738 12.1895 1.63049 9.93013 1.04951C9.09502 0.834773 8.21916 0.834773 7.38406 1.04951C5.12472 1.63049 3.54534 3.66737 3.54534 6.00021ZM9.52812 2.61289C8.95673 2.46596 8.35746 2.46596 7.78607 2.61289C6.24021 3.0104 5.15958 4.40406 5.15958 6.00021V6.39826H12.1546V6.00021C12.1546 4.40406 11.074 3.0104 9.52812 2.61289ZM5.15958 8.01249C5.15958 7.56673 4.79822 7.20538 4.35246 7.20538C3.9067 7.20538 3.54534 7.56673 3.54534 8.01249V10.1648C3.54534 10.6106 3.9067 10.9719 4.35246 10.9719C4.79822 10.9719 5.15958 10.6106 5.15958 10.1648V8.01249ZM13.7688 8.01249C13.7688 7.56673 13.4075 7.20538 12.9617 7.20538C12.516 7.20538 12.1546 7.56673 12.1546 8.01249V10.1648C12.1546 10.6106 12.516 10.9719 12.9617 10.9719C13.4075 10.9719 13.7688 10.6106 13.7688 10.1648V8.01249Z"
                fill="#EC9D40"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-around">
            <div className="bg-[#0A071BB2] opacity-10 rounded-[50px] w-32 h-3"></div>
            <div className="bg-[#0A071BB2] opacity-10 rounded-[50px] w-16 h-3"></div>
          </div>
        </div>
        <div className="flex items-center gap-2">
        <span className="font-bold text-2xl">27k</span>
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.808 0.937012H0.337372L6.07267 7.15025L11.808 0.937012Z" fill="#8DDD2B"/>
</svg>

        </div>
      </div>
      <div className="flex items-center justify-between">
        <img src="/public/User1.png" alt="" />
        <img src="/public/User2.png" alt="" />
        <img src="/public/User3.png" alt="" />
        <img src="/public/User4.png" alt="" />
        <div className="flex items-center justify-center bg-[#E9EEF6] rounded-full w-[41.1px] h-[41.1px] font-medium text-sm">12K+</div>
      </div>
    </section>
  </article>
  )
}
