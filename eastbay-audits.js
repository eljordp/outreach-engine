// East Bay Small Business — Website Audits & Pitch Scripts
// Generated: 2026-04-09 | Researched via live site visits
// 29 businesses across Catering, Bakery, Food Truck, Wine/Beer, Dance Studios, Music Schools

const audits = {

  // ─── CATERING ───────────────────────────────────────────────────────────────

  "Aurora Catering Company": [
    {
      category: "Lead Capture",
      issue: "No quote request or inquiry form on the homepage or services pages — visitors are sent to a raw email address (dawn@auroracateringbayarea.com) and a phone number with no structured intake.",
      impact: "Event planners browsing at 9pm won't call — they'll hit a competitor's instant quote form instead.",
    },
    {
      category: "Social Proof",
      issue: "A 'Rave Reviews' nav link exists but the homepage shows zero testimonials, no star count, and no embedded Yelp or Google rating — social media icons (Facebook, LinkedIn, Yelp) link out but don't surface any review content.",
      impact: "First-time visitors have no third-party validation to trust a couple-hundred-dollar catering deposit with a new vendor.",
    },
    {
      category: "Offer",
      issue: "Homepage references 'Sample Menus' but no packages, pricing tiers, or starting price points are shown — there's no way to self-qualify budget on the site.",
      impact: "Browsers leave without knowing if Aurora fits their budget, leading to zero inquiry from mid-range event clients who don't want to 'waste a call.'",
    },
    {
      category: "Work Gallery",
      issue: "Only 4 food/event images are displayed sitewide — a beet stack, one corporate table, one social occasion, and one wedding setup. No carousel, no gallery page, no captioned event photos.",
      impact: "Brides and corporate event coordinators expect to see 20+ examples of plated meals and event setups before reaching out — 4 images signals low volume of work.",
    },
  ],

  "Oakland Catering Company": [
    {
      category: "Social Proof",
      issue: "7 testimonials exist but display no star ratings and have no link to the Google Business profile — the schema markup references Google reviews but they are not surfaced visibly on the page.",
      impact: "Visitors can't verify whether those 7 quotes represent 4.2 or 4.9 stars, which undercuts trust at the decision stage.",
    },
    {
      category: "Differentiation",
      issue: "Tagline is 'Catering made simple' with no specific competitive claim — no mention of how many events served, years in business, or what distinguishes them from Eat Drink Be Merry or Winslow's.",
      impact: "When comparing 3 caterers on Google, Oakland Catering Company has no hook that makes them the obvious call.",
    },
    {
      category: "Offer",
      issue: "Four service categories (Drop-off, Corporate, Wedding, Private Party) are listed but no pricing, minimums, or 'starting at' figures are shown anywhere on the homepage.",
      impact: "Corporate event planners with a firm budget skip inquiry entirely rather than risk a quote outside their range.",
    },
    {
      category: "Work Gallery",
      issue: "Image slider has 8 photos but they are mostly lifestyle/event-room shots — very limited close-up food photography for a catering business pitching high-end corporate and wedding clients.",
      impact: "Decision-makers evaluating food quality cannot judge the product from the site, reducing confidence before the first phone call.",
    },
  ],

  "Eat Drink Be Merry Catering Co": [
    {
      category: "CTA",
      issue: "No 'Request a Quote,' 'Book Now,' or 'Get Started' button exists anywhere on the site — the only action path is manually dialing (925) 315-0580 or composing an email to party@eatdrinkbemerrycatering.com.",
      impact: "Prospects browsing on mobile during evenings or weekends bounce without inquiring — every lost click is a lost event booking.",
    },
    {
      category: "Lead Capture",
      issue: "Zero contact or intake form on the site. Downloadable PDFs for Cocktail Parties, Deliveries, and Plated & Stationed exist but capture no visitor information.",
      impact: "Interested prospects download the menu PDF and disappear — there's no mechanism to follow up with warm leads.",
    },
    {
      category: "Social Proof",
      issue: "Testimonials page exists in the nav but the homepage shows no excerpts, no star rating, no Google or Yelp embedded widget, and no review count — a single Instagram post about a ribbon-cutting is the only social signal.",
      impact: "Danville/Blackhawk clients spending $5K–$15K on catering need more than zero visible reviews to justify a first call.",
    },
    {
      category: "Offer",
      issue: "Three downloadable PDFs describe service types but none include pricing, per-head costs, minimums, or package comparisons — there's no way to self-qualify on the site.",
      impact: "Qualified buyers with budget who can't assess fit without a call will choose a competitor who shows 'starting at $X per person.'",
    },
  ],

  "Sunrise Bistro and Catering": [
    {
      category: "CTA",
      issue: "The catering section displays 'Online ordering not available' with only a phone number and email — no inquiry button, no 'Request a Quote' CTA, and no link to a catering-specific contact form.",
      impact: "Catering leads generated from the bistro's reputation hit a dead end online and must cold-call, reducing conversion from warm web traffic.",
    },
    {
      category: "Lead Capture",
      issue: "The only form on the site is a newsletter signup (first name, last name, email) — there is no catering quote form, event intake form, or callback request mechanism.",
      impact: "The newsletter captures general fans, not catering buyers — event inquiries that could be $500–$5,000 orders go uncaptured.",
    },
    {
      category: "Work Gallery",
      issue: "Only one generic food photo appears on the homepage — no catering event setups, no plated multi-course photos, no photos from the 'Best of the East Bay Catering' award wins that are referenced in the copy.",
      impact: "Award wins without visual proof feel like empty claims — event clients can't picture what a Sunrise-catered event looks like.",
    },
    {
      category: "Social Proof",
      issue: "4-star Yelp and 4.5-star catering ratings are displayed as text links but no review count is shown, no testimonial quotes appear, and there is no Google reviews link.",
      impact: "Competitors showing '4.8 stars · 120 reviews' outperform a bare star badge with no volume behind it.",
    },
  ],

  "Winslow's Catering": [
    {
      category: "Social Proof",
      issue: "Three testimonials with photos (Walter B., Glenn P., Yasmeen H.) and a 'Shopper Approved' badge are present, but there are no star ratings, no Google Reviews link, no aggregate review count, and no Yelp or Facebook rating integration.",
      impact: "Livermore event clients comparing caterers on Google expect to see a star count — a badge they don't recognize (Shopper Approved) carries less weight than a live Google rating.",
    },
    {
      category: "Work Gallery",
      issue: "The gallery consists entirely of service category thumbnails and testimonial headshots — there are zero photos of actual catered events, plated dishes, buffet setups, or table arrangements.",
      impact: "Wedding and corporate clients need visual proof of food quality and presentation before committing to a tasting — no gallery means no shortlist.",
    },
    {
      category: "Offer",
      issue: "Four service categories (Drop Off, Corporate, Party, Wedding) are described but pricing, minimums, and 'starting at' figures are absent from all pages.",
      impact: "Wine country clients planning larger events can't self-qualify, so Winslow's loses inquiries from buyers who assume they're priced out.",
    },
    {
      category: "Service Area",
      issue: "Service area is described only as 'Livermore area' and 'wine country destination' — no explicit radius, no list of cities served, no delivery fee transparency.",
      impact: "Potential clients in Pleasanton, Dublin, or Danville don't know if Winslow's serves them without making a call, which most won't bother doing.",
    },
  ],

  // ─── BAKERIES ───────────────────────────────────────────────────────────────

  "La Farine Bakery": [
    {
      category: "Lead Capture",
      issue: "The site (lafarine.com) has been unreachable/offline — there is no visible online ordering, custom cake inquiry form, or catering contact form accessible to web visitors.",
      impact: "An Oakland institution with 3 locations and 4.5-star Yelp ratings (800+ reviews) is losing every custom order and catering inquiry that comes via web search.",
    },
    {
      category: "CTA",
      issue: "No 'Order Online,' 'Request Custom Cake,' or 'Catering Inquiry' button exists — the website does not convert any of the substantial organic search traffic the brand receives.",
      impact: "Customers who find La Farine via Google for a special occasion cake are forced to call or visit in person, losing impulse purchases.",
    },
    {
      category: "Social Proof",
      issue: "Despite hundreds of Yelp reviews and strong Tripadvisor presence, none of this social proof is embedded on or linked from the main website.",
      impact: "The brand's best marketing asset — 800+ customer reviews — is invisible to first-time site visitors making a purchasing decision.",
    },
    {
      category: "Offer",
      issue: "No catering packages, custom cake pricing tiers, or seasonal offerings are displayed on the site — nothing signals what La Farine does beyond walk-in retail.",
      impact: "Corporate clients and event planners looking for a French bakery caterer in Oakland can't tell La Farine offers catering at all.",
    },
  ],

  "A Sweet Affair Bakery": [
    {
      category: "Lead Capture",
      issue: "No custom cake or special order inquiry form exists — the site relies on a generic contact form that is marked inactive in the code ('generic_contact_form_active': false) and an email-only newsletter widget.",
      impact: "Custom cake buyers who want to describe their event and get a quote abandon the process — a dedicated intake form capturing event date, serving size, and style would catch these orders.",
    },
    {
      category: "Offer",
      issue: "No catering packages, seasonal promotions, custom cake pricing tiers, or loyalty program details are shown anywhere on the site.",
      impact: "Brides and party planners comparing bakeries will choose the competitor who shows 'wedding tiers starting at $X' over one with no visible pricing.",
    },
    {
      category: "Service Area",
      issue: "Two Walnut Creek locations are listed but no delivery radius, delivery fee structure, or list of served cities is mentioned for catering or custom orders.",
      impact: "Customers in Concord, Pleasant Hill, or Lafayette don't know if they qualify for delivery without calling — most won't.",
    },
    {
      category: "Differentiation",
      issue: "Tagline is 'Where Family Recipes Become Your Favorites' and the site notes founding in 1984 and scratch-made baking, but no origin story, signature technique, or competitive comparison is developed.",
      impact: "In a market with multiple high-quality bakeries, 40-year heritage and family recipes need to be told as a story — a tagline alone doesn't convert.",
    },
  ],

  "Brioche de Paris": [
    {
      category: "Offer",
      issue: "Catering and parties are listed in the nav but clicking through shows no package descriptions, per-person pricing, minimum order sizes, or sample menus — just a generic page with a contact prompt.",
      impact: "Corporate clients and event planners need enough detail to approve a vendor internally — a blank catering page sends them to a competitor who shows what they get.",
    },
    {
      category: "Lead Capture",
      issue: "The only structured capture mechanism is an email-only newsletter widget — there's no custom order form, catering inquiry form, or party booking request form.",
      impact: "Customers interested in a croissant tower or custom party order for 50 have no path to submit details — they're forced to call or walk in.",
    },
    {
      category: "Social Proof",
      issue: "Four 5-star Google reviews are displayed but show no aggregate star count, no total review volume, and no link to the Google Business profile — and there is no Yelp integration.",
      impact: "Four cherry-picked quotes without a review count feel curated rather than earned — linking to the live Google profile with 'See all X reviews' would build far more trust.",
    },
    {
      category: "Service Area",
      issue: "Address (1421 Locust St, Walnut Creek) is listed but no delivery radius, catering service distance, or shipping information is provided for catering or special orders.",
      impact: "Potential catering clients in Lafayette, Concord, or Danville don't know if Brioche de Paris will come to them.",
    },
  ],

  "Mamahouse Bakeshop": [
    {
      category: "Social Proof",
      issue: "Zero testimonials, customer reviews, star ratings, or Google/Yelp links appear anywhere on the site — Instagram handle 'mamahousebakeshop' is listed but not embedded and links to no reviews.",
      impact: "A small-batch premium bakery asking $31+ per pastry box has no third-party credibility — first-time buyers won't convert without proof others love the product.",
    },
    {
      category: "Work Gallery",
      issue: "Only 2–3 cake images appear on the site — no process shots, no lifestyle photos of the bakery environment, no images of custom orders or pastry box arrangements.",
      impact: "Competitors with 50-image Instagram-style galleries convert browsers into buyers — Mamahouse's minimal photography undersells the quality of its product.",
    },
    {
      category: "Lead Capture",
      issue: "No custom cake inquiry form, no FAQ about the ordering process, and no email capture on the homepage — customers must navigate away to the order page or contact page.",
      impact: "Customers interested in a custom cake for a birthday or event don't know how to start the process and leave without ordering.",
    },
    {
      category: "Service Area",
      issue: "Fremont, CA is mentioned but the delivery radius for pastry boxes and cakes is undefined — 'pick up or delivery' is noted without city coverage or delivery fee structure.",
      impact: "Bay Area customers outside Fremont can't determine if they're eligible for delivery, blocking orders from a large potential audience.",
    },
  ],

  // ─── FOOD TRUCK ─────────────────────────────────────────────────────────────

  "DiDiCoCo's Southern Comfort LLC": [
    {
      category: "Lead Capture",
      issue: "No catering inquiry or event booking form exists — the only path to book a catering event is calling (925) 477-7161, and the Square ordering system is for pickup/delivery only, not events.",
      impact: "Event coordinators and corporate lunch planners who discover DiDiCoCo's online can't submit an inquiry outside business hours — after-hours catering leads evaporate.",
    },
    {
      category: "Social Proof",
      issue: "10+ testimonials with names and photos are present but there are no Google or Yelp star ratings, no links to review platforms, and no aggregate rating badge — just quotes on the site.",
      impact: "Buyers comparing food trucks for a corporate event will Google 'DiDiCoCo's reviews' and find the disconnect between on-site testimonials and an unverified Google listing.",
    },
    {
      category: "Work Gallery",
      issue: "Food photography is minimal — the site shows mostly testimonial headshots and background images rather than close-up shots of the catfish & prawns, turkey wings, and signature combos the menu describes.",
      impact: "Southern comfort food is a visual sell — a buyer choosing between 3 food trucks picks the one whose food looks the best on the screen.",
    },
    {
      category: "Service Area",
      issue: "Service area is described only as 'Bay area and surrounding areas' with no city list, no radius from Antioch, and no minimum booking distance or mileage fee.",
      impact: "Clients in Oakland, Walnut Creek, or Concord don't know if DiDiCoCo's will travel to them — vague geography loses bookings to trucks with clear coverage maps.",
    },
  ],

  // ─── WINE / BEER ────────────────────────────────────────────────────────────

  "Wine on Piedmont": [
    {
      category: "CTA",
      issue: "The only CTA on the site is 'Shop Full Collection' for retail wine — there is no 'Reserve a Table,' 'Book a Tasting,' or 'Host a Private Event' button anywhere on the site.",
      impact: "The wine bar and Friday tasting events generate zero online bookings — all private event revenue is left to walk-in or word-of-mouth discovery.",
    },
    {
      category: "Lead Capture",
      issue: "The only form is a footer email newsletter signup — there is no private event inquiry form, no tasting reservation form, and no contact form beyond a listed phone number and email.",
      impact: "Groups looking to book a private tasting or buyout for a birthday or corporate event have no online path — they go to a competitor who has a 'Book Private Event' form.",
    },
    {
      category: "Social Proof",
      issue: "Zero customer reviews, testimonials, or ratings appear anywhere on the site — social media icons link to Instagram, Facebook, TikTok, and X but none surface reviews or engagement metrics.",
      impact: "A bottle shop open since 2009 in Oakland with no visible reviews looks inactive to new customers doing pre-visit research.",
    },
    {
      category: "Work Gallery",
      issue: "A single banner image is the entirety of the site's visual content — no interior venue photos, no event photos, no staff or ambiance imagery of any kind.",
      impact: "Private event buyers book venues based on atmosphere — with one banner photo, Wine on Piedmont can't compete visually against nearby bars with full photo galleries.",
    },
  ],

  "CoCo Noir Wine Shop & Bar": [
    {
      category: "CTA",
      issue: "No reservation, event booking, or inquiry button exists anywhere on the page — there is no actionable path for a customer who wants to host a private event or book a tasting.",
      impact: "Private event bookings — a high-value revenue line for a wine bar — are lost entirely because there's no mechanism to capture them online.",
    },
    {
      category: "Lead Capture",
      issue: "Zero email signup, contact form, or private event inquiry form is present on the site — no mechanism exists to capture visitor information or follow up with interested leads.",
      impact: "Every web visitor who doesn't already know the phone number leaves without a way to be contacted — the site generates no leads.",
    },
    {
      category: "Social Proof",
      issue: "No testimonials, no star ratings, no Google or Yelp review links, and no social media integration appear anywhere on the site.",
      impact: "A wine bar with no visible reviews has zero conversion power for first-time visitors comparing options in the East Bay.",
    },
    {
      category: "Differentiation",
      issue: "No value proposition, wine selection description, event capability, or unique positioning is articulated on the site — the page is essentially a Wix template shell with business name only.",
      impact: "Customers who find CoCo Noir via search have no reason to choose it over a competitor whose site communicates atmosphere, selection, and signature events.",
    },
  ],

  "Cask Taproom": [
    {
      category: "CTA",
      issue: "No 'Reserve a Table,' 'Book a Private Event,' or 'Schedule a Tasting' button exists — the only CTA on the homepage is a newsletter signup.",
      impact: "Groups and corporate teams looking to book the taproom for private events find no path forward and book a competitor venue instead.",
    },
    {
      category: "Social Proof",
      issue: "Zero customer testimonials, star ratings, or Google/Yelp review links appear — only an Instagram feed is embedded, with no review aggregation.",
      impact: "Craft beer buyers doing pre-visit research on Google see a site with no social proof alongside competitors who have embedded star ratings.",
    },
    {
      category: "Work Gallery",
      issue: "Only 2 taproom images are shown (desktop and mobile versions of the same photo) — no photos of events, tap handles, food pairings, or venue ambiance.",
      impact: "Two photos of the same room cannot sell a private event to a buyer deciding between 3 taproom venues.",
    },
    {
      category: "Lead Capture",
      issue: "No contact form, no private event inquiry form, and no booking mechanism exists — the site lists zero contact information beyond the newsletter form.",
      impact: "Corporate clients and event planners with no phone number or inquiry form can't reach out — the taproom is invisible as an event venue.",
    },
  ],

  "The Pour Up Wine Bar": [
    {
      category: "Lead Capture",
      issue: "The Parties section reads 'Intimate Gatherings Made Memorable!' but contains no functional inquiry form — there's a 'Book your experience' CTA that links to Eventbrite for specific events only, not a general private event intake.",
      impact: "Groups wanting to host a private wine event at The Pour Up have no online path to inquire — private booking revenue requires a direct call to a number that's hard to find.",
    },
    {
      category: "Social Proof",
      issue: "Google Business page is linked in the footer but no star rating, review count, or embedded testimonials appear on the site — there are no customer quotes or photos from past private events.",
      impact: "Antioch locals comparing wine bars for a birthday or bachelorette event won't find the social proof they need to choose The Pour Up over a bar with visible reviews.",
    },
    {
      category: "Offer",
      issue: "A wine club is referenced via VinoShipper and 'Happy Hour/Specials' is a nav link, but no package pricing, private event tiers, or wine club benefits are described on the homepage.",
      impact: "The Pour Up's 'black-owned winemakers' USP and master mixologist positioning are strong — but without package pricing, they can't convert the value-conscious buyer who needs to see numbers.",
    },
    {
      category: "Work Gallery",
      issue: "Slideshow contains only 4 event/venue photos with no captions — no professional interior photography, no photos from past private events, and no video content showcasing the atmosphere.",
      impact: "4 uncaptioned photos can't communicate the atmosphere of a private wine experience to a buyer who's never visited.",
    },
  ],

  // ─── DANCE STUDIOS ──────────────────────────────────────────────────────────

  "re.DEFINE Dance Studio": [
    {
      category: "CTA",
      issue: "No 'Try a Free Class' or 'Book a Trial' button exists on the homepage — the only action buttons are 'Register' and 'Log-In' which presuppose the visitor has already decided to enroll.",
      impact: "Parents and adults browsing for their first hip hop class have no low-friction entry point — missing a trial CTA loses the undecided visitor who needs one nudge.",
    },
    {
      category: "Lead Capture",
      issue: "The only capture mechanism is a footer email subscription form ('Sign up to receive news and updates') — there is no trial class request form, no inquiry form for specific classes, and no callback option.",
      impact: "Parents who want to ask about age-appropriate classes or pricing before committing are forced to call or email cold — most won't.",
    },
    {
      category: "Social Proof",
      issue: "One award badge ('Best Dance Schools in Hayward 2024') is displayed but there are no testimonials, no parent or student quotes, no Google reviews link, and no star rating on the page.",
      impact: "An award badge without a review link or parent testimonials doesn't answer 'is this the right fit for my 8-year-old?' — the question that drives enrollment decisions.",
    },
    {
      category: "Offer",
      issue: "No pricing, no class packages, no trial class offer, and no sibling or referral discounts are visible — pricing is entirely hidden behind a login wall.",
      impact: "Parents comparison-shopping online choose the studio that shows them pricing over one that makes them call to ask — hidden pricing loses the comparison-shopping parent.",
    },
  ],

  "East Bay Dance Center": [
    {
      category: "Lead Capture",
      issue: "No embedded inquiry or signup form exists on the homepage — there's an 'Ask A Question' button but it links to a separate contact page rather than opening an inline form.",
      impact: "Parents curious about class availability who close the contact page before sending a message are gone — an inline form with name, child's age, and email captures them instantly.",
    },
    {
      category: "Social Proof",
      issue: "Exactly one testimonial appears on the site ('I've been dancing here for 8 years...') with no star rating, no Google reviews link, and no instructor credentials featured on the homepage.",
      impact: "One testimonial for an 8-year-old studio is not enough social proof for a parent enrolling a child for the first time — it raises the question of why there's only one.",
    },
    {
      category: "Offer",
      issue: "No tuition rates, class package pricing, or trial class offers are visible on the homepage — a 'Tuition & Policies' link exists in the nav but pricing is fully hidden.",
      impact: "Oakland parents on a budget won't call to ask pricing — they'll go to a competitor whose site shows 'Classes from $X/month.'",
    },
    {
      category: "Work Gallery",
      issue: "Eight carousel slides of classes/performances exist but none have captions identifying class type, age group, or style — the gallery looks generic rather than showcasing the studio's specific programs.",
      impact: "A parent looking for contemporary dance for a 12-year-old can't confirm from the gallery that East Bay Dance Center teaches that style at that level.",
    },
  ],

  "Full Out Studios": [
    {
      category: "Social Proof",
      issue: "Zero testimonials, student reviews, star ratings, Google review links, or instructor credentials appear anywhere on the site — there is no third-party validation of the studio's quality.",
      impact: "Parents and adults considering a $100–$200/month commitment to a new studio need more than a mission statement — zero reviews is a hard stop for the cautious buyer.",
    },
    {
      category: "Offer",
      issue: "No pricing, class package tiers, membership options, or trial class costs are listed — the schedule page requires navigation away from the homepage and still shows no dollar figures.",
      impact: "Adults comparing Oakland dance studios online will choose the studio that shows 'Drop-in classes $20, Monthly unlimited $120' over one with invisible pricing.",
    },
    {
      category: "Lead Capture",
      issue: "The newsletter form captures name and email but there's no inquiry form for class-specific questions, no trial class signup, and no callback request — the work exchange Typeform is not a lead capture tool for students.",
      impact: "Prospective students who don't want to navigate to an external schedule page will leave without any engagement — a simple 'What class are you interested in?' form would capture them.",
    },
    {
      category: "Service Area",
      issue: "'Oakland, CA' is stated but no neighborhood, cross streets, parking info, or transit access is mentioned — the studio's AAPI/queer-centered community identity has a specific geographic pull that isn't leveraged.",
      impact: "First-time visitors from Alameda or Berkeley don't know how easy it is to get there, which reduces the likelihood of showing up for a first class.",
    },
  ],

  "Danspace": [
    {
      category: "CTA",
      issue: "No 'Enroll Now,' 'Try a Class,' or 'Register' button exists on the homepage — class schedule links are buried in the navigation and PDFs require a download to access.",
      impact: "First-time visitors to a dance studio with no action button default to closing the tab — there is no friction-free path to start enrollment.",
    },
    {
      category: "Lead Capture",
      issue: "No contact form, no inquiry field, and no email signup appear on the homepage — the only contact mechanism is an email address in the footer (info@danspace.com).",
      impact: "Parents looking to enroll a child mid-season who don't get an immediate response to a cold email will choose a studio with an online intake form.",
    },
    {
      category: "Social Proof",
      issue: "Zero testimonials, star ratings, Google review links, or student performance photos appear — the only photo on the homepage is a building exterior and the studio logo.",
      impact: "A studio offering Ballerina Birthday Parties, Dance for PD, and adult programs has compelling stories to tell — none of them are told on the site.",
    },
    {
      category: "Work Gallery",
      issue: "Only 2 images appear sitewide (logo and building exterior) — no class action shots, no recital or performance photos, and no instructor or student imagery.",
      impact: "Dance is a visual art form — a studio with no photos of dancing sends the message that activity is low or the brand doesn't invest in its presentation.",
    },
  ],

  "BlackBox Studios": [
    {
      category: "Lead Capture",
      issue: "No inquiry or contact form exists anywhere on the site — the contact page lists only an address and email with no form field, requiring visitors to compose a separate email.",
      impact: "Parents with quick questions about class availability or pricing for their child won't email cold — they'll call a competitor who has an inline form.",
    },
    {
      category: "Social Proof",
      issue: "Zero testimonials, student reviews, star ratings, Google review links, or instructor credentials appear on the homepage — no social proof of any kind is visible.",
      impact: "A ballet and dance studio for kids with no parent testimonials gives parents no confidence that other families have trusted them with their children.",
    },
    {
      category: "Differentiation",
      issue: "Tagline is 'Ballet & Dance for Kids & Adults' — no mission statement, teaching philosophy, or explanation of Ballet22 or Halcyon Dance Project programs is provided on the homepage.",
      impact: "Without a clear differentiator, BlackBox Studios looks interchangeable with any other Oakland dance studio — there's no reason to choose them specifically.",
    },
    {
      category: "Offer",
      issue: "Trial classes are mentioned ('Free Trial Class' for youth, '3 Classes for $30' for adults) but no full pricing structure, monthly rates, or membership tiers are visible — the tuition page requires separate navigation.",
      impact: "Adults comparing options online want to see 'Monthly unlimited $X, Drop-in $Y' before committing to a trial — invisible pricing loses them before the first visit.",
    },
  ],

  "Expressions Dance & Arts": [
    {
      category: "Offer",
      issue: "No pricing is visible anywhere on the site — class packages, monthly tuition, and recital fees are not listed, and visitors must register through an external portal (TheStudioDirector) to see any costs.",
      impact: "Pleasanton parents comparing dance studios will choose the one that shows pricing upfront — hiding it behind registration creates a barrier that costs enrollments.",
    },
    {
      category: "Social Proof",
      issue: "Genuine parent testimonials exist (including a 5+ year retention quote) but there are no Google or Yelp star ratings, no review links, and no review count — social media icons are present but don't link to review pages.",
      impact: "Good testimonials without star ratings or a Google link can't compete with a competitor who shows '4.9 stars · 87 reviews' in Google search results.",
    },
    {
      category: "Work Gallery",
      issue: "A 'Photo Gallery' nav link exists but the homepage has zero embedded class or performance images — only stylized graphics appear above the fold.",
      impact: "Parents choosing between dance studios in Pleasanton will spend more time on the site that shows kids actually dancing — Expressions' homepage shows none.",
    },
    {
      category: "Lead Capture",
      issue: "A generic inquiry form ('Drop us a line!') captures name and email only — no age of dancer, class interest, or schedule preference fields, and no newsletter or trial class opt-in.",
      impact: "Unqualified form submissions require extra back-and-forth — a qualified intake form would identify the right class and convert the inquiry faster.",
    },
  ],

  "Jazz N Taps Dance Studio": [
    {
      category: "Social Proof",
      issue: "The homepage claims 'Voted Best Dance Studio In Pleasanton' but provides no source, no publication name, no year, and no link to verify the claim — no testimonials, Google reviews, or star ratings appear.",
      impact: "An unverified superlative claim without a source is weaker than a competitor showing '4.8 stars · 64 Google reviews' — skeptical parents will dismiss it.",
    },
    {
      category: "Lead Capture",
      issue: "No inquiry form, contact form, or email signup exists on the homepage — parents with questions before registering must navigate to a separate contact page that isn't promoted.",
      impact: "Parents who can't find instant answers about age groups or class times abandon the site rather than hunt for a contact page.",
    },
    {
      category: "Differentiation",
      issue: "Positioning as 'Bay Area's premiere dance studio' is unsupported — no instructor bios, credentials, competition wins, or school history are featured to back the claim.",
      impact: "The best dance studios in the East Bay market on instructor pedigree and student competition results — Jazz N Taps shows neither.",
    },
    {
      category: "Service Area",
      issue: "Address is listed (Pleasanton, CA) but no neighborhood detail, parking info, or map embed is present — the studio's coverage of age groups and commute-friendliness isn't communicated.",
      impact: "Parents considering a studio for multiple children in different age brackets won't find the specific program details they need to commit without another click.",
    },
  ],

  "Vineyard Ballet Academy": [
    {
      category: "CTA",
      issue: "A 'Sign up for Summer Classes now!' banner is displayed but the only action path is a 'Register' nav link — there's no 'Book a Free Trial Class' or 'Schedule Your First Lesson' button on the homepage.",
      impact: "Prospects who aren't ready to register but would attend a free trial are lost — ballet academies that offer a trial class CTA convert at significantly higher rates.",
    },
    {
      category: "Social Proof",
      issue: "Zero testimonials, student or parent reviews, star ratings, or Google Business profile links appear anywhere on the site — there's no credibility signal for a new family considering enrollment.",
      impact: "Ballet is a trust-based investment for parents — a studio with no visible proof of other families' positive experiences will lose to one that shows testimonials with names and photos.",
    },
    {
      category: "Work Gallery",
      issue: "Only 2 images appear on the entire site (logo and a summer class graphic) — no performance photos, no class action shots, no recital images, and no instructor photos.",
      impact: "Ballet academies with no photos of students performing have no visual hook — parents are drawn to beautiful recital photography that makes their child want to dance.",
    },
    {
      category: "Differentiation",
      issue: "No mission statement, instructor credentials, teaching methodology, or competitive positioning is present — there's nothing to distinguish Vineyard Ballet from any other Pleasanton dance studio.",
      impact: "Pleasanton has multiple dance and ballet options — Vineyard gives a browsing parent no specific reason to choose them over a competitor with a clear philosophy and instructor bios.",
    },
  ],

  "The DA Dance Center": [
    {
      category: "CTA",
      issue: "No enrollment, trial class, or inquiry buttons are visible on the homepage — the site appears to be a placeholder with minimal rendered content and no conversion pathways.",
      impact: "Every visitor who finds The DA Dance Center via search hits a dead end — there's no path to enroll, inquire, or even find class information.",
    },
    {
      category: "Lead Capture",
      issue: "No contact form, email signup, or inquiry mechanism of any kind is present on the site.",
      impact: "Zero leads are being captured online — all enrollment presumably happens via word of mouth or in-person, leaving a massive gap in digital discovery.",
    },
    {
      category: "Social Proof",
      issue: "No testimonials, reviews, star ratings, or social media links are visible on the site.",
      impact: "A dance studio with no visible proof of students or families limits itself entirely to referral traffic — the site does not work as a marketing asset.",
    },
    {
      category: "Work Gallery",
      issue: "No photos of classes, performances, instructors, or studio space appear anywhere on the site.",
      impact: "Without a single image of students dancing, the site cannot communicate the energy, quality, or environment that drives enrollment decisions.",
    },
  ],

  "Dance Connection Performing Arts Centre": [
    {
      category: "Lead Capture",
      issue: "No email signup, contact form, or inquiry mechanism exists on the homepage — all enrollment is routed to an external TheStudioDirector portal with no inline capture for first-time visitors.",
      impact: "Parents browsing the site for the first time who aren't ready to register are lost — there's no way to capture their email for a follow-up or nurture sequence.",
    },
    {
      category: "Social Proof",
      issue: "Zero testimonials, parent reviews, star ratings, or Google Business profile links appear on the site — an 'Alumni' nav exists but no success stories or featured student achievements are visible.",
      impact: "Concord parents choosing between studios will trust one that shows '4.9 stars · 52 reviews' over one with a clean site and no social proof.",
    },
    {
      category: "Offer",
      issue: "No pricing, class package tiers, tuition ranges, or trial class offers are displayed on the homepage — classes for 'ages 3–18' are mentioned but cost is completely opaque.",
      impact: "Parents budgeting for multiple children need to see pricing before they'll spend time on a registration portal — no pricing means no consideration.",
    },
    {
      category: "Differentiation",
      issue: "Tagline focuses on 'nurturing a love for dance' with no instructor credentials, competition results, or alumni achievements highlighted — no competitive distinction from 5+ other Concord/Walnut Creek studios.",
      impact: "Generic messaging won't win a Google search comparison — studios that feature specific instructor training and student performance wins get the call first.",
    },
  ],

  // ─── MUSIC SCHOOLS ──────────────────────────────────────────────────────────

  "Fremont Mission Music Institute": [
    {
      category: "CTA",
      issue: "The only CTA is a 'View Lessons' link buried mid-page — there's no 'Book a Trial Lesson,' 'Enroll Now,' or 'Schedule Your First Lesson' button anywhere on the homepage.",
      impact: "Parents and adult beginners ready to start lessons need an obvious next step — 'View Lessons' sends them to a list, not an enrollment path.",
    },
    {
      category: "Lead Capture",
      issue: "No contact form, trial lesson request form, or email signup exists on the homepage — only a phone number and email address are listed with no inline capture.",
      impact: "After-hours inquiries from parents researching music schools at 9pm have no digital path — they'll submit a form on a competitor's site instead.",
    },
    {
      category: "Social Proof",
      issue: "No testimonials, student reviews, star ratings, or Google Business profile link are present — a single Facebook link exists but no social proof is integrated.",
      impact: "Fremont families spending $100–$200/month on private lessons need proof others have had success — zero reviews is a conversion killer.",
    },
    {
      category: "Offer",
      issue: "A 'Spring Special' nav item exists but no pricing, lesson package tiers, group vs. private options, or introductory offers are described on the homepage.",
      impact: "Price-sensitive families will call the school whose website shows 'Private lessons from $X/30 min' before they call one that hides all pricing.",
    },
  ],

  "Cadence Academy of Music": [
    {
      category: "CTA",
      issue: "No 'Book a Trial Lesson,' 'Enroll Now,' or 'Schedule a Lesson' button is visible on the homepage — the Wix-based site has infrastructure but no actionable enrollment pathway.",
      impact: "A music school with no CTA is invisible as a business to anyone who finds it online — there's no way to convert search traffic into students.",
    },
    {
      category: "Lead Capture",
      issue: "No inquiry form, signup form, or email capture mechanism is present on the page — there is no structured way for a prospective student to express interest.",
      impact: "Every web visitor who isn't ready to call leaves with no way to be followed up with — the school loses every warm lead that hits the site.",
    },
    {
      category: "Social Proof",
      issue: "Zero testimonials, reviews, star ratings, or Google Business profile links are visible — no third-party credibility of any kind appears on the site.",
      impact: "Parents choosing between music schools in the East Bay will choose the one with verifiable reviews over one with a blank social proof section.",
    },
    {
      category: "Offer",
      issue: "No instruments offered, no lesson formats (private vs. group), no pricing tiers, and no introductory trial lesson offer are communicated anywhere.",
      impact: "Visitors have no idea what Cadence Academy teaches, who it's for, or what it costs — the site cannot compete with schools that answer these questions instantly.",
    },
  ],

  "Village Music School": [
    {
      category: "Social Proof",
      issue: "Only one brief testimonial appears ('She is begging me to continue piano classes' — Maggie T., Walnut Creek) with no star rating, no Google review link, no review volume, and no instructor credentials on the homepage.",
      impact: "One testimonial for a school serving 500 weekly students across two locations suggests the social proof machine is completely underutilized — linking to the live Google profile alone would triple credibility.",
    },
    {
      category: "Offer",
      issue: "Programs (Private Lessons, Group Classes, Summer Camps, Project Rock Band) are listed but no pricing, lesson duration options, package discounts, or trial lesson costs are displayed.",
      impact: "Parents comparing schools in Pleasant Hill and Walnut Creek will call the school that shows 'Private lessons $X/30 min' first — hidden pricing costs Village Music first-mover advantage.",
    },
    {
      category: "Work Gallery",
      issue: "Minimal imagery of actual lessons or performances — mostly stock photos and logos with no student recital galleries, in-studio action shots, or performance event photos.",
      impact: "A school with 25+ instructors and 500 weekly students has abundant photo opportunities — using stock photos instead signals a disconnect between the school's scale and its website investment.",
    },
    {
      category: "Lead Capture",
      issue: "The footer contact form captures name, email, and a generic message but has no instrument selection, student age, or desired lesson format fields to qualify leads.",
      impact: "Unqualified 'I'm interested' submissions require extra back-and-forth before the school can suggest the right teacher — a smarter form reduces friction and books faster.",
    },
  ],

  "Castro Valley School of Music": [
    {
      category: "Lead Capture",
      issue: "The 'Request Info' header link and contact page do not include an embedded form with instrument, age, or schedule fields — the call-to-action is vague and links to a generic contact page.",
      impact: "Qualified leads from parents researching specific instruments or lesson times can't self-sort — the school has to play 20 questions over email before booking a trial.",
    },
    {
      category: "Offer",
      issue: "Monthly, 3-month, and 6-month packages are mentioned in copy but zero pricing is shown — the homepage lists no rates, no per-lesson costs, and no introductory offer.",
      impact: "Families shopping 3–4 Castro Valley music schools will call the one with visible pricing first, not the one that says 'contact us for rates.'",
    },
    {
      category: "Social Proof",
      issue: "Two 5-star Google reviews are displayed with an aggregate rating of '5 stars / 2 reviews' — the school claims 'trusted by thousands of families since 2013' but links to no Google Business profile and shows only 2 reviews as evidence.",
      impact: "2 reviews contradicts 'thousands of families' — linking to the live Google profile and embedding the actual review count would immediately resolve this trust gap.",
    },
    {
      category: "CTA",
      issue: "The 'Request Info' button in the header is the primary CTA but clicking it opens a generic contact page rather than a trial lesson booking form or intake with instrument and age fields.",
      impact: "A vague 'request info' CTA underperforms a specific 'Book Your First Lesson' button — families who aren't sure they're ready won't click 'Request Info' but will click 'Try a Free Lesson.'",
    },
  ],

  "Starland School of Music": [
    {
      category: "Lead Capture",
      issue: "No embedded contact or inquiry form exists on the homepage — the 'Request More Info' and 'Consultation Request' CTAs redirect to external pages rather than capturing leads inline.",
      impact: "Parents comparing music schools who arrive after hours have no instant path to express interest — redirecting away from the homepage costs conversions.",
    },
    {
      category: "Social Proof",
      issue: "Three Google review quotes are displayed with names but no star rating is shown, no aggregate review count appears, and no link to the Google Business profile is provided.",
      impact: "Families can't verify how many total reviews back these three quotes — linking to the live Google profile with the star count would turn these quotes into verifiable proof.",
    },
    {
      category: "Offer",
      issue: "Lesson types (guitar, piano, voice, etc.) are listed but no pricing, package tiers, introductory rates, or trial lesson offers are visible on the homepage.",
      impact: "A school established since 1979 with a fully stocked music store has strong value to offer — hiding the price forces comparison shoppers to call, and most won't.",
    },
    {
      category: "Work Gallery",
      issue: "Only one recital photo is visible — there are no lesson photos, student performance shots, instrument store images, or instructor profiles despite the school's 45+ year tenure.",
      impact: "A Yamaha Educational System partner with its own music store should have a rich visual library — one recital photo undersells the school's depth and experience.",
    },
  ],

}


