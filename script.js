

document.addEventListener(
  "DOMContentLoaded",
  () => {


    /* HEADER */

    const header =
      document.getElementById(
        "siteHeader"
      );


    const updateHeader =
      () => {

        if (!header) return;

        if (window.scrollY > 40) {

          header.classList.add(
            "scrolled"
          );

        } else {

          header.classList.remove(
            "scrolled"
          );

        }

      };


    window.addEventListener(
      "scroll",
      updateHeader,
      { passive: true }
    );

    updateHeader();


    /* MOBILE MENU */

    const menuToggle =
      document.getElementById(
        "menuToggle"
      );

    const mainNav =
      document.getElementById(
        "mainNav"
      );


    if (
      menuToggle &&
      mainNav
    ) {

      menuToggle.addEventListener(
        "click",
        () => {

          mainNav.classList.toggle(
            "open"
          );

        }
      );


      mainNav
        .querySelectorAll("a")
        .forEach(
          link => {

            link.addEventListener(
              "click",
              () => {

                mainNav.classList.remove(
                  "open"
                );

              }
            );

          }
        );

    }


    /* ACTIVE NAVIGATION */

    const navLinks =
      document.querySelectorAll(
        ".main-nav a"
      );


    const pageSections =
      document.querySelectorAll(
        "main section[id]"
      );


    const sectionObserver =
      new IntersectionObserver(
        entries => {

          entries.forEach(
            entry => {

              if (
                !entry.isIntersecting
              ) {
                return;
              }


              navLinks.forEach(
                link => {

                  link.classList.remove(
                    "active"
                  );


                  if (
                    link.getAttribute(
                      "href"
                    ) ===
                    "#" +
                    entry.target.id
                  ) {

                    link.classList.add(
                      "active"
                    );

                  }

                }
              );

            }
          );

        },
        {
          rootMargin:
            "-25% 0px -65% 0px"
        }
      );


    pageSections.forEach(
      section => {

        sectionObserver.observe(
          section
        );

      }
    );


    /* REVEAL */

    const revealElements =
      document.querySelectorAll(
        ".reveal"
      );


    const revealObserver =
      new IntersectionObserver(
        entries => {

          entries.forEach(
            entry => {

              if (
                entry.isIntersecting
              ) {

                entry.target.classList.add(
                  "visible"
                );

                revealObserver.unobserve(
                  entry.target
                );

              }

            }
          );

        },
        {
          threshold: .1
        }
      );


    revealElements.forEach(
      element => {

        revealObserver.observe(
          element
        );

      }
    );


    /* FAQ */

    const faqButtons =
      document.querySelectorAll(
        ".faq-question"
      );


    faqButtons.forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            const item =
              button.closest(
                ".faq-item"
              );


            if (!item) return;


            const answer =
              item.querySelector(
                ".faq-answer"
              );


            const isOpen =
              item.classList.contains(
                "open"
              );


            document
              .querySelectorAll(
                ".faq-item.open"
              )
              .forEach(
                openItem => {

                  if (
                    openItem !== item
                  ) {

                    openItem.classList.remove(
                      "open"
                    );


                    const openAnswer =
                      openItem.querySelector(
                        ".faq-answer"
                      );


                    if (
                      openAnswer
                    ) {

                      openAnswer.style.maxHeight =
                        null;

                    }

                  }

                }
              );


            if (isOpen) {

              item.classList.remove(
                "open"
              );

              answer.style.maxHeight =
                null;

            } else {

              item.classList.add(
                "open"
              );

              answer.style.maxHeight =
                answer.scrollHeight +
                "px";

            }

          }
        );

      }
    );


    /* CONTACT FORM */

    const contactForm =
      document.getElementById(
        "contactForm"
      );


    const formMessage =
      document.getElementById(
        "formMessage"
      );


    if (contactForm) {

      contactForm.addEventListener(
        "submit",
        event => {

          event.preventDefault();


          if (formMessage) {

            formMessage.textContent =
              "Thank you! Your message has been received.";

          }


          contactForm.reset();

        }
      );

    }


    /* SMOOTH SCROLL */

    document
      .querySelectorAll(
        'a[href^="#"]'
      )
      .forEach(
        link => {

          link.addEventListener(
            "click",
            event => {

              const targetID =
                link.getAttribute(
                  "href"
                );


              if (
                !targetID ||
                targetID === "#"
              ) {
                return;
              }


              const target =
                document.querySelector(
                  targetID
                );


              if (!target) return;


              event.preventDefault();


              const headerHeight =
                header
                  ? header.offsetHeight
                  : 0;


              const targetPosition =
                target.getBoundingClientRect()
                  .top +
                window.scrollY -
                headerHeight;


              window.scrollTo(
                {
                  top:
                    targetPosition,
                  behavior:
                    "smooth"
                }
              );

            }
          );

        }
      );

  }
);

