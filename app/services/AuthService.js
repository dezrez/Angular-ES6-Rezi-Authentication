import superagent from "superagent";
import * as config from '../config';

export default function($http) {
    var auth = this;
    auth.authenticated = false;

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

    return auth;
}