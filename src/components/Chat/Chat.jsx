import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { Context } from "../../context";

import './chat.scss';

export default function Chat() {
  const { chatToggle, setChatToggle } = useContext(Context);

  return (
    <>
      <CSSTransition
        in={chatToggle}
        timeout={550}
        classNames={{
          enterActive: "chat-active",
          exitActive: "chat-hide",
        }}
        mountOnEnter
        unmountOnExit
      >
        <div className="chat">
          <div className="chat-logoImg">
            <img
              src="./img/chat-logoImg.svg"
              alt="chat"
              className="logoImg"
              onClick={() => setChatToggle(!chatToggle)}
            />
          </div>
          <div className="chat-content">
            <div className="chat-contentBorder">
              <div className="chat-placeMessage"></div>
              <div className="chat-inputWord">
                <img
                  width="18px"
                  height="18px"
                  src="./img/chat-message__button.svg"
                  alt=""
                  className="chat-message__button"
                />
                <input type="text" name="message" id="" />
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
