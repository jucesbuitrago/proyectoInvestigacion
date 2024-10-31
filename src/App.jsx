import './App.css';
// import { TwitterFollowCard } from './TwitterFollowCard';
import Student from "./components/Student"

export function App () {
    // const formatUserName = (userName) => `@{userName}`;
    
    return (
        // <section className='App'>
        //     <TwitterFollowCard  formatUserName={formatUserName}  isFollowing userName="s0yValen" name="Valentina Vargas"/>
        //     <TwitterFollowCard  formatUserName={formatUserName}  isFollowing={false} userName="jucesbuitrago" name="Jucesbuitrago"/>
        // </section>
        <Student/>
    )
}