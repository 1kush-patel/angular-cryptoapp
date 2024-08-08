# Angular Cryptocurrency Dashboard

## Overview

This Angular application provides a simple dashboard to view cryptocurrency data from a public API and submit user feedback through a contact form. The application includes the following features:

1. **Home Page**: A simple landing page with introductory text.
2. **API Data Page**: A page that fetches and displays cryptocurrency data from a public API.
3. **Contact Page**: A page with a reactive form to submit user feedback.

## Features

- **Client-Side Navigation**: 
  - A navigation bar with links to Home, API Data, and Contact pages.
  - Utilizes Angular Router for navigation.

- **API Data Page**: 
  - Consumes data from a public API (https://api.coincap.io/v2/assets).
  - Displays a table of cryptocurrency data including rank, name, symbol, price, market cap, supply, and a link to the explorer.

- **Contact Page**: 
  - A reactive form to submit feedback.
  - Includes form validation (required fields and valid email format).
  - Displays validation errors and feedback to the user.
