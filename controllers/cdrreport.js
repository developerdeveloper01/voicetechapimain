const Cdrreport = require("../models/cdrreport");
const resp = require("../helpers/apiResponse");

exports.addcdrreport = async (req, res) => {
  const { Cdrreport, ip, alottedtouser, plan, ivr, extensions, inusestatus } =
    req.body;

  const newCdrreport = new Cdrreport({
    Cdrreport: Cdrreport,
    ip: ip,
    alottedtouser: alottedtouser,
    plan: plan,
    ivr: ivr,
    extensions: extensions,
    inusestatus: inusestatus,
  });
  const findexist = await Cdrreport.findOne({ Cdrreport: Cdrreport });
  if (findexist) {
    resp.alreadyr(res);
  } else {
    newCdrreport
      .save()
      .then((data) => resp.successr(res, data))
      .catch((error) => resp.errorr(res, error));
  }
};

exports.viewonecdrreport = async (req, res) => {
  await Cdrreport.findOne({ _id: req.params.id })
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.allcdrreport = async (req, res) => {
  await Cdrreport.find()
    .sort({ created_time: 1 }).limit(2000)
    .then((data) => resp.successr(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.deletecdrreport = async (req, res) => {
  await Cdrreport.deleteOne({ _id: req.params.id })
    .then((data) => resp.deleter(res, data))
    .catch((error) => resp.errorr(res, error));
};

exports.viewreportsfromneronserver = async (req, res) => {
  var request = require("request");
  var options = {
    method: "GET",
    url: `http://103.8.43.14/onyx/api/cdr?start_date=2021-10-25&end_date=2021-10-25`,
    headers: { "content-type": "application/x-www-form-urlencoded" },
    form: {},
  };

  request(options, function (error, response, body) {
    if (response) {
      var toparse = response.body;
      res.status(200).send(toparse);
    }
    if (error) {
      res.status(200).send(error);
    }
  });
};

exports.addreportstomongodb = async (req, res) => {
  var request = require("request");
  var options = {
    method: "GET",
    url: `http://103.8.43.14/onyx/api/cdr?start_date=2021-10-25&end_date=2021-10-25`,
    headers: { "content-type": "application/x-www-form-urlencoded" },
    form: {},
  };

  request(options, function (error, response, body) {
    if (response) {
      var toparse = response.body;
      var tojson = JSON.parse(toparse);

      var toinsertarray = [];
      console.log(tojson.message[0]);

      for (let i = 0; i < tojson.message.length; i++) {
        toinsertarray[i] = tojson.message[i];
      }
      console.log(toinsertarray);

      const toupload = async () => {
        await Cdrreport.insertMany(toinsertarray)
          .then((data) => {
            res.status(200).json("Data added Successfully!!");
            console.log(data)
          })
          .catch((error) => {
            res.status(200).json(error);
            console.log(error)
          });
      };
      toupload();
    }
  });
};


exports.getdetailofonenumber = async (req,res)=>{
  await Cdrreport.find({caller_id_name:req.params.id})
  .then((data) => resp.successr(res, data))
  .catch((error) => resp.errorr(res, error));
}

exports.getcalleridofall = async (req,res)=>{
  var totalextensionarray = []
  await Cdrreport.find().then((data)=>{
    for (let i = 0; i < data.length; i++) {
      totalextensionarray.push(data.caller_id_name[i])
    }
    console.log(totalextensionarray)
    resp.successr(res,totalextensionarray)
  }).catch((error)=> resp.errorr(res,error))
}

//1d5f9a9e-2b8c-4f55-b351-113a49572dd5