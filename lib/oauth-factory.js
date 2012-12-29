var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var OauthJSON = (function () {
    function OauthJSON(display_name, email, first_name, last_name) {
        this.display_name = display_name;
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name;
    }
    return OauthJSON;
})();
exports.OauthJSON = OauthJSON;
var InterfaceOauthProvider = (function () {
    function InterfaceOauthProvider(user) {
        this.user = user;
    }
    InterfaceOauthProvider.prototype.get_email = function () {
        return this.user.email;
    };
    InterfaceOauthProvider.prototype.get_display_name = function () {
        return this.user.display_name;
    };
    InterfaceOauthProvider.prototype.get_first_name = function () {
        return this.user.first_name;
    };
    InterfaceOauthProvider.prototype.get_last_name = function () {
        return this.user.last_name;
    };
    InterfaceOauthProvider.prototype.get_user = function () {
        return this.user;
    };
    return InterfaceOauthProvider;
})();
exports.InterfaceOauthProvider = InterfaceOauthProvider;
var FacebookProvider = (function (_super) {
    __extends(FacebookProvider, _super);
    function FacebookProvider(usr) {
        _super.call(this, new OauthJSON(usr.displayName, usr._json.email, usr._json.first_name, usr._json.last_name));
        this.usr = usr;
    }
    return FacebookProvider;
})(InterfaceOauthProvider);
exports.FacebookProvider = FacebookProvider;
var GoogleProvider = (function (_super) {
    __extends(GoogleProvider, _super);
    function GoogleProvider(usr) {
        _super.call(this, new OauthJSON(usr.displayName, usr.emails[0].value, usr.name.givenName, usr.name.familyName));
        this.usr = usr;
    }
    return GoogleProvider;
})(InterfaceOauthProvider);
exports.GoogleProvider = GoogleProvider;
var LinkedInProvider = (function (_super) {
    __extends(LinkedInProvider, _super);
    function LinkedInProvider(usr) {
        _super.call(this, new OauthJSON(usr.displayName, usr._json.emailAddress, usr.name.givenName, usr.name.familyName));
        this.usr = usr;
    }
    return LinkedInProvider;
})(InterfaceOauthProvider);
exports.LinkedInProvider = LinkedInProvider;
var OauthFactory = (function () {
    function OauthFactory() { }
    OauthFactory.prototype.create_provider = function (provider, user) {
        switch(provider) {
            case 'google': {
                return new GoogleProvider(user);
                break;

            }
            case 'linkedin': {
                return new LinkedInProvider(user);
                break;

            }
            default: {
                return new FacebookProvider(user);

            }
        }
    };
    return OauthFactory;
})();
exports.OauthFactory = OauthFactory;