const scripts = {

  // ─── CATERING ───────────────────────────────────────────────────────────────

  "Aurora Catering Company":
    "Your site lists an email address for catering inquiries, but there's no quote form — event planners who find you at 9pm are clicking away to a competitor who has one. That's booked weddings and corporate events walking out the door every week. I build catering sites with event intake forms and gallery pages that convert after-hours browsers into paying clients — done in under 2 weeks.",

  "Oakland Catering Company":
    "Your Google reviews are embedded in your schema markup but invisible on the page itself — visitors see 7 testimonial quotes with no star rating and no link to your Google profile, so the social proof you've earned doesn't do the work it should. That costs you the comparison-shopping buyer who picks the caterer with a visible 4.8 stars. I build catering sites that surface your reviews and ratings front and center — done in under 2 weeks.",

  "Eat Drink Be Merry Catering Co":
    "There's no booking or quote button anywhere on your site — the only way a client can reach you is to dial the phone or compose an email manually, which most people browsing at night simply won't do. Every event inquiry that doesn't happen is a $1,500–$8,000 catering contract you never got a chance to quote. I build catering sites with sticky 'Request a Quote' buttons and inline event forms that capture leads around the clock — done in under 2 weeks.",

  "Sunrise Bistro and Catering":
    "Your catering page says 'online ordering not available' and points visitors to a phone number — but your bistro's reputation and East Bay Catering award are driving people to your site expecting an easy way to inquire, and they're finding a dead end. Those are real catering contracts — corporate lunches, holiday parties — being lost to caterers with a working inquiry form. I build bistro-and-catering sites that keep the bistro brand and add a clean event intake system — done in under 2 weeks.",

  "Winslow's Catering":
    "You have real testimonials and a contact form, but your gallery shows zero photos of actual food or catered events — just category thumbnails — and there's no Google reviews link to back up the Shopper Approved badge most people don't recognize. Livermore couples planning weddings and corporate teams booking holiday parties go with the caterer whose food looks the best online. I build catering sites with full event galleries and embedded Google review widgets that turn browsers into inquiries — done in under 2 weeks.",

  // ─── BAKERIES ───────────────────────────────────────────────────────────────

  "La Farine Bakery":
    "Your website is currently unreachable — lafarine.com returns a connection error, which means every customer searching for a French bakery in Oakland, custom cakes, or catering is hitting a blank page and going straight to a competitor. With 800+ Yelp reviews and 3 locations, you're the best-reviewed bakery in the area losing customers to a broken website. I build clean bakery sites with online ordering, custom cake inquiry forms, and your review count front and center — done in under 2 weeks.",

  "A Sweet Affair Bakery":
    "Your site's custom order form is marked inactive in the code, so customers looking to order a custom birthday or wedding cake have no way to start that conversation online — they're landing on your beautiful gallery and leaving without ordering. Custom cake orders are your highest-margin product and every one that doesn't get placed is $150–$600 left on the table. I build bakery sites with a real custom order intake that captures event date, serving size, and flavor preferences upfront — done in under 2 weeks.",

  "Brioche de Paris":
    "Your catering and parties pages exist but show no menus, no pricing, and no inquiry form — a corporate client or event planner who lands there has no information and no way to reach you without calling. That's bulk croissant orders and private party bookings you're not getting because the page looks unfinished. I build French bakery sites where catering lands clients instead of losing them — with menus, starting prices, and a clean party inquiry form — done in under 2 weeks.",

  "Mamahouse Bakeshop":
    "You have clear pricing and strong branding, but there are zero reviews or testimonials on your site — a small-batch bakery asking $31 for a pastry box with no social proof is asking a first-time buyer to take a leap of faith that most won't take. Every first-time customer who doesn't convert because of missing trust signals is a repeat buyer you never got. I build artisan bakery sites that lead with Google reviews, real customer photos, and a custom order form — done in under 2 weeks.",

  // ─── FOOD TRUCK ─────────────────────────────────────────────────────────────

  "DiDiCoCo's Southern Comfort LLC":
    "Your site has great testimonials but no catering inquiry form — corporate clients and event coordinators who want to book you for a company lunch or private event can only call during business hours, which means you're missing every after-hours lead. For a Southern comfort food truck with 13 years of experience in Antioch, that's real event bookings going to trucks who have a contact form. I build food truck sites with a catering intake form, service area map, and your Google ratings embedded — done in under 2 weeks.",

  // ─── WINE / BEER ────────────────────────────────────────────────────────────

  "Wine on Piedmont":
    "Your site has one CTA — 'Shop Full Collection' — but no way to book a tasting, reserve a seat for your Friday night pours, or inquire about hosting a private event, and you have zero customer reviews visible despite being open since 2009. That means your Friday wine nights and private event calendar are filled entirely by walk-ins and regulars, with no online funnel. I build wine bar sites with a reservation form, private event inquiry page, and embedded Google reviews — done in under 2 weeks.",

  "CoCo Noir Wine Shop & Bar":
    "Your site currently has no contact form, no reviews, no photos of the venue, and no way for a customer to book a private event or even confirm your hours — it reads as an empty Wix template rather than an active wine bar. Every person who searches 'wine bar private event Oakland' and lands here leaves without engaging, which is direct revenue loss on high-value bookings. I build wine bar sites that communicate your vibe, show your space, and capture private event inquiries from day one — done in under 2 weeks.",

  "Cask Taproom":
    "Your site shows two photos of the same room, a newsletter signup, and no way to book a private event or find your hours — the taproom's craft selection and 'non-pretentious atmosphere' aren't communicated at all to someone discovering you for the first time. Groups looking to book a taproom for a birthday, company happy hour, or team event are landing on your page and going somewhere that shows them the space. I build taproom sites with venue photography, a private event inquiry form, and clear hours — done in under 2 weeks.",

  "The Pour Up Wine Bar":
    "Your Parties section says 'Intimate Gatherings Made Memorable' but there's no inquiry form — someone wanting to host a private wine event at your bar has to hunt for a phone number, which kills conversions from the exact high-value clients you want to attract. Your black-owned winemaker positioning and master mixologist story are strong hooks, but they're wasted without a booking path. I build wine bar sites where private event inquiries come in through a clean form with package options — done in under 2 weeks.",

  // ─── DANCE STUDIOS ──────────────────────────────────────────────────────────

  "re.DEFINE Dance Studio":
    "Your site sends visitors straight to a 'Register' login portal with no trial class offer — parents and adults who are curious but not committed yet have no low-friction way to take a first step, and they're leaving without enrolling. For a hip hop studio competing in Hayward, every undecided visitor who doesn't get a 'Try a free class' CTA is an enrollment you didn't close. I build dance studio sites with a free trial signup, visible pricing, and parent testimonials that convert the browser into a student — done in under 2 weeks.",

  "East Bay Dance Center":
    "Your site shows one testimonial for an 8-year-old studio and hides all pricing behind a separate navigation page — parents comparison-shopping Oakland dance studios for their kids will default to the studio that shows both social proof and tuition in 10 seconds. Those are enrollment signups you're not getting. I build dance studio sites that lead with parent reviews, featured instructor bios, and clear class pricing — done in under 2 weeks.",

  "Full Out Studios":
    "Your mission statement is strong, but your site has zero testimonials, zero pricing, and zero trial class offer — an adult considering their first dance class in Oakland needs at least one of those three to feel confident enough to book, and you have none of them visible. That's enrollment revenue leaking to a competitor who shows '$20 drop-in, first class free.' I build inclusive dance studio sites that convert first-timers with clear pricing and community proof — done in under 2 weeks.",

  "Danspace":
    "Your homepage has two images — a logo and a building exterior — and no enrollment button anywhere, which means a parent searching for Oakland dance classes sees your site and has no visual proof that classes are happening, and no easy way to sign up. Dance for Parkinson's, Ballerina Birthday Parties, and your connection to mentor Alfredo Corvino are compelling differentiators that aren't on the page. I build dance studio sites that show your programs in action and convert curious browsers into enrolled students — done in under 2 weeks.",

  "BlackBox Studios":
    "You offer a free trial class for youth and a $30 intro deal for adults, but there's no contact form on your site and zero testimonials — a parent landing on your Oakland ballet page for the first time has no proof other families have trusted you and no easy way to ask a quick question about class times. Those are enrollment signups being lost before the trial class is even booked. I build dance studio sites with a simple inquiry form, trial class CTA, and parent testimonials visible above the fold — done in under 2 weeks.",

  "Expressions Dance & Arts":
    "You have genuine long-term family testimonials but no pricing visible and no photos of students dancing on your homepage — a Pleasanton parent comparing studios will spend more time on the one that shows kids actually performing and lists tuition upfront. You're making them work too hard to say yes. I build dance studio sites where pricing, photos, and testimonials are all visible in the first scroll — and enrollment signups come in without the back-and-forth — done in under 2 weeks.",

  "Jazz N Taps Dance Studio":
    "Your site claims 'Voted Best Dance Studio In Pleasanton' with no source, no year, and no link to verify it — and there are zero parent testimonials or Google reviews to back it up, so the claim reads as marketing fluff rather than earned credibility. Parents choosing a dance studio for their child in a competitive Pleasanton market will trust the studio with 60 verified Google reviews over one with an unverified superlative. I build dance studio sites where your credentials are backed by real reviews and your enrollment CTA is impossible to miss — done in under 2 weeks.",

  "Vineyard Ballet Academy":
    "Your site has two images — a logo and a summer class graphic — no performance photos, no instructor credentials, and no testimonials from parents. A Pleasanton family choosing a ballet academy for their daughter is making an emotional and financial commitment, and your site gives them nothing to feel confident about. I build ballet academy sites that lead with recital photography, instructor bios, and parent testimonials that make the enrollment decision easy — done in under 2 weeks.",

  "The DA Dance Center":
    "Your website is essentially a placeholder — there's no enrollment button, no photos of students dancing, no class schedule, and no contact form, which means every person who finds you via Google has no way to become a student and no reason to stay on the page. Every day that site is live without a real conversion path is lost enrollment revenue. I build dance studio sites from scratch in under 2 weeks — with class schedules, a trial signup form, and the photos that make parents pick up the phone.",

  "Dance Connection Performing Arts Centre":
    "Your site has strong 'Register Now' buttons but routes every visitor to an external portal with no email capture for first-time browsers who aren't ready to register yet — and there are zero testimonials or parent reviews anywhere on the site to help them decide. Parents in Concord choosing between dance studios for their 6-year-old will go with the one that shows '4.9 stars · 52 reviews' before they'll click through to a registration portal cold. I build dance studio sites with embedded reviews, an email capture for undecided visitors, and clear pricing — done in under 2 weeks.",

  // ─── MUSIC SCHOOLS ──────────────────────────────────────────────────────────

  "Fremont Mission Music Institute":
    "Your site has no way to book a trial lesson online — the only action visible is 'View Lessons,' which sends visitors to a list rather than a sign-up path, and there's a 'Spring Special' in the nav with no visible offer on the page. Parents researching music schools in Fremont at night will submit a trial lesson request on a competitor's site while yours asks them to call during business hours. I build music school sites with a trial lesson booking form, pricing table, and your Google reviews front and center — done in under 2 weeks.",

  "Cadence Academy of Music":
    "Your site currently has no buttons, no forms, no pricing, and no reviews — a Wix template shell that tells visitors nothing about what instruments you teach, who you teach, or how to get started. Every family searching 'music lessons East Bay' who lands on your page leaves immediately and finds a school whose site actually works. I build music school sites that answer those three questions in the first scroll and capture trial lesson inquiries on the spot — done in under 2 weeks.",

  "Village Music School":
    "You serve 500 students weekly across two locations with 25+ instructors, but your site shows one testimonial and stock photos — none of the scale, the recitals, or the Rock Band program that makes Village Music a real draw. Parents comparing Walnut Creek music schools can't see the depth of what you offer, so they're calling the school with more visible proof first. I build music school sites where your student volume, instructor roster, and program highlights are front and center alongside a clean lesson inquiry form — done in under 2 weeks.",

  "Castro Valley School of Music":
    "You mention 3-month and 6-month lesson packages but show no pricing for any of them — and your two displayed Google reviews sit next to copy that says 'trusted by thousands of families since 2013,' which creates a credibility gap that savvy parents will notice. The families who would commit to a 6-month package are exactly the ones who want to see the numbers before they call. I build music school sites with transparent pricing, a live Google review count, and a trial lesson booking form — done in under 2 weeks.",

  "Starland School of Music":
    "You have three real Google review quotes on your site but no star rating shown, no review count, and no link to your Google Business profile — so the social proof you've earned since 1979 is invisible to the parent who wants to verify it before booking a lesson. That's a trust gap that costs you first-lesson signups every week. I build music school sites where your rating, review count, and Yamaha credentials are visible in the hero section alongside a direct trial lesson booking form — done in under 2 weeks.",

}

module.exports = { audits, scripts }
