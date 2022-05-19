import type { NextPage } from "next";
import Head from "next/head";
import {
  Content,
  HeroSection,
  SubscriptionButton,
} from "styles/pages/home.styles";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ig.news</title>
      </Head>
      <main>
        <HeroSection>
          <Content>
            <div>
              <h3>
                <span>👏</span> Hey, welcome
              </h3>
              <h1>
                News about the <span>React</span> world
              </h1>
              <p>
                Get access to all the publications
                <br />
                <span>for $9.90 month</span>
              </p>

              <SubscriptionButton>Subscribe now</SubscriptionButton>
            </div>

            <div>
              <img src={"/media/women.svg"} alt={"Girl Coding"} />
            </div>
          </Content>
        </HeroSection>
      </main>
    </>
  );
};

export default Home;