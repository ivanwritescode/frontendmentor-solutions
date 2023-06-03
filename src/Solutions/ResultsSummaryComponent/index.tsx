import data from './data.json'
import './scss/styles.scss'

interface ISummaryItemColors {
    [key: string]: string[];
}
const summaryItemColors:ISummaryItemColors = {
    Reaction: [ 'rgb(255, 87, 87)', 'rgb(255, 87, 87, 0.1)' ],
    Memory: [ 'rgb(255, 176, 31)', 'rgb(255, 176, 31, 0.1)' ],
    Verbal: [ 'rgb(0, 189, 145)', 'rgb(0, 189, 145, 0.1)' ],
    Visual: [ 'rgb(17, 37, 212)', 'rgb(17, 37, 212, 0.1)' ],
} ;

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
                                <li key={d.category} style={{ background: summaryItemColors[d.category][1] }} >
                                    <span style={{ color: summaryItemColors[d.category][0] }}>
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