const audits = {

  // ─── VETERINARIANS ──────────────────────────────────────────────────────────

  "Claremont Veterinary Hospital": [
    {
      category: "Social Proof",
      issue: "Zero testimonials or reviews displayed anywhere on the homepage — Yelp is referenced but no review content, star rating, or quote is embedded.",
      impact: "New clients searching for a vet in Oakland can't see peer validation on-site; they leave to check Yelp and may book a competitor instead.",
    },
    {
      category: "CTA",
      issue: "The primary CTA 'Request An Appointment' links to a separate /appointment/ page with no embedded form — adds a click barrier and likely drops mobile users.",
      impact: "Every extra step in the booking flow loses a percentage of visitors; mobile pet owners in an emergency won't wait through two pages.",
    },
    {
      category: "Lead Capture",
      issue: "No new-client welcome offer, no email opt-in, and no lead capture mechanism beyond a phone number — the site collects nothing from visitors who aren't ready to book immediately.",
      impact: "Window shoppers comparing vets bounce with no follow-up path, leaving revenue on the table.",
    },
    {
      category: "Work Gallery",
      issue: "No photos of the clinic interior, treatment rooms, or patient pets — only a single team photo exists on the homepage.",
      impact: "Anxious pet owners want to see the environment before bringing their animal in; no photos means lower trust and fewer first-time bookings.",
    },
  ],

  "Grand Lake Veterinary Hospital": [
    {
      category: "Social Proof",
      issue: "Zero reviews or testimonials displayed on the homepage despite having an active booking portal — the 'Meet Our Team' section uses what appear to be stock or placeholder images.",
      impact: "Pet owners in Oakland's competitive vet market choose based on social proof; a blank testimonial section signals either new or under-reviewed.",
    },
    {
      category: "CTA",
      issue: "'Book Online' button exists but sends users to an external Chckup portal (chckup.app) with no context or reassurance on the page about what happens next.",
      impact: "Unfamiliar third-party domains create hesitation — users close the tab rather than trust an unknown URL with their personal info.",
    },
    {
      category: "Offer",
      issue: "No new-client offer, no wellness package, no first-visit incentive — the only differentiated CTA is 'Need A Nail Trim?' which undersells the practice.",
      impact: "Nothing gives a fence-sitting pet owner a reason to choose Grand Lake over the vet down the block today.",
    },
    {
      category: "Work Gallery",
      issue: "No clinic interior photos, no photos of patient pets, no before/after or procedure imagery — only a hero banner and two low-quality team images.",
      impact: "New clients can't visualize the facility, which is a top trust signal for bringing a beloved animal to a stranger.",
    },
  ],

  "Hayward Veterinary Hospital": [
    {
      category: "Social Proof",
      issue: "The '2025 Best Veterinarian in Hayward' award is mentioned in text but not shown as a badge, logo, or verifiable link — no patient quotes or star ratings appear anywhere.",
      impact: "An unverifiable award claim reads as self-promotion; actual reviews with names and stars drive conversions.",
    },
    {
      category: "Lead Capture",
      issue: "The 'Free First Exam' offer exists but is buried with a terms/conditions disclaimer and no dedicated sign-up form — users are pushed to call instead of filling out a quick form.",
      impact: "Friction at the point of a free offer kills conversions — people who would take the free exam bounce because calling feels like a commitment.",
    },
    {
      category: "CTA",
      issue: "'Appointments' link in nav sends to a separate page /appointment/ with no visible form in the page content — no inline booking widget on the homepage.",
      impact: "Homepage visitors who want to act immediately have no one-click path to booking.",
    },
    {
      category: "Work Gallery",
      issue: "No dedicated photo gallery of the clinic, staff in action, or patient pets — hero imagery exists but nothing showing the facility environment.",
      impact: "Hayward pet owners comparing clinics online will choose the practice that lets them 'see inside' before showing up.",
    },
  ],

  "Alta Vista Veterinary Clinic": [
    {
      category: "CTA",
      issue: "Primary CTA 'Call To Make An Appointment' links to the /services page instead of a phone number or booking form — it's a broken user expectation.",
      impact: "Users clicking to book get sent to a services list, creating confusion and drop-off at the highest-intent moment.",
    },
    {
      category: "Social Proof",
      issue: "DemandForce, BBB, and Yelp badges are present but link offsite — zero review text, quotes, or star counts are displayed on the page itself.",
      impact: "Badges without context don't convert; pet owners want to read what actual clients said, not click to another site to find out.",
    },
    {
      category: "Offer",
      issue: "No new-client promotion, no wellness plan, no first-visit special — the only notable offer is a cancellation policy warning, which is a negative first impression.",
      impact: "Hayward has multiple competing vet clinics; no offer means no reason to choose Alta Vista over a practice offering a free first exam.",
    },
    {
      category: "Differentiation",
      issue: "The tagline 'Dr. Budde - Your Pet's Best Buddy!' is the only differentiator — no credentials, no specialty services, no years-in-practice or unique approach shown.",
      impact: "Without a clear reason to choose them, the practice competes purely on convenience and proximity, not value.",
    },
  ],

  "Central Veterinary Hospital": [
    {
      category: "Social Proof",
      issue: "Only 2 testimonials displayed (Martha C. and Loretta G.) with no star ratings, no review count, and no link to their Google or Yelp profiles showing 100+ reviews.",
      impact: "Two anonymous quotes feel handpicked — linking to a Google listing with 100+ ratings at 4.8 stars would do far more work for conversions.",
    },
    {
      category: "Work Gallery",
      issue: "No clinic interior photos, no treatment room images, no photos of the three listed veterinarians — only blog-style 'Patient Tails' pet stories with small images.",
      impact: "Fremont pet owners can't visualize the hospital before booking; competitor sites with facility photos will win the comparison.",
    },
    {
      category: "Lead Capture",
      issue: "No new-client offer, no email capture, no lead magnet — the only entry point is 'Request An Appointment' or calling, which both require immediate commitment.",
      impact: "Visitors researching vets but not ready to book leave without any hook to bring them back.",
    },
    {
      category: "Differentiation",
      issue: "Three veterinarians are listed by name and credential only — no bios, specialties, years of experience, or personal story to distinguish this hospital from the four other vet practices in Fremont.",
      impact: "With no clear differentiator, selection defaults to whoever shows up first in maps — the site doesn't do the sales work.",
    },
  ],

  "Fremont Pet Hospital": [
    {
      category: "Social Proof",
      issue: "A testimonials page exists but no reviews are visible on the homepage — the only visible 'social proof' is a single staff profile for Dr. Baskharon.",
      impact: "Homepage visitors who don't click to a separate testimonials page never see peer validation, and most don't click.",
    },
    {
      category: "Offer",
      issue: "No new-client promotion or welcome offer despite being open 7 days 8am–8pm, which is a major competitive advantage that isn't being marketed.",
      impact: "The extended hours are buried — no offer or headline capitalizes on this differentiation, so it doesn't drive decisions.",
    },
    {
      category: "Lead Capture",
      issue: "The appointment form at /appointment has fields but no visible submission confirmation or expected response time — no reassurance for someone booking online.",
      impact: "Uncertainty about whether a form submission works or gets seen pushes anxious pet owners back to calling competitors.",
    },
    {
      category: "Service Area",
      issue: "No service area or surrounding cities are mentioned beyond 'Fremont, CA' — zip codes or neighboring cities (Newark, Union City, Milpitas) aren't referenced.",
      impact: "The site won't rank for surrounding-city searches, losing nearby pet owners who would drive 10 minutes.",
    },
  ],

  "Del Valle Pet Hospital": [
    {
      category: "Social Proof",
      issue: "9 Google reviews are shown but the full count (129 reviews at 4.9 stars) is not prominently displayed — the headline number and rating aren't shown above the fold.",
      impact: "129 reviews at 4.9 stars is a massive trust signal being undersold — burying it means the page isn't doing the work that number could do.",
    },
    {
      category: "Work Gallery",
      issue: "No staff photos for Dr. Chaudhary or the team — clinic exterior image exists but no interior, treatment room, or patient pet photos appear.",
      impact: "The 'family owned and women-led' story is compelling but not shown visually, weakening a strong differentiator.",
    },
    {
      category: "Offer",
      issue: "No new-client special, no wellness plan pricing, and no introductory offer despite serving Livermore, Dublin, Pleasanton, and Mountain House — a competitive market.",
      impact: "Pet owners choosing between 3-4 practices in the Livermore area need a hook; none exists here.",
    },
    {
      category: "Lead Capture",
      issue: "The 'Leave a Review' button links to Google submission — there's no mechanism to capture email addresses or follow up with non-booking visitors.",
      impact: "Traffic that doesn't book immediately is lost permanently with no re-engagement path.",
    },
  ],

  "Well Animal Hospital": [
    {
      category: "Social Proof",
      issue: "8 testimonials displayed but none have a verified source label (Google, Yelp, Facebook) — no star rating count or link to the review platform is shown.",
      impact: "Unattributed quotes read as fabricated to skeptical users; sourcing them to Google with a star count would double their conversion value.",
    },
    {
      category: "Offer",
      issue: "No new-patient offer, no wellness plan, no first-visit discount — despite serving 12+ named cities across the East Bay, there's no entry-point offer to capture competitive market share.",
      impact: "A practice this new (with modern positioning) needs an offer to displace established vets already in the market.",
    },
    {
      category: "Lead Capture",
      issue: "No email capture, no newsletter, no downloadable pet health guide — the only lead path is 'Book Appointment' or calling, both requiring immediate commitment.",
      impact: "Visitors comparing options leave with nothing to remember the practice by, and no way to follow up.",
    },
    {
      category: "Differentiation",
      issue: "Services like Acupuncture, Laser Therapy, Food Therapy, and Allergy & Dermatology are listed but not explained or highlighted — these are premium differentiators being treated as bullet points.",
      impact: "Pet owners specifically searching for holistic or specialty vet care won't realize this is the right clinic from the homepage.",
    },
  ],

  "Good Samaritan Veterinary Hospital": [
    {
      category: "Social Proof",
      issue: "Only 2 named Google reviews displayed (debra and Andrew Jordan) with a 4.5 aggregate star label — the actual Google review count isn't shown, and 2 quotes feel thin.",
      impact: "San Leandro pet owners comparing clinics online expect to see dozens of reviews; 2 visible quotes create doubt about reputation.",
    },
    {
      category: "CTA",
      issue: "'Request Appointment' sends to /appointment-request, 'Order Food & Meds' links to a pharmacy, and 'Download Our App' are all competing CTAs in the same view — no clear primary action.",
      impact: "When everything is equal priority, nothing gets clicked — the highest-value action (booking an appointment) gets diluted.",
    },
    {
      category: "Work Gallery",
      issue: "No clinic interior, treatment room, or patient pet photos — only a 4-slide carousel with service images and one stock dog photo in the testimonials section.",
      impact: "The San Leandro/Oakland market is competitive; practices with facility photos win the visual trust comparison.",
    },
    {
      category: "Lead Capture",
      issue: "No new-client offer, no email capture, no downloadable resource — the app download CTA is a commitment ask before trust is established.",
      impact: "Visitors who aren't ready to book an appointment or download an app leave the site with no follow-up path.",
    },
  ],

  // ─── GYMS / MARTIAL ARTS ─────────────────────────────────────────────────────

  "King's Boxing Gym": [
    {
      category: "Social Proof",
      issue: "A 'FIGHTING WORDS FROM VALUED MEMBERS' section exists but contains zero actual testimonials — only filler text about being 'committed to great service.'",
      impact: "A placeholder testimonial section is worse than having none — it signals an unfinished site, destroying credibility with serious prospects.",
    },
    {
      category: "CTA",
      issue: "'Enroll Today' links to Vagaro booking, but there is no free trial or intro offer — the very first commitment asked is a full membership purchase.",
      impact: "People researching gyms in Oakland want to try before they buy; no trial class offer eliminates the main conversion path for new members.",
    },
    {
      category: "Lead Capture",
      issue: "No class schedule on the homepage — schedule, times, and class types are completely absent, forcing users to call or visit in person to get basic information.",
      impact: "Parents signing up kids or adults comparing gyms will move to a competitor that shows them what a week looks like before committing.",
    },
    {
      category: "Offer",
      issue: "The only purchasable items on the site are $19.99 merchandise products — no membership pricing, trial offer, or program details are visible.",
      impact: "Revenue is being left at the door because the site can't answer the question 'what does it cost to train here?'",
    },
  ],

  "Oakland Kickboxing": [
    {
      category: "CTA",
      issue: "No CTA buttons with action text exist anywhere on the page — no 'Sign Up,' 'Book a Class,' or 'Contact Us' visible in the content.",
      impact: "A site with no CTAs is a brochure with no door — interested visitors have no way to take the next step and bounce.",
    },
    {
      category: "Lead Capture",
      issue: "No contact information — no phone number, email address, physical address, or contact form is present anywhere on the site.",
      impact: "Someone who wants to join literally cannot find how to reach the gym; every potential member is lost.",
    },
    {
      category: "Social Proof",
      issue: "Zero reviews, testimonials, or ratings of any kind appear anywhere on the site.",
      impact: "Without any social proof in a competitive Oakland market, there's no reason for a new prospect to choose this gym over a competitor with reviews.",
    },
    {
      category: "Offer",
      issue: "No class schedule, pricing, program descriptions, or trial offer — the site contains structural framework but no actual content about what the gym offers.",
      impact: "The site is functionally unusable for lead generation — it looks abandoned, which actively drives prospects away.",
    },
  ],

  "Hayward Kickboxing": [
    {
      category: "Social Proof",
      issue: "5 testimonials exist but none include last names, photos, or platform attribution — the reviews are first-name only (Ginny, Norris, Jeanine, Guy, The Pollocks) with no star ratings or external links.",
      impact: "Anonymous first-name quotes are easy to fake in visitors' minds; linking to a Google listing with 50+ reviews would provide real credibility.",
    },
    {
      category: "Service Area",
      issue: "The business is in the East Bay but the only phone number listed is a 310 area code (Los Angeles) — no physical address is visible on the homepage.",
      impact: "Hayward residents searching for local kickboxing will see a 310 number and assume it's not a local gym, killing local conversion.",
    },
    {
      category: "Offer",
      issue: "Group sessions at $50 and private sessions at $100 are listed but no free trial, intro class, or new-member package is offered — pricing commitment is the first ask.",
      impact: "Competing gyms with a free first class will always win the comparison when someone is deciding where to start.",
    },
    {
      category: "Lead Capture",
      issue: "No online booking form on the homepage — 'BOOK A CLASS' links to an external Tipo booking system with no context or reassurance about the signup process.",
      impact: "External booking links with unfamiliar branding create trust hesitation and drop-off, especially on mobile.",
    },
  ],

  "Osorio Training Center": [
    {
      category: "Social Proof",
      issue: "Only 4 testimonials shown — 3 from parents/family members and 1 from a student — with no star ratings, no Google review count linked, and no photos of reviewers.",
      impact: "4 quotes without verification won't move the needle for someone comparing multiple Hayward gyms; the full Google or Yelp rating should be front and center.",
    },
    {
      category: "Offer",
      issue: "'Get Our Current Promo' CTA exists but doesn't display the promo on the page — users must click through to see it, adding friction to the conversion path.",
      impact: "Promos convert best when they're visible immediately; hiding them behind a click reduces uptake by a significant margin.",
    },
    {
      category: "Lead Capture",
      issue: "No email capture or lead form on the homepage — the only conversion paths are booking a free class or calling, both high-commitment asks.",
      impact: "Visitors exploring options who aren't ready to book immediately leave without any follow-up mechanism.",
    },
    {
      category: "Differentiation",
      issue: "Head coach Robert Osorio's '35+ years experience' is mentioned once but there are no credentials, certifications, competition record, or coach profile page linked from the homepage.",
      impact: "35 years of experience is a massive differentiator that's buried — it should be the headline, not a parenthetical.",
    },
  ],

  "Combat Fitness": [
    {
      category: "Social Proof",
      issue: "3 testimonials displayed with no star ratings, no attribution to Google/Yelp, and no photos — the review section has a 'See More Reviews' link but the reviews page URL is generic.",
      impact: "Without platform attribution, the 3 quotes look self-selected — a link to a Google listing with a visible star count would do far more conversion work.",
    },
    {
      category: "Lead Capture",
      issue: "The lead form collects name, email, phone, and consent checkboxes — but there's no class schedule visible on the homepage to give context for what someone would be signing up for.",
      impact: "People won't fill out a contact form for a gym they can't visualize the schedule of; the form needs adjacent proof.",
    },
    {
      category: "Offer",
      issue: "The free trial CTA exists ('FREE Trial!') but shows '1 Class / FREE' with no further detail about what the trial class experience looks like or who it's for.",
      impact: "A free trial with no description of what happens (show up, wear this, meet this coach) gets fewer takers than one with a clear next step.",
    },
    {
      category: "Work Gallery",
      issue: "No class photos, no facility images, no video of training — only generic placeholder images appear in the testimonial section.",
      impact: "Concord/Walnut Creek prospects want to see the gym floor, the equipment, and real people training before committing even to a free trial.",
    },
  ],

  "Essence BJJ Walnut Creek": [
    {
      category: "Social Proof",
      issue: "'What Others Are Saying' section exists on the homepage but contains no actual review text — it appears to be a placeholder section with no content loaded.",
      impact: "An empty testimonial section is a trust negative — it makes the gym look like it can't get reviews, even if they exist on Google.",
    },
    {
      category: "Lead Capture",
      issue: "No lead capture form on the homepage — 'ENROLL NOW' and 'FREE TRIAL' buttons send users to separate pages with no inline form for quick signups.",
      impact: "Mobile users who want to act immediately drop off before reaching the enrollment page; an inline form converts faster.",
    },
    {
      category: "Differentiation",
      issue: "A second location in Danville is listed but no comparison between the two locations, no location-specific schedules, and no local landmark context is provided.",
      impact: "Danville and Walnut Creek residents can't tell which location serves them best, reducing bookings from both areas.",
    },
    {
      category: "Offer",
      issue: "Pricing is published ($149 kids BJJ, $229 adult unlimited, $159 kids Muay Thai) but a $50 private intro class is the required entry point — this isn't framed as a value or deal, just a price.",
      impact: "Charging $50 to try the gym without framing it as a lower-risk alternative to full membership will lose comparison shoppers to gyms offering free first classes.",
    },
  ],

  "Combat Sports Academy": [
    {
      category: "Offer",
      issue: "No free trial class is offered anywhere on the site — the only entry point is a lead form or calling, and no pricing is displayed at any point.",
      impact: "Every competing BJJ and MMA gym in Pleasanton offers a trial class; CSA requires a form submission just to get pricing, which is a major conversion barrier.",
    },
    {
      category: "Lead Capture",
      issue: "Multiple lead forms exist with fields for program and location — but the form has GDPR consent checkboxes for a local California gym, which looks overcomplicated and off-brand.",
      impact: "Unnecessary form fields and legal-looking consent language create hesitation and reduce form completions.",
    },
    {
      category: "Work Gallery",
      issue: "Program photos exist for MMA, Krav Maga, CrossFit, and Kids classes but no video of actual classes, no instructor-in-action shots, and no competition results or achievements displayed.",
      impact: "Serious martial arts students evaluating a gym want to see the quality of instruction, not just staged program photos.",
    },
    {
      category: "Differentiation",
      issue: "5 Google reviews are displayed including Denise Santaromita and Reno Deguzman, but no aggregate star rating or total review count is shown alongside them.",
      impact: "Showing 5 review snippets without a '4.8 stars from 87 reviews' headline undersells whatever strong rating the gym has built.",
    },
  ],

  "Kokua Martial Arts Fitness Academy": [
    {
      category: "Social Proof",
      issue: "Zero customer reviews or testimonials appear on the homepage despite the gym offering a 2-week free trial and $49 paid intro — there's no social proof to support these offers.",
      impact: "Trial offers without peer validation convert at a fraction of the rate of offers backed by real member stories; this is the biggest gap on the site.",
    },
    {
      category: "Lead Capture",
      issue: "Free 2-week trial and $49 5-week trial offers exist but no class schedule or times are shown on the homepage — users can't decide if the gym fits their schedule without navigating away.",
      impact: "Parents and adults will not commit to a free trial if they can't confirm the class times work for them first.",
    },
    {
      category: "CTA",
      issue: "'Get Started Today For Free!' and 'Join Now!' compete with $49 trial and membership CTAs simultaneously — the offers aren't sequenced, creating decision paralysis.",
      impact: "When free and paid options are presented as equals with the same urgency, users often choose neither.",
    },
    {
      category: "Offer",
      issue: "Military/essential worker and multi-family discounts are listed but not highlighted as a primary offer — they're buried as bullet points below the main trial options.",
      impact: "Pleasanton and Dublin have significant military and essential worker populations; this discount isn't doing the targeting work it could.",
    },
  ],

  "Darcio Lira Jiu Jitsu": [
    {
      category: "Social Proof",
      issue: "Zero testimonials or reviews appear anywhere on the site — no Google rating, no student quotes, no parent reviews for the kids' programs.",
      impact: "Livermore BJJ parents choosing between academies will default to the gym with visible student success stories; this site has nothing to show.",
    },
    {
      category: "Offer",
      issue: "The 'Try 2 classes for FREE' offer is strong but displayed as a text line, not a styled CTA block — it doesn't stand out visually and is easy to miss while scrolling.",
      impact: "A compelling offer that's hard to see gets ignored; the free trial is the single best conversion tool on the site and it's being wasted.",
    },
    {
      category: "Lead Capture",
      issue: "No online form for claiming the free trial — the CTA says to call, which is a high-friction ask for someone browsing at 9pm comparing martial arts schools for their kids.",
      impact: "Phone-first conversion for a free trial eliminates everyone who won't call; a simple 'Claim Your Free Classes' form would capture significantly more leads.",
    },
    {
      category: "Differentiation",
      issue: "No instructor credentials, belt level, competition record, or years of experience for Darcio Lira are displayed on the homepage — only a 'click here to learn about our history' link.",
      impact: "BJJ parents specifically vet the instructor's lineage and credentials; hiding this information behind a link loses serious prospects.",
    },
  ],

  // ─── FLORISTS ────────────────────────────────────────────────────────────────

  "Livermore Valley Florist": [
    {
      category: "Social Proof",
      issue: "Despite having 159 Yelp reviews and WeddingWire listings with 5 reviews, zero reviews or star ratings are displayed on the website — the site is completely dark on social proof.",
      impact: "A florist with 159 Yelp reviews should have those prominently on-site; instead, brides comparing florists find nothing to build trust and go back to Yelp to find someone else.",
    },
    {
      category: "Lead Capture",
      issue: "No wedding or event inquiry form visible on the homepage — the primary revenue category (weddings) has no dedicated inquiry path, just a phone number and business hours.",
      impact: "Brides who find the site outside of Mon–Fri 9–5 have no way to submit a consultation request; they move on to a florist with a form.",
    },
    {
      category: "Work Gallery",
      issue: "No photo gallery of past wedding arrangements, centerpieces, or event work is present — a site blocking scraping and showing minimal content misses the visual sales opportunity that florists depend on.",
      impact: "Couples hire florists based on portfolio; without visible work the site converts no wedding consultations.",
    },
    {
      category: "CTA",
      issue: "No prominent primary CTA for the highest-value service (weddings/events) — the site appears to default to walk-in and phone traffic without a digital booking or inquiry flow.",
      impact: "Wedding traffic from Google arrives, sees no clear next step, and bounces to a competitor with a 'Request Wedding Consultation' button.",
    },
  ],

  "Fremont Flowers": [
    {
      category: "Social Proof",
      issue: "Zero reviews or testimonials displayed anywhere on the site — no star ratings, no customer quotes, no links to Google or Yelp review profiles.",
      impact: "A florist with no on-site social proof loses brides and event planners who compare options; reviews are the #1 trust signal for custom floral orders.",
    },
    {
      category: "Lead Capture",
      issue: "No wedding or event inquiry form exists — there is no way for a bride or event planner to request a custom consultation online; only a phone number is provided.",
      impact: "Fremont brides browsing at night or on weekends have no path to start a conversation; they submit inquiry forms to florists who have one.",
    },
    {
      category: "Service Area",
      issue: "Delivery area is not defined on the product listing page — no radius, no list of cities served, and no delivery fee structure is displayed.",
      impact: "Customers unsure whether delivery reaches their address will order from a local competitor with a clear delivery zone instead of calling to ask.",
    },
    {
      category: "Offer",
      issue: "No wedding or event services section is highlighted — a full e-commerce product catalog is present but custom/event work isn't separated or called out as a distinct service.",
      impact: "The highest-margin service (weddings and events) is invisible to the site's highest-value prospects.",
    },
  ],

  "CityBloom": [
    {
      category: "Social Proof",
      issue: "A 'Reviews' link exists in navigation but zero review content is shown on the homepage — Yelp, Google, and Instagram links are listed but nothing is embedded.",
      impact: "San Leandro and Oakland customers comparing florists find no on-site credibility and follow the external links off the site, potentially booking elsewhere.",
    },
    {
      category: "Lead Capture",
      issue: "A 'Wedding Flowers' category exists in navigation but there's no dedicated wedding/event inquiry form — just a 'Contact Us' page link with no context.",
      impact: "Wedding prospects need a consultation, not a generic contact form — a form without event-specific fields (date, venue, budget) signals the business isn't set up for events.",
    },
    {
      category: "Offer",
      issue: "A 'Custom Orders' link exists but clicking it doesn't lead to a structured inquiry flow — no description of the custom order process, no pricing guidance, no timeline expectations.",
      impact: "Customers interested in custom arrangements who don't know what to expect from the process will choose a florist whose website makes it easy and clear.",
    },
    {
      category: "Differentiation",
      issue: "The site claims to serve 16+ communities (Oakland, Berkeley, Hayward, and more) but this is only in schema markup — the page copy doesn't highlight the delivery coverage to potential customers.",
      impact: "Customers in nearby cities don't know delivery reaches them; they assume local only and order from someone closer.",
    },
  ],

  // ─── DAYCARES / PRESCHOOLS ────────────────────────────────────────────────────

  "Duck Pond Preschool": [
    {
      category: "CTA",
      issue: "No CTA buttons are visible on the homepage — no 'Schedule a Tour,' 'Apply Now,' or 'Contact Us' buttons appear anywhere in the content.",
      impact: "Parents looking for preschool enrollment have no clear next step and will choose a competitor site that makes it obvious how to start.",
    },
    {
      category: "Lead Capture",
      issue: "No enrollment or inquiry form exists on the site — contact info (phone and email) is provided but no form to submit interest or request a tour at any hour.",
      impact: "Parents researching daycares at night or on weekends can't take action; they move to the next option on Google with a form.",
    },
    {
      category: "Social Proof",
      issue: "A 'Testimonials' page link exists but no testimonials are actually displayed on that page or the homepage — the section is empty.",
      impact: "Daycare decisions are driven by parent-to-parent trust; zero visible reviews means zero social credibility for one of the most emotionally high-stakes decisions parents make.",
    },
    {
      category: "Work Gallery",
      issue: "No photos of the classroom, outdoor space, or children engaged in activities — no gallery or facility images appear on the homepage.",
      impact: "Parents must be able to visualize where their child will spend their days; no photos means no emotional connection and no tour requests.",
    },
  ],

  "The Children's Workshop Oakland": [
    {
      category: "Lead Capture",
      issue: "No enrollment or inquiry form exists — parents are directed to email jessica@childrensworkshopoakland.com or call (510) 306-2630 with no form available for off-hours contact.",
      impact: "Parents researching Reggio preschools on evenings or weekends can't submit an inquiry; they'll contact the next school that has an online form.",
    },
    {
      category: "Social Proof",
      issue: "Zero testimonials or reviews displayed anywhere on the site — no parent quotes, no star ratings, no link to Google reviews.",
      impact: "Oakland parents comparing Reggio schools need peer validation; none is available here, making every competing school that shows parent reviews look more trustworthy.",
    },
    {
      category: "Offer",
      issue: "Tuition and pricing exist on a separate 'Hours and rates' page but are not referenced or previewed on the homepage — sticker shock risk is high when pricing is hidden.",
      impact: "Parents who can't quickly gauge affordability don't call to ask — they move to a school that's upfront about costs.",
    },
    {
      category: "Work Gallery",
      issue: "No classroom photos, no images of children in activities, no facility imagery visible on the homepage — a text-heavy page with no visual of the environment.",
      impact: "Reggio philosophy is visually oriented — parents expect to see the environment; a text-only homepage undersells the program.",
    },
  ],

  "Giggles Preschool Inc": [
    {
      category: "Social Proof",
      issue: "Zero reviews or testimonials anywhere on the site — no parent quotes, no star ratings, no Google/Yelp links with review counts.",
      impact: "Oakland preschool decisions are heavily word-of-mouth; a site with no social proof loses immediately to any competitor showing even 3 parent reviews.",
    },
    {
      category: "Lead Capture",
      issue: "'Schedule Now' and 'Schedule Your Tour' CTAs both link to /contact-us but no actual form appears in the visible content — enrollment inquiry has no clear destination.",
      impact: "A CTA that doesn't lead to a working form is a dead end; parents trying to schedule a tour give up and move to the next school.",
    },
    {
      category: "Offer",
      issue: "No age ranges, no tuition information, no hours of operation are listed anywhere on the site — the three most common questions parents ask first are all unanswered.",
      impact: "Parents who can't quickly confirm the school serves their child's age and fits their schedule don't call to ask; they move on.",
    },
    {
      category: "Differentiation",
      issue: "No teacher names, credentials, or years of experience are shown — 'trained and experienced staff' is the only description, with no individual profiles or certifications.",
      impact: "Parents choose preschools partly based on who will be with their child daily; anonymous staff descriptions remove the key emotional trust factor.",
    },
  ],

  "Nido Infant-Toddler Center": [
    {
      category: "Social Proof",
      issue: "Only 1 testimonial displayed (from 'Carmelle & Spencer, Parents to Gene') — no star rating, no Google review count, no link to external reviews.",
      impact: "One testimonial for an infant/toddler center doesn't establish safety and trust; parents of infants need to see extensive peer validation before handing over their baby.",
    },
    {
      category: "Offer",
      issue: "The site explicitly states 'We are fully enrolled at this time' with a waitlist form — but no tuition range, no program description for prospective families, and no sense of what they're waiting for.",
      impact: "Parents considering the waitlist need to understand the value before committing their spot — vague program descriptions lead to drop-off even from waitlist signups.",
    },
    {
      category: "Lead Capture",
      issue: "A contact form exists but the only call to action for the waitlist is to include the child's DOB in a general message field — no dedicated waitlist form with structured fields.",
      impact: "An unstructured waitlist process feels informal for a program parents are trusting with their infant; a proper form signals professional organization.",
    },
    {
      category: "Work Gallery",
      issue: "A gallery link exists (/gallery-5-1) but no gallery content loads on the homepage — no photos of the infant/toddler environment, toys, learning materials, or caregivers in action.",
      impact: "Parents of infants are extremely visual about the care environment; a broken or empty gallery is a significant trust deficit.",
    },
  ],

  "Hortensia's Way Family Daycare": [
    {
      category: "CTA",
      issue: "The only CTA on the homepage is 'Learn More' linking to /about/ — no 'Schedule a Tour,' 'Enroll Now,' or 'Contact Us' button exists on the main page.",
      impact: "Parents landing from Google have no clear next action; 'Learn More' is a commitment-free browse, not a conversion path.",
    },
    {
      category: "Lead Capture",
      issue: "No inquiry or enrollment form visible on the homepage — the contact form may exist elsewhere but there's no path to it from the main page.",
      impact: "Hayward parents researching family daycares in the evening have no way to express interest; the site captures zero leads from non-phone visitors.",
    },
    {
      category: "Social Proof",
      issue: "Zero reviews, testimonials, or parent quotes displayed anywhere — no star ratings, no Google reviews link, no word-of-mouth credibility shown.",
      impact: "Family daycare decisions are the most trust-dependent of all childcare choices; no visible reviews means no trust, and no trust means no enrollments from online search.",
    },
    {
      category: "Work Gallery",
      issue: "Only one photo on the entire site — a preschool graduation image — with no classroom, outdoor play area, or daily activity photos.",
      impact: "Parents need to see the home environment, materials, and space before considering a family daycare; one graduation photo tells them almost nothing.",
    },
  ],

  "Palm Academy": [
    {
      category: "Social Proof",
      issue: "No testimonials displayed on the homepage — a 'Testimonials' page is linked and a BBB badge is shown, but no parent quotes, star ratings, or Google review count appear on-site.",
      impact: "Palm Academy serves ages 6 weeks to 18 years across multiple programs; without visible parent reviews, the breadth of the offering doesn't translate into trust.",
    },
    {
      category: "Offer",
      issue: "No tuition or pricing information anywhere on the site — parents must contact the school to get basic cost information, which is a friction point most will skip.",
      impact: "Parents comparing daycares across multiple tabs will de-prioritize schools that don't show pricing; they can't plan without cost estimates.",
    },
    {
      category: "Lead Capture",
      issue: "Multiple CTAs ('Start Here,' 'Schedule a Tour,' 'Contact Us Today') all link to the same contact page with no form structure tailored to enrollment — no age of child, program interest, or start date fields.",
      impact: "A generic contact form for a school serving infants through 18-year-olds doesn't capture the qualification data needed to follow up effectively.",
    },
    {
      category: "Work Gallery",
      issue: "Images are present but no dedicated photo gallery section exists — no classroom photos, no outdoor play area shots, and no visual breakdown of the Infant, Toddler, Preschool, and After School environments.",
      impact: "Parents choosing between academic programs for multiple age groups need to see each environment; without distinct program imagery the site undersells its full offering.",
    },
  ],

  "Crawlers 2 Scholars": [
    {
      category: "Social Proof",
      issue: "Only 1 named testimonial displayed (from 'Crivello') plus links to Google, Facebook, and Yelp — but no review counts or star ratings are shown from any platform.",
      impact: "One testimonial for a daycare/preschool decision carries almost no weight; pulling '4.7 stars from 42 Google reviews' above the fold would change conversions immediately.",
    },
    {
      category: "Offer",
      issue: "No tuition or pricing information anywhere on the site — an enrollment interest form exists but parents can't gauge affordability before filling it out.",
      impact: "Walnut Creek and Concord parents comparing childcare options online drop off when pricing isn't available; they move to schools that show at least a range.",
    },
    {
      category: "Differentiation",
      issue: "Age groups are listed as 'classrooms and age groups' with no specific ages stated — parents of infants, toddlers, and preschoolers can't confirm eligibility from the homepage.",
      impact: "Parents Googling 'infant daycare Walnut Creek' who land on the site can't confirm their child qualifies without digging or calling.",
    },
    {
      category: "Lead Capture",
      issue: "The inquiry form collects name, email, enrollment type (full-time/part-time/drop-in), and comments — but no start date, child's age, or program preference fields, limiting staff follow-up quality.",
      impact: "A form that doesn't capture the key enrollment data sends a generic lead, making follow-up slower and less personal, which reduces close rates.",
    },
  ],
};

const scripts = {

  // ─── VETERINARIANS ──────────────────────────────────────────────────────────

  "Claremont Veterinary Hospital":
    "Your site has zero testimonials or reviews displayed — not even a star rating or quote from Yelp, despite having an active profile there. That means every pet owner who visits your homepage has to leave your site to verify you're worth calling, and a lot of them don't come back. I build clean vet sites for East Bay practices that put social proof front and center and make booking seamless — done in under 2 weeks.",

  "Grand Lake Veterinary Hospital":
    "Your 'Meet Our Team' section has what appear to be placeholder images, and there isn't a single review or testimonial on the entire homepage — just a generic booking link to an external URL many visitors won't trust on sight. That friction is costing you new clients who are comparing two or three Oakland vets at once. I build vet sites that convert that comparison traffic into booked appointments — done in under 2 weeks.",

  "Hayward Veterinary Hospital":
    "You won 'Best Veterinarian in Hayward 2025' but it's buried as a text line with no badge, no link, and no supporting reviews — so the award isn't doing any sales work. Meanwhile the 'Free First Exam' offer is hidden under a disclaimer instead of being the centerpiece of the page. I build vet sites that turn those wins and offers into the first thing new clients see — done in under 2 weeks.",

  "Alta Vista Veterinary Clinic":
    "Your primary 'Call To Make An Appointment' button sends people to your services page instead of a phone number or booking form — that's a broken experience at the exact moment someone wants to act. Add no visible reviews and no new-client offer, and the site isn't converting the traffic it gets. I fix that with a clean, conversion-focused vet site built for Hayward pet owners — done in under 2 weeks.",

  "Central Veterinary Hospital":
    "You have three excellent veterinarians listed by name with no bios, no photos, and no story — and only 2 anonymous testimonials when your Google listing likely shows dozens of real reviews. Pet owners in Fremont choosing between clinics want to know who's treating their animal and what other clients thought; right now your site hides both. I build vet sites that put your team and your reviews front and center to win that comparison — done in under 2 weeks.",

  "Fremont Pet Hospital":
    "You're open 7 days a week from 8am to 8pm — that's a massive advantage over every competing vet in Fremont — but your site doesn't lead with it, doesn't offer a new-client incentive around it, and buries your testimonials on a separate page most visitors never find. That means you're working harder hours than the competition and not getting credit for it online. I build sites that make your hours your headline and your reviews your closer — done in under 2 weeks.",

  "Del Valle Pet Hospital":
    "You have 129 Google reviews at 4.9 stars — one of the strongest local ratings in the Livermore area — but your homepage doesn't display that number or that rating anywhere. Instead visitors see 9 small quotes with no star count, which undersells one of the most powerful trust signals you've built. I build vet sites that lead with that number and turn it into booked appointments — done in under 2 weeks.",

  "Well Animal Hospital":
    "You offer acupuncture, laser therapy, food therapy, and allergy & dermatology — services almost no general vet in the Livermore/Dublin area provides — but they're listed as bullet points in a services section with no explanation and no dedicated call-out. People specifically searching for holistic vet care land on your site and can't tell it's the right place. I build sites that make your specialty services your headline story — done in under 2 weeks.",

  "Good Samaritan Veterinary Hospital":
    "Your homepage has four competing CTAs all at the same visual weight — 'Request Appointment,' 'Order Food & Meds,' 'Download Our App,' and a review button — so nothing stands out and appointment bookings get diluted. On top of that, only 2 Google reviews are visible when your actual listing almost certainly has many more. I build vet sites that funnel traffic toward one clear action and show the full weight of your reviews — done in under 2 weeks.",

  // ─── GYMS / MARTIAL ARTS ─────────────────────────────────────────────────────

  "King's Boxing Gym":
    "Your 'FIGHTING WORDS FROM VALUED MEMBERS' section has zero actual reviews in it — just filler text about being 'committed to great service' — which reads as a broken or unfinished site to anyone who scrolls there. That, combined with no class schedule and no free trial offer, means serious prospects in Oakland click away to a gym that shows them what they're getting into. I build gym sites that show real member stories, a real schedule, and a real reason to walk in — done in under 2 weeks.",

  "Oakland Kickboxing":
    "Your site has no CTA buttons, no contact information, no schedule, no pricing, and no reviews — there is literally no way for someone who finds your site to contact you or understand what you offer. Every potential member who lands on the page bounces immediately because the site is functionally empty. I build kickboxing gym sites that turn web traffic into trial class signups — done in under 2 weeks.",

  "Hayward Kickboxing":
    "The only phone number on your site is a 310 area code, which signals Los Angeles to anyone in Hayward searching for a local gym — that alone is costing you local signups. There's also no physical address on the homepage and no free trial offer, making it nearly impossible for Hayward residents to confirm you're actually nearby and worth trying. I build martial arts sites for East Bay gyms that establish local credibility immediately and convert that into trial class bookings — done in under 2 weeks.",

  "Osorio Training Center":
    "Head coach Robert Osorio has 35+ years of experience — that should be the first thing on your homepage, not a parenthetical in a paragraph — but right now it's buried while the 'Get Our Current Promo' button hides the actual promotion behind a click. You've built real credibility in Hayward and the site isn't selling it. I build gym sites that put your coach's reputation and your offer front and center to drive trial class signups — done in under 2 weeks.",

  "Combat Fitness":
    "Your free trial offer exists but the gym floor, equipment, and training environment are completely invisible — no class photos, no facility images, just placeholder headshots in the testimonial section. People considering their first martial arts class need to see the environment before they commit even to a free trial. I build combat sports sites that make the facility and the community visible so the free trial gets claimed instead of skipped — done in under 2 weeks.",

  "Essence BJJ Walnut Creek":
    "Your 'What Others Are Saying' section is live on the homepage but has zero reviews in it — it looks like a placeholder that was never filled in, which undercuts trust more than having no section at all. Walnut Creek parents evaluating BJJ academies for their kids will choose the school with visible testimonials every time. I build BJJ school sites that fill that gap and convert trial class clicks into actual enrollments — done in under 2 weeks.",

  "Combat Sports Academy":
    "Your site has no free trial offer and no visible pricing — prospects have to fill out a lead form with GDPR-style consent checkboxes just to find out what a membership costs, which is too much friction for a local gym. Every BJJ and MMA competitor in Pleasanton has a free trial call-to-action; CSA doesn't, and that's losing you first-time visitors daily. I build martial arts sites that match how people actually decide — see the offer, see the price, book the trial — done in under 2 weeks.",

  "Kokua Martial Arts Fitness Academy":
    "You offer a free 2-week trial and a $49 5-week intro — strong offers — but there are zero customer testimonials on the site to back them up, and no class schedule on the homepage to let someone confirm the gym fits their week before signing up. Pleasanton and Dublin parents won't claim a free trial without seeing what other families thought and whether the times work. I build martial arts sites that sequence those three elements — offer, proof, schedule — to turn free trials into paid members — done in under 2 weeks.",

  "Darcio Lira Jiu Jitsu":
    "You offer 2 free trial classes with no sign-up required — that's one of the most generous offers in the Livermore martial arts market — but it's displayed as a single text line with no visual emphasis and no online form to claim it, just a phone number to call. Parents of kids browsing at 9pm comparing BJJ schools can't act on it without calling, so they move on. I build martial arts sites that make your free trial the centerpiece and let people claim it online in 30 seconds — done in under 2 weeks.",

  // ─── FLORISTS ────────────────────────────────────────────────────────────────

  "Livermore Valley Florist":
    "You have 159 Yelp reviews and WeddingWire listings with strong feedback, but zero reviews are displayed anywhere on your website — brides comparing Livermore florists who land on your site find no social proof and have no wedding inquiry form to submit outside of business hours. That combination is losing you wedding consultations to competitors with a form and a review section. I build florist sites that make your reviews visible and give brides a way to start a conversation at midnight on Sunday — done in under 2 weeks.",

  "Fremont Flowers":
    "Your e-commerce catalog has over 100 products with pricing, but there's no wedding or event services section, no custom order inquiry form, and zero customer reviews anywhere — so the highest-margin work you could do (wedding and event florals) is completely invisible to brides visiting the site. A Fremont bride planning a wedding who finds your site has no way to start a conversation about it. I build florist sites that separate everyday orders from event work and give each a clear path to revenue — done in under 2 weeks.",

  "CityBloom":
    "Your navigation has a 'Wedding Flowers' category but it leads to a product listing, not an inquiry form — there's no place for a bride to tell you her date, venue, or budget and request a consultation. Meanwhile, zero reviews appear on the homepage despite Yelp, Google, and Instagram links in the footer. Brides hiring a florist need to see past work and have a clear way to start a conversation; right now neither exists. I build florist sites for Bay Area shops that convert wedding traffic into booked consultations — done in under 2 weeks.",

  // ─── DAYCARES / PRESCHOOLS ───────────────────────────────────────────────────

  "Duck Pond Preschool":
    "Your homepage has no CTA buttons, no inquiry form, and a 'Testimonials' page that's empty — so parents who find you on Google have no way to reach out after hours and no parent reviews to build trust before they do. Daycare decisions are the highest-stakes choices parents make; a site that can't answer their questions or let them act immediately loses to one that can. I build preschool sites that capture enrollment inquiries around the clock and show the parent reviews that close them — done in under 2 weeks.",

  "The Children's Workshop Oakland":
    "Your Reggio approach is compelling but the homepage is entirely text — no classroom photos, no teacher faces, no visual of the environment — and parents have to email a director or call during business hours just to express interest, with no form available. Oakland Reggio preschool parents researching options at 10pm move on to the next school with a tour-request form and classroom photos. I build preschool sites that put the environment on display and capture inquiries at any hour — done in under 2 weeks.",

  "Giggles Preschool Inc":
    "Your site doesn't list the ages you serve, your hours of operation, or your tuition — the three questions every parent asks first — and both 'Schedule Now' CTAs appear to dead-end without a working form. Parents comparing Oakland preschools have no way to confirm your school fits their situation without calling, and most won't call. I build preschool sites that answer those three questions above the fold and let parents schedule a tour in under a minute — done in under 2 weeks.",

  "Nido Infant-Toddler Center":
    "You only have 1 parent testimonial on your site, the gallery link appears empty, and families are asked to join a waitlist through a generic contact form with no structure — all for infant and toddler care, where parents are handing you their most vulnerable family member. That lack of visible proof and process makes the waitlist feel informal even if the program is exceptional. I build infant care sites that show the environment, the philosophy, and the community testimonials that parents need to confidently join a waitlist — done in under 2 weeks.",

  "Hortensia's Way Family Daycare":
    "Your homepage has one photo, one 'Learn More' button, and no way to contact you without navigating off the main page — and zero parent reviews anywhere on the site. Family daycare is the most trust-dependent childcare category; parents choosing between a family daycare and a licensed center need to see the home environment, read parent stories, and be able to reach out immediately. I build family daycare sites that do that work and convert Google traffic into enrollment inquiries — done in under 2 weeks.",

  "Palm Academy":
    "Your site serves ages 6 weeks to 18 years across six programs but shows no tuition anywhere, no parent testimonials on the homepage, and all five CTAs lead to the same generic contact form — so parents can't price-check, can't read reviews, and can't tell you which program they're even interested in when they reach out. That's a lot of friction for a school with strong offerings across multiple age groups. I build childcare sites that match the right content to the right parent and capture qualified enrollment leads — done in under 2 weeks.",

  "Crawlers 2 Scholars":
    "You link to Google, Facebook, and Yelp reviews but show none of their ratings or counts on your site — so a parent has to click off your page to find out you have good reviews, and they may not come back. Your enrollment form also doesn't ask for the child's age, so staff gets a lead with no information to follow up personally. I build preschool sites that show your real review numbers, answer the age and program questions upfront, and collect the right information to close enrollments — done in under 2 weeks.",
};

module.exports = { audits, scripts };
