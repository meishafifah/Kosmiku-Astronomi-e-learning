import React, { useState } from 'react'
import profile from '../assets/decoration/profile.png'
import chatbot from '../assets/decoration/chatbot.png'
import iconChatbot from '../assets/decoration/iconChatbot.png'
import closeChatbot from '../assets/decoration/closeChatbot.svg'
import send from '../assets/decoration/send.svg'

export default function Chatbot() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className='relative z-20'>
      <button className='z-20' type='button' onClick={() => setOpenMenu(!openMenu)} >
        <img className='fixed right-4 bottom-4 md:right-12 md:bottom-10 w-14 md:w-20 lg:w-24 2xl:w-32' src={chatbot} alt="" />
      </button>

      <div onClick={() => setOpenMenu(false)} className={`duration-500 fixed inset-0 bg-black z-20 ${openMenu ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}></div>

      {
        openMenu && (
          <div className="duration-500 fixed z-50 md:right-12 bottom-10 rounded-3xl border border-white m-4 md:m-0 p-4 text-white bg-landing ">
            <div className="relative">
              <div className='z-50 absolute -right-5 md:left-[390px] -top-8 lg:-top-10 w-8 lg:w-11' onClick={() => setOpenMenu(!openMenu)} >
                <img src={closeChatbot} alt="" />
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center justify-start">
              <img className='w-12 h-12' src={iconChatbot} alt="" />
              <h4 className='text-2xl font-bold'>Kosmibot</h4>
            </div>
            <hr className='text-based-1 my-4' />
            <div className="w-full h-[200px] md:w-[400px] lg:h-[400px] overflow-y-auto">
              <div className="flex flex-col gap-4">

                <div className="rounded-[32px] w-4/5 bg-white/10 p-4">
                  <div className="flex flex-row gap-4 items-center">
                    <img className='w-11 h-11 rounded-full' src={iconChatbot} alt="" />
                    <div>
                      <h4 className='text-base font-bold'>Kosmibot</h4>
                      <h4 className='text-base text-based-1'>1 minute ago</h4>
                    </div>
                  </div>
                  <p className='mt-4 text-sm md:text-base'>Hai! Saya KosmiBot, sahabatmu dalam petualangan menyelami rahasia alam semesta. Ada yang ingin kamu tanyakan tentang luar angkasa?</p>
                </div>

                <div className="flex justify-end">
                  <div className="rounded-[32px] w-4/5 bg-based-1/20 p-4">
                    <div className="flex flex-row gap-4 items-center">
                      <img className='w-11 h-11 rounded-full' src={profile} alt="" />
                      <div>
                        <h4 className='text-base font-bold'>Paduka Javier</h4>
                        <h4 className='text-base text-based-1'>1 minute ago</h4>
                      </div>
                    </div>
                    <p className='mt-4 text-sm md:text-base'>Hai bot, apakah ada mitos angkasa biar dapet jodoh? :(</p>
                  </div>
                </div>

                <div className="rounded-[32px] w-4/5 bg-white/10 p-4">
                  <div className="flex flex-row gap-4 items-center">
                    <img className='w-11 h-11 rounded-full' src={iconChatbot} alt="" />
                    <p className='text-based-1 text-sm md:text-base'>Sedang Berpikir...</p>
                  </div>
                </div>

              </div>
            </div>
            <form action="" className='relative'>
              <input className='p-4 mt-4 border border-based-1 w-full rounded-[60px] text-sm md:text-base text-white bg-landing pr-14 focus:outline-none focus:bg-landing focus:text-gray-900' type="text" name="" id="" placeholder="Tanyakan pada kosmikbot" autocomplete="off" />
              <button className='absolute top-6 right-3'><img className='w-9' src={send} alt="" /></button>
            </form>
          </div>
        )
      }
    </div>
  )
}
