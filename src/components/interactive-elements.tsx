'use client';

import { useEffect } from 'react';

export default function InteractiveElements() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    
    const linkHandlers: Array<{
      element: Element;
      handler: (e: Event) => void;
    }> = [];

    links.forEach((link) => {
      const handleClick = (e: Event) => {
        e.preventDefault();

        const targetId = link.getAttribute('href');
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: (targetElement as HTMLElement).getBoundingClientRect().top +
                window.scrollY -
                70,
              behavior: 'smooth',
            });
          }
        }
      };

      link.addEventListener('click', handleClick);
      linkHandlers.push({ element: link, handler: handleClick });
    });
    
    // Add active class to nav links on scroll
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavOnScroll() {
      const scrollPosition = window.scrollY;
      
      sections.forEach(section => {
        // Type assertion for HTMLElement to access offsetTop and offsetHeight
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop - 100;
        const sectionHeight = sectionElement.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          document.querySelector(`a[href="#${sectionId}"]`)?.classList.add('text-neutral-900');
        } else {
          document.querySelector(`a[href="#${sectionId}"]`)?.classList.remove('text-neutral-900');
        }
      });
    }
    
    window.addEventListener('scroll', highlightNavOnScroll);
    
    // Button hover effects with enhanced neumorphic styling
    const buttons = document.querySelectorAll('.btn');
    const buttonHandlers: Array<{
      element: Element;
      enterHandler: () => void;
      leaveHandler: () => void;
    }> = [];

    buttons.forEach((button) => {
      const onEnter = () => {
        if (button instanceof HTMLElement) {
          button.style.transform = 'translateY(-3px)';
          button.style.boxShadow = '8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff';
        }
      };

      const onLeave = () => {
        if (button instanceof HTMLElement) {
          button.style.transform = 'translateY(0)';
          button.style.boxShadow = '5px 5px 10px #d1d1d1, -5px -5px 10px #ffffff';
        }
      };

      button.addEventListener('mouseenter', onEnter);
      button.addEventListener('mouseleave', onLeave);

      buttonHandlers.push({ element: button, enterHandler: onEnter, leaveHandler: onLeave });
    });
    
    // Animate neumorphic circle on mouse move
    const circle = document.getElementById('neumorphic-circle');
    let mouseMoveHandler: ((e: MouseEvent) => void) | null = null;

    if (circle) {
      mouseMoveHandler = (e: MouseEvent) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;

        circle.style.transform = `translate(${x * 20}px, ${y * 20}px)`;

        // Change inner shadow direction based on mouse position
        const inner = circle.querySelector('div');
        if (inner instanceof HTMLElement) {
          inner.style.backgroundImage = `radial-gradient(circle at ${
            50 + x * 100
          }% ${50 + y * 100}%, white, #e6e7ee)`;
        }
      };
      window.addEventListener('mousemove', mouseMoveHandler);
    }
    
    return () => {
      window.removeEventListener('scroll', highlightNavOnScroll);

      linkHandlers.forEach(({ element, handler }) => {
        element.removeEventListener('click', handler);
      });

      buttonHandlers.forEach(({ element, enterHandler, leaveHandler }) => {
        element.removeEventListener('mouseenter', enterHandler);
        element.removeEventListener('mouseleave', leaveHandler);
      });

      if (circle && mouseMoveHandler) {
        window.removeEventListener('mousemove', mouseMoveHandler);
      }
    };
  }, []);
  
  return null;
} 