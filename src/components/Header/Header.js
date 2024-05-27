import React, { useState } from 'react';
import '../../App.css';
import Popupcard from "../Popupcard";
import { Link } from 'react-router-dom';

const Header = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleContactClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <header class="header__el | fixed center-x z-20 rounded-22 bg-tweet-bg-light@sm dark:bg-header@sm bg-animation | js-shy-header:el js-header:el" style="translate: none; rotate: none; scale: none; transform: translate(-50%, 0%);">
        <div class="header__inner | d-flex justify-end justify-center@sm items-center relative | js-header:inner" bis_skin_checked="1">
          <div class="header__logoContainer | d-none d-block@sm flex-no-shrink pointer-events-none pointer-events-auto@sm | js-header:logomarkContainer" bis_skin_checked="1">

          </div>

          <nav class="navigation | d-none d-flex@sm items-center overflow-hidden relative js-header:navigationContainer" aria-label="Main navigation">
            <ul role="menubar" aria-label="Main navigation" class="d-flex items-center list-unstyled mb-0 | js-header:navigation">
              <li class="t-lh-1 d-flex" role="none">
                <a href="https://www.cosmos.so/manifesto" class="link | t-d-warm-grey dark:t-grey2 t-font-smooth t-base t-400 t-no-underline d-inline-block  |  " role="menuitem">
                  <div class="t-lh-1 relative d-flex overflow-hidden" bis_skin_checked="1">
                    <div class="link__text | d-block t-lh-1" bis_skin_checked="1">
                      Manifesto
                    </div>
                    <div class="link__text link__text--hover t-black dark:t-off-white | d-block absolute left t-lh-1" bis_skin_checked="1">
                      Manifesto
                    </div>
                  </div>
                </a>
              </li>
              <li class="t-lh-1 d-flex" role="none">
                <a href="https://www.cosmos.so/careers" class="link | t-d-warm-grey dark:t-grey2 t-font-smooth t-base t-400 t-no-underline d-inline-block ml-20 |  " role="menuitem">
                  <div class="t-lh-1 relative d-flex overflow-hidden" bis_skin_checked="1">
                    <div class="link__text | d-block t-lh-1" bis_skin_checked="1">
                      Careers
                    </div>
                    <div class="link__text link__text--hover t-black dark:t-off-white | d-block absolute left t-lh-1" bis_skin_checked="1">
                      Careers
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </nav>

          <div class="d-none d-block@sm | js-header:signInBtnContainer" bis_skin_checked="1" style="pointer-events: auto;">
            <a class="button  js-button header__sign-in | link t-font-smooth ml-24 t-base t-500 d-inline-block t-black dark:t-off-white color-animation b-1 b-warm-grey dark:b-header-btn-border b-color-animation rounded-15 t-nowrap t-no-underline relative | js-header:signInBtn" href="https://cosmos.so/login" rel="noopener noreferrer">
              <div class="d-flex items-center t-lh-1" bis_skin_checked="1">
                <div class="t-lh-1 relative d-flex overflow-hidden z-1" bis_skin_checked="1">
                  <div class="link__text | d-block t-lh-1 pb-1" bis_skin_checked="1">
                    Sign In
                  </div>
                  <div class="link__text link__text--hover t-black dark:t-off-white | d-block absolute left t-lh-1 pb-1" bis_skin_checked="1">
                    Sign In
                  </div>
                </div>
                <div class="button__border | absolute rounded-15 top left" bis_skin_checked="1"></div>
              </div>
            </a>
          </div>

          <div class="w-1/1 h-1/1 w-auto@sm absolute relative@sm d-flex items-center" bis_skin_checked="1">
            <button class="header__mobile-close | z-10 t-off-white d-block d-none@sm ml-8 ml-0@sm mr-14 px-0 absolute | js-header:closeForm" style="pointer-events: none; opacity: 0;">

            </button>

            <form class="waitlist-form | d-flex items-center justify-end | js-header:formContainer js-forms:emailForm">
              <div class="waitlist-form__button-placeholder | mr-14 d-block d-none@sm pointer-events-none" bis_skin_checked="1"></div>

              <div class="waitlist-form__input | rounded-15 absolute@sm | js-header:inputContainer" style="overflow: hidden; opacity: 0; pointer-events: none;" bis_skin_checked="1">
                <div class="h-1/1 relative d-flex justify-center | js-header:input" bis_skin_checked="1" style="translate: none; rotate: none; scale: none; transform: translate(101%, 0%);">
                  <div class="absolute top left t-16 t-black dark:t-off-white color-animation center-xy t-nowrap px-24 pointer-events-none z-10 | js-header:confirmationText" style="opacity: 0;" bis_skin_checked="1">You're on the list!</div>
                  <label for="header_email" class="sr">Enter your email</label>
                  <input class="waitlist-form__input__el | w-1/1 w-auto@sm rounded-15 bg-off-white color-animation dark:bg-form-input bg-animation t-grey2 t-base t-font-smoothing t-500 t-lh-1 | js-header:inputEl js-forms:email" required="" type="email" spellcheck="false" id="header_email" placeholder="Enter your email..." autocomplete="off" />
                  <div class="waitlist-form__input__border | absolute fill pointer-events-none" bis_skin_checked="1"></div>
                </div>
              </div>
              <div class="relative | js-header:submitContainer" bis_skin_checked="1">
                <div class="relative z-0" bis_skin_checked="1">
                  <button type="submit" class="button link t-font-smooth opacity-0 bg-black dark:bg-off-white bg-animation ml-6 t-500 t-base d-inline-block dark:t-black t-off-white color-animation b-0 rounded-15 t-nowrap t-no-underline | js-header:submit relative has-overlay" style="position: relative;">
                    <div class="t-lh-1 relative d-flex overflow-hidden z-1 | js-header:submitText" bis_skin_checked="1">
                      <div class="link__text | d-block t-lh-1" bis_skin_checked="1">
                        <div class="d-flex items-center t-lh-1" bis_skin_checked="1">
                          <span class="d-flex"><span class="d-inline-block overflow-hidden">Join</span><span class="d-none d-inline-block@sm overflow-hidden">&nbsp;Waitlist</span></span>
                        </div>
                      </div>
                      <div class="link__text link__text--hover | t-white dark:t-black d-block absolute left t-lh-1" bis_skin_checked="1">
                        Join Waitlist
                      </div>
                    </div>
                    <div class="button__overlay absolute fill overflow-hidden rounded-15" bis_skin_checked="1"><div class="button__overlay__inner absolute" bis_skin_checked="1"></div></div><div class="button__glow" style="left: 4px;" bis_skin_checked="1"><div class="button__glow__panel button__glow__panel--1" bis_skin_checked="1"></div></div><div class="button__glow" style="right: 4px;" bis_skin_checked="1"><div class="button__glow__panel button__glow__panel--2" bis_skin_checked="1"></div></div></button>
                </div>

                <div class="absolute fill z-10 center-xy | js-header:waitlistLoadingContainer" bis_skin_checked="1" style="opacity: 0; pointer-events: none;">
                  <div class="loading-indicator | center-x | js-header:waitlistLoading" bis_skin_checked="1" style="opacity: 0;"></div>
                </div>
              </div>
            </form>

            <div class="header__tick header__tick--waitlist | absolute top left@sm h-1/1 d-flex items-center | js-header:tickContainer" bis_skin_checked="1" style="pointer-events: none;">
              <div class="mx-16 overflow-hidden | js-header:tickMask" bis_skin_checked="1" style="translate: none; rotate: none; scale: none; transform: translate(-100%, 0%);">

              </div>
            </div>
          </div>

          <div class="absolute@sm right center-y@sm z-10 | js-header:openFormContainer" bis_skin_checked="1" style="pointer-events: auto;">
            <div class="relative z-0" bis_skin_checked="1">
              <button class="button link t-font-smooth bg-black dark:bg-off-white bg-animation ml-6 t-500 t-base d-inline-block dark:t-black t-off-white color-animation b-0 rounded-15 t-nowrap t-no-underline | js-header:openFormTrigger relative has-overlay" aria-label="Join Waitlist" style="position: relative; opacity: 1;">
                <div class="t-lh-1 relative d-flex overflow-hidden z-1 | js-header:openFormTriggerInner" bis_skin_checked="1">
                  <div class="link__text | d-block t-lh-1" bis_skin_checked="1">
                    <div class="d-flex items-center t-lh-1" bis_skin_checked="1">
                      <span class="d-flex | js-header:submitText"><span class="d-inline-block overflow-hidden">Join</span><span class="d-flex d-inline-block@sm overflow-hidden | js-header:mobBtnText">&nbsp;Waitlist</span></span>
                    </div>
                  </div>
                  <div class="link__text link__text--hover | t-white dark:t-black d-block absolute left t-lh-1" bis_skin_checked="1">
                    Join Waitlist
                  </div>
                </div>

                <span class="button__replacement-text"><span>Joined </span></span>
                <div class="button__overlay absolute fill overflow-hidden rounded-15" bis_skin_checked="1"><div class="button__overlay__inner absolute" bis_skin_checked="1"></div></div><div class="button__glow" style="left: 4px;" bis_skin_checked="1"><div class="button__glow__panel button__glow__panel--1" bis_skin_checked="1"></div></div><div class="button__glow" style="right: 4px;" bis_skin_checked="1"><div class="button__glow__panel button__glow__panel--2" bis_skin_checked="1"></div></div></button>
            </div>
          </div>
        </div>

        <div class="secondary-form | absolute mt-20 center-x | js-header:secondaryForm" bis_skin_checked="1" style="translate: none; rotate: none; scale: none; transform: translate(-50%, 20%); opacity: 0; pointer-events: none;">
          <div class="secondary-form__inner | bg-tweet-bg-light dark:bg-header bg-animation rounded-15" bis_skin_checked="1">
            <button class="secondary-form__close | absolute | js-header:closeSecondaryForm"><div class="sr" bis_skin_checked="1">close form</div></button>

            <form class="w-1/1 d-flex flex-column | js-forms:answerForm">
              <label class="t-black dark:t-off-white color-animation t-16 t-500 mb-20 t-center" for="referral">How did you hear about us?</label>

              <div class="relative" bis_skin_checked="1">
                <label for="referral" class="sr">Your answer</label>
                <div class="relative" bis_skin_checked="1">
                  <input class="secondary-form__input | w-1/1 rounded-15 bg-off-white dark:bg-form-input bg-animation t-grey2 t-16 t-lh-1 | js-forms:answer js-header:secondaryInputEl" type="text" required="" id="referral" name="referral" spellcheck="false" placeholder="Your answer..." autocomplete="off" />
                  <div class="secondary-form__input__border | absolute fill pointer-events-none" bis_skin_checked="1"></div>
                  <button class="secondary-form__submit | absolute t-16 color-animation t-500 | js-header:secondarySubmit" type="submit"><span class="d-inline-block t-500 | js-header:answerSubmitText">Press enter</span> </button>
                </div>

                <div class="absolute z-10 right bottom mr-16 mb-10 | js-header:secondaryLoadingContainer" bis_skin_checked="1" style="opacity: 0; pointer-events: none;">
                  <div class="loading-indicator loading-indicator--secondary | js-header:secondaryLoading" bis_skin_checked="1"></div>
                </div>

                <div class="header__tick | absolute bottom right mr-16 mb-10 | js-header:secondaryTickContainer" bis_skin_checked="1" style="pointer-events: none;">
                  <div class="overflow-hidden | js-header:secondaryTickMask" bis_skin_checked="1" style="translate: none; rotate: none; scale: none; transform: translate(-100%, 0%);">

                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="error-container | t-d-warm-grey dark:t-off-white rounded-22 bg-tweet-bg-light@sm dark:bg-header@sm bg-animation t-14 t-center | js-forms:waitlistError js-header:waitlistError" bis_skin_checked="1" style="translate: none; rotate: none; scale: none; pointer-events: none; opacity: 0; transform: translate(-50%, -20%) translate(0px, -0.1719px);">
          error
        </div>


        <button class="header__menu-btn | d-none@sm bg-black dark:bg-header absolute left ml-6 center-y d-flex justify-center items-center p-0 | js-menu-toggle js-header:menuIcon" aria-controls="toggle-menu" aria-expanded="false">
         
        </button>
      </header>

      <header>
        <div className="top-section">
          <img src="/logo.svg" alt="Logo" className="logo d-flex mx-auto" />
          <nav className="header navbar navbar-expand-lg">
            <ul className="navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li className="nav-item dropdown">
                <Link to="/shop" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Shop
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/begning" className="dropdown-item">Beginning</Link>
                  <Link to="/middle" className="dropdown-item">Middle</Link>
                  <Link to="/crossroad" className="dropdown-item">Crossroad</Link>
                </div>
              </li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/about">About</Link></li>
              <li className='contact text-dark'>
                <Link to="#contact" className='text-dark d-flex justify-content-center' onClick={handleContactClick}>Contact</Link>
              </li>
            </ul>
          </nav>

          {showPopup && <Popupcard onClose={handleClosePopup} />}
        </div>
      </header>
    </>
  );
};

export default Header;
