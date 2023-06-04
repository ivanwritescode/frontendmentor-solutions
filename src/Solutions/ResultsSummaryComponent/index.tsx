import './scss/styles.scss'

import iconReaction from '../../assets/ResultsSummary/images/icon-reaction.svg'
import iconMemory from '../../assets/ResultsSummary/images/icon-memory.svg';
import iconVerbal from '../../assets/ResultsSummary/images/icon-verbal.svg';
import iconVisual from '../../assets/ResultsSummary/images/icon-visual.svg';

const ResultsSummaryComponent = () => {
    const data = [
        {
            category: 'Reaction',
            score: 80,
            icon: iconReaction,
        },
        {
            category: 'Memory',
            score: 92,
            icon: iconMemory,
        },
        {
            category: 'Verbal',
            score: 61,
            icon: iconVerbal,
        },
        {
            category: 'Visual',
            score: 72,
            icon: iconVisual,
        },
    ];

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
                                        <img src={d.icon} alt="" />
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