import clsx from 'clsx';
import * as React from 'react';

import { trackEvent } from '@/lib/analytics';
import useLoaded from '@/hooks/useLoaded';

import Accent from '@/components/Accent';
import CloudinaryImg from '@/components/images/CloudinaryImg';
import Layout from '@/components/layout/Layout';
import CustomLink from '@/components/links/CustomLink';
import Seo from '@/components/Seo';
import TechStack from '@/components/TechStack';
import Tooltip from '@/components/Tooltip';

export default function AboutPage() {
  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo
        templateTitle='About'
        description='Clarence is a front-end developer that started learning in May 2020. He write blogs about his approach and mental model on understanding topics in front-end development.'
      />

      <main>
        <section className={clsx(isLoaded && 'fade-in-start')}>
          <div className='layout pt-20'>
            <h2 data-fade='0'>About</h2>
            <h1 className='mt-1' data-fade='1'>
              <Accent>Williams J. Padilla Paulino</Accent>
            </h1>
            <div className='mt-4' data-fade='2'>
              <CloudinaryImg
                className='float-right ml-6 w-40 md:w-72'
                publicId='vhd64avpfxmc0ucufhee'
                width='1500'
                height='1695'
                alt='Photo of me looking really professional and definitely can impress your boss'
                preview={false}
                title=' '
              />
              <article className='prose dark:prose-invert'>
                <p data-fade='3'>
                  Hello! I'm Williams. I have 7 years of comprehensive experience in full-stack development and a proven track record of contributing to multinational companies like Verizon and Cemex, I am excited about the opportunity to bring my unique skills and experiences to your team.
                </p>
                <p data-fade='4'>
                  Throughout my career, I have specialized in utilizing a wide array of technologies, including React, Python (Django, Flask), Angular, Node.js, VueJS, and Kotlin, to deliver high-quality software solutions. My fluency in English, coupled with my experience working with diverse, multi-cultural teams across the United States, India, LATAM, and Europe, has honed my ability to effectively collaborate and communicate in global settings.
                </p>
                <p data-fade='5'>
                  At Verizon and Cemex, as well as various startups, I have consistently demonstrated my capacity to adapt to different working environments and methodologies, particularly DevOps and Scrum. My expertise extends to utilizing tools such as Jenkins, AWS, Gitlab, Bitbucket, Jira, and Github, ensuring efficient and effective project management and deployment.
                </p>
              </article>
              {/*<h3 className='h4 mt-4' data-fade='6'>*/}
              {/*  What I'm up to?*/}
              {/*</h3>*/}
              {/*<article className='prose mt-2 dark:prose-invert' data-fade='7'>*/}
              {/*  <ul>*/}
              {/*    <li>*/}
              {/*      I'm a full-stack engineer at{' '}*/}
              {/*      <CustomLink*/}
              {/*        onClick={() =>*/}
              {/*          trackEvent('Now: Dimension', { type: 'link' })*/}
              {/*        }*/}
              {/*        href='https://dimension.dev?ref=theodorusclarence.com'*/}
              {/*      >*/}
              {/*        Dimension*/}
              {/*      </CustomLink>{' '}*/}
              {/*      while working remotely from Jakarta, Indonesia*/}
              {/*    </li>*/}
              {/*    <li>*/}
              {/*      I'm a technical writer for{' '}*/}
              {/*      <CustomLink*/}
              {/*        onClick={() =>*/}
              {/*          trackEvent('Now: LogRocket', { type: 'link' })*/}
              {/*        }*/}
              {/*        href='https://blog.logrocket.com/author/theodorusclarence/'*/}
              {/*      >*/}
              {/*        LogRocket*/}
              {/*      </CustomLink>*/}
              {/*    </li>*/}
              {/*    <li>*/}
              {/*      I'm a mentor! I do revision-style mentorship (*/}
              {/*      <Tooltip*/}
              {/*        tipChildren={*/}
              {/*          <p className='italic'>*/}
              {/*            *Try translating them to english*/}
              {/*          </p>*/}
              {/*        }*/}
              {/*      >*/}
              {/*        <CustomLink*/}
              {/*          onClick={() =>*/}
              {/*            trackEvent('Now: Mentor Thread', { type: 'link' })*/}
              {/*          }*/}
              {/*          href='https://x.com/th_clarence/status/1713454750090534948?s=20'*/}
              {/*        >*/}
              {/*          thread*/}
              {/*        </CustomLink>*/}
              {/*      </Tooltip>*/}
              {/*      )*/}
              {/*    </li>*/}
              {/*  </ul>*/}
              {/*</article>*/}

              <h3 className='mt-12' data-fade='8'>
                Tech Stack
              </h3>
              <figure className='mt-2' data-fade='9'>
                <TechStack />
              </figure>
            </div>
          </div>
        </section>

        <section>
          <div className='layout mt-16'>
            <h2>Contact</h2>
            <article className='prose mt-4 dark:prose-invert'>
              <p>
                Do contact me if you need my opinion about web development,
                especially frontend works. I’ll be happy to help! (find my email
                in the footer)
              </p>
            </article>
          </div>
        </section>

        {/*<section id='uses'>*/}
        {/*  <div className='layout mt-16'>*/}
        {/*    <h2>Uses</h2>*/}
        {/*    <CloudinaryImg*/}
        {/*      className='mt-8 aspect-video'*/}
        {/*      publicId='theodorusclarence/about/setup_2.jpg'*/}
        {/*      width='2000'*/}
        {/*      height='1500'*/}
        {/*      alt='Photo of my desk setup'*/}
        {/*    />*/}
        {/*    <article className='prose mt-4 dark:prose-invert'>*/}
        {/*      <ul>*/}
        {/*        <li>MacBook Pro (13" M1 2020, 16GB, 1TB)</li>*/}
        {/*        <li>LG UltraFine™ 4K 32 Inch LG (32UN880-B)</li>*/}
        {/*        <li>Keychron K2v2</li>*/}
        {/*        <li>Logitech M590</li>*/}
        {/*        <li>Kindle Paperwhite (10th Generation)</li>*/}
        {/*        <li>Stramm Bruno Standing Desk 160x80</li>*/}
        {/*        <li>Pexio Jervis Ergonomic Chair</li>*/}
        {/*        <li>Press Play Desk Shelf</li>*/}
        {/*        <li>Mi Computer Monitor Light Bar</li>*/}
        {/*        <li>Creative Pebble V3</li>*/}
        {/*      </ul>*/}
        {/*    </article>*/}
        {/*  </div>*/}
        {/*</section>*/}
      </main>
    </Layout>
  );
}
