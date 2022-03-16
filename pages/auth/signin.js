import React from 'react';
import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";
import Image from 'next/image';

const SignIn = ({ providers }) => {
    return (
        <>
            <Header />
            <div className='flex items-center justify-center flex-col min-h-screen -mt-36 px-14 py-2'>
                <img src="https://links.papareact.com/ocw" alt="logo" className='w-80' />
                <div className='mt-40'>
                    {Object.values(providers).map((provider) => (
                        <div key={provider?.name}>
                            <button className='p-3 bg-blue-500 font-semibold text-white rounded-lg' onClick={() => signIn(provider.id)}>
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default SignIn;

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers,
        }
    }
}