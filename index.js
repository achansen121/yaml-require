var yaml=require("js-yaml");
var fs=require("fs");

require.extensions[".yaml"]=function (m, fn) {
  var yamlstr = fs.readFileSync(fn,"utf8");
  var parsed = yaml.safeLoad(yamlstr);
  m.exports = parsed;
};
module.exports = yaml;