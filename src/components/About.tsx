import React from 'react';
import Image from 'next/image';

export default function About() {
    return (
        <section className="section w-full grid grid-cols-1 lg:grid-cols-2 min-h-[60vh] gap-10 p-8 bg-gray-lighter-color" id="about">
          <article className="text-lg-right lg:text-right mb-8">
            <aside className="text-center lg:text-right">
              <h5 className="text-black text-3xl font-bold pb-10">Get to know me!</h5>
            </aside>
            <p className="mt-4 text-l text-gray-800">
                I am a passionate <b>Frontend Web Developer</b> with experience in creating interactive and efficient applications. I am currently specializing in modern technologies such as Next.js and React.js, which allow me to build scalable web solutions. My experience has taught me to work effectively in agile teams and to face technical challenges with a problem-solving mindset.
            </p>
            <p className="mt-4 text-l text-gray-800 pb-10">
            I'm looking for <b>Job</b> opportunities where I can apply my skills, continue learning, and grow professionally. Feel free to reach out if you have an opportunity that aligns with my experience.
            </p>
            <div className="text-center lg:text-left mt-4">
              <a
                href="https://www.canva.com/design/DAGOgGZNLv0/o5tnk7WWhCU5BJoXuaII5A/view?utm_content=DAGOgGZNLv0&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                target="_blank"
                rel="noopener noreferrer"
                className="m-4 inline-block px-10 py-4 rounded bg-first-color text-white-color font-bold transition-opacity duration-500 hover:opacity-75"
              >
                DOWNLOAD MY CV
              </a>
            </div>
          </article>
          <article className="mb-8 ">
            <h2 className="text-black text-3xl font-bold text-center py-8 mb-10">My Skills</h2>
            <div className="flex flex-wrap">
              {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'GIT', 'Github'].map(skill => (
                <div key={skill} className="flex justify-between items-center mb-2">
                  <p className="font-semibold bg-gray-light-color py-3 px-5 rounded text-gray-800">{skill}</p>
                  <div className="bg-gray-light h-2 w-full rounded ml-2">
                    <div className="bg-gray-dark h-2 rounded" style={{ width: '80%' }}></div> 
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>
      );
}