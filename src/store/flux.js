const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            apiUrl: 'https://api.nasa.gov/planetary/apod',
            apiKey: '9zufnBwiaznhYo9j2caitAxGPTEegFSvE1yeLC16',
            photos: null,
            start_date: '2022-02-01',
            end_date: '2022-02-14'
        },
        actions: {
            getPlanetaryApod: () => {
                const { apiUrl, apiKey, start_date, end_date } = getStore();
                fetch(`${apiUrl}?start_date=${start_date}&end_date=${end_date}&api_key=${apiKey}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then((response) => { return response.json() })
                    .then((data) => {
                        setStore({
                            photos: data
                        })
                    })
                    .catch((error) => console.log(error));
            },
            handleChangeDate: e => {
                const { name, value } = e.target;
                setStore({
                    [name]: value
                })
            }
        }
    }
}

export default getState;