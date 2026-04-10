const SUPABASE_URL = 'https://lgpzuwfixiydaegtbnlb.supabase.co'
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxncHp1d2ZpeGl5ZGFlZ3RibmxiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDkwODg2OCwiZXhwIjoyMDkwNDg0ODY4fQ.SN2KenKR1B4v1v93SR4Ioy5cXle49oF4hBROlgiI9s8'

const headers = {
  'apikey': SERVICE_KEY,
  'Authorization': `Bearer ${SERVICE_KEY}`,
  'Content-Type': 'application/json',
}

const audits = {
  "BerryClean": [
    { category: "Work Gallery", issue: "No before/after cleaning photos anywhere on the site — only a cartoon mascot illustration and generic stock-style icons.", impact: "Visitors can't see the actual quality of their work, reducing trust for higher-ticket recurring bookings." },
    { category: "Lead Capture", issue: "No quote form embedded on the homepage — all 15+ CTAs redirect to a separate '/request-a-quote' page, creating extra friction.", impact: "Each redirect is a drop-off point; high-intent visitors abandon before submitting." },
    { category: "Offer", issue: "No pricing displayed on the homepage. The $35 OFF / free $75 add-on promo banner exists but no base rate is given for context.", impact: "Price-shopping visitors leave without contacting, assuming costs are higher than they are." },
    { category: "Differentiation", issue: "Strong differentiators (HEPA vacuums, 401K for staff, free English classes, plant-derived products) are buried mid-page behind generic copy and repeated booking buttons.", impact: "Visitors skim past the real reasons to choose BerryClean and make the decision on price alone." },
  ],
  "Bay City Cleaners": [
    { category: "Social Proof", issue: "Four testimonials are named (Lisa Martinez, Andrew Patel, Rachel Kim, David Nguyen) but have no star rating display, no date, and no link to Google or Yelp to verify them.", impact: "Unverified reviews are easily dismissed — prospects assume they're fabricated, especially for a commercial cleaning pitch." },
    { category: "Work Gallery", issue: "No before/after photos of cleaned spaces. Site uses no visual proof of work quality — just text and contact info.", impact: "Commercial facility managers need to see the result before they hand over access to their building." },
    { category: "Lead Capture", issue: "'Get a Free Quote!' CTA is present but there is no embedded form — it appears to link to a contact page, adding a step.", impact: "Every additional click reduces form completion rates by 20-30%." },
    { category: "Differentiation", issue: "Eco-friendly products are mentioned but not explained — no brand names, certifications, or safety claims that substantiate the claim for commercial clients.", impact: "Competitors who show Green Seal or EPA certification win contracts from ESG-minded facility managers." },
  ],
  "eMaids": [
    { category: "Social Proof", issue: "Testimonials are linked to a separate page but zero reviews, ratings, or quotes are displayed on the homepage — not even a star count.", impact: "A cleaning service with no visible proof of customer satisfaction on its homepage loses trust before the visitor ever scrolls." },
    { category: "Lead Capture", issue: "No contact form on the homepage. The main CTA ('REQUEST A QUOTE – Virtual Walk Through Available') is not linked to an embedded form.", impact: "Visitors who don't want to call must navigate away, and many don't return." },
    { category: "Work Gallery", issue: "No before/after photos. Service sections use generic category labels with no visual evidence of cleaning results.", impact: "Home cleaners compete heavily on trust — without photos, pricing objections become harder to overcome." },
    { category: "Differentiation", issue: "'Family-owned and operated' is the only real differentiator stated. No eco-friendly claims, no bonding/insurance callout, no satisfaction guarantee.", impact: "Without a reason to choose eMaids over a cheaper option on Yelp, visitors default to price comparison." },
  ],
  "Sister's House Cleaning LLC": [
    { category: "CTA", issue: "Primary above-the-fold CTA is 'GET FREE CONSULTATION' — vague and low-commitment language that doesn't reflect the actual offer (which is a free estimate).", impact: "Visitors looking to book a cleaning skip past a CTA that sounds like a sales call, not a service quote." },
    { category: "Social Proof", issue: "5 testimonials are displayed — Angie Singh, Maria Gonzalez, Linda Corbetta, and 2 unnamed — but no star ratings are visually shown, and no link to Google or Yelp reviews.", impact: "Without a star rating and external review link, competitors with a 4.8-star Google badge will win the comparison." },
    { category: "Work Gallery", issue: "One generic stock-style 'House Cleaning Service' photo on the entire site. No before/after images of actual jobs.", impact: "Service area clients want to see cleaned spaces — without that, the discount offers alone don't close the sale." },
    { category: "Offer", issue: "Three discount tiers (10% new, 13% senior/veteran, 15% returning) are advertised but no base pricing is given, so the discounts are meaningless without a reference point.", impact: "Prospects can't calculate their cost, so they call a competitor whose pricing page answers the question immediately." },
  ],
  "WeClean LLC": [
    { category: "Social Proof", issue: "Zero testimonials, reviews, or star ratings on the site. No links to Google, Yelp, or any review platform.", impact: "A cleaning service with no social proof is invisible to any customer who checks reviews before booking — which is most of them." },
    { category: "Lead Capture", issue: "No contact form or quote request form on the homepage. The only lead path is a phone number and 'BOOK NOW' button with unclear destination.", impact: "Without a form, leads who browse after hours are lost — they close the tab before calling." },
    { category: "Offer", issue: "Services described only as 'high-end, stress-free cleaning' — no list of specific services (deep clean, move-out, recurring, Airbnb), no pricing, no packages.", impact: "Visitors can't self-qualify. They leave without knowing if WeClean does what they need." },
    { category: "Differentiation", issue: "No differentiators beyond geographic coverage. No guarantee, no bonding/insurance claim, no eco-friendly positioning.", impact: "Indistinguishable from the 50+ other services in those markets — competes only on price." },
  ],
  "Lainie's Learning Lane": [
    { category: "Social Proof", issue: "Only 1 named testimonial (Huda Baak, parent) on the homepage. A 'Best of 2025 Google Reviews' badge is referenced but not linked to the actual Google listing.", impact: "Parents researching learning support for their kids read multiple reviews before trusting a provider — one quote from one parent is not enough." },
    { category: "Lead Capture", issue: "No embedded contact or enrollment form on the homepage. The 'Schedule a FREE MEET & GREET' CTA routes to a separate contact page.", impact: "Parents ready to enroll hit a navigation dead-end instead of an instant form, and drop off." },
    { category: "Offer", issue: "No pricing listed for academic coaching, educational therapy, or summer programs — not even a range.", impact: "Parents comparing options against other Concord tutors move on to the site that tells them what to expect." },
    { category: "Differentiation", issue: "The relationship between 'Lainie's Learning Lane' and 'CORE Academy' is unexplained on the homepage — two different brands with shared contact info and no explanation.", impact: "Confused visitors don't trust the brand. If parents can't tell what they're enrolling in, they don't enroll." },
  ],
  "Simon Academics LLC": [
    { category: "Social Proof", issue: "Zero testimonials or parent reviews on the homepage. A Yelp badge in the footer exists but shows no star count or review number.", impact: "Families researching tutors in Fremont see nothing that confirms other parents have had good experiences — they bounce to a competitor with visible 5-star reviews." },
    { category: "Offer", issue: "Pricing is on a separate 'Class Schedules and Pricing' page, not on the homepage. No rate ranges, no package overview visible above the fold.", impact: "Parents qualifying options by cost never get the answer they're looking for and call the next tutor on the list." },
    { category: "Differentiation", issue: "'24+ years experience' and 'thousands of students taught' are asserted without any supporting data — no outcome metrics, no grade improvement stats, no score increase averages.", impact: "Without proof, these claims read like marketing copy, not credibility." },
    { category: "Lead Capture", issue: "Enrollment goes through an external Google Form link rather than an embedded form — 8-10 CTAs on the page create decision fatigue without a clear primary action.", impact: "Too many options = no clear path. Visitors land, get overwhelmed, and leave without submitting anything." },
  ],
  "PEL Learning Centers": [
    { category: "Social Proof", issue: "Only 3 named testimonials (Aryam Y., Jose A., Mrs. Lin). Award badges are displayed but don't link to verification sources. No Google or Yelp review counts shown.", impact: "A learning center with 12 California locations should have 50+ reviews visible — 3 quotes don't reflect the scale of the operation." },
    { category: "CTA", issue: "'Schedule Your Free Assessment' CTA appears 8+ times in identical styling — no visual hierarchy or single dominant CTA that draws the eye.", impact: "Repetition without hierarchy creates noise. Visitors don't know where to click first and often don't click at all." },
    { category: "Work Gallery", issue: "No student outcome data — no grade improvement percentages, no before/after test scores, no case studies. One testimonial vaguely mentions 'went from below grade level to grade level.'", impact: "Parents making a $160+/month commitment want proof the method works — without results data, they pick the cheaper tutor." },
    { category: "Lead Capture", issue: "No contact form embedded on the homepage. Phone and email are present but getting to a form requires navigating to the locations page.", impact: "After-hours visitors who can't call have no way to submit their information and get lost in the funnel." },
  ],
  "e&b photography": [
    { category: "Social Proof", issue: "Only 1 named testimonial (Zoe) on the homepage. The site claims '5 Star Reviews' with a Google link, but no star count or review number is displayed on-site.", impact: "Engaged couples compare photographers on review volume — 1 quote and a vague Google link don't compete against photographers showing '47 five-star reviews.'" },
    { category: "Lead Capture", issue: "The contact form is hidden behind a lightbox — visitors must trigger a popup to find the inquiry form. No booking calendar or availability check is visible.", impact: "Couples who want to check a date availability in 30 seconds can't do it here. They go to the next photographer who has an embedded inquiry form." },
    { category: "CTA", issue: "Portfolio links use 'Click Here' language. Primary CTAs ('Get in touch,' 'Let's chat,' 'Book US') are generic and scattered with no hierarchy.", impact: "Vague CTAs lower click-through rates. 'Click Here' is the lowest-converting link text in digital marketing." },
    { category: "Offer", issue: "Starting price is listed ('Packages begin at $3200') but no breakdown of what's included at each tier — hours, deliverables, second shooter — is visible on the homepage.", impact: "Price-aware couples leave to find a photographer whose packages page answers all their questions before the first email." },
  ],
  "Gabriel Harber Photography": [
    { category: "Social Proof", issue: "Zero reviews, testimonials, or star ratings on the site. No links to Google, Yelp, or WeddingWire. A 20+ year veteran has no visible proof of client satisfaction.", impact: "Couples searching 'Oakland wedding photographer' see this site with no reviews alongside competitors with 80+ Google reviews — it's not a contest." },
    { category: "Lead Capture", issue: "No phone number anywhere on the site. Contact is email-only with no embedded inquiry form.", impact: "Couples who want a fast answer send an email and wait, then book the photographer who responds fastest — often via an instant inquiry form." },
    { category: "Work Gallery", issue: "Only one wedding image visible in the page schema. No portfolio gallery, no organized collections by venue or style.", impact: "Photography is a visual sale. A site with one sample photo tells couples nothing about what they're paying for." },
    { category: "Offer", issue: "No pricing information, no package tiers, no starting rate. Services described as 'documentary-style' with no clarity on what is included or how to book.", impact: "Couples with a budget can't self-qualify and won't reach out blind — they move to photographers who are upfront about investment." },
  ],
  "Dubnoff Wedding Photography": [
    { category: "CTA", issue: "High-intent CTAs ('Custom Quote,' 'Book Us') are buried deep in the page below extensive text copy. The early CTA is a generic 'Click Contact Us' with no context.", impact: "Couples scanning for the booking link give up before they reach it. The best offer on the page is invisible above the fold." },
    { category: "Offer", issue: "'Affordable pricing' is repeated 12+ times on the page but no actual package prices are listed — only a deposit range ($350-$600) and payment plan mention.", impact: "Repeating 'affordable' without showing a number is a red flag to savvy buyers. Competitors who list starting rates get more qualified inquiries." },
    { category: "Social Proof", issue: "Claims '5 stars throughout all Northern California Yelp reviews' and '2,000+ marriages covered' but displays zero named client testimonials with quotes.", impact: "Statistics without human stories feel like self-promotion. Couples want to read what other brides actually said, not just hear the photographer's own claims." },
    { category: "Lead Capture", issue: "No phone number visible in the main content area. Quote request form is referenced but not embedded — requires navigating away from the page.", impact: "On mobile, where most couples first browse photographers, a buried contact path means most won't complete the inquiry." },
  ],
  "Connie Leal Photography": [
    { category: "CTA", issue: "Site title contains a typo ('Weeding Photography' instead of 'Wedding Photography') visible in the page title and Google search result — a first impression killer.", impact: "A misspelled headline on the site title page undermines the professionalism of a service that costs thousands of dollars." },
    { category: "Social Proof", issue: "Reviews are present on The Knot and WeddingWire but those ratings are not embedded or linked from the homepage — the site shows no star rating natively.", impact: "Couples who land on the homepage see no social proof and don't know to look for the 3rd-party reviews that exist off-site." },
    { category: "Lead Capture", issue: "The site has access issues that may block some visitors from reaching the homepage at all.", impact: "Every visitor who hits an error page instead of the homepage is a lost booking inquiry." },
    { category: "Offer", issue: "Packages include engagement sessions and a second photographer, but the FAQ page (separate from homepage) is where pricing lives — most visitors never get there.", impact: "The first question every couple asks is 'what does it cost?' — if that answer requires three clicks, many won't stay long enough to find it." },
  ],
  "Gene Morgan Insurance Agency": [
    { category: "Social Proof", issue: "A 'testimonials' section exists behind a 'FIND OUT MORE' button but zero reviews, quotes, or star ratings are displayed on the homepage itself.", impact: "Insurance buyers research heavily before switching providers — hidden reviews don't build the trust needed to generate a quote request." },
    { category: "Lead Capture", issue: "Four product-specific quote buttons (auto, home, life, health) exist but none link to an embedded form — all redirect to separate quote pages.", impact: "Each redirect reduces completion rates. An embedded quote form on the homepage would capture significantly more leads." },
    { category: "Differentiation", issue: "'Family owned since 1953' and 'local' are the only differentiators. No carrier logos, no awards, no claims satisfaction stats to back up the longevity claim.", impact: "Every independent agency says 'local and family owned.' Without proof of what that means in practice, it's invisible to prospects." },
    { category: "Offer", issue: "Products listed (auto, home, life, health, commercial, earthquake, umbrella) with no pricing guidance, no example savings, and no rate comparison context.", impact: "Quote requests dry up when visitors have no anchor for what the insurance will cost — they go to comparison sites instead." },
  ],
  "Hernandez Steele Insurance Agency": [
    { category: "Social Proof", issue: "Zero customer testimonials, star ratings, or review links anywhere on the site. Social media links include Flickr, Tumblr, and Google+ — platforms that signal the site hasn't been updated in years.", impact: "An insurance agency with no visible social proof and outdated social links loses trust before a visitor even reads the services." },
    { category: "CTA", issue: "Only 3-4 CTAs on the entire site. Primary is the generic 'GET QUOTES' with no product specificity — no separate buttons for auto, home, or commercial.", impact: "A vague single CTA doesn't tell visitors what kind of insurance they're about to quote, creating confusion that kills conversions." },
    { category: "Offer", issue: "Products listed as 'auto, home, life and commercial' in one broad sentence — no individual service pages, no explanation of coverage types or carriers represented.", impact: "Prospects looking for a specific product (e.g., commercial liability) can't confirm this agency covers their need without calling first." },
    { category: "Differentiation", issue: "'100% Locally Owned' and 'Personalized Customer Service' are the only value propositions — both are claimed by every independent agent in Antioch.", impact: "Without a unique hook (specialization, fastest quotes, multi-carrier savings guarantee), the agency is invisible in a competitive local market." },
  ],
  "East County Insurance Agency": [
    { category: "Social Proof", issue: "Yelp profile exists but no review count, star rating, or testimonials are surfaced on the website itself.", impact: "Prospects who land on the site and don't see proof of client satisfaction navigate directly to Yelp — and may book a competitor they find there." },
    { category: "CTA", issue: "Quote request and contact pathways are not prominently featured — phone numbers are the primary lead path, with no online quote form visible on the homepage.", impact: "After-hours visitors who want to start a quote online have no mechanism to do so and leave without converting." },
    { category: "Differentiation", issue: "Agency has been operating since 1995 and partners with carriers including Progressive, Travelers, and Mercury — none of these credentials appear prominently on the homepage.", impact: "Carrier logos and tenure are trust signals that move insurance buyers from browsing to quoting — without them, the site looks anonymous." },
    { category: "Offer", issue: "Services listed as auto, home, condo, renters, business auto, and business insurance — but no detail on pricing tiers, multi-policy discounts, or what sets their rates apart.", impact: "Insurance buyers are comparison shopping. Without a hook (e.g., 'We compare 15 carriers for your best rate'), they go to a site that makes the value clear." },
  ],
  "Jack Stone Insurance Agency": [
    { category: "Social Proof", issue: "A 'What Our Clients Saying' section exists on the homepage but contains zero actual testimonials, quotes, or star ratings — the section is empty.", impact: "An empty testimonial section is worse than no section at all — it signals the site was never finished, destroying credibility at the moment it matters most." },
    { category: "Differentiation", issue: "Founded 1972 and family-owned, but the homepage tagline 'The Right Coverage. The Right Price. The Right Value.' is used verbatim by dozens of insurance agencies nationwide.", impact: "Generic positioning makes the agency forgettable in a market where most buyers compare 3+ agents before requesting a quote." },
    { category: "Service Area", issue: "Service area identified only as 'Brentwood & Antioch, CA' — no radius, no list of covered zip codes, and no mention of surrounding East Bay communities.", impact: "Visitors from Oakley, Discovery Bay, or Byron don't know if they qualify and don't bother calling to ask." },
    { category: "Lead Capture", issue: "Quote request form is behind a modal popup — visitors must click 'Get a Quote' and wait for a modal to load rather than filling out a visible form.", impact: "Modal-gated forms have lower completion rates than inline forms, particularly on mobile where modals are harder to interact with." },
  ],
  "Centurion Insurance Agency": [
    { category: "Social Proof", issue: "Zero customer testimonials, star ratings, or review platform links on the site. No Google, Yelp, or third-party review badges despite being established since 1947.", impact: "A 70+ year agency with no visible social proof looks like a brand-new business to online visitors — trust is built on reviews, not age." },
    { category: "Lead Capture", issue: "Quote request forms exist on separate sub-pages but no embedded form appears on the homepage — all CTAs require a page navigation.", impact: "Homepage visitors who are comparison-shopping won't click through to a separate quote page — they'll start the quote on a competitor's site that embeds the form upfront." },
    { category: "Differentiation", issue: "'We work for you' and 'established since 1947' are stated but no carrier list, claims satisfaction rate, or unique specialty is highlighted.", impact: "Independent agencies that don't show their carrier roster or a concrete advantage don't stand out from the 20 other independent agents in Pleasanton." },
    { category: "Offer", issue: "Products categorized cleanly (personal vs. commercial) but no pricing guidance, no savings estimate, and no multi-policy discount callout.", impact: "The site answers 'what do you sell?' but not 'why should I buy here?' — that gap costs quote requests daily." },
  ],
  "Diablo Valley Insurance Agency": [
    { category: "Social Proof", issue: "Zero customer testimonials or star ratings on the homepage despite having Facebook, LinkedIn, Instagram, and Yelp all linked in the footer.", impact: "An insurance agency operating since 1956 with no visible client reviews suggests either the site is outdated or clients aren't satisfied enough to be showcased." },
    { category: "Differentiation", issue: "'50+ years of experience' and 'Choice, Experience, Service' are the three stated pillars — identical positioning to virtually every established independent agency in the East Bay.", impact: "When every competitor says the same thing, prospects choose based on who picked up the phone or who had the best Google reviews — not website copy." },
    { category: "Lead Capture", issue: "Contact email is obfuscated with [at] and [dot] formatting to prevent spam, making it copy-paste unfriendly and difficult for mobile users.", impact: "Any friction in the contact path reduces lead submissions — mobile users who can't tap an email link leave." },
    { category: "Offer", issue: "Auto, homeowner, business, and nonprofit insurance are each listed with dedicated pages, but no carrier names, pricing ranges, or example savings are shown.", impact: "Sophisticated insurance buyers want to know which carriers you represent before requesting a quote — without that, they assume limited options." },
  ],
  "Fresh Home Loan Inc": [
    { category: "Social Proof", issue: "Claims 'Best In The SF East Bay' and '5-Star Reviews' but displays no actual testimonials, no named clients, no review count, and no Yelp or Zillow links.", impact: "Home buyers considering a $500K+ loan need more than a self-declared award — the absence of real reviews is a major trust gap at the highest-stakes purchase of their lives." },
    { category: "Lead Capture", issue: "'Apply Now' appears twice but no application form is embedded on the homepage — and a newsletter signup is the most prominent lead capture shown.", impact: "A newsletter signup is not a mortgage lead. Replacing or supplementing it with a 3-field pre-qualification form would capture buyers in-market today." },
    { category: "Offer", issue: "Four loan types are listed (Purchase, Refinance, HELOC, Reverse Mortgage) but no current rates, no APR ranges, and no loan amount guidance are visible.", impact: "Rate-shopping buyers leave immediately when a lender's site shows no numbers — they go to a competitor who shows a rate widget." },
    { category: "Differentiation", issue: "'Independent Mortgage Brokers That Work for the People' is the tagline but unexplained — no comparison to bank lenders, no explanation of what independence means for the buyer's rate.", impact: "The tagline creates curiosity but the site never closes the loop on why that matters to the buyer." },
  ],
  "EstaR Mortgage": [
    { category: "CTA", issue: "Only 2 primary CTAs ('Get Started' appears twice) — both are vague with no indication of whether the next step is a rate quote, pre-approval, or a consultation call.", impact: "Buyers mid-funnel who want a specific action (pre-approval, rate check) don't know if 'Get Started' leads to what they need." },
    { category: "Offer", issue: "Loan types listed (FHA, VA, Conventional, Reverse Mortgage) but no current rates, no loan amount examples, and no APR disclosures on the homepage.", impact: "Mortgage comparison shoppers leave for Bankrate or a competitor who shows a live rate widget — the first number they see anchors the decision." },
    { category: "Social Proof", issue: "208 Trustindex-verified reviews with named clients are displayed — strong — but no direct links to Google or Yelp where the reviews also live.", impact: "Savvy buyers verify reviews on Google before trusting them. No Google link means the '208 reviews' claim goes unconfirmed." },
    { category: "Differentiation", issue: "'Transparent Rates & Flexible Options' and 'No Hidden Fees. Just Honest Advice.' are stated but no fee schedule, APR example, or lender comparison is provided to prove transparency.", impact: "Every mortgage broker claims no hidden fees. Without a concrete fee disclosure or rate sheet, the claim reads as marketing noise." },
  ],
  "3C Mortgage Group": [
    { category: "Social Proof", issue: "Only 1 testimonial on the site — 'Greggory H.' from Antioch praising agent Sergio — with no star rating, no loan outcome mentioned, and no link to Google or Yelp.", impact: "Buyers choosing a mortgage broker to handle the largest transaction of their lives expect to see dozens of reviews, not one first-name quote." },
    { category: "Lead Capture", issue: "Contact form only asks for name, email, phone, and comments — no loan type, purchase price, credit range, or timeline fields that would qualify the lead.", impact: "Unqualified leads waste the broker's time and delay response to serious buyers. A better form filters and speeds up conversion." },
    { category: "CTA", issue: "'Apply Now' appears 3 times and 'Contact Us' twice — 5 CTAs across the page with no visual hierarchy or primary action distinguished from secondary actions.", impact: "Visitors without a clear primary CTA bounce rather than convert — too many equal-weight options signals 'we didn't design this for you.'" },
    { category: "Differentiation", issue: "'Local market knowledge in Antioch, Brentwood, and Concord' is the core differentiator but no examples, local data, or market insights are provided to support the claim.", impact: "Every mortgage broker operating in a zip code claims to know it. Without proof (recent closed loans, local rate data), the claim means nothing." },
  ],
  "Providential Mortgage": [
    { category: "Social Proof", issue: "17 named testimonials with detailed narratives referencing team members by name — strong content — but no star ratings displayed and no direct links to Yelp or Google review pages.", impact: "Buyers who want to independently verify the reviews can't click through to a third-party source, reducing trust in an otherwise strong social proof section." },
    { category: "Offer", issue: "Services described as 'tailored mortgage solutions' with no loan product list, no rate ranges, and no APR disclosures visible anywhere on the homepage.", impact: "Rate-sensitive buyers bounce within seconds when a mortgage site shows no numbers. They want a starting point before picking up the phone." },
    { category: "Lead Capture", issue: "No contact form embedded on the homepage — 'Get Started Now!' and 'Apply Now' both route to external pages with no form visible in the homepage itself.", impact: "Late-night browsers who are ready to start a pre-approval have no form to fill out and no path forward until business hours." },
    { category: "Differentiation", issue: "Multiple testimonials cite 2-week closings — a genuinely strong differentiator — but this is never stated as a headline or featured value proposition on the homepage.", impact: "The best selling point is buried in testimonial text rather than leading the page. Most visitors never read far enough to see it." },
  ],
  "Cal Coast Financial": [
    { category: "CTA", issue: "Only 2 navigation links visible ('Real Estate' and 'Mortgage') — no 'Get Pre-Approved,' 'Check Your Rate,' or 'Apply Now' buttons anywhere on the homepage.", impact: "A mortgage broker website with no conversion CTA captures zero online leads. Every visitor who doesn't call is permanently lost." },
    { category: "Social Proof", issue: "Zero reviews, testimonials, star ratings, or links to Google, Yelp, or Zillow anywhere on the site.", impact: "A financial service with no social proof is a non-starter for buyers doing due diligence on who will handle their home loan." },
    { category: "Lead Capture", issue: "No contact form, no phone number, no email address, and no application link visible on the homepage.", impact: "This site cannot generate a single lead in its current state — it functions as a digital dead end." },
    { category: "Offer", issue: "No loan products named, no service description, no rates, and no explanation of what Cal Coast Financial actually does.", impact: "Visitors have no idea what they're looking at — the site provides less information than a business card." },
  ],
  "Altamont Electric & Lighting": [
    { category: "Social Proof", issue: "Zero customer testimonials, star ratings, or links to Google or Yelp anywhere on the site. An 18-year owner-operated business has no visible proof of client satisfaction.", impact: "Homeowners choosing an electrician almost always check reviews first. Without them, Altamont is invisible in every organic review-driven search." },
    { category: "Work Gallery", issue: "No project photos, no before/after images, and no portfolio of completed electrical or lighting work on the site.", impact: "Electricians who show their panel upgrades, EV charger installs, and lighting restorations win jobs over those who don't — photos are the estimate before the estimate." },
    { category: "Lead Capture", issue: "Two identical quote request forms appear on the page — and the phone number in the header (800-123-4567) appears to be a placeholder, not the real number.", impact: "A generic placeholder phone number on a live website tells prospects the site was never properly set up — and they won't trust the business with their wiring." },
    { category: "Offer", issue: "Residential and commercial services are clearly listed (panel upgrades, EV chargers, lighting) but no pricing, no free estimate offer, and no response time guarantee.", impact: "Competing electricians who lead with 'Free Estimate — Same Week Response' win the inquiry before Altamont's strengths are ever read." },
  ],
  "Tucknott Electric Company": [
    { category: "Lead Capture", issue: "No contact form, no quote request, and no estimate button anywhere on the site. Phone is buried in the footer with no visual emphasis.", impact: "An electrician site that can't capture a lead online loses every homeowner who finds them after business hours or who prefers not to call cold." },
    { category: "Social Proof", issue: "Zero reviews, testimonials, star ratings, or links to Google or Yelp. No evidence of any completed work or satisfied customers.", impact: "Homeowners comparing electricians in Livermore will immediately move to a competitor with a visible 4.8-star Google rating." },
    { category: "Work Gallery", issue: "No project photos, no gallery, and no visual proof of any electrical work. The site contains only a company logo.", impact: "The site provides no reason for a prospect to believe Tucknott does quality work — it's a digital placeholder, not a sales tool." },
    { category: "CTA", issue: "No service inquiry CTA, no 'Call Now' button, no 'Get a Free Estimate' prompt anywhere on the site.", impact: "A site without a CTA is a brochure no one reads. Visitors have no guided path to becoming a customer." },
  ],
  "Springtown Electric": [
    { category: "Social Proof", issue: "5 named testimonials with 5-star ratings but no links to Google or Yelp where reviews can be independently verified.", impact: "On-site-only testimonials are assumed to be curated or fabricated by skeptical buyers — a Google Maps link showing the same 5 stars makes them credible." },
    { category: "Lead Capture", issue: "No contact form on the homepage — only a phone number and email (springtownelectric@gmail.com). A Gmail address for a licensed contractor signals a hobbyist, not a professional.", impact: "A Gmail business email undermines credibility and costs jobs to competitors with branded email addresses and online booking forms." },
    { category: "Work Gallery", issue: "A portfolio page exists but no photos appear on the homepage or hero section — it's buried behind navigation.", impact: "Homeowners scanning electricians want to see job photos immediately. Hidden galleries don't get clicked." },
    { category: "Offer", issue: "Services are listed (panel installs, EV charging, fixtures, doorbells, fans) but no pricing, no free estimate callout, and no response time commitment.", impact: "Homeowners with urgent electrical issues call the first electrician who offers a clear, fast next step — not one who makes them guess." },
  ],
  "VC Electric": [
    { category: "CTA", issue: "No visible CTA buttons on the homepage. No 'Get a Free Estimate,' 'Call Now,' or 'Book a Job' prompts detected in the site content.", impact: "A trade service website without a CTA has zero online conversion capability — it's not a website, it's a business card with no callback number." },
    { category: "Social Proof", issue: "Zero testimonials, star ratings, or links to Google or Yelp. No evidence of completed projects or satisfied customers.", impact: "Every homeowner hiring an electrician checks reviews. VC Electric is invisible to any buyer using Google Maps or Yelp to find a Dublin-area electrician." },
    { category: "Lead Capture", issue: "No contact form, no quote request tool, and no estimate submission path. Only a phone number exists in schema metadata — not guaranteed to be visible on-page.", impact: "Without a form, all leads must call — meaning anyone browsing after hours, on a lunch break, or who prefers not to call is permanently lost." },
    { category: "Work Gallery", issue: "No project photos, no before/after images, no portfolio section. The site has no visual proof of any electrical work completed.", impact: "Electricians who show panel upgrades, EV charger installs, and finished lighting work win jobs from photos — VC Electric gives prospects nothing to trust." },
  ],
}

const res = await fetch(`${SUPABASE_URL}/rest/v1/outreach_leads?select=id,business_name`, { headers })
const leads = await res.json()

let success = 0, notFound = 0

for (const [name, findings] of Object.entries(audits)) {
  const lead = leads.find(l => l.business_name === name)
  if (!lead) { console.log(`✗ Not found: ${name}`); notFound++; continue }

  const r = await fetch(`${SUPABASE_URL}/rest/v1/outreach_leads?id=eq.${lead.id}`, {
    method: 'PATCH',
    headers: { ...headers, 'Prefer': 'return=minimal' },
    body: JSON.stringify({ audit_findings: findings }),
  })

  if (r.ok) { console.log(`✓ ${name}`); success++ }
  else { console.log(`✗ ${name} — ${await r.text()}`) }
}

console.log(`\nDone: ${success} updated, ${notFound} not found`)
