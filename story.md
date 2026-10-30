# Project Overview & Technical Architecture
**Project:** Kijani Trails Travel Agency  
**Brand Slogan:** *"Authentic Kenyan Expeditions, Curated by Locals"*

---

## 1. The Brand Story: Kijani Trails Kenya

* **Agency Name:** Kijani Trails (*"Authentic Kenyan Expeditions, Curated by Locals"*)
* **The Backstory:** Founded in Nairobi by local wildlife conservationists and coastal guides, Kijani Trails bridges the gap between luxury safaris and authentic cultural immersion. Whether tracking red elephants in Tsavo, witnessing the Great Migration in the Maasai Mara, or unwinding on the white sands of Diani Beach, every booking directly supports local community conservancies.
* **The User Journey *(Why this matters for JS later)*:** A traveler lands on the hero banner, filters the Featured Tours by their vibe (Safari, Beach, or Mountain), checks *Why Choose Us* and *Client Testimonials* for trust, and clicks "Plan Your Tour" or uses the Contact Form to calculate and book their Kenyan adventure.

---

## 2. Website Architecture (Sections Breakdown)


1. **Header & Navigation (`<header>`):** Sticky top bar with brand logo, smooth-scroll section links, a saved trips counter badge, and the main "Plan Your Tour" CTA button.
2. **Hero Banner (`.hero`):** Full-width visual introduction to Kenya with a bold headline and a jump-link to the tours.
3. **Featured Tours (`.featured-tours`):** Showcases 5 distinct Kenyan destinations (Amboseli, Maasai Mara, Diani Beach, Mt. Kenya, and Lamu Island) instead of repeating "Elephant Safari" 5 times. We also added category/price tags to each card so we can filter and calculate prices with JS later.
4. **Why Choose Us (`.why-choose-us`):** Highlights the agency's 3 core pillars (Maasai & KWS Certified Guides, Tailor-Made Itineraries, 24/7 Concierge & Eco-Conservation).
5. **Client Testimonials (`.testimonials`):** Real-sounding reviews from past travelers who visited specific Kenyan destinations.
6. **Contact & Inquiry Form (`.contact`):** An interactive-ready inquiry form where travelers can pick their destination and send a message.
7. **Footer (`<footer>`):** Clean closing bar with copyright and quick contact details (replacing the placeholder `<p>Lorem ipsum...</p>`).

---

## 3. Master Documentation: Classes & IDs

In frontend development:
* **Classes (`.`)** are used for styling in CSS (reusable across multiple elements).
* **IDs (`#`)** are unique labels we add specifically so JavaScript can target them easily later (`document.getElementById()`).

| Section | Classes (For CSS Styling) | IDs (Added for Future JS Hooks) | Purpose / Future JS Role |
| :--- | :--- | :--- | :--- |
| **Header / Nav** | `.btn`, `.nav-links` | `#main-header`, `#nav-menu`, `#plan-tour-btn`, `#wishlist-count` | Sticky scroll effects, mobile menu toggle, opening the booking modal, tracking saved trips. |
| **Hero** | `.hero`, `.hero-img`, `.hero-content`, `.hero-cta` | `#hero-section`, `#explore-btn` | Smooth scrolling down to the tours section. |
| **Featured Tours** | `.featured-tours`, `.featured-tours-header`, `.f-tour-container`, `.f-tour`, `.f-tour-img`, `.f-tour-content`, `.tour-meta`, `.tour-price`, `.tour-category`, `.save-tour-btn` | `#tours-section`, `#tour-container` | Dynamically rendering cards, filtering by category (Safari/Beach/Mountain), sorting by price, saving to wishlist. |
| **Why Choose Us** | `.why-choose-us`, `.why-choose-us-header`, `.why-choose-us-container`, `.why-choose-us-item` | `#about-section` | Scroll animations and interactive counters later. |
| **Testimonials** | `.testimonials`, `.testimonials-header`, `.testimonial-container`, `.testimonial`, `.testimonial-img` | `#testimonials-section`, `#testimonial-list` | Cycling through reviews or adding a review slider later. |
| **Contact** | `.contact`, `.contact-header`, `.contact-container`, `.form-group` | `#contact-section`, `#booking-form`, `#user-name`, `#user-email`, `#tour-select`, `#user-message`, `#form-feedback` | Form validation, reading user inputs, preventing empty submissions, displaying a confirmation message. |
| **Footer** | `.site-footer` | `#footer-year` | Dynamically updating the copyright year. |