const hiddenEle = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('show')
      observer.unobserve(e.target)
    }
  })
}, { threshold: 0.75 })

hiddenEle.forEach(el => observer.observe(el))