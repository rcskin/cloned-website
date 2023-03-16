import React from "react";

//create function component for Hero page
function Hero() {
  return (
    //div element for entire component with background-image.
    <div className="Hero-img">
      <section className="padded-container1">
        <div className="grid">
          <div className="grid-item">
            <h1>
              A MOUNTAIN OF
              <br />
              ENTERTAINMENT.
            </h1>

            <div className="upsell-text">
              <p>
                Stream blockbusters, new originals and iconic shows.
                <br />
                <br />
                Subscribe for £6.99 GBP / Month.
                <br />
                Cancel anytime.
                <br />
                Join now & get 7 days FREE.
              </p>
            </div>
          </div>
          <div className="button-container">
            <button className="first-btn">SIGN UP FOR PARAMOUNT+</button>

            <button className="second-btn">SIGN IN WITH PARAMOUNT+</button>

            <button className="third-btn">SIGN IN WITH PARTNER</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;

/* Note to reviewer:
I used a lot of concepts from the previous task and was able to use similar code on most
component pages, so do not have many comments throughout.
I used the same class names on different components, although previously told that they
should always be unique with classes or id's made to keep them unique, my understanding is that
this is important for HTML when the page is the same. For this project I was essentially creating 
a shared CSS class that can be used across the app to keep the styling as similar as possible.
I used the same classNames as the webpage when I was inspecting it to be able to keep track of 
what I was doing better in some cases. 

Note: I know that in my <p> tags I have <br> elements in it, but when I was inspecting the page 
they did the same thing using <strong> and "" around the text with <br> in certain places. I spent over an
hour just trying to manipulate the spacing inbetween the <p> tags when I originally had them around each 
chunk of text individually. I just could not achieve the same look whatsoever. 
I have done this for all the other pages. 
I know that this is not good practice and affects accessibilty, but since this task was to create the 
same look as good as possible, and the html in the code after inspection looked similar, that is why I have
kept it in this project. 

Also, I started trying to do media queries, but there were so many media queries on this site (4 I believe)
that it was taking a lot of time, and I just wanted to recreate one size of the page to show the skills.
I would suggest not having it fullscreen as I recreated the page that was full height on a 13" screen but 
about 75% of the length. I was having to redo so much code, that I would appreciate comparing it when it is
larger so that the movie posters are all in a line. Obviously I know that normally you would do media queries 
to achieve certain looks for certain screen sizes, but for the purposes of this task, I thought it was more 
about showing the components and most of the CSS. */
