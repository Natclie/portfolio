import { useEffect, useState } from "react";

const gall = [
    { src: '/me.jpg', alt: 'juan rudas' },
    { src: '/me2.jpg', alt: 'juan rudas graduado' },
    { src: '/me3.jpg', alt: 'juan rudas foto con diploma' }
];

const Gallery = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % gall.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative shadow-purple-500/10 shadow-xl w-140 h-38 overflow-hidden rounded-2xl flex justify-center">
            <div 
                className="absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateY(-${index * 100}%)` }}
            >
                {gall.map((gallery, i) => (
                    <div key={i} className="w-140 h-38">
                        <img 
                            className="object-cover object-[20%_30%] h-full w-full"
                            src={gallery.src} 
                            alt={gallery.alt} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;