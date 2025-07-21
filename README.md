Digital Clock with Date
This is a simple JavaScript-based digital clock that displays the current time (in 12-hour format with AM/PM) and the current date in a custom format. The clock updates every second to show the live current time and date.

Features
Live Time: Displays the current time in 12-hour format with AM/PM.

Live Date: Displays the full current date in the format: Day, Date-Month-Year (e.g., "Monday 21-07-2025").

Responsive: The clock updates every second, making it dynamic and showing real-time information.

Requirements
No external libraries or frameworks are needed for this project. It runs on any modern web browser that supports JavaScript.

How to Use
Clone or download the repository to your local machine.

Open the HTML file in any modern web browser (Chrome, Firefox, etc.).

The clock will start showing the current time and date immediately.

Code Breakdown
HTML Structure:

Two elements with classes .secondbox and .thirdbox are used to display the time and date, respectively.

JavaScript Logic:

The script retrieves the current date and time using the Date() object.

The time is displayed in a 12-hour format, and the day is converted to a string (Monday, Tuesday, etc.).

The date is displayed in a format like "Monday 21-07-2025".

Every second, the time and date are updated using setInterval() to keep it live.

