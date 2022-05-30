import './App.css';
import { Gentelman } from '../gentelman';
import { arrayGentelman } from '../../models/data';
import { Button } from '../button';

function App() {
    return (
        <div className="App">
            <div className="container">
                <header className="main-header">
                    <h1 className="main-title">The pointing gentlemen</h1>
                </header>
                <section className="controls">
                    <p className="info">0 gentlemen pointing at you</p>
                    <Button
                        tag="button"
                        classes="button button--select"
                        content="Select all"
                    ></Button>
                </section>
                <main className="main">
                    <ul className="gentlemen">
                        {arrayGentelman.map((item) => {
                            return (
                                <Gentelman
                                    gentelman={item}
                                    key={item.id}
                                ></Gentelman>
                            );
                        })}
                    </ul>
                </main>
            </div>
        </div>
    );
}

export default App;
