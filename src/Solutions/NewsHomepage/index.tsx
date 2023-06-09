import './scss/styles.scss'
import './scss/reset.scss'

import logo from '../../assets/NewsHomepage/images/logo.svg'

const NewsHomepage = () => {
    return (
        <>
        <div className='container'>
            <header className='site-header'>
                <div className='site-logo'><img src={logo} alt='site logo' /></div>
                <nav className='site-nav'>
                    <ul className='nav-list'>
                        <li className='nav-list-item'>
                            <a href='#'>Home</a>
                        </li>
                        <li className='nav-list-item'>
                            <a href='#'>New</a>
                        </li>
                        <li className='nav-list-item'>
                            <a href='#'>Popular</a>
                        </li>
                        <li className='nav-list-item'>
                            <a href='#'>Trending</a>
                        </li>
                        <li className='nav-list-item'>
                            <a href='#'>Categories</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className=''>
                <img src='' alt='' />
                <article>
                    <h1>The Bright Future of Web 3.0?</h1>
                    <div>
                        <p>
                            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                            But is it really fulfilling its promise?
                        </p>
                        <a href=''>Read more</a>
                    </div>
                </article>
            </main>
            <aside>
                <h2>New</h2>
                <article>
                    <h3><a href='#'>Hydrogen VS Electric Cars</a></h3>
                    <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                </article>
                <article>
                    <h3><a href='#'>The Downsides of AI Artistry</a></h3>
                    <p>What are the possible adverse effects of on-demand AI image generation?</p>
                </article>
                <article>
                    <h3><a href='#'>Is VC Funding Drying Up?</a></h3>
                    <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </article>
            </aside>
            <div>
                <article>
                    <span>01</span>
                    <h3><a href='#'>Reviving Retro PCs</a></h3>
                    <p>What happens when old PCs are given modern upgrades?</p>
                </article>
                <article>
                    <span>02</span>
                    <h3><a href='#'>Top 10 Laptops of 2022</a></h3>
                    <p>Our best picks for various needs and budgets.</p>
                </article>
                <article>
                    <span>03</span>
                    <h3><a href='#'>The Growth of Gaming</a></h3>
                    <p>How the pandemic has sparked fresh opportunities.</p>
                </article>
            </div>
            <div className='attribution'>
                Challenge by <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>Frontend Mentor</a>. 
                Coded by <a href='#'>Your Name Here</a>.
            </div>
        </div>
        </>
    )
}

export default NewsHomepage;