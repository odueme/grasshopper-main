const el = document.querySelectorAll(".entry")
const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)
        if(entry.isIntersecting) observer.unobserve(entry.target)
    })
    console.log(entries)
 })


el.forEach(element => {
    observer.observe(element)
})
