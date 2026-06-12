import gsap from "gsap";

export const openMobileMenu = ({
  menuRef,
  portraitRef,
  backRef,
}) => {
  gsap.fromTo(
    menuRef.current,
    {
      yPercent: -100,
    },
    {
      yPercent: 0,
      duration: 0.8,
      ease: "power4.out",
    }
  );

  gsap.fromTo(
    portraitRef.current,
    {
      y: 20,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      delay: 0.15,
    }
  );

  gsap.fromTo(
    ".mobile-nav-item",
    {
      y: 15,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.06,
      duration: 0.4,
      delay: 0.2,
    }
  );

  gsap.fromTo(
    backRef.current,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.3,
      delay: 0.35,
    }
  );
};

export const closeMobileMenu = ({
  menuRef,
  setMenuOpen,
}) => {
  gsap.to(menuRef.current, {
    yPercent: -100,
    duration: 0.7,
    ease: "power4.inOut",
    onComplete: () => {
      setMenuOpen(false);
    },
  });
};