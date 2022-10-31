

// es reactivo y manda a llamar a todas las funciones.

export default () => ({
    isLoading: true, 
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Mollit sit eu aute consectetur aliquip qui ut dolor sunt culpa pariatur cupidatat proident.',
            picture: null
        },
        {
            id: new Date().getDate() + 1000,
            date: new Date().toDateString(),
            text: 'Mollit sit eu aute consectetur alxt',
            picture: null,
        },
        {
            id: new Date().getDate()+1500,
            date: new Date().toDateString(),
            text: 'Mollit sit eu aute consectetur',
            picture: null,
        },
        {
            id: new Date().getDate()+2000,
            date: new Date().toDateString(),
            text: 'Mollit sit eu aute consecteturxt',
            picture: null,
        }
    ]
}) 