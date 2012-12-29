var FacebookProvider = (function () {
    function FacebookProvider() { }
    FacebookProvider.prototype.get_email = function () {
        return '';
    };
    FacebookProvider.prototype.get_display_name = function () {
        return '';
    };
    return FacebookProvider;
})();
exports.FacebookProvider = FacebookProvider;
var GoogleProvider = (function () {
    function GoogleProvider() { }
    GoogleProvider.prototype.get_email = function () {
        return '';
    };
    GoogleProvider.prototype.get_display_name = function () {
        return '';
    };
    return GoogleProvider;
})();
exports.GoogleProvider = GoogleProvider;
var LinkedInProvider = (function () {
    function LinkedInProvider() { }
    LinkedInProvider.prototype.get_email = function () {
        return '';
    };
    LinkedInProvider.prototype.get_display_name = function () {
        return '';
    };
    return LinkedInProvider;
})();
exports.LinkedInProvider = LinkedInProvider;
var OauthFactory = (function () {
    function OauthFactory() { }
    OauthFactory.prototype.create_provider = function (provider) {
        switch(provider) {
            case 'google': {
                return new GoogleProvider();
                break;

            }
            case 'linkedin': {
                return new LinkedInProvider();
                break;

            }
            default: {
                return new FacebookProvider();

            }
        }
    };
    return OauthFactory;
})();
exports.OauthFactory = OauthFactory;
