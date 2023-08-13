import React from 'react';
import Container from './Container';
import Image from 'next/image';
import banner from '@/assets/qna.avif'

const HomePageBanner = () => {
    return (
        <div className='py-20'>
            <Container>
                <div className="flex gap-5 justify-between">
                    <div>
                        {/* <Image src={banner} placeholder='blur' width={500} height={400} /> */}
                        <Image src='https://plus.unsplash.com/premium_photo-1661962335982-8b90fc8e2369?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' placeholder='blur' blurDataURL='data:image/webp;base64,UklGRgwDAABXRUJQVlA4WAoAAAAgAAAAvgAAfgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggHgEAANAMAJ0BKr8AfwA+7WitUS0wJCKotFySAB2JaW7gRrkBX/ypwTuEWFfUwovKF2+dXG8/0RmqKK463GBzx7cCSN6vaPBqZqsH3fBlKovuUtJYEY5xgNFrflQtoWhowPuGhWWL7XOSDRegBNu40VIDwAD+zkIMq9O9UoNrRlR65POwXvFFodZIwuJvbi6XOKJxhMoO+UC7vFtTGC/QvgPZUCg9WBQN9n50ATaxwmFRMkLxVxcMCZoh1LiQrGbhT7P/Z9TuJFNLEjUG+WVL5yImAYFnh6KirHSEhq2MgLbMwb7pu8ln5FREIuQ4ZU+WN7unoPNRbS4fQBBKmJpPaFMWOxmhkOmRPJisSZg8AjHL2/7KR5gagFIJ666zJwAAAAA=' width={500} height={400} alt='next-js-app-banner' />
                    </div>
                    <div className='mt-12'>
                        <h1 className="text-5xl mb-3 font-bold">My First Next Project</h1>
                        <p>I am Just Exploring a New Technology.</p>
                        <button className='mt-8 bg-green-400 px-4 py-3 font hover:bg-green-500 transition rounded-lg'>Create Your Apps</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HomePageBanner;