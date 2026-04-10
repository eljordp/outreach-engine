const audits = {
  // ─── BARBERSHOPS ───────────────────────────────────────────────────────────

  "Beastmode Barbershop": [
    {
      category: "CTA",
      issue: "'Make an Appointment' repeats 4 times but links only to a contact form page — no live calendar, no time-slot picker, no instant confirmation.",
      impact: "Every interested customer has to fill out a form and wait for a callback, adding friction that kills impulse bookings.",
    },
    {
      category: "Lead Capture",
      issue: "Single contact form with Name/Email/Message; no email newsletter, no SMS opt-in, no first-visit offer to capture walk-in intent.",
      impact: "No way to follow up with visitors who browse but don't book — those leads are gone forever.",
    },
    {
      category: "Social Proof",
      issue: "Three anonymous one-line quotes ('Best Hair Cut in Bay Area!') with no names, no star ratings, no review counts, and no link to Google or Yelp.",
      impact: "Unverified quotes read as filler; new customers searching for trusted barbershops click away to competitors with 500+ Google reviews.",
    },
    {
      category: "Work Gallery",
      issue: "Zero client haircut photos — only six barber headshots and their Instagram handles. No before/after gallery, no fade examples, no style showcase on the site itself.",
      impact: "Visitors can't evaluate the quality of work before booking, reducing first-time appointment conversions.",
    },
  ],

  "Temescal Alley Barbershop": [
    {
      category: "CTA",
      issue: "'Book Now' button exists in the header and hero, but the booking link opens an external Resurva subdomain with no branding continuity.",
      impact: "The domain switch (temescalalleybarbershop.resurva.com) breaks trust for first-time visitors and increases drop-off before a booking is confirmed.",
    },
    {
      category: "Social Proof",
      issue: "Homepage contains zero reviews, zero testimonials, zero star ratings — only an Instagram link. No Google or Yelp widget embedded.",
      impact: "First-time visitors have no on-site proof of quality; they're forced to leave the site to evaluate the shop, and many don't return.",
    },
    {
      category: "Work Gallery",
      issue: "No haircut gallery, no fade photos, no styled-hair examples anywhere on the site. One hero image is the full extent of visual work shown.",
      impact: "Customers shopping for a new barber can't see what they're getting before booking, depressing new-client acquisition.",
    },
    {
      category: "Offer",
      issue: "Services and rates are tucked behind a separate linked page with no preview pricing or highlighted package on the homepage.",
      impact: "Price-sensitive customers bounce before clicking through; showing a starting price ('Cuts from $35') anchors value and reduces hesitation.",
    },
  ],

  "G Circle Barber Lounge": [
    {
      category: "CTA",
      issue: "'Book Now' links to Squire booking system, but the button is only in the top nav — no repeated CTA below the fold, no urgency copy.",
      impact: "Visitors who scroll past the nav lose the prompt to book and have no second chance to convert without scrolling back up.",
    },
    {
      category: "Social Proof",
      issue: "Absolutely no reviews, testimonials, star ratings, or review counts displayed anywhere on the site.",
      impact: "Without social proof, new clients have no reason to choose G Circle over any other Oakland barbershop they find on Google.",
    },
    {
      category: "Offer",
      issue: "No service menu, no pricing, no list of cuts offered anywhere on the homepage or visible site pages.",
      impact: "Price shoppers leave immediately; lack of transparency signals either high prices or a poorly maintained site — both lose bookings.",
    },
    {
      category: "Work Gallery",
      issue: "Gallery section shows 5 photos of the shop interior and environment only — no haircut work, no client results, no style examples.",
      impact: "Clients can't see the quality of the work, making it impossible to make a booking decision based on the site alone.",
    },
  ],

  "Knuckleheads & Harlots": [
    {
      category: "CTA",
      issue: "'Book Now' (Square), 'Shop Now', phone/SMS, and 'Email to model' all compete for attention on the same homepage with no visual hierarchy.",
      impact: "Too many equal-weight CTAs cause decision paralysis — visitors don't know what to do first and leave without booking.",
    },
    {
      category: "Lead Capture",
      issue: "No email newsletter signup or SMS list — only a model participation email and a phone number. No mechanism to capture browsing visitors who aren't ready to book today.",
      impact: "All marketing leverage depends on paid social or walk-ins; there's no owned list to re-engage past or potential clients.",
    },
    {
      category: "Social Proof",
      issue: "Instagram feed embedded (5 posts) and links to Google/Yelp reviews exist, but no star rating or review count is displayed on the homepage itself.",
      impact: "Visitors have to leave the site to read reviews — most won't, and the shop loses the trust signal at the critical decision moment.",
    },
    {
      category: "Differentiation",
      issue: "Strong story (first Trans-owned inclusive barbershop in Oakland) buried deep in the page copy — not surfaced in the hero headline or above-the-fold area.",
      impact: "The shop's most compelling differentiator isn't visible to visitors who don't scroll, wasting the brand's strongest hook.",
    },
  ],

  "Slick & Dapper Barber": [
    {
      category: "CTA",
      issue: "Multiple 'BOOK TODAY' CTAs reference two locations (Grand Ave closing, Broadway new opening) simultaneously, creating confusion about which location is active.",
      impact: "Confused visitors who can't tell which location to book at will call instead of booking online — or abandon entirely.",
    },
    {
      category: "Lead Capture",
      issue: "No email signup form, no newsletter, no SMS capture anywhere on the site — only booking links.",
      impact: "Loyal clients who visit the site around the location move have no way to stay informed; the shop loses continuity with its existing customer base.",
    },
    {
      category: "Work Gallery",
      issue: "Only 2-3 interior shots of the barbershop visible — no haircut photos, no fade gallery, no before/after examples of their work.",
      impact: "A shop with 'Best of the East Bay 2024 & 2025' awards should be showcasing the cuts that earned them — the gallery gap undersells the brand.",
    },
    {
      category: "Offer",
      issue: "No service menu or pricing listed anywhere on the homepage — visitors are pointed straight to booking without knowing what's offered or at what cost.",
      impact: "First-time visitors have no context for what they're booking; many will call to ask, creating unnecessary friction that reduces online bookings.",
    },
  ],

  "Walnut Creek Barbershop & Shave Parlor": [
    {
      category: "CTA",
      issue: "Single 'Book appointment' button links to Setmore — functional but no secondary CTA, no phone-call option, and no urgency language beyond 'Cut? Cool. Click.'",
      impact: "Visitors who aren't ready to book immediately have no alternative path (call, message, join waitlist) and leave without converting.",
    },
    {
      category: "Social Proof",
      issue: "Zero reviews, zero testimonials, zero star ratings on the homepage. No Google or Yelp widget, no quote from a customer.",
      impact: "A Walnut Creek barbershop competing with well-reviewed chains nearby loses every new client who checks reviews before committing.",
    },
    {
      category: "Work Gallery",
      issue: "Only a single hero image of the shop interior — no cuts, no shaves, no before/after client photos anywhere on the site.",
      impact: "The 'Shave Parlor' positioning is unique and premium but unsupported by any visual proof of the service quality.",
    },
    {
      category: "Offer",
      issue: "No service menu and no pricing anywhere on the site — the name references 'Shave Parlor' but no shave services are described.",
      impact: "Potential clients shopping for a traditional wet shave can't confirm the service is offered before booking, leading to no-shows and wasted chair time.",
    },
  ],

  "Livermore Barber Shop": [
    {
      category: "CTA",
      issue: "Primary booking CTA links out to an external Vagaro URL rather than an embedded calendar — visitors must navigate away from the site to book.",
      impact: "The offsite redirect adds a step and breaks the booking flow, reducing conversion from site visit to confirmed appointment.",
    },
    {
      category: "Social Proof",
      issue: "No reviews, testimonials, or star ratings displayed anywhere on the homepage — the scroll-triggered popup captures email but never shows proof of quality.",
      impact: "New clients searching 'Livermore barber' will see competitors' Google star ratings in search results and choose them over an unvalidated shop.",
    },
    {
      category: "Work Gallery",
      issue: "Gallery system is configured in the backend but actual photo count and haircut portfolio images are not visible or published on the live homepage.",
      impact: "An empty or unpopulated gallery is worse than none — it signals an abandoned site and gives clients no reason to choose this shop.",
    },
    {
      category: "Offer",
      issue: "New beard trim and shave services are announced via a banner but no service menu with pricing is displayed — the expansion is promoted but not explained.",
      impact: "Customers interested in the new services can't evaluate pricing or options without calling, which most won't bother to do.",
    },
  ],

  "Above All Barbershop": [
    {
      category: "CTA",
      issue: "'Book Now' links to Booksy — functional — but the site also lists a phone number and an email address as equal-priority CTAs, diluting focus.",
      impact: "When booking, calling, and emailing all appear equal, visitors choose the path of least commitment (email) which results in fewer confirmed appointments.",
    },
    {
      category: "Social Proof",
      issue: "No reviews, testimonials, star ratings, or any social proof whatsoever on the homepage.",
      impact: "A newer shop in Pittsburg needs trust signals more than an established brand — zero proof means zero reason for a first-time client to take a chance.",
    },
    {
      category: "Work Gallery",
      issue: "One photo of the shop interior ('inside shop.JPG') is the only image on the site — no haircut examples, no fade photos, no client results.",
      impact: "Without visible work, the site cannot communicate skill level, style range, or specialties — the shop is invisible to style-conscious clients browsing online.",
    },
    {
      category: "Offer",
      issue: "No service menu, no list of cuts, no pricing anywhere on the site.",
      impact: "Walk-ins and online visitors alike have no way to know what's offered or what it costs before visiting, which turns away comparison shoppers.",
    },
  ],

  // ─── TATTOO STUDIOS ────────────────────────────────────────────────────────

  "Amor Eterno Arte": [
    {
      category: "CTA",
      issue: "Appointment path requires clicking to individual artist profile pages — there is no single 'Book a Consultation' CTA on the homepage itself.",
      impact: "Visitors unfamiliar with the artists leave without contacting anyone because the booking entry point requires navigating multiple pages.",
    },
    {
      category: "Lead Capture",
      issue: "No consultation request form, no email capture, no popup — only a generic info@ email address buried on the page.",
      impact: "Potential tattoo clients researching studios move on to competitors with a visible inquiry form; the shop captures zero contact info from non-buyers.",
    },
    {
      category: "Social Proof",
      issue: "Zero customer reviews, testimonials, star ratings, or review counts on the entire site.",
      impact: "Tattoo is a high-consideration purchase — without proof of client satisfaction, first-timers and visitors from outside Oakland won't risk booking.",
    },
    {
      category: "Work Gallery",
      issue: "Homepage features an 'Art Gallery' section for past events rather than a tattoo portfolio — no artist-specific work portfolios are visible on the homepage.",
      impact: "Clients shopping for a tattoo artist make decisions based on style and portfolio — burying or omitting work samples kills consultation request volume.",
    },
  ],

  "Sacred Tattoo Oakland": [
    {
      category: "CTA",
      issue: "No booking button or consultation form — appointments require emailing a Gmail address or calling, with a 48-hour cancellation policy mentioned but no clear first step.",
      impact: "Every interested client has to compose an email from scratch; this friction means many impulse inquiries never get sent.",
    },
    {
      category: "Lead Capture",
      issue: "No email signup form, no contact form — only a Gmail address and phone number listed. Instagram feed is embedded but not connected to any capture mechanism.",
      impact: "The Instagram feed drives traffic but the site converts none of it into leads — all follow-up depends on the client taking unguided action.",
    },
    {
      category: "Offer",
      issue: "No service types with starting prices, no deposit amount listed on the homepage — $100 deposit is buried in the cancellation policy text.",
      impact: "First-time clients don't know what they'll pay upfront; ambiguity about costs is one of the top reasons tattoo inquiries stall before a consultation.",
    },
    {
      category: "Differentiation",
      issue: "'Downtown Oakland's oldest running tattoo shop' is the strongest differentiator on the site but is not displayed in the hero — it appears as mid-page body copy.",
      impact: "The shop's most trust-building claim is invisible to visitors who don't scroll — the homepage hero shows Instagram photos but not the founding story.",
    },
  ],

  "Studio Noir Oakland": [
    {
      category: "CTA",
      issue: "'Book Now' is in the navigation but the phone number (510.575.0892) appears twice in the header, making a phone call the de facto primary CTA over online booking.",
      impact: "Phone-first booking creates a bottleneck — calls go unanswered during sessions and consultation requests are lost to voicemail.",
    },
    {
      category: "Lead Capture",
      issue: "No email signup form, no consultation request form, no popup — only a Gmail address and phone number for contact.",
      impact: "Visitors interested in permanent makeup, microblading, or tattoo services can't submit a request after hours; those leads go to competitors.",
    },
    {
      category: "Social Proof",
      issue: "The site calls itself 'top-rated Oakland tattoo studio' but displays zero ratings, zero reviews, and zero testimonials to back that claim.",
      impact: "Unsubstantiated superlatives damage credibility — visitors actively look for the proof and when they don't find it, trust drops below baseline.",
    },
    {
      category: "Offer",
      issue: "Services span tattoo, microblading, skin treatments, and piercing but zero pricing is shown anywhere on the site.",
      impact: "Multi-service clients can't self-qualify or plan a budget; most comparison shoppers move on to studios that show at least starting rates.",
    },
  ],

  "Temple Tattoo 13": [
    {
      category: "CTA",
      issue: "'Get Started' and 'Call Us' buttons scatter throughout the page with no clear visual hierarchy — phone (510-451-6423) is the most prominent contact method.",
      impact: "Phone-first contact limits after-hours consultations and creates unnecessary back-and-forth for clients who would prefer a quick online form.",
    },
    {
      category: "Social Proof",
      issue: "A 'Customer Reviews' section header exists on the page but the actual review content is not populated — the section appears blank.",
      impact: "An empty reviews section is worse than having none — it signals an abandoned or broken site to new visitors, eroding the trust that '25 years in Oakland' should build.",
    },
    {
      category: "Work Gallery",
      issue: "'Explore Our Recent Work' section exists with navigation buttons but the actual photo count is unclear and the gallery is not prominently featured above the fold.",
      impact: "Tattoo clients make style decisions based on portfolio — a gallery that requires hunting for reduces consultation requests from the clients most likely to book.",
    },
    {
      category: "Lead Capture",
      issue: "No email capture form, no consultation request form, no newsletter — contact requires calling or visiting in person.",
      impact: "For a studio that hosts internationally known guest tattooers, there's no mechanism to alert existing fans of upcoming availability — every artist visit starts from zero visibility.",
    },
  ],

  "DH Tattooing": [
    {
      category: "CTA",
      issue: "'Contact Us', 'Book Now' (text), 'Text Us', and 'View Our Ink' all compete as CTAs with no single dominant action for a first-time visitor.",
      impact: "Cluttered CTA hierarchy means visitors don't know which step to take first — consultation request volume drops when the path isn't obvious.",
    },
    {
      category: "Social Proof",
      issue: "Zero customer reviews, testimonials, star ratings, or review counts on the homepage. No Google or Yelp integration despite the studio claiming 'premier' positioning.",
      impact: "Livermore clients searching for tattoo artists will pick studios with visible 5-star reviews over an unvalidated 'premier' claim.",
    },
    {
      category: "Work Gallery",
      issue: "Four portfolio category labels (Color, Blackwork, American Traditional, Black & Grey Realism) exist but specific photo counts are unclear and no homepage gallery preview is shown.",
      impact: "Clients who want to evaluate style fit before contacting can't do so from the homepage — they have to dig into sub-pages, and most won't.",
    },
    {
      category: "Offer",
      issue: "Only the $160 shop minimum is mentioned — no pricing tiers, no hourly rates, no deposit amount, no starting prices for any style.",
      impact: "Clients budgeting for custom work can't self-qualify before reaching out, leading to consultations with clients who can't afford the work.",
    },
  ],

  "Simms Ink Tattoo & Piercing": [
    {
      category: "CTA",
      issue: "Site displays 'NEW WEBSITE COMING SOON! (UNDER CONSTRUCTION)' — the only CTAs are a phone number and email address.",
      impact: "Any traffic from Google, Instagram, or word of mouth hits a dead end — every potential consultation request is lost because there's no functioning site to convert visitors.",
    },
    {
      category: "Work Gallery",
      issue: "No portfolio, no artist photos, no examples of tattoo or piercing work anywhere on the under-construction site.",
      impact: "Clients who search online before visiting in person have zero visual proof of quality — the studio is effectively invisible to digital-first customers.",
    },
    {
      category: "Social Proof",
      issue: "No reviews, testimonials, or star ratings — only 'Best in the Bay!' in the page title with no evidence to support it.",
      impact: "The shop's tagline is its biggest claim and it's completely unsubstantiated on the site, making it read as filler rather than a trust signal.",
    },
    {
      category: "Lead Capture",
      issue: "No consultation request form, no email signup, no way for a visitor to leave their contact info without calling or emailing directly.",
      impact: "After-hours visitors — the majority of online tattoo research happens evenings and weekends — have no way to express interest and receive a follow-up.",
    },
  ],

  // ─── MASSAGE / SPA ─────────────────────────────────────────────────────────

  "Reenoo Bodywork & Massage": [
    {
      category: "CTA",
      issue: "'Book Now' is well-placed in the header and hero, but the email newsletter signup and a '$20 OFF first massage' popup compete for attention without a clear conversion hierarchy.",
      impact: "Mixing a discount offer and a booking CTA on the same screen without sequencing them causes visitors to stall — they try to get the discount code but end up not booking.",
    },
    {
      category: "Social Proof",
      issue: "Testimonials exist on a linked page but zero reviews, star ratings, or quotes appear on the homepage itself — visitors must navigate to a separate page to find proof.",
      impact: "Most visitors won't click to a separate testimonials page; the homepage is where trust is built or lost, and Reenoo's homepage has none.",
    },
    {
      category: "Work Gallery",
      issue: "Only 2 photos on the homepage — one intake room and one treatment room. No images of treatments in progress, no atmosphere photography beyond basic room shots.",
      impact: "Spa clients make emotional buying decisions based on atmosphere and experience — 2 clinical room photos don't create the desire that drives a $170–$230 booking.",
    },
    {
      category: "Service Area",
      issue: "No service area or location information is visible on the homepage — city and neighborhood are not mentioned.",
      impact: "Visitors who find the site through social media or referrals can't immediately confirm the spa is near them, creating an unnecessary friction point before booking.",
    },
  ],

  "Vetiver Collective": [
    {
      category: "Social Proof",
      issue: "Only one testimonial ('Oakland's Best Kept Secret') from 'Maggie O.' is displayed — no review count, no star rating aggregate, no link to how many Vagaro reviews exist.",
      impact: "A holistic spa with a premium service range needs more than one quote to convert skeptical first-time clients comparing options.",
    },
    {
      category: "Work Gallery",
      issue: "No before/after photos, no service imagery, no treatment photography on the homepage — only team headshots and product images for the brands they carry.",
      impact: "Clients booking color, skincare, or specialty services like craniosacral bodywork want visual context; product photos don't substitute for proof of skill.",
    },
    {
      category: "Offer",
      issue: "Services span massage, hair color, acupuncture, sound healing, tarot, and nail care but zero pricing is shown — visitors must click to Vagaro to see any rates.",
      impact: "The wide service range reads as unfocused without pricing anchors; potential clients can't self-select their service and move toward booking.",
    },
    {
      category: "Lead Capture",
      issue: "No email signup form, no newsletter, no popup — only a 'Let's connect' contact form for career inquiries and a Vagaro booking link.",
      impact: "A wellness collective with this many services has strong upsell potential; without an email list, every re-engagement depends on the client remembering to come back.",
    },
  ],

  "Warm Spring Spa": [
    {
      category: "Social Proof",
      issue: "Zero reviews, testimonials, or star ratings on the homepage — no Google widget, no Yelp badge, no customer quotes.",
      impact: "A Fremont spa competing for massage clients against dozens of local competitors loses every comparison to businesses that show 100+ positive reviews.",
    },
    {
      category: "Offer",
      issue: "Steam room is the only service with a listed price ($15/20 min) — all massage packages and body care services show no pricing on the homepage.",
      impact: "Package bookings are the highest-value conversions for a spa; hiding package pricing means clients book single sessions instead of committing to a package.",
    },
    {
      category: "Lead Capture",
      issue: "No email signup form, no popup, no lead magnet — only a phone number and Gmail address for contact.",
      impact: "Without an email list, the spa can't promote seasonal packages, run flash sales, or re-engage lapsed clients — all high-margin opportunities lost.",
    },
    {
      category: "Work Gallery",
      issue: "Only generic service category images (massage types, steam room exterior) — no photos of the actual space, treatment rooms, or the 'Asian and European decor' they reference.",
      impact: "The 'beautifully appointed' claim is the main differentiator but there's no visual proof — clients choosing between spas will pick the one that shows them what they're buying.",
    },
  ],

  "The Royal Thai Spa": [
    {
      category: "Social Proof",
      issue: "No reviews, testimonials, or star ratings on the homepage — links to Yelp and social media exist in the footer but nothing is embedded or displayed on-page.",
      impact: "Thai massage clients in the Union City / Fremont area are actively comparing ratings; a blank homepage sends them to a competitor with visible 4.8 stars.",
    },
    {
      category: "Offer",
      issue: "Services are described as 'Thai, Deep Tissue and Swedish' with no pricing, no duration options, no package tiers listed anywhere on the homepage.",
      impact: "Clients comparison-shopping can't evaluate value without prices; the absence of any rate information is the single biggest barrier to a booking decision.",
    },
    {
      category: "Work Gallery",
      issue: "One stock-style image of a Thai massage scene — no photos of the actual spa, no treatment rooms, no atmospheric shots that communicate the 'Royal' positioning.",
      impact: "Spa clients buy an experience as much as a service; one generic photo can't create the desire that drives a first booking from a new client.",
    },
    {
      category: "Lead Capture",
      issue: "No email signup, no popup, no lead magnet — contact relies entirely on phone and email listed in the footer.",
      impact: "The spa has no way to re-market to visitors who don't book on the first visit — its only growth lever is new walk-in or organic search traffic.",
    },
  ],

  // ─── HAIR SALONS ───────────────────────────────────────────────────────────

  "Pony Studios": [
    {
      category: "CTA",
      issue: "The primary 'Book Now' links to Mangomint, but individual stylist booking links are scattered throughout the page without a clear hierarchy — first-time visitors don't know if they should pick a stylist or just book generically.",
      impact: "Decision paralysis at the booking step causes high-value color and highlight clients to call instead of completing the online booking flow.",
    },
    {
      category: "Lead Capture",
      issue: "Email signup for news/updates exists but is not prominently featured — the $230–$340 highlight pricing signals a high-LTV client that deserves a stronger capture mechanism.",
      impact: "For a salon with 1,000+ five-star reviews and media coverage, an active email list could drive consistent re-booking and referrals — currently underutilized.",
    },
    {
      category: "Social Proof",
      issue: "'1,000+ five-star reviews' is referenced but no actual review widget, star count, or embedded Google/Yelp reviews appear on the homepage — just a text claim.",
      impact: "A claim without a link or widget is easy to ignore; embedding the actual reviews (or a count with a link) converts the claim into a conversion tool.",
    },
    {
      category: "Differentiation",
      issue: "Environmental mission (95% waste diversion, net-negative carbon, 10% profits to nonprofits) is buried far down the page — not visible in the hero or above the fold.",
      impact: "Oakland clientele responds strongly to values-aligned businesses; this story should be in the first scroll, not buried beneath service listings.",
    },
  ],

  "Fig and Clover": [
    {
      category: "CTA",
      issue: "Two separate 'Book Hair Appt' and 'Book Nails Appt' CTAs link to two completely different websites (looksalon.hair and oaklandnailclub.com), fragmenting the brand experience.",
      impact: "Clients who want to book both services in one visit have no path to do so on figandclover.com — the split booking experience reduces dual-service appointments.",
    },
    {
      category: "Social Proof",
      issue: "Zero reviews, testimonials, star ratings, or review counts anywhere on the site.",
      impact: "A community-focused Oakland salon in the Temescal District has no on-site proof of the experience it promises — first-time visitors are booking on faith alone.",
    },
    {
      category: "Work Gallery",
      issue: "Homepage shows one hero image and staff photos only — no hair color work, no nail art examples, no styling gallery despite offering balayage, cuts, and nail art.",
      impact: "Style-driven clients browsing for a new salon won't book without seeing the work — no gallery means no new appointment from anyone who doesn't already know the shop.",
    },
    {
      category: "Offer",
      issue: "Hair and nail services are mentioned but no pricing is listed anywhere on the homepage — visitors have to navigate to two separate external sites to find any service information.",
      impact: "Every extra click between landing on the homepage and seeing a price is a client lost to a competitor; the two-site structure compounds this friction.",
    },
  ],

  "STrUT Oakland": [
    {
      category: "CTA",
      issue: "'Book Now' is placed mid-page, not in the sticky header or hero — visitors land on the page and must scroll before seeing any booking prompt.",
      impact: "Above-the-fold time is the highest-converting window; without a CTA in the hero, a significant portion of visitors bounce before reaching the booking prompt.",
    },
    {
      category: "Social Proof",
      issue: "No reviews, star ratings, testimonials, or review counts on the homepage — only an Instagram post noting 'booked til March' as implicit demand proof.",
      impact: "Curly and textured hair clients are a high-intent niche who research carefully before trusting a new stylist; no on-site proof means losing these clients to established alternatives.",
    },
    {
      category: "Offer",
      issue: "Three service categories (Haircuts, Hair Color, Specialty) are listed but no pricing is shown anywhere — curly hair cuts and color services are specialized and clients want rate context.",
      impact: "Textured hair clients are often burned by stylists who don't understand their hair and charge accordingly; transparent pricing builds the trust that drives bookings.",
    },
    {
      category: "Work Gallery",
      issue: "8-10 images are embedded throughout the homepage but they're mixed into the narrative layout with no dedicated gallery section or before/after format.",
      impact: "Photos scattered through content sections can't serve as a portfolio — clients can't browse the range of work, compare styles, or evaluate skill for their specific hair type.",
    },
  ],

  "Painted Mane": [
    {
      category: "Social Proof",
      issue: "A 'Reviews' section header exists on the homepage but contains no actual review content — the section is completely empty.",
      impact: "An empty reviews section signals an unfinished site and actively undermines trust — worse than having no section at all.",
    },
    {
      category: "Work Gallery",
      issue: "Approximately 3-4 images on the homepage including what appear to be stock photos — no extensive before/after portfolio of balayage or color work specific to the salon.",
      impact: "A Walnut Creek color salon specializing in balayage and highlights cannot compete with nearby studios that show 20+ transformation photos from their own clients.",
    },
    {
      category: "Offer",
      issue: "Services are listed (extensions, custom color, cuts) but zero pricing is displayed — Vagaro booking platform has the rates but the homepage shows nothing.",
      impact: "High-ticket color clients (balayage runs $200-$350+ at comparable Walnut Creek salons) want to see pricing before booking a consultation to avoid wasted time.",
    },
    {
      category: "Lead Capture",
      issue: "Email subscription form is present but framed only around 'salon protocol updates' — no offer, no incentive, no reason to subscribe beyond operational notices.",
      impact: "A zero-value email signup framing produces near-zero subscribers; a 'first appointment discount' or 'seasonal color guide' would convert browsers into a marketable list.",
    },
  ],

  "Gilded Manes": [
    {
      category: "CTA",
      issue: "Primary CTA is a phone number with 'Please text me to book' — no online booking system, no calendar integration, no instant confirmation available.",
      impact: "Clients who prefer not to text or call (most under-35 clients) have no self-serve booking path and simply book elsewhere.",
    },
    {
      category: "Social Proof",
      issue: "Completely absent — no reviews, no testimonials, no star ratings, no mention of any client outcomes beyond the service menu.",
      impact: "A solo stylist in Tracy serving East Bay clients remotely needs strong social proof to justify the commute; without it, local alternatives win every comparison.",
    },
    {
      category: "Work Gallery",
      issue: "8 carousel images with service labels ('Colorist Blonde Balayage', 'Waves and Curls') — modest portfolio for a specialist targeting high-value color clients.",
      impact: "Balayage clients regularly choose a stylist based on portfolio alone; 8 photos with no before/after context isn't enough to close a $200-$250+ service booking.",
    },
    {
      category: "Lead Capture",
      issue: "Contact form collects name and email but is positioned as a general inquiry tool — no email list, no newsletter, no follow-up sequence for non-booking visitors.",
      impact: "A solo stylist's entire business lives and dies on rebooking rate; without an email list to prompt rebooking, each client retention depends on them remembering to text.",
    },
  ],

  // ─── NAIL SALONS ───────────────────────────────────────────────────────────

  "Just The Tips Nail Studio": [
    {
      category: "CTA",
      issue: "'BOOK HERE' appears twice and 'BOOK AN APPOINTMENT' in the nav — booking CTAs are present but no pricing is shown near the CTA to reduce friction before clicking.",
      impact: "Visitors who aren't sure what services cost hesitate before clicking the booking link; showing a starting price ('Gel X from $75') next to the CTA increases conversion.",
    },
    {
      category: "Lead Capture",
      issue: "No email signup form, no SMS capture, no popup — only a Gmail address in the footer for non-booking contact.",
      impact: "Oakland nail clients are highly social and referral-driven; without an email or SMS list, the studio can't run promotions, announce new designs, or recover lapsed clients.",
    },
    {
      category: "Social Proof",
      issue: "Only 2 five-star reviews with no aggregate count, no Google rating badge, no Yelp link — despite being an Oakland studio with repeat clientele.",
      impact: "Two reviews aren't enough to build confidence for a first-time client making a $75-$150+ booking decision; 50+ reviews with an aggregate star rating would convert far more.",
    },
    {
      category: "Work Gallery",
      issue: "A Gallery page is linked in the nav but the homepage shows only 2-3 lifestyle/branding images — no nail art examples, no gel extension photos, no custom design showcase.",
      impact: "Nail clients make booking decisions almost entirely based on style photos; burying the portfolio behind a nav click loses clients who judge quickly from the homepage.",
    },
  ],

  "Prettify Me": [
    {
      category: "Social Proof",
      issue: "Zero reviews, testimonials, star ratings, or review counts on the homepage despite links to Facebook, Instagram, and Yelp in the footer.",
      impact: "A Hayward nail studio competing for Google traffic against established salons with 300+ reviews is invisible to any client who filters by rating.",
    },
    {
      category: "Lead Capture",
      issue: "No email signup, no popup, no SMS capture — the only non-booking contact path is clicking through to an external platform.",
      impact: "Visitors who browse but don't book immediately are lost permanently — the studio has no mechanism to follow up with warm leads.",
    },
    {
      category: "Differentiation",
      issue: "'Sanctuary for self-love' and 'customized for your skin type' positioning appears in the body copy but not in the hero headline — the above-the-fold area shows only the business name.",
      impact: "Without differentiation messaging above the fold, Prettify Me reads as a generic nail salon — the brand story that sets it apart never reaches visitors who bounce quickly.",
    },
    {
      category: "Work Gallery",
      issue: "12 gallery images are present but displayed in a generic grid with no labels, no technique names, no before/after format — just thumbnail photos.",
      impact: "Clients comparing builder gel vs. soft gel vs. poly gel options (all priced differently) can't identify which photos correspond to which services they're considering booking.",
    },
  ],

  "Little Bird Nail Bar": [
    {
      category: "Social Proof",
      issue: "Three customer testimonials are displayed but with no star ratings, no aggregate score, no review count — the names and quotes appear without any verification or rating system.",
      impact: "Unrated testimonials carry far less weight than a '4.9 stars — 200 reviews on Google' badge; clients searching for top-rated nail bars in Hayward will choose the one with a visible rating.",
    },
    {
      category: "Offer",
      issue: "Six service categories listed (manicures, pedicures, gel, acrylic, lash extensions, shoulder massages) but zero pricing shown — budget indicator is a '$' in the site metadata but no actual rates.",
      impact: "Hayward clients are price-conscious; a service menu with rates would reduce phone inquiries and increase direct bookings from clients who self-qualify on price.",
    },
    {
      category: "Lead Capture",
      issue: "No email signup, no popup, no SMS opt-in — only a Gmail address and phone number for contact beyond the booking page.",
      impact: "A nail bar offering lash extensions and shoulder massages has strong repeat-client potential; without an email list, rebooking reminders and seasonal promos can't be sent.",
    },
    {
      category: "Work Gallery",
      issue: "8 professional images on the homepage cover manicures and processes, but no examples of nail art, no gel extension styles, no acrylic sets — the signature work is absent.",
      impact: "Clients specifically looking for nail art or custom designs — the highest-value bookings — see no relevant portfolio and can't confirm the studio does that style of work.",
    },
  ],

  "Painted Nails and Spa": [
    {
      category: "Social Proof",
      issue: "Zero reviews, testimonials, or star ratings on the homepage — social media links exist but nothing is embedded; visitors see no proof of quality.",
      impact: "San Ramon clients comparing nail spas have dozens of options on Yelp; without on-page social proof, Painted Nails doesn't win the comparison.",
    },
    {
      category: "Work Gallery",
      issue: "Homepage shows only 2 images — one nail service photo and one spa-related image; a Gallery page exists in the nav but is not previewed or featured on the homepage.",
      impact: "Clients looking for a specific nail style (gel, organic, art) can't evaluate the salon from the homepage — the 2-photo homepage fails as a visual sales tool.",
    },
    {
      category: "Lead Capture",
      issue: "No email signup, no popup, no SMS capture — 'Book Now' and phone/email are the only contact options.",
      impact: "Without a list, the spa can't market the organic and non-toxic positioning it leads with — the 'health priority' story never reaches clients after the first visit.",
    },
    {
      category: "Differentiation",
      issue: "'Your Health, Our Priority' is a strong differentiator for a non-toxic nail spa but appears only in the tagline — no explanation of which products, no certifications, no ingredient transparency on the homepage.",
      impact: "Health-conscious clients want specifics (gel brands used, ventilation systems, ingredient lists) — a vague health claim without proof doesn't convert the audience most likely to care.",
    },
  ],

  "Beauty Salon & Day Spa": [
    {
      category: "CTA",
      issue: "'Book Now' links to an external macmarketing.us booking URL — the offsite redirect with no salon branding breaks trust mid-booking flow.",
      impact: "Sending clients to a generic third-party URL (lk.macmarketing.us) signals a low-budget setup; some clients abandon the booking page when they don't recognize the domain.",
    },
    {
      category: "Work Gallery",
      issue: "4-5 images on the homepage including manicure close-ups and generic interior shots; Instagram feed shows 4 thumbnails — no styling transformations, no color work, no before/after.",
      impact: "A full-service salon (hair, nails, facials, massage, waxing) needs category-specific galleries; a generic 5-photo spread can't close bookings for high-ticket services like color or facials.",
    },
    {
      category: "Social Proof",
      issue: "Four testimonial quotes are displayed but with no star ratings and no link to verify them — no Google badge, no Yelp count, no aggregate rating.",
      impact: "Four unverified quotes from a full-service San Leandro salon don't build enough trust to compete against nearby businesses with 200+ verified Google reviews.",
    },
    {
      category: "Offer",
      issue: "Full service list is present but no pricing is shown for any service — the '$$' pricing indicator in the schema data is invisible to real visitors.",
      impact: "A client deciding between this salon and a competitor offering similar services will book where they can see pricing and self-qualify without calling.",
    },
  ],

  "J Salon and Spa": [
    {
      category: "CTA",
      issue: "No online booking system — the only conversion CTA is a fixed 'Call Now' button in the bottom corner, requiring a phone call to book any appointment.",
      impact: "Removing the self-serve booking option means the salon misses every after-hours booking attempt and every client who prefers not to call — the majority of under-40 clients.",
    },
    {
      category: "Social Proof",
      issue: "Three customer testimonials are listed but with no star ratings, no review count, no Google or Yelp badge — presented as static quotes without verification.",
      impact: "Dublin clients use Google Maps to find nail salons with 4.5+ stars; a salon that doesn't surface its ratings on the homepage loses these comparison-driven decisions.",
    },
    {
      category: "Offer",
      issue: "Seven service categories (manicure, pedicure, nail enhancement, waxing, facials, microblading, hair) are listed but zero pricing is shown on the homepage.",
      impact: "A multi-service spa in Dublin competing against Pleasanton and San Ramon options needs transparent pricing to keep comparison shoppers from bouncing to menus-with-rates.",
    },
    {
      category: "Work Gallery",
      issue: "Homepage shows 4 service category photos (generic manicure/pedicure/nail enhancement/waxing shots) with a separate Gallery page that isn't previewed — no signature work is visible.",
      impact: "Microblading and nail enhancement are high-consideration services where clients choose based on portfolio; generic category photos can't close those bookings.",
    },
  ],
}

