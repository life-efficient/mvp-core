import { Auth } from "aws-amplify"

export function importAll(r) {
  // var r = require.context(directory, false)
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

export const makeid = (length=8) => {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    };
    return text;
}

export const GET = async (resource, additional_params) => {
    const creds = await Auth.currentSession();
    const IDToken = creds.getIdToken().getJwtToken();
    const options = {
        headers: {
            Authorization: IDToken,
            'Content-Type': 'application/json',
        },
    };
    const url = API_ROOT + resource;
    console.debug('STREAMLINE GETting', url);
    let response = await fetch(url, options);
    response = await response.json();
    console.debug('response from', resource, ':', response);
    return response;
};

export const POST = async (resource, body) => {
    const creds = await Auth.currentSession();
    const IDToken = creds.getIdToken().getJwtToken();
    const options = {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(body),
        headers: {
            Authorization: IDToken,
            'Content-Type': 'application/json',
        },
    };
    const url = API_ROOT + resource;
    const response = await fetch(url, options);
    console.debug('response from', resource, ':', response);
    return response;
};