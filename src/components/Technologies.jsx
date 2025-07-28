const Tech = [
    {
        alt: 'astro svg icon',
        src: '/icons/Astro.svg',
        name: 'Astro',
        style: 'flex items-center gap-1 text-orange-500 bg-orange-500/10 px-2 rounded-2xl shadow-xl shadow-orange-500/10'
    },
    {
        alt: 'react svg icon',
        src: '/icons/React.svg',
        name: 'React',
        style: 'flex items-center gap-1 text-blue-500 bg-blue-500/10 px-2 rounded-2xl shadow-xl shadow-blue-500/10'
    },
    {
        alt: 'tailwind svg icon',
        src: '/icons/Tailwind.svg',
        name: 'Tailwind',
        style: 'flex items-center gap-1 text-cyan-500 bg-cyan-500/10 px-2 rounded-2xl shadow-xl shadow-cyan-500/10'
    },
    {
        alt: 'html svg icon',
        src: '/icons/Html.svg',
        name: 'Html',
        style: 'flex items-center gap-1 text-orange-400 bg-orange-400/10 px-2 rounded-2xl shadow-xl shadow-orange-500/10'
    },
    {
        alt: 'css svg icon',
        src: '/icons/Css.svg',
        name: 'Css',
        style: 'flex items-center gap-1 text-blue-600 bg-blue-600/10 px-2 rounded-2xl shadow-xl shadow-blue-600/10'
    },
    {
        alt: 'javascript svg icon',
        src: '/icons/JavaScript.svg',
        name: 'JavaScript',
        style: 'flex items-center gap-1 text-yellow-500 bg-yellow-500/10 px-2 rounded-2xl shadow-xl shadow-yellow-500/10'
    },
    {
        alt: 'github svg icon',
        src: '/icons/Github.svg',
        name: 'Github',
        style: 'flex items-center gap-1 text-white bg-white/10 px-2 rounded-2xl shadow-xl shadow-white/10'
    },
    {
        alt: 'git svg icon',
        src: '/icons/Git.svg',
        name: 'Git',
        style: 'flex items-center gap-1 text-orange-600 bg-orange-600/10 px-2 rounded-2xl shadow-xl shadow-orange-600/10'
    }
]

const Technologies = () => {
    return(
        <div className="flex gap-2 justify-center flex-wrap">
            {Tech.map((tech) =>(
                <div className={tech.style}>
                    <img className="w-4 h-4" src={tech.src} alt={tech.alt} />
                    <p>{tech.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Technologies