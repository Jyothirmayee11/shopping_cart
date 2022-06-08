export const fetchApi = (URL) => {
    const apiResponse = fetch(URL).then(response => response.json())
    .then(res => res)
    .catch(err => console.err(err));

    return apiResponse;
}