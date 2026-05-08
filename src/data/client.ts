// ===== SITE CONSTANTS =====
export const SITE = {
	title: "Keys on Avalon",
	tagline: "Piano and Vocal Studio",
	description: "Keys on Avalon offers affordable piano and vocal lessons in the Treasure Valley and beyond. Contact us to schedule a free assessment and trial lesson.",
	url: "https://www.keysonavalon.com",
	author: "Wesley Reid",
	locale: "en",
};

// ===== BUSINESS INFO =====
export const BUSINESS = {
	name: SITE.title,
	email: "keysonavalon@gmail.com",
	phoneForTel: "801-332-9581",
	phoneFormatted: "(801) 332-9581",
	logo: "/assets/favicons/favicon.svg",
	address: {
		lineOne: "310 E. 2nd Street",
		// lineTwo: "",
		city: "Kuna",
		state: "ID",
		zip: "83634",
		mapLink: "https://maps.app.goo.gl/rGNVmvktun6XkoqL6",
	},
	socials: {
		facebook: "https://www.facebook.com/profile.php?id=61560208978301",
		instagram: "https://www.instagram.com/",
	},
};

// ===== SEO DEFAULTS =====
export const SEO = {
	title: SITE.title,
	description: SITE.description,
};

// ===== OPEN GRAPH DEFAULTS =====
export const OG = {
	locale: "en_US",
	image: "/assets/social.jpg", // Default fallback social image located in public/
};
