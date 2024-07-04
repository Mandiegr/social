// src/components/styled/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Poppins:wght@300;400;500;600;700&display=swap');

  :root {
    --primary-color-hue: 0;
    --dark-color-lightness: 30%;
    --light-color-lightness: 95%;
    --white-color-lightness: 100%;
    --color-white: hsl(252, 30%, var(--white-color-lightness));
    --color-light: hsl(252, 30%, var(--light-color-lightness));
    --color-gray: Hsl	hsl(0, 100%, 50%);
    --color-primary: hsl(var(--primary-color-hue), 100%, 50%);
    --color-secondary: hsl(22, 100%, 90%);
    --color-success: hsl(120, 95%, 65%);
    --color-danger: hsl(78, 10%, 54%);
    --color-dark: hsl(78, 10%, var(--dark-color-lightness));
    --color-black: hsl(252, 30%, 10%);
    --border-radius-md: 10px;
    --border-radius-sm: 5px;
    --transition-timing: 0.2s ease;
    --border-radius: 2rem;
    --card-border-radius: 1rem;
    --btn-padding: 0.6rem 2rem;
    --search-padding: 0.6rem 1rem;
    --card-padding: 1rem;
    --sticky-top-left: 5.4rem;
    --sticky-top-right: -18rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    border: none;
  }

  body {
    font-family: 'Poppins', sans-serif;
    color: var(--color-dark);
    background: var(--color-light);
    overflow-x: hidden;
  }

  img {
    display: block;
    width: 100%;
  }

  .btn {
    display: inline-block;
    padding: var(--btn-padding);
    font-weight: 500;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: all 300ms ease;
    font-size: 0.9rem;

    &:hover {
      opacity: 0.8;
    }
  }

  .btn-primary {
    background: var(--color-primary);
    color: white;
  }

  .text-bold {
    font-weight: 500;
  }

  .text-muted {
    color: var(--color-gray);
  }
`;

export default GlobalStyles;



/*
#8F967F

#8f8a8a;

#DED8CC
*/