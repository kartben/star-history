import React, { useState } from "react";
import TopBanner from "./TopBanner";
import GitHubStarButton from "./GitHubStarButton";
import TokenSettingDialog from "./TokenSettingDialog";
import Image from 'next/image';
import Icon from './icon.png';
import Link from 'next/link';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { IoIosMenu } from 'react-icons/io';


interface State {
  showDropMenu: boolean;
  showSetTokenDialog: boolean;
}

const Header: React.FC = () => {
  const [state, setState] = useState<State>({
    showDropMenu: false,
    showSetTokenDialog: false,
  });

  const handleSetTokenBtnClick = () => {
    setState((prevState) => ({
      ...prevState,
      showSetTokenDialog: true,
    }));
  };

  const handleSetTokenDialogClose = () => {
    setState((prevState) => ({
      ...prevState,
      showSetTokenDialog: false,
    }));
  };

  const handleToggleDropMenuBtnClick = () => {
    setState((prevState) => ({
      ...prevState,
      showDropMenu: !prevState.showDropMenu,
    }));
  };

  return (
    <>
      <TopBanner />
      <header className="w-full h-14 shrink-0 flex flex-row justify-center items-center bg-[#363636] text-light">
        <div className="w-full md:max-w-5xl lg:max-w-7xl h-full flex flex-row justify-between items-center px-0 sm:px-4">
          <div className="h-full bg-dark flex flex-row justify-start items-center">
    
          <Link
              href="/"
              className="h-full flex flex-row justify-center items-center px-4 hover:bg-zinc-800"
            >
              <Image className="w-7 h-auto" src={Icon}  width={500} height={500} alt="Logo" />
           </Link>
          
           <Link
              href="/blog"
              className="h-full flex flex-row justify-center items-center text-base px-5 hover:bg-zinc-800"
            >
              <span className="text-white font-semibold -2">Blog</span>
            </Link>


            <span
              className="h-full flex flex-row justify-center items-center cursor-pointer text-white text-base px-3 font-semibold mr-2 px-3 hover:bg-zinc-800"
              onClick={handleSetTokenBtnClick}
            >
              Add Access Token
            </span>
        

          </div>

          
          <div className="hidden h-full md:flex flex-row justify-start items-center">  <a href="/blog/how-to-use-github-star-history" className="h-full flex text-white text-base flex-row justify-center items-center px-4 hover:bg-zinc-800"> 
          <img className="h-6 mt-1 mr-2" src="https://star-history.com/craft-by-bytebase.webp" />

           </a></div>    

          <div className="h-full hidden md:flex flex-row justify-end items-center">
            <a
              className="h-full flex flex-row justify-center items-center px-2 hover:bg-zinc-800"
              href="https://twitter.com/StarHistoryHQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-3xl text-blue-300"/>
            </a>
            <a
              className="h-full flex flex-row justify-center items-center px-2 mr-2 hover:bg-zinc-800"
              href="https://discord.gg/yyzsmgcqg7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className="text-3xl text-indigo-400"/>
            </a>


            <GitHubStarButton />
            </div>

          </div>
          <div className="h-full flex md:hidden flex-row justify-end items-center">
            <span
              className="relative h-full w-10 px-3 flex flex-row justify-center items-center cursor-pointer font-semibold text-light hover:bg-zinc-800"
              onClick={handleToggleDropMenuBtnClick}
            >
              <span
                className={`w-4 transition-all h-px bg-light absolute top-1/2 ${
                  state.showDropMenu ? "w-6 rotate-45" : "-mt-1"
                }`}
              ></span>
              <span
                className={`w-4 transition-all h-px bg-light absolute top-1/2 ${
                  state.showDropMenu ? "hidden" : ""
                }`}
              ></span>
              <span
                className={`w-4 transition-all h-px bg-light absolute top-1/2 ${
                  state.showDropMenu ? "w-6 -rotate-45" : "mt-1"
                }`}
              ></span>
            </span>
          </div>
    


      </header>
      <div
        className={`w-full h-auto py-2 flex md:hidden flex-col justify-start items-start shadow-lg border-b ${
          state.showDropMenu ? "flex" : "hidden"
        }`}
      >
      
      <Link
          href="/blog/how-to-use-github-star-history"
          className="h-12 text-base px-3 w-full flex flex-row justify-start items-center cursor-pointer font-semibold text-dark mr-2 hover:bg-gray-100 hover:text-blue-500"
        >
          📕 How to use this site
        </Link>


        <span
          className="h-12 px-3 text-base w-full flex flex-row justify-start items-center cursor-pointer font-semibold text-dark mr-2 hover:bg-gray-100 hover:text-blue-500"
          onClick={handleSetTokenBtnClick}
        >
Add Access Token
        </span>

        
        <span className="h-12 text-base px-3 w-full flex flex-row justify-start items-center">
          <a
            className="github-button -mt-1"
            href="https://github.com/star-history/star-history"
            data-show-count="true"
            aria-label="Star star-history/star-history on GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            Star
          </a>
        </span>

      </div>

{state.showSetTokenDialog && <TokenSettingDialog onClose={handleSetTokenDialogClose} />}
  
    </>
  );
};

export default Header;