const project =[
    {
      name: 'Red Hot Chili Peppers',
      desc: 'Pagina Web de la banda Red Hot Chili Peppers, con reproductor de musica con toda su discografía.',
      src: '/rhcp.jpg',
      code: 'https://github.com/Natclie/red-hot-chili-papers',
      preview: 'https://red-hot-chili-papers.vercel.app/',
      aos: 'fade-right',
      aos50: '50',
      aos100: '100',
      aos150: '150',
      aos200: '200',

      tech: [
          { name: 'Astro', icon: '/icons/Astro.svg'},
          { name: 'React', icon: '/icons/React.svg'},
          { name: 'Tailwind', icon: '/icons/Tailwind.svg'},
      ]
    },
    {
      name: 'Coscu Army Awards',
      desc: 'Pagina Web de los Coscu Army Awards, con modelo 3D interactivo.',
      src: '/army.png',
      code: 'https://github.com/Natclie/coscu-awards',
      preview: 'https://coscu-awards.vercel.app/',
      aos: 'fade-left',
      aos50: '50',
      aos100: '100',
      aos150: '150',
      aos200: '200',
      tech: [
          { name: 'Astro', icon: '/icons/Astro.svg'},
          { name: 'React', icon: '/icons/React.svg'},
          { name: 'Tailwind', icon: '/icons/Tailwind.svg'},
      ]
    }
]

const techStyles = {
    Astro: "text-orange-500 bg-orange-500/10 p-1 px-3 rounded-2xl shadow-xl shadow-orange-500/10",
    React: "text-blue-500 bg-blue-500/10 p- px-3 rounded-2xl shadow-xl shadow-blue-500/5",
    Tailwind: "text-cyan-500 bg-cyan-500/10 p-1 px-3 rounded-2xl shadow-xl shadow-cyan-500/5",
};

  
  const Projects = () => {
    return (
      <div className="flex justify-center gap-10 flex-wrap p-3">
        {project.map((project) => (
          <div className="w-[420px] max-[470px]:w-[320px]" key={project.name}>
            <img data-aos={project.aos} className="w-full mb-3 rounded-xl  shadow-xl shadow-purple-500/10" src={project.src} alt={project.desc} />
            <div className="flex flex-col gap-2">
              <h2 data-aos-delay={project.aos50} data-aos={project.aos} className="text-center text-3xl font-semibold">{project.name}</h2>
              <div data-aos={project.aos}  data-aos-delay={project.aos100} className="flex justify-center gap-4">
                {project.tech.map((tech) => (
                  <div className={`flex items-center gap-2 ${techStyles[tech.name] || "text-white"}`}>
                  <img className="w-4" src={tech.icon} alt={tech.name} />
                  <p className="text-sm font-semibold">{tech.name}</p>
              </div>
              
                ))}
              </div>
                <p data-aos={project.aos} data-aos-delay={project.aos150} className="flex text-center justify-center">{project.desc}</p>
            </div>
            <div data-aos={project.aos} data-aos-delay={project.aos200} className="flex justify-center py-3 gap-5">
              <a className="bg-white/10 border-1 shadow-xl shadow-white/10 hover:bg-white/20 duration-100 border-white rounded-3xl px-2 py-1" target="_blank" href={project.code}>
                <span className="flex items-center gap-1">
                <img src="/icons/Code.svg" alt="code icon svg" />
                <p>Code</p>
                </span>
              </a>
              <a className="bg-white/10 border-1 shadow-xl shadow-white/10 hover:bg-white/20 duration-100 border-white rounded-3xl px-3 py-1" target="_blank" href={project.preview}>
                <span className="flex items-center gap-1">
                  <img src="/icons/Eye.svg" alt="eye icon svg" />
                  <p>Preview</p>
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Projects;
  