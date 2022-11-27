import axios from "axios";
// import cookie from 'react-cookies'

export default async (method) => {
  return new Promise((resolve, reject) => {
    callApi(method, resolve, reject);
  });
};

export async function callApi(method, resolve, reject) {
  let headers = {
    "Content-Type": "multipart/form-data",
  };

  // if (cookie.load('token')) {
  //   let token = cookie.load('token');
  //   headers.Authorization = `Token ${token}`;
  // }

  let axiosData = {
    method: method.apiType,
    headers: headers,
    url: method.type,
  };

  console.log(JSON.stringify(headers));
  console.log(method.apiType + " >>>>> " + axiosData.url);
  console.log("PAYLOAD >>>>> " + JSON.stringify(method.payload));

  if (method.apiType === "GET") {
  } else {
    var formData = await getFormData(method.payload);
    axiosData.data = formData;
  }

  try {
    let response = await axios(axiosData);

    if (
      response.status === 200 ||
      response.status === 201 ||
      response.status === 204
    ) {
      let res = {
        status: response.status,
        success: true,
        data: response.data,
      };
      resolve(res);
    } else if (response.status === 401) {
      // DO WHATEVER NEEDED FOR UNAUTHORISED USER (LOGOUT USER FROM HERE)
    } else if (response.status === 400) {
      let res = {
        status: response.status,
        success: false,
        data: response.data,
      };
      reject(res);
    } else {
      let res = {
        status: response.status,
        success: false,
        data: response.data,
      };
      reject(res);
    }
  } catch (err) {
    let response = err.response;
    if (
      response.status === 200 ||
      response.status === 201 ||
      response.status === 204
    ) {
      let res = {
        status: response.status,
        success: true,
        data: response.data,
      };
      resolve(res);
    } else if (response.status === 401) {
      // DO WHATEVER NEEDED FOR UNAUTHORISED USER (LOGOUT USER FROM HERE)
    } else if (response.status === 400) {
      let res = {
        status: response.status,
        success: false,
        data: response.data,
      };
      reject(res);
    } else {
      let res = {
        status: response.status,
        success: false,
        data: response.data,
      };
      reject(res);
    }
    //SHOW "SOMETHING WENT WRONG" MESSAGE HERE
  }
}

function getFormData(data) {
  let formData = new FormData();
  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value) === true) {
      for (var i = 0; i < value.length; i++) {
        formData.append(`${key}`, value[i]);
      }
    } else {
      formData.append(`${key}`, value);
    }
  }
  return formData;
}
