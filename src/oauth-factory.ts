// define oauth json object
export class OauthJSON {
	constructor(
		public display_name: string,
		public email: string,
		public first_name: string,
		public last_name: string
	) {
	}
}

// define the oauth Interface
export interface OauthProvider {
	user: OauthJSON;
	get_email: ()        => string;
	get_display_name: () => string;
	get_first_name: ()   => string;
	get_last_name: ()    => string;
	get_user: ()         => OauthJSON;
}

// create initial implementation of
// oauth interface
export class InterfaceOauthProvider implements OauthProvider {
	constructor( public user: OauthJSON ) {
	}
	get_email() {
		return this.user.email;
	}
	get_display_name() {
		return this.user.display_name;
	}
	get_first_name() {
		return this.user.first_name;
	}
	get_last_name() {
		return this.user.last_name;
	}
	get_user() {
		return this.user;
	}
}

// extend InterfaceOauthProvider for Facebook
export class FacebookProvider extends InterfaceOauthProvider {
	constructor( public usr ) {
		super(
			new OauthJSON(
				usr.displayName,
				usr._json.email,
				usr._json.first_name,
				usr._json.last_name
			)
		);
	}
}

// extend InterfaceOauthProvider for Google
export class GoogleProvider extends InterfaceOauthProvider {
	constructor( public usr ) {
		super(
			new OauthJSON(
				usr.displayName,
				usr.emails[0].value,
				usr.name.givenName,
				usr.name.familyName
			)
		);
	}
}

// extend InterfaceOauthProvider for LinkedIn
export class LinkedInProvider extends InterfaceOauthProvider {
	constructor( public usr ) {
		super(
			new OauthJSON(
				usr.displayName,
				usr._json.emailAddress,
				usr.name.givenName,
				usr.name.familyName
			)
		);
	}
}

// Factory
export class OauthFactory {
	create_provider( provider: string, user ): OauthProvider {
		switch( provider ) {
			case 'google':
				return new GoogleProvider( user );
				break;
			case 'linkedin':
				return new LinkedInProvider( user );
				break;
			default:
				return new FacebookProvider( user );
		}
	}
}
