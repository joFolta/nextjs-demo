import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Johann - software engineer 👨🏻‍💻 from Boston specializing in React, Node, and Python. When I'm not coding, I enjoy hiking in the White Mountains of New Hampshire, riding my 400cc naked motorcycle, and mountain biking in the trails. I live with my fellow-engineer wife, curious-about-life toddler, and rambunctious black cat 🐈‍.</p>
        <p>
          &gt; Read <Link href="/posts/first-post">this page!</Link>
        </p>
      </section>
    </Layout>
  );
}