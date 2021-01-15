const HOST = 'http://192.168.68.107:3000'; // NodeJs api url

export const postNote = async function (body) {
    await fetch(`${HOST}/tasks`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

export const getNotes = async function (body) {
    const res = await fetch(`${HOST}/tasks`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    });

    const response = await res.json();
    return response;
};