const scripts = {
  // ─── BARBERSHOPS ───────────────────────────────────────────────────────────

  "Beastmode Barbershop":
    "Your 'Make an Appointment' button sends people to a contact form instead of a live calendar — every visitor who wants to book has to wait for a callback, and most won't. That friction alone costs you new clients every week who book the next shop with instant confirmation. I build barbershop sites with real-time booking, a haircut gallery, and verified Google reviews front and center — done in under 2 weeks.",

  "Temescal Alley Barbershop":
    "Your booking button sends clients off your domain to a Resurva subdomain — the brand break causes hesitation right before a customer commits, and your homepage has zero reviews or haircut photos to build trust before that click. New clients researching Oakland barbershops are choosing competitors whose sites show their work and keep the booking experience seamless. I build barbershop sites that keep clients on-brand through the full booking flow — done in under 2 weeks.",

  "G Circle Barber Lounge":
    "Your homepage has no service menu, no pricing, no haircut photos, and no customer reviews — a visitor landing on gcircle.co has no reason to book over any other Oakland barbershop. That gap costs you every new client who needs more than a logo and an address before they commit. I build barber lounge sites with a cut gallery, live booking, and social proof that converts first-time visitors into appointments — done in under 2 weeks.",

  "Knuckleheads & Harlots":
    "Your homepage competes with itself — booking, shopping, texting, and model signups are all equal priority, so visitors stall instead of clicking any of them. Your trans-inclusive, community-first story is your strongest differentiator but it's buried below the fold where most people never see it. I build salon sites that lead with your story and funnel visitors straight to a booking — done in under 2 weeks.",

  "Slick & Dapper Barber":
    "Your site is currently showing two simultaneous 'Book Today' CTAs for a closing location and a new one at the same time, which confuses anyone trying to book — and there's no haircut gallery to show the work behind your 'Best of the East Bay 2024 & 2025' wins. That combination loses the high-intent clients your awards should be pulling in. I build barber sites that showcase the work that earned those awards and move visitors straight to a booking — done in under 2 weeks.",

  "Walnut Creek Barbershop & Shave Parlor":
    "Your site has a booking button but zero social proof, zero haircut photos, and no service menu — a Walnut Creek client comparing you against well-reviewed competitors has no reason to commit from your homepage alone. The 'Shave Parlor' angle is premium positioning but there's nothing on the site to communicate what a traditional shave experience looks or feels like. I build barbershop sites that sell the experience with proof — done in under 2 weeks.",

  "Livermore Barber Shop":
    "Your site sends clients to an external Vagaro page to book, displays no reviews, and has an empty gallery section that makes the site look abandoned — every new client who lands on the page is making a decision with almost no information. With your recent expansion into beard trims and shaves, you have a bigger story to tell than the site currently supports. I build barber sites that showcase expanded services and convert visitors into confirmed bookings — done in under 2 weeks.",

  "Above All Barbershop":
    "Your homepage has a booking button, one interior photo, and no reviews, no service list, and no pricing — there's not enough there for a new client in Pittsburg to choose you over any other option they find online. A newer shop needs to work harder digitally to earn trust, and right now the site is leaving that job undone. I build barbershop sites that build credibility fast with work galleries and real social proof — done in under 2 weeks.",

  // ─── TATTOO STUDIOS ────────────────────────────────────────────────────────

  "Amor Eterno Arte":
    "Your homepage has no consultation CTA, no tattoo portfolio preview, and zero customer reviews — a first-time visitor researching Oakland tattoo studios can't see your artists' work or request a consultation without digging through multiple pages. That friction kills the consultation requests that turn into bookings. I build tattoo studio sites with artist portfolios, an inquiry form, and social proof that captures leads even at midnight — done in under 2 weeks.",

  "Sacred Tattoo Oakland":
    "Your site requires every interested client to write an email from scratch to request a consultation — with no form, no booking link, and no reviews on the homepage, visitors who find you through search have to take three unguided steps just to express interest. 'Downtown Oakland's oldest running tattoo shop' is a powerful claim that should be your headline, not buried in the copy. I build tattoo studio sites that lead with legacy, show the work, and capture consultation requests automatically — done in under 2 weeks.",

  "Studio Noir Oakland":
    "Your homepage calls itself 'top-rated' but shows zero ratings, zero reviews, and zero testimonials to back it up — and with no consultation form, after-hours visitors interested in microblading, tattoo, or permanent makeup have no way to reach you. That unsubstantiated claim combined with phone-only contact is costing you consultation requests daily. I build multi-service studio sites with embedded social proof and a 24/7 inquiry form — done in under 2 weeks.",

  "Temple Tattoo 13":
    "Your 'Customer Reviews' section exists on the homepage but is completely blank — and when a potential client sees an empty reviews section on a site that claims 25 years of service, it damages trust more than having no section at all. Combined with a gallery that takes effort to find, you're not surfacing the proof that should make Temple Tattoo the obvious choice for Oakland clients. I build tattoo studio sites that make your legacy and your work impossible to miss — done in under 2 weeks.",

  "DH Tattooing":
    "Your homepage has four competing CTAs, no visible reviews, and a portfolio that's categorized but not previewed — a Livermore client comparing tattoo studios online can't evaluate your work or know why to choose you over studios with visible five-star ratings and front-page portfolios. Your 'fine-art quality' positioning needs proof to close consultations. I build tattoo studio sites with portfolio previews and social proof that convert browser sessions into consultation requests — done in under 2 weeks.",

  "Simms Ink Tattoo & Piercing":
    "Your website currently shows an 'under construction' message — which means every person who searches for you or follows a link from your Instagram or Google listing hits a dead end with no portfolio, no consultation path, and no way to book. The tagline 'Best in the Bay!' is your only statement and there's nothing on the site to support it. I build tattoo and piercing studio sites that go live fast, show the work, and start capturing consultation requests from day one — done in under 2 weeks.",

  // ─── MASSAGE / SPA ─────────────────────────────────────────────────────────

  "Reenoo Bodywork & Massage":
    "Your homepage has no reviews, no location, and runs a discount popup that competes with your booking CTA — the '$20 off' offer and 'Book Now' button are fighting each other instead of working together, and visitors stall between the two. At $170-$230 per session, every hesitation in the booking flow is a lost appointment. I build massage therapy sites where the offer leads into the booking, not away from it — done in under 2 weeks.",

  "Vetiver Collective":
    "Your homepage has one testimonial, no service pricing, and no photos of your treatments or space — for a collective offering everything from massage to acupuncture to tarot readings, potential clients can't figure out what to book or why your rates are worth it. That ambiguity drives clients to simpler, clearer competitors. I build wellness collective sites that organize a wide service range into a clear, bookable experience — done in under 2 weeks.",

  "Warm Spring Spa":
    "Your homepage has zero reviews, no package pricing, and no photos of your actual space despite describing it as 'beautifully appointed with Asian and European decors' — clients who land on the site can't see what they're paying for or confirm it's worth the trip to Fremont. That invisibility costs you package bookings, which are your highest-value conversions. I build spa sites that sell the experience with real photography and transparent package pricing — done in under 2 weeks.",

  "The Royal Thai Spa":
    "Your homepage has no pricing, no reviews, and one generic massage photo — a Union City client choosing between Thai massage options online sees nothing that differentiates you from the closest competitor that shows their rates and has 200 Yelp reviews. That gap costs you every booking from a first-time visitor who needs more than a tagline before committing. I build Thai spa sites with service pricing, embedded social proof, and an online booking flow that closes clients without a phone call — done in under 2 weeks.",

  // ─── HAIR SALONS ───────────────────────────────────────────────────────────

  "Pony Studios":
    "Your site references '1,000+ five-star reviews' as a text claim but doesn't embed or link to any of them — and your environmental mission (net-negative carbon, 10% to nonprofits) is buried below the fold where most visitors never see it. For a salon charging $200-$355 for color, those are the two most powerful reasons to book and neither is visible in the first scroll. I build salon sites that surface your best proof points immediately and convert premium clients before they scroll — done in under 2 weeks.",

  "Fig and Clover":
    "Your homepage splits booking across two completely separate external sites for hair and nails — clients who want both services have no single path and most won't navigate the two-site experience. On top of that, there are zero reviews and no work gallery, so new visitors have nothing to evaluate before they try to book. I build salon sites with unified booking, a work gallery, and social proof that converts walk-in-ready visitors into confirmed appointments — done in under 2 weeks.",

  "STrUT Oakland":
    "Your 'Book Now' CTA sits in the middle of the page rather than in the hero or sticky header, and there are no reviews or pricing visible — a textured hair specialist in Oakland should be capturing the high-intent curly-hair clients actively searching for someone who understands their hair, but the site doesn't close that audience. I build curly hair salon sites that lead with specialty proof, transparent pricing, and an above-the-fold booking prompt — done in under 2 weeks.",

  "Painted Mane":
    "Your 'Reviews' section on the homepage is completely empty — and with no reviews, no pricing, and only a handful of images, a Walnut Creek client comparing color salons has almost no information to go on before visiting a competitor. The empty reviews section in particular signals an unfinished site, which is worse than having no section at all. I build hair salon sites that fill those gaps with real social proof, a pricing anchor, and a before/after gallery — done in under 2 weeks.",

  "Gilded Manes":
    "Your only booking method is texting a phone number — which means every client who prefers online scheduling, every after-hours visitor, and every East Bay client researching from home has no self-serve path and likely books somewhere else. With no reviews and only 8 portfolio photos for a balayage specialist charging $200+, there's not enough on the site to justify the commute from Dublin or Pleasanton. I build solo stylist sites with online booking, a full transformation gallery, and the social proof that closes premium color clients — done in under 2 weeks.",

  // ─── NAIL SALONS ───────────────────────────────────────────────────────────

  "Just The Tips Nail Studio":
    "Your homepage shows only 2-3 branding photos with no nail art examples — clients looking for gel extensions or custom Gel X designs can't see your work without navigating away to a separate gallery page, and most won't. With only two testimonials and no pricing near the booking CTA, the site isn't doing enough work to close the style-driven Oakland clients most likely to book. I build nail studio sites with front-page work galleries and conversion-ready booking flows — done in under 2 weeks.",

  "Prettify Me":
    "Your homepage has 12 gallery images but no social proof whatsoever — not a single review, star rating, or Google badge despite having active Yelp and Instagram accounts. For a Hayward nail studio competing with dozens of options online, showing zero reviews while having competitive pricing actively hurts your ranking in client decision-making. I build nail salon sites that pair the gallery with embedded reviews so every visitor has both the visual proof and the trust signal they need to book — done in under 2 weeks.",

  "Little Bird Nail Bar":
    "Your homepage shows nail care process photos but no examples of actual nail art, gel sets, or acrylic designs — the services clients book based on visual style are the ones with no portfolio representation. Three testimonials without star ratings don't carry the weight of a visible Google review count, and there's no email capture to re-engage the clients you've already impressed. I build nail bar sites that showcase the signature work first and build a rebooking list automatically — done in under 2 weeks.",

  "Painted Nails and Spa":
    "Your homepage shows 2 generic photos and zero reviews — for a San Ramon nail spa leading with 'Your Health, Our Priority,' there's no evidence on the site of which non-toxic products you use, no before/after nail work, and nothing that makes a health-conscious client choose you over a cheaper option nearby. That positioning is your strongest differentiator and the site doesn't use it. I build nail spa sites that turn a health-first angle into a conversion engine with proof, photos, and transparent pricing — done in under 2 weeks.",

  "Beauty Salon & Day Spa":
    "Your booking button sends clients to an unbranded macmarketing.us URL — when someone clicks 'Book Now' and lands on a page with no salon name or logo, a significant portion abandon the booking out of distrust. With 4 testimonials but no star ratings and no service pricing, the site doesn't close the high-ticket facial and color clients a full-service San Leandro salon should be converting. I build full-service salon sites with branded booking flows, visible ratings, and category-specific galleries — done in under 2 weeks.",

  "J Salon and Spa":
    "Your site has no online booking system — the only way to make an appointment is to call during business hours, which means you're losing every potential client who searches for a nail salon in Dublin after 6pm or on the weekend. With seven service categories including microblading and hair but no pricing and no portfolio on the homepage, clients can't self-qualify or get excited before they call. I build full-service spa sites with online booking, a work gallery, and pricing anchors that close appointments around the clock — done in under 2 weeks.",
}

module.exports = { audits, scripts }
