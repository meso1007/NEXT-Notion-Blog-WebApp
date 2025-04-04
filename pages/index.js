import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "../lib/notion";
import { Text } from "./[id].js";
import styles from "./index.module.css";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }) {
  return (
    <>
    <div className={styles.pageContainer}>
        <main className={styles.mainContainer}>
          <header className={styles.header}>
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>Why Not?</h1>

              <p className={styles.subTitle}>
                私が感じた『なぜ？』を共有する場所
              </p>
            </div>
          </header>

          <section className={styles.postsSection}>
            <div className={styles.profileContainer}>
              <div className={styles.nameBlock}>
                <Image
                  src="/image/profile-pic.jpeg"
                  alt="Profile Picture"
                  width={100}
                  height={100}
                  className={styles.profileImage}
                />

                <p className={styles.userName}>SHOYA HORIUCHI</p>
                <div className={styles.snsContainer}>
                <a
                  className={styles.snsIcon}
                  href="https://www.linkedin.com/in/shoya-horiuchi-83b785278/"
                >
                  <FaLinkedin />
                </a>

                <a
                  className={styles.snsIcon}
                  href="https://www.instagram.com/sh02__nmi/"
                >
                  <FaInstagram />
                </a>

                <a
                  className={styles.snsIcon}
                  href="https://github.com/meso1007"
                >
                  <FaGithub />
                </a>

                <a className={styles.snsIcon} href="http://99.79.63.2/">
                  <CgWebsite />
                </a>
              </div>
              </div>

            </div>

            <div className={styles.postContainer}>
              <h2 className={styles.heading}>All Posts</h2>

              <ol className={styles.posts}>
                {posts.map((post) => {
                  const date = post.properties.Date.date
                    ? post.properties.Date.date.start
                    : "";

                  const author = post.properties.Author.rich_text
                    ? post.properties.Author.rich_text

                        .map((item) => item.text.content)

                        .join("")
                    : "SHOYA HORIUCHI";

                  const genre =
                    post.properties.Genre.rich_text.length > 0
                      ? post.properties.Genre.rich_text

                          .map((item) => item.plain_text)

                          .join("")
                      : "Lifestyle";

                  return (
                    <li key={post.id} className={styles.post}>
                      <p className={styles.postGenre}>{genre}</p>

                      <h3 className={styles.postTitle}>
                        <Link href={`/${post.id}`}>
                          <Text text={post.properties.Name.title} />
                        </Link>
                      </h3>

                      <p className={styles.postDate}>{date}</p>

                      <div className={styles.postTitleContainer}>
                        <Link href={`/${post.id}`} className={styles.readMore}>
                          READ POST →
                        </Link>

                        <p className={styles.postAuthor}>{author}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

// ISR Configuration
export async function getStaticProps() {
  const database = await getDatabase(databaseId);
  return {
    props: {
      posts: database || [],
    },
    revalidate: 10,
  };
}
