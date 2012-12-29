// Interface
export interface OauthProvider {
	get_email: () => string;
	get_display_name: () => string;
}

// Facebook
export class FacebookProvider implements OauthProvider {
	get_email() {
		return '';
	}
	get_display_name() {
		return '';
	}
}

// Twitter
export class GoogleProvider implements OauthProvider {
	get_email() {
		return '';
	}
	get_display_name() {
		return '';
	}
}

// LinkedIn
export class LinkedInProvider implements OauthProvider {
	get_email() {
		return '';
	}
	get_display_name() {
		return '';
	}
}

// Factory
export class OauthFactory {
	create_provider( provider: string ): OauthProvider {
		switch( provider ) {
			case 'google':
				return new GoogleProvider();
				break;
			case 'linkedin':
				return new LinkedInProvider();
				break;
			default:
				return new FacebookProvider();
		}
	}
}
