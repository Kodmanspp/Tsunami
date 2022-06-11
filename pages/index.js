import cl from '../styles/Home.module.scss';
import Header from '../components/Header';
import About from '../components/About';
import CardList from '../components/CardList';
import Statistics from '../components/Statistics';
import Staking from '../components/Staking';


export default function Home() {
  return (
    <main className={cl.main}>
      <div className={cl.container}>
        <Header />
        <About />
        <CardList />
        <Statistics />
        <Staking />
      </div>
    </main>
  )
};
