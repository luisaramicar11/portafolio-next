import React from "react";
import Image from "next/image";

interface IPropsProject {
    id: string;
    src: string;
    alt: string;
    title: string;
    summary: string;

}

const propsProject: IPropsProject[] = [
    {   
        id: "trabajo-1",
        src: "/portfolio-1.jpg",
        alt: "Trabajo 1",
        title: "Productos (CRUD)",
        summary: "Este es un proyecto de una tienda en línea que permite realizar operaciones CRUD de productos."
    },
    {   
        id: "trabajo-2",
        src: "/portfolio-2.jpg",
        alt: "Trabajo 2",
        title: "Proyecto Juntana",
        summary: " Juntana es una plataforma que ofrece planes turísticos personalizados para visitar comunidades indígenas en Colombia."
    },
    {   
        id: "trabajo-3",
        src: "/portfolio-3.jpg",
        alt: "Trabajo 3",
        title: "Proyecto Ecommerce",
        summary: "La aplicación es una solución responsive que consume servicios de la API de Marvel e incluye un e-commerce."
    },
]

const Project: React.FC<{ onClick: (id: string) => void }> = ({onClick}) => {
    return (
        <>
            {
                propsProject.map((project, index) => (
                    <div key={index} 
                    className="relative w-full h-96 mb-8"
                    onClick={()=> onClick(project.id)}
                    >
                        <Image
                            src={project.src}
                            alt={project.alt}
                            layout="fill"
                            objectFit="cover"
                        />
                        <aside className="absolute top-0 left-0 w-full h-full bg-first-alpha-color text-white-color p-4 opacity-0 pointer-events-none transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:pointer-events-auto">
                            <div className="p-4 border border-white-color w-full h-full">
                                <h3>{project.title}</h3>
                                <p>{project.summary}</p>
                            </div>
                        </aside>
                    </div>
                ))
            }
        </>
    )
}

export default Project
