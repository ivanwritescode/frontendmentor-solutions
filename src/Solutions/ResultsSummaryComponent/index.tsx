import data from './data.json'
import './styles.scss'

const ResultsSummaryComponent = () => {
    return (
        <div id='results-summary'>
            <header>
                <h1>Your Result</h1>
                <div>
                    <span><strong>76</strong> of 100</span>
                    <div>
                        <strong>Great</strong>
                        <p>You scored higher than 65% of the people who have taken these tests.</p>
                    </div>
                </div>
            </header>
            <section>
                <h2>Summary</h2>
                { data.map((d) => 
                    <div key={d.category}>
                        <label htmlFor="reaction">
                            <img src={d.icon} alt="" />
                            {d.category}
                        </label>

                        <div id="reaction"><em>{d.score}</em> / 100</div>
                    </div>
                ) }
            </section>
            <p>
                <button>Continue</button>
            </p>
        </div>
    )
}

export default ResultsSummaryComponent;