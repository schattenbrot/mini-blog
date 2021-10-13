import Head from 'next/head';
import CreatePostForm from '../components/home/CreatePostForm';
import PostList from '../components/home/PostList';

const Home = (props) => {
  return (
    <div>
      <Head>
        <title>Mini Blog</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <CreatePostForm />
      <PostList posts={props.posts} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const promise = await fetch('http://localhost:4000/v1/posts');
  const json = await promise.json();
  const posts = json.posts;

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: posts,
    },
  };
};

export default Home;