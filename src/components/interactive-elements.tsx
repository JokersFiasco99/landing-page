'use client';

import { useEffect } from 'react';

export default function InteractiveElements() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 70,
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    // Add active class to nav links on scroll
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavOnScroll() {
      let scrollPosition = window.scrollY;
      
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
    
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        if (button instanceof HTMLElement) {
          button.style.transform = 'translateY(-3px)';
          button.style.boxShadow = '8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff';
        }
      });
      
      button.addEventListener('mouseleave', () => {
        if (button instanceof HTMLElement) {
          button.style.transform = 'translateY(0)';
          button.style.boxShadow = '5px 5px 10px #d1d1d1, -5px -5px 10px #ffffff';
        }
      });
    });
    
    // Animate neumorphic circle on mouse move
    const circle = document.getElementById('neumorphic-circle');
    
    if (circle) {
      window.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;
        
        circle.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
        
        // Change inner shadow direction based on mouse position
        const inner = circle.querySelector('div');
        if (inner instanceof HTMLElement) {
          inner.style.backgroundImage = `radial-gradient(circle at ${50 + x * 100}% ${50 + y * 100}%, white, #e6e7ee)`;
        }
      });
    }
    
    return () => {
      window.removeEventListener('scroll', highlightNavOnScroll);
      
      links.forEach(link => {
        link.removeEventListener('click', () => {});
      });
      
      buttons.forEach(button => {
        button.removeEventListener('mouseenter', () => {});
        button.removeEventListener('mouseleave', () => {});
      });
      
      if (circle) {
        window.removeEventListener('mousemove', () => {});
      }
    };
  }, []);
  
  return null;
} 