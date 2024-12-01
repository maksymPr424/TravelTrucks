TravelTrucks Frontend Application

TravelTrucks is a web application developed for a camper rental company. It enables users to browse available campers, filter them based on various criteria, view detailed information, and book their desired camper.

Key Features
Home Page:
A banner with a call-to-action.
A button to navigate to the catalog page.

Catalog Page:
View a list of available campers.
Filter campers by:
Location.
Camper type.
Additional options (AC, kitchen, etc.).
Add campers to a "Favorites" list.
A "Load More" button to fetch additional listings.

Camper Details Page:
Detailed description with specifications (transmission, engine, AC, etc.).
Photo gallery.
User reviews (five-star rating system).
A booking form with a confirmation notification upon successful submission.

Favorites:
Save a list of favorite campers, preserved even after page refresh.
Technologies Used
React + Vite – for fast and efficient rendering of components.
Redux – for managing global state.
React Router – for implementing routing.
Axios – for API interactions.
CSS (Styled-Components) – for styling the user interface.
API
The app interacts with the backend using the Mock API. Key endpoints include:

GET /campers – fetch a list of campers with server-side filtering.
GET /campers/:id – fetch details of a specific camper.

Installation and Setup
Installation Guide
Clone the repository:
git clone <repository URL>

Navigate to the project folder:
cd traveltrucks-frontend

Install dependencies:
npm install
Start the project:
npm run dev

Open http://localhost:5173 in your browser.
Deployment
The project is deployed on Vercel or Netlify. Visit the live version at Live Demo Link.

Design Highlights
Styling follows the provided design mockup.
Desktop-first design (responsiveness is optional).

Additional Features
Data fetching from the backend with a loader for better UX.
Clear routing:
/ – Home Page.
/catalog – Camper Catalog.
/catalog/:id – Detailed Camper Information.
Notifications for successful bookings.
Form validation and reset upon successful submission.

Author
Name: Maksym Prykhodko
Contact:
LinkedIn: www.linkedin.com/in/maksym-prykhodko-57730b309
GitHub: https://github.com/maksymPr424
Email: m.prykhodko424@gmail.com
