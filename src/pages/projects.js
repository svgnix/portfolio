import AnimatedText from "@/Components/AnimatedText";
import { GithubIcon } from "@/Components/Icons";
import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import buildingImg from "../../public/images/projects/under-const.png";
import mesImg from "../../public/images/projects/mes.png";
import portfolioImg from "../../public/images/projects/portf.png";
import wconnectImg from "../../public/images/projects/w-connect.png";
import Transitions from "@/Components/Transitions";


const FeatureProject = ({ type, title, summary, img, github, link }) => {
  return (
    <article className="dark:bg-dark dark:border-light w-full flex relative items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-primary xs:-right-3 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]" />

      <Link
        href={link}
        target="_blank"
        className=" w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 ">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 dark:hover:un"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark dark:bg-light dark:text-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base "
          >
            {" "}
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, github, link }) => {
  return (
    <>
      <article className=" dark:bg-dark dark:border-light w-full flex relative shadow-2xl items-center flex-col justify-center rounded-2xl border border-solid border-dark bg-light p-6 xs:p-4">
        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-primaryDark md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]" />

        <Link
          href={link}
          target="_blank"
          className=" w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <Image src={img} alt={title} className="w-full h-auto" />
        </Link>

        <div className="w-full flex flex-col items-start justify-between mt-4">
          <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base ">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full dark:text-light text-left text-3xl font-bold lg:text-xl">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
            {summary}
          </p>
          <div className="w-full justify-between mt-2 flex items-center">
            <Link href={github} target="_blank" className="w-10 md:w-6">
              {" "}
              <GithubIcon className={"dark:fill-light"} />
            </Link>
            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold md:text-base"
            >
              {" "}
              Visit
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Sagnik | Project Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Transitions />
      <main className="w-full mb-16 flex flex-col justify-center items-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:!mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 xl:gap-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-5 ">
            <div className="col-span-12">
              <FeatureProject
                type={"FEATURE PROJECT"}
                title={"W-Connect"}
                link="https://w20-3kft-l7bf0kx93-sranjan0208.vercel.app/"
                github={"https://github.com/Sranjan0208/W20"}
                img={wconnectImg}
                summary="• W-Connect is an application to match mentors with mentees based on their common preferences and requirements
                • Website was made using React and NextJS. The preferences of the user along with user data was stored in Firebase"
              />
            </div>
            <div className="col-span-12">
              <FeatureProject
                type={"FEATURE PROJECT"}
                title={"PORTFOLIO"}
                link="https://iamsagnik.vercel.app/"
                github={"https://github.com/sagniksantra/portfolio"}
                img={portfolioImg}
                summary="A portfolio website using Nextjs and TailwindCSS is a great way to showcase skills. It has a clean design and easy navigation with separate pages for projects, skills, and about me. Projects have details on tools used, skills list expertise, and About Me page has bio, resume, and contact information. It offers a professional online presence for potential clients/employers to learn about skills and accomplishments."
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type={"PROJECT"}
                title={"MES Website"}
                link=""
                github={"https://github.com/sagniksantra/mes2.2"}
                img={mesImg}
                summary="• An interface which will showcase all the events taking place and their details. The whole website is made using
                ReactJS and Sass is used for CSS
                • Registration and Login feature for the Users added with the facility to register for their favourite events. The user
                data and their registered events is being stored in MongoDB
                • Utilized responsive design to ensure compatibility across all devices"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type={"Lorem Ipsum"}
                title={""}
                link=""
                github={""}
                img={buildingImg}
                summary=""
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
