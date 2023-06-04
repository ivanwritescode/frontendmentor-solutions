import data from './data.json'
import './scss/styles.scss'

const ResultsSummaryComponent = () => {
    return (
        <div className='container'>
            <div id='results-summary'>
                <header>
                    <div className="header-content-wrapper">
                        <h1>Your Result</h1>
                        <div className='result-info'>
                            <div className='result-score'>
                                <div>
                                    <strong>76</strong> <span>of 100</span>
                                </div>
                            </div>
                            <div className='result-description'>
                                <p className='result-status'><b>Great</b></p>
                                <p className='result-feedback'>You scored higher than 65% of the people who have taken these tests.</p>
                            </div>
                        </div>
                    </div>
                </header>
                <section>
                    <h2>Summary</h2>
                    <div className='summary-items'>
                        <ul>
                            { data.map((d, i) => 
                                <li key={d.category} data-item-type={`accent-${i}`}>
                                    <span>
                                        <img src={d.icon} alt={`${d.category} icon`} />
                                        {d.category}
                                    </span>
                                    <div id={`summaryitem-${i}`}><em>{d.score}</em> / 100</div>
                                </li>
                            ) }
                        </ul>
                    </div>

                    <p className='button-container'>
                        <button>Continue</button>
                    </p>
                </section>
            </div>
        </div>
    )
}

export default ResultsSummaryComponent;