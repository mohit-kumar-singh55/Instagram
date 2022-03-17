import React, { Fragment } from 'react';
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";
import { Dialog, Transition } from "@headlessui/react";

const Modal = () => {
    const [open, setOpen] = useRecoilState(modalState);

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className='fixed z-10 inset-0 overflow-y-auto'
                onClose={setOpen}
            >
                <div className='flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-out duration-300'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <Dialog.Overlay />
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default Modal;