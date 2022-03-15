import React from 'react';
import { getProviders, signIn } from "next-auth/react";

const SignIn = ({ providers }) => {
    return (
        <>
            {Object.values(providers).map((provider) => (
                <div key={provider?.name}>
                    <button onClick={() => signIn(provider.id)}>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
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