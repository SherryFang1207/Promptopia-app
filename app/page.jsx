import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden"/>
            <span className="orange_gradient test-center">AI-Powered Propmpts</span>
        </h1>
        <p className="desc text-center">
        Share, Copy and View Awesome AI Propmpts that speed up your production!
        </p>

        <Feed/>

    </section>
  )
}

export default Home