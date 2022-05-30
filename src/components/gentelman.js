import { React } from 'react';
import { Button } from './button';

export function Gentelman({ gentelman }) {
    return (
        <>
            <li className="gentleman">
                <div className="gentleman__avatar-container">
                    <img
                        className="gentleman__avatar"
                        src={'./img/' + gentelman.picture}
                        alt={gentelman.alternativeText}
                    />
                    <span className="gentleman__initial">F</span>
                </div>
                <div className="gentleman__data-container">
                    <h2 className="gentleman__name">{gentelman.name}</h2>
                    <ul className="gentleman__data-list">
                        <li className="gentleman__data">
                            <span className="gentleman__data-label">
                                Profession:
                            </span>
                            {gentelman.profession}
                        </li>
                        <li className="gentleman__data">
                            <span className="gentleman__data-label">
                                Status:
                            </span>
                            {gentelman.status}
                        </li>
                        <li className="gentleman__data">
                            <span className="gentleman__data-label">
                                Twitter:
                            </span>
                            {gentelman.twitter}
                        </li>
                    </ul>
                </div>
                <Button
                    tag="i"
                    classes="icon gentleman__icon fas fa-check"
                    content=""
                ></Button>
                <Button
                    tag="i"
                    classes="icon gentleman__icon gentleman__icon--delete fas fa-times"
                    content=""
                ></Button>
            </li>
        </>
    );
}
