import { useState } from "react";
const contact = [
    {
        name: 'github logo svg',
        icon: '/icons/Github.svg',
        value: 'Github',
        src: 'https://github.com/Natclie'
    },
    {
        name: 'linkedIn logo svg',
        icon: '/icons/Linkedin.svg',
        value: 'LinkedIn',
        src: 'https://www.linkedin.com/in/rudas00/'
    },
    {
        name: 'gmail logo svg',
        icon: '/icons/Gmail.svg',
        value: 'juanrudas2004@gmail.com',
        src: ''
    },
];


const ContactIcons = () => {
    const [copiedIndex, setCopiedIndex] = useState(null);

    const copyToClipboard = (value, index) => {
        navigator.clipboard.writeText(value);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 3000);
    };

    return (
        <div className="flex justify-center gap-5 flex-wrap">
            {contact.map((contact, index) => (
                <div key={index} className="relative">
                    {contact.src ? (
                        <a target="_blank" rel="noopener noreferrer" className="flex gap-1 bg-white/10 px-2 rounded-2xl border border-white/50 hover:bg-white/20 duration-100 shadow-xl shadow-white/10 hover:text-purple-200" href={contact.src}>
                            <img className="w-4" src={contact.icon} alt={contact.name} />
                            <p>{contact.value}</p>
                        </a>
                    ) : (
                        <button 
                            onClick={() => copyToClipboard(contact.value, index)} 
                            className="flex gap-1 cursor-pointer bg-white/10 px-2 rounded-2xl hover:bg-white/20 duration-100 border border-white/50 hover:text-purple-200 shadow-xl shadow-white/10">
                            <img className="w-4" src={contact.icon} alt={contact.name} />
                            <p>{contact.value}</p>
                        </button>
                    )}
                    {copiedIndex === index && (
                        <span className="absolute z-30 backdrop-blur-md top-full left-1/2 transform -translate-x-1/2 bg-white/10 border-1 border-white/50 hover:bg-white/20 text-purple-200 font-semibold text-xs px-2 py-1 rounded-2xl mt-3">
                            ¡Copiado!
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ContactIcons;
