import './scss/styles.scss'
import './scss/reset.scss'

import logo from '../../assets/NewsHomepage/images/logo.svg'
import headlineimage from '../../assets/NewsHomepage/images/image-web-3-desktop.jpg'
import article_image_1 from '../../assets/NewsHomepage/images/image-retro-pcs.jpg'
import article_image_2 from '../../assets/NewsHomepage/images/image-top-laptops.jpg'
import article_image_3 from '../../assets/NewsHomepage/images/image-gaming-growth.jpg'

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
            <main className='main-content'>
                <article className='page-headline'>
                    <img className='headline-image' src={headlineimage} alt='headline image' />
                    <h1 className='headline-text'>The Bright Future of Web 3.0?</h1>
                    <div className='headline-content'>
                        <p>
                            We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                            But is it really fulfilling its promise?
                        </p>
                        <a className='headline-cta' href=''>Read more</a>
                    </div>
                </article>
            </main>
            <aside className='news-aside'>
                <h2 className='aside-header'>New</h2>
                <article data-aside-item="1">
                    <h3><a href='#'>Hydrogen VS Electric Cars</a></h3>
                    <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                </article>
                <article data-aside-item="2">
                    <h3><a href='#'>The Downsides of AI Artistry</a></h3>
                    <p>What are the possible adverse effects of on-demand AI image generation?</p>
                </article>
                <article data-aside-item="3">
                    <h3><a href='#'>Is VC Funding Drying Up?</a></h3>
                    <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                </article>
            </aside>
            <section className='news_articles'>
                <article data-article="1">
                    <img src={article_image_1} alt="article image 1" />
                    <div>
                        <span className='article-number'>01</span>
                        <h3><a href='#'>Reviving Retro PCs</a></h3>
                        <p>What happens when old PCs are given modern upgrades?</p>
                    </div>
                </article>
                <article data-article="2">
                    <img src={article_image_2} alt="article image 2" />
                    <div>
                        <span className='article-number'>02</span>
                        <h3><a href='#'>Top 10 Laptops of 2022</a></h3>
                        <p>Our best picks for various needs and budgets.</p>
                    </div>
                </article>
                <article data-article="3">
                    <img src={article_image_3} alt="article image 3" />
                    <div>
                        <span className='article-number'>03</span>
                        <h3><a href='#'>The Growth of Gaming</a></h3>
                        <p>How the pandemic has sparked fresh opportunities.</p>
                    </div>
                </article>
            </section>
            <footer className='attribution'>
                Challenge by <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>Frontend Mentor</a>. 
                Coded by <a href='https://ivanwritescode.github.io/my-portfolio/'><strong>Ivan Mejico</strong></a>.
            </footer>
        </div>
        </>
    )
}

export default NewsHomepage;