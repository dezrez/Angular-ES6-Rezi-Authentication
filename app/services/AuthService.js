import superagent from "superagent";
import * as config from '../config';

export default function ($http, $location) {
    var auth = this;
    auth.authenticationDetails = null;
    auth.requesting = false;

    auth.GetBaseAuthentication = (username, password) => {
        var token = username + ":" + password;
        var hash = btoa(token);
        return "Basic " + hash;
    }

    auth.BuildAuthUrl = () => {
        var state = Date.now() + "" + Math.random();
        var url = config.authenticationUrl + "?" +
            "client_id=" + encodeURI(config.clientId) + "&" +
            "redirect_uri=" + encodeURI(config.redirectUrl) + "&" +
            "response_type=" + encodeURI("code") + "&" +
            "scope=" + encodeURI(config.accessScope) + "&" +
            "state=" + encodeURI(state);
        return url;
    }

    auth.parseLocation = function (location) {
        var pairs = location.substring(1).split("&");
        var obj = {};
        var pair;
        var i;
        for (i in pairs) {
            if (pairs[i] === "") continue;
            pair = pairs[i].split("=");
            obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
        return obj;
    };


    auth.getToken = function (code, callback) {
        var authConfig = { grant_type: "authorization_code", code: code, redirect_uri: config.redirectUrl };
        var authHeader = { "Authorization": this.GetBaseAuthentication(config.clientId, config.clientPassword) };
        if (!auth.requesting) {
            auth.requesting = true;
            superagent
                .post(config.tokenUrl)
                .set(authHeader)
                .send(authConfig)
                .on('error', () => {
                    _.delay(() => {
                        auth.getToken(code, callback);
                    }, 2000)
                })
                .end((err, res) => {
                    auth.requesting = false;
                    if (res.body) {
                        sessionStorage.credentials = JSON.stringify(res.body);
                        callback();
                    }
                });
        }
    }

    return auth;
}
