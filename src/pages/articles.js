import React from 'react'
import Head from 'next/head'
import Layout from '@/Components/Layout'
import AnimatedText from '@/Components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import article1 from '../../public/images/articles/article1.png'
import article2 from '../../public/images/articles/article2.png'
// import article3 from '../../public/images/articles/article3.png'
const FeaturedArticle = ({img, title, time, summary, link}) => {
    return (
        <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark rounded2xl mb-4'>
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
      <Link href={link} target="_blank">
        <h2 className='capitalize text-2xl font-bold my-2'>
            {title}
        </h2>
      </Link>
      <p className='text-sm mb-2'>{summary}</p>
      <span className='text-primary font-semibold'>{time}</span>
        </li>
    )
}

const articles = () => {
  return (
    <>
      <Head>
        <title>Sagnik | Articles Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center overflow-hidden'>
        <Layout className="pt-16">
            <AnimatedText text="Words Can Change The World!" className="mb-16" /> 
            <ul>
                <FeaturedArticle
                    title="Lorem Ipsum"
                    summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas."
                    time="2 min read"
                    link="/"
                    img={article1}
                />

<FeaturedArticle
                    title="Lorem Ipsum"
                    summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas."
                    time="5 min read"
                    link="/"
                    img={article2}
                />

                <FeaturedArticle
                    title="Lorem Ipsum"
                    summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas."
                    time="4 min read"
                    link="/"
                    img={article2}
                />
            </ul>
        </Layout>
      </main>
    </>
  )
}

export default articles