type Profile = {
    username: string;
    image: string;
    country: string;
    rank: {
        premiere: string;
        faceit: string;
        esportal: string;
    };
};

export const profiles: Profile[] = [
    {
        username: 'Sozick',
        image: 'https://picsum.photos/200',
        country: 'Norway',
        rank: {
            premiere: '22300',
            faceit: 'Level 10',
            esportal: 'Elite 3',
        },
    },
    {
        username: 'Sampa',
        image: 'https://picsum.photos/200',
        country: 'Sweden',
        rank: {
            premiere: '15000',
            faceit: 'Level 7',
            esportal: 'Master 2',
        },
    },
    {
        username: 'Egarb',
        image: 'https://picsum.photos/200',
        country: 'Norway',
        rank: {
            premiere: '13000',
            faceit: 'Level 5',
            esportal: 'Master 1',
        },
    },
    {
        username: 'Eddy',
        image: 'https://picsum.photos/200',
        country: 'Norway',
        rank: {
            premiere: '18000',
            faceit: 'Level 8',
            esportal: 'Elite 2',
        },
    },
    {
        username: 'Henrik',
        image: 'https://picsum.photos/200',
        country: 'Norway',
        rank: {
            premiere: '19000',
            faceit: 'Level 6',
            esportal: 'Elite 1',
        },
    },
    {
        username: 'Franklin',
        image: 'https://picsum.photos/200',
        country: 'Norway',
        rank: {
            premiere: '21000',
            faceit: 'Level 9',
            esportal: 'Master 4',
        },
    },
];