
var exec = require("cordova/exec");

var GameCenter = function () {
    this.name = "GameCenter";
};

GameCenter.prototype.auth = function (success, failure) {
    exec(success, failure, "GameCenter", "auth", []);
};

GameCenter.prototype.checkAuth = function (success, failure) {
    exec(success, failure, "GameCenter", "checkAuth", []);
};

GameCenter.prototype.generateSignature = function (success, failure) {
    exec(success, failure, "GameCenter", "generateSignature", []);
};

GameCenter.prototype.getPlayerImage = function (success, failure) {
    exec(success, failure, "GameCenter", "getPlayerImage", []);
};

GameCenter.prototype.getPlayerScore = function (success, failure, data) {
    exec(success, failure, "GameCenter", "getPlayerScore", [data]);
};

GameCenter.prototype.submitScore = function (success, failure, data) {
    exec(success, failure, "GameCenter", "submitScore", [data]);
};

GameCenter.prototype.showLeaderboard = function (success, failure, data) {
    exec(success, failure, "GameCenter", "showLeaderboard", [data]);
};

GameCenter.prototype.reportAchievement = function (success, failure, data) {
    exec(success, failure, "GameCenter", "reportAchievement", [data]);
};
               
GameCenter.prototype.resetAchievements = function (success, failure) {
    exec(success, failure, "GameCenter", "resetAchievements", []);
};

GameCenter.prototype.getAchievements = function (success, failure) {
    exec(success, failure, "GameCenter", "getAchievements", []);
};

module.exports = new GameCenter();
