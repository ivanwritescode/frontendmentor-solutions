import iconReaction from './assets/images/icon-reaction.svg'
import iconMemory from './assets/images/icon-memory.svg';
import iconVerbal from './assets/images/icon-verbal.svg';
import iconVisual from './assets/images/icon-visual.svg';

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
        <main>
            <div className='results-summary'>
                <section className='result'>
                    <div className="result-content-wrapper">
                        <h1>Your Result</h1>
                        <div className='result-info'>
                            <div className='result-score'>
                                <div>
                                    <p>
                                        <strong>76</strong> <span>of 100</span>
                                    </p>
                                </div>
                            </div>
                            <div className='result-description'>
                                <p className='result-status'><b>Great</b></p>
                                <p className='result-feedback'>You scored higher than 65% of the people who have taken these tests.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='summary'>
                    <h2>Summary</h2>
                    <div className='summary-items'>
                        <ul>
                            { data.map((d, i) => 
                                <li key={d.category} data-item-type={`accent-${i}`}>
                                    <div className='flex-group'>
                                        <img src={d.icon} alt="" />
                                        <h3 className='summary-item-title'>{d.category}</h3>
                                    </div>
                                    <p id={`summaryitem-${i}-score`}><em>{d.score}</em> / 100</p>
                                </li>
                            ) }
                        </ul>
                    </div>
                    <button className="button">Continue</button>
                </section>
            </div>
        </main>
    )
}

export default ResultsSummaryComponent;