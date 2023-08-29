import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

// getStaticProps runs only on the server-side, it will never run on the client-side. 
// It won’t even be included in the JS bundle for the browser, 
// so you can write direct database queries without them being sent to browsers.
// https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props#write-server-side-code-directly
export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: {
  allPostsData: {
    date: string;
    title: string;
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Johann - software engineer 👨🏻‍💻 from Boston specializing in React, Node, and Python. When I'm not coding, I enjoy hiking in the White Mountains of New Hampshire, riding my 400cc naked motorcycle, and mountain biking in the trails. I live with my fellow-engineer wife, curious-about-life toddler, and rambunctious black cat 🐈‍.</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Features</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem} key="Simple API endpoint">
            <Link href={"/api/hello"}>Simple API endpoint</Link>
            <br />
            <small className={utilStyles.lightText}>
              <p>By creating a function inside the pages/api</p>
            </small>
          </li>
          <li className={utilStyles.listItem} key="Custom 404 page">
            <Link href={"/404"}>Custom 404 page</Link>
            <br />
            <small className={utilStyles.lightText}>
              <p>By creating /pages/404.js</p>
            </small>
          </li>
        </ul>
      </section>
    </Layout>
  );
}