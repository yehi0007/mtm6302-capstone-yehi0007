# Capstone Project - Part 4

# Astronomy Picture of the Day (APOD) Web Application

## Project Overview

This web application allows users to view NASA's Astronomy Picture of the Day (APOD) for a selected date, including standard and HD images. Users can also save their favorite images to view later.

The application is built using HTML, CSS, and JavaScript, with local storage used to manage favorite items.

---

## Features

- **Date Selection**: Users can choose any date to view the APOD for that day.
- **Image Display**: Both standard and HD images are displayed, along with title, date, and explanation.
- **Favorites Management**: Users can add images to favorites, view them on a separate page, and remove items if needed.
- **Local JSON Data**: The app uses a local `apod_data.json` file for fetching APOD data reliably.

---

## Steps Taken to Create the Application

1. **Setup HTML Structure**

   - Created `index.html` for the main page and `favorites.html` for saved favorites.
   - Added sections for date selection, standard and HD images, titles, explanations, and favorite buttons.

2. **Styled with CSS**

   - Used `style.css` to create a dark-themed responsive layout.
   - Added styles for headers, buttons, image cards, and mobile responsiveness.

3. **Implemented JavaScript Functionality**

   - Fetched APOD data from the local `apod_data.json` file.
   - Displayed selected date images and information dynamically.
   - Implemented favorites functionality using `localStorage`.
   - Added buttons to add and remove favorites with confirmation alerts.

4. **Handled API Issues**

   - The NASA APOD API occasionally experienced outages.
   - To solve this, data was collected from [APOD Archive](https://apod.nasa.gov/apod/archivepix.html) and stored in a local JSON file.
   - The application fetches data from this local file, ensuring reliability and smooth functionality.

5. **Testing**
   - Verified that images, titles, and explanations display correctly for various dates.
   - Checked the favorites functionality across sessions.
   - Ensured responsiveness on mobile and desktop screens.

---

## Resources Used

- **NASA APOD Archive**: [https://apod.nasa.gov/apod/archivepix.html](https://apod.nasa.gov/apod/archivepix.html)
- **HTML, CSS, JavaScript**: Core web technologies
- **LocalStorage**: For storing favorites
- **JSON**: For structured APOD data

---

## Challenges Faced

- **API Downtime**: NASA's APOD API sometimes failed to respond, causing interruptions.
- **Solution**: Used the archive page to create a local JSON dataset (`apod_data.json`) and integrated it with the app.
- **Responsive Design**: Adjusting the layout for different screen sizes while maintaining readability and aesthetics.
