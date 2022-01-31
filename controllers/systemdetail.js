const si = require("systeminformation");

exports.systeminfo = async (req, res) => {
  const osInfo = await si.osInfo();
  const cpuCurrentSpeed = await si.cpuCurrentSpeed();
  const baseboard = await si.baseboard();
  const cpu = await si.cpu();
  const mem = await si.mem();
  const currentLoad = await si.currentLoad();
  const fullLoad = await si.fullLoad();

  res.json({ osInfo: osInfo,cpuCurrentSpeed:cpuCurrentSpeed, 
    baseboard:baseboard,cpu:cpu,mem:mem,currentLoad:currentLoad,fullLoad:fullLoad });
};
