let starship = {
    shipOne: 'USS Stargazer',
    stargazer: {
        crew: {
            captain: {
                name: 'Jean-Luc Picard',
                age: '55',
                sex: 'male'
            },
            officer: {
                name: 'Data',
                age: '100',
                sex: 'cyborg'
            },
            engineer: {
                name: 'Montgomery Scott',
                age: '45',
                sex: 'male'
            },
            ranger: {
                name: 'Seven of Nine',
                age: '40',
                sex: 'female'
            }
        }
    },
    shipTwo: 'The Resolute',
    resolute: {
        crew: {
            captain: {
                name: 'Obi-wan Kenobi',
                age: '35',
                sex: 'male'
            },
            officer: {
                name: 'Anakin Skywalker',
                age: '20',
                sex: 'male'
            },
            engineer: {
                name: 'C3P0',
                age: '10',
                sex: 'cyborg'
            },
            tech: {
                name: 'R2-D2',
                age: 'unknown',
                sex: 'astromech droid'
            }
        }
    },
    'full crew database'(shipName) {
        if (shipName === starship.shipOne) {
        console.log(`The ship ${starship.shipOne} has the current crew onboard: `, starship.stargazer.crew);
        } else if (shipName === starship.shipTwo) {
            console.log(`The ship ${starship.shipTwo} has the current crew onboard: `, starship.resolute.crew);
        }
    }
};

function shipCrew(shipName) {
    return starship['full crew database'](shipName);
};

shipCrew('The Resolute');