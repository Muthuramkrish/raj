/** Same coordinates as Google Maps place: RAJ EYE CARE AND OPTICALS */
export const STORE_LAT = 9.3580434;
export const STORE_LNG = 77.9186629;

/** Matches Google Maps business address */
export const STORE_ADDRESS = "138, Paruthi Mall Complex, Sattur, Tamil Nadu 626203";

/** Iframe: same center & zoom (17) as the Maps place view */
export const mapsEmbedUrl = `https://maps.google.com/maps?q=${STORE_LAT},${STORE_LNG}&z=17&hl=en&output=embed`;

/**
 * Opens the exact Google Maps listing (same as your shared place link).
 * Tracking query params removed.
 */
export const mapsOpenUrl =
  "https://www.google.com/maps/place/RAJ+EYE+CARE+AND+OPTICALS/@9.3580434,77.916088,17z/data=!3m1!4b1!4m6!3m5!1s0x3b06cab7f6d1bcf9:0x18a5cba734a42a30!8m2!3d9.3580434!4d77.9186629!16s%2Fg%2F11cls_g2jd";

/** Opens Google reviews panel directly for RAJ EYE CARE AND OPTICALS */
export const mapsReviewsUrl = "https://www.google.com/search?q=RAJ+EYE+CARE+AND+OPTICALS+Sattur#lrd=0x3b06cab7f6d1bcf9:0x18a5cba734a42a30,1";
