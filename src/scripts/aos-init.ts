import AOS from 'aos';
import 'aos/dist/aos.css';

export function initializeAOS() {
  AOS.init({
    duration: 5000, // Animation duration in ms
    once: true,     // Only animate once
  });
}
