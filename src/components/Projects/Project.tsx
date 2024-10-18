import React from "react";
import Image from "next/image";
import styles from "./project.module.css";

interface IPropsProject {
    id: string;
    src: string;
    alt: string;
    title: string;
    summary: string;
}

const propsProject: IPropsProject[] = [
    {   
        "id": "trabajo-1",
        "src": "/portfolio-1.jpg",
        "alt": "Work 1",
        "title": "Products (CRUD)",
        "summary": "This is an online store project that allows CRUD operations on products."
    },
    {   
        "id": "trabajo-2",
        "src": "/portfolio-2.jpg",
        "alt": "Work 2",
        "title": "Juntana Project",
        "summary": "Juntana is a platform that offers personalized tourist plans to visit indigenous communities in Colombia."
    },
    {   
        "id": "trabajo-3",
        "src": "/portfolio-3.jpg",
        "alt": "Work 3",
        "title": "Ecommerce Project",
        "summary": "The application is a responsive solution that consumes services from the Marvel API and includes an e-commerce."
    },
    {   
        "id": "trabajo-4",
        "src": "/portfolio-4.png",
        "alt": "Work 4",
        "title": "SkillSwap",
        "summary": "SkillSwap is a modern platform designed to facilitate skill exchange, connecting people in the digital environment who want to learn with those willing to share their knowledge."
    }
]

const Project: React.FC<{ onClick: (id: string) => void }> = ({onClick}) => {
    return (
        <>
            {
                propsProject.map((project, index) => (
                    <div 
                        key={index} 
                        className="relative w-full h-96 mb-8 group "  // Añadir 'group' aquí
                        onClick={() => onClick(project.id)}
                    >
                        <Image
                            src={project.src}
                            alt={project.alt}
                            width={500}
                            height={500}
                            className={`${styles['image']}`}
                        />
                        <aside className="absolute top-0 left-0 w-full h-full bg-first-alpha-color text-white-color p-4 opacity-0 pointer-events-none transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:pointer-events-auto">
                            <div className="p-4 border border-white-color w-full h-full flex justify-center items-center flex-col">
                                <h3 className="font-bold">{project.title}</h3>
                                <p>{project.summary}</p>
                            </div>
                        </aside>
                    </div>
                ))
            }
        </>
    )
}

export default Project;

