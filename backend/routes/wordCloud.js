let request = require("request");
let config = require("../config.js");
const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: config.clarifai_key
});

let getWordCloudData = (req, res) => {
  let token = req.get('token')
  imagesPromise(token)
    .then((imgArray) => clarifaiPromise(imgArray))
    .then((clarifaiConcepts) => {
      return res.send({ success: true, concepts: clarifaiConcepts });
    });
}

let imagesPromise = (token) => {
  // TODO: Increase number of images if at all possible
  // Error check for requesting too many pictures
  let options = {
    url: `https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}&count=30`,
  };
  return new Promise((resolve,reject) => {
    request.get(options, (err, resp, body) => {
      if(err){
        reject(err);
      }else{
        let pBody = JSON.parse(body);
        let imgArray = pBody['data'].map((item) => {
          return item['images']['standard_resolution']['url'];
        });
        resolve(imgArray);
      }
    });
  });
};

let clarifaiPromise = (imgArray) => {
  return new Promise((resolve,reject) =>{

    app.models.initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
    .then(generalModel => {
      return generalModel.predict(imgArray);
    })
    .then(response => {
      let concepts = response['outputs'][0]['data']['concepts'];
      resolve(concepts)
    });
  });
}

module.exports = {
  getWordCloudData: getWordCloudData
}
