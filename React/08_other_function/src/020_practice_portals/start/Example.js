import { useState } from "react";
import { createPortal } from "react-dom";

import Toast from "./components/Toast";


const ModalPortal = ({children}) => {
  const parent = document.querySelector('.container,start')
  return createPortal(children, parent)
}
const Example = () => {
  const [toastOpen, setToastOpen] = useState(false);

  return (
    <div>
      <h3>
        トーストの作成（createPortal）
      </h3>
      <p>ボタンを押すと.container.start要素にマウントされて、表示されるトーストを作成してください。トーストにはToastコンポーネントを使用してください。</p>

      <div className="container start"></div>
      
      <button
        type="button"
        onClick={() => setToastOpen(true)}
        disabled={toastOpen}
      >
        トーストを表示する
      </button>
      {toastOpen && (
        <ModalPortal>
          <Toast
            visible={toastOpen}
            handleCloseClick={() => setToastOpen(false)}
          />
        </ModalPortal>
      )}
      
    </div>
  );
};

export default Example;
