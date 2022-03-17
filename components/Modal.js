import React from 'react';
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";

const Modal = () => {
    const [open, setOpen] = useRecoilState(modalState);

    return (
        <div>
            もダル　です。よろしく

            {open &&
                <h1>I am Open</h1>
            }
        </div>
    )
}

export default Modal;