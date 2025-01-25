import HeaderBox from "@/components/header-box"
import RightSidebar from "@/components/right-sidebar"
import TotalBalanceBox from "@/components/total-balance-box"

const Home = () => {
    const loggedIn = {firstName: 'Friday', lastName: 'Odoh', email: 'fodoh@proxytom.com'}
  return (
    <section className='home'>
        <div className="home-content">
            <header className="home-header">
               <HeaderBox
                type="greeting"
                title="Welcome"
                user={loggedIn?.firstName || "Guest"}
                subtext="Access and manage your account and transactions efficiently."
               />
               <TotalBalanceBox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1250.35}
               />
            </header>
            RECENT TRANSACTION
        </div>
        <RightSidebar 
          user={loggedIn}
          transactions={[]}
          banks={[
            {
              currentBalance: 45.50
            }, 
            {
              currentBalance: 4500
            }
          ]}
        />
    </section>
  )
}

export default Home